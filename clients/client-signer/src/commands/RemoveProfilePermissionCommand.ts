// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  RemoveProfilePermissionRequest,
  RemoveProfilePermissionRequestFilterSensitiveLog,
  RemoveProfilePermissionResponse,
  RemoveProfilePermissionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RemoveProfilePermissionCommand,
  serializeAws_restJson1RemoveProfilePermissionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

export interface RemoveProfilePermissionCommandInput extends RemoveProfilePermissionRequest {}
export interface RemoveProfilePermissionCommandOutput extends RemoveProfilePermissionResponse, __MetadataBearer {}

/**
 * <p>Removes cross-account permissions from a signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RemoveProfilePermissionCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RemoveProfilePermissionCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new RemoveProfilePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveProfilePermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveProfilePermissionCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 */
export class RemoveProfilePermissionCommand extends $Command<
  RemoveProfilePermissionCommandInput,
  RemoveProfilePermissionCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: RemoveProfilePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveProfilePermissionCommandInput, RemoveProfilePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveProfilePermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "RemoveProfilePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveProfilePermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveProfilePermissionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveProfilePermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveProfilePermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveProfilePermissionCommandOutput> {
    return deserializeAws_restJson1RemoveProfilePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
