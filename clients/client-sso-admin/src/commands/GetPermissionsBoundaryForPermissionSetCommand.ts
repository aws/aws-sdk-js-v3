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
  GetPermissionsBoundaryForPermissionSetRequest,
  GetPermissionsBoundaryForPermissionSetRequestFilterSensitiveLog,
  GetPermissionsBoundaryForPermissionSetResponse,
  GetPermissionsBoundaryForPermissionSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommand,
  serializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface GetPermissionsBoundaryForPermissionSetCommandInput
  extends GetPermissionsBoundaryForPermissionSetRequest {}
export interface GetPermissionsBoundaryForPermissionSetCommandOutput
  extends GetPermissionsBoundaryForPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Obtains the permissions boundary for a specified <a>PermissionSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetPermissionsBoundaryForPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetPermissionsBoundaryForPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new GetPermissionsBoundaryForPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPermissionsBoundaryForPermissionSetCommandInput} for command's `input` shape.
 * @see {@link GetPermissionsBoundaryForPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class GetPermissionsBoundaryForPermissionSetCommand extends $Command<
  GetPermissionsBoundaryForPermissionSetCommandInput,
  GetPermissionsBoundaryForPermissionSetCommandOutput,
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

  constructor(readonly input: GetPermissionsBoundaryForPermissionSetCommandInput) {
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
  ): Handler<GetPermissionsBoundaryForPermissionSetCommandInput, GetPermissionsBoundaryForPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPermissionsBoundaryForPermissionSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "GetPermissionsBoundaryForPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPermissionsBoundaryForPermissionSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPermissionsBoundaryForPermissionSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetPermissionsBoundaryForPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPermissionsBoundaryForPermissionSetCommandOutput> {
    return deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
