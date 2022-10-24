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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  EnableClientAuthenticationRequest,
  EnableClientAuthenticationRequestFilterSensitiveLog,
  EnableClientAuthenticationResult,
  EnableClientAuthenticationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1EnableClientAuthenticationCommand,
  serializeAws_json1_1EnableClientAuthenticationCommand,
} from "../protocols/Aws_json1_1";

export interface EnableClientAuthenticationCommandInput extends EnableClientAuthenticationRequest {}
export interface EnableClientAuthenticationCommandOutput extends EnableClientAuthenticationResult, __MetadataBearer {}

/**
 * <p>Enables alternative client authentication methods for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableClientAuthenticationCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableClientAuthenticationCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new EnableClientAuthenticationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableClientAuthenticationCommandInput} for command's `input` shape.
 * @see {@link EnableClientAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 */
export class EnableClientAuthenticationCommand extends $Command<
  EnableClientAuthenticationCommandInput,
  EnableClientAuthenticationCommandOutput,
  DirectoryServiceClientResolvedConfig
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

  constructor(readonly input: EnableClientAuthenticationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableClientAuthenticationCommandInput, EnableClientAuthenticationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableClientAuthenticationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "EnableClientAuthenticationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableClientAuthenticationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnableClientAuthenticationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableClientAuthenticationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableClientAuthenticationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableClientAuthenticationCommandOutput> {
    return deserializeAws_json1_1EnableClientAuthenticationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
