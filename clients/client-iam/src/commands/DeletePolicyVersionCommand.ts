import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeletePolicyVersionRequest } from "../models/models_0";
import {
  deserializeAws_queryDeletePolicyVersionCommand,
  serializeAws_queryDeletePolicyVersionCommand,
} from "../protocols/Aws_query";
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

export interface DeletePolicyVersionCommandInput extends DeletePolicyVersionRequest {}
export interface DeletePolicyVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified version from the specified managed policy.</p>
 *         <p>You cannot delete the default version from a policy using this operation. To delete
 *             the default version from a policy, use <a>DeletePolicy</a>. To find out which
 *             version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p>
 *         <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeletePolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeletePolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeletePolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeletePolicyVersionCommand extends $Command<
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePolicyVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeletePolicyVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePolicyVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePolicyVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeletePolicyVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePolicyVersionCommandOutput> {
    return deserializeAws_queryDeletePolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
