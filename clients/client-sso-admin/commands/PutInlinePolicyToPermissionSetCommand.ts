import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { PutInlinePolicyToPermissionSetRequest, PutInlinePolicyToPermissionSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutInlinePolicyToPermissionSetCommand,
  serializeAws_json1_1PutInlinePolicyToPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface PutInlinePolicyToPermissionSetCommandInput extends PutInlinePolicyToPermissionSetRequest {}
export interface PutInlinePolicyToPermissionSetCommandOutput
  extends PutInlinePolicyToPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Attaches an IAM inline policy to a permission set.</p>
 *          <note>
 *             <p>If the permission set is already referenced by one or more account assignments, you will
 *         need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> after this action to
 *         apply the corresponding IAM policy updates to all assigned accounts.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutInlinePolicyToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutInlinePolicyToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new PutInlinePolicyToPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInlinePolicyToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link PutInlinePolicyToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutInlinePolicyToPermissionSetCommand extends $Command<
  PutInlinePolicyToPermissionSetCommandInput,
  PutInlinePolicyToPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutInlinePolicyToPermissionSetCommandInput) {
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
  ): Handler<PutInlinePolicyToPermissionSetCommandInput, PutInlinePolicyToPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "PutInlinePolicyToPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutInlinePolicyToPermissionSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutInlinePolicyToPermissionSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutInlinePolicyToPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutInlinePolicyToPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutInlinePolicyToPermissionSetCommandOutput> {
    return deserializeAws_json1_1PutInlinePolicyToPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
