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
  PutPermissionsBoundaryToPermissionSetRequest,
  PutPermissionsBoundaryToPermissionSetRequestFilterSensitiveLog,
  PutPermissionsBoundaryToPermissionSetResponse,
  PutPermissionsBoundaryToPermissionSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommand,
  serializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface PutPermissionsBoundaryToPermissionSetCommandInput
  extends PutPermissionsBoundaryToPermissionSetRequest {}
export interface PutPermissionsBoundaryToPermissionSetCommandOutput
  extends PutPermissionsBoundaryToPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutPermissionsBoundaryToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutPermissionsBoundaryToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new PutPermissionsBoundaryToPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPermissionsBoundaryToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link PutPermissionsBoundaryToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class PutPermissionsBoundaryToPermissionSetCommand extends $Command<
  PutPermissionsBoundaryToPermissionSetCommandInput,
  PutPermissionsBoundaryToPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
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

  constructor(readonly input: PutPermissionsBoundaryToPermissionSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPermissionsBoundaryToPermissionSetCommandInput, PutPermissionsBoundaryToPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutPermissionsBoundaryToPermissionSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "PutPermissionsBoundaryToPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPermissionsBoundaryToPermissionSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutPermissionsBoundaryToPermissionSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutPermissionsBoundaryToPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutPermissionsBoundaryToPermissionSetCommandOutput> {
    return deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
