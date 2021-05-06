import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreatePolicyVersionRequest, CreatePolicyVersionResponse } from "../models/models_0";
import {
  deserializeAws_queryCreatePolicyVersionCommand,
  serializeAws_queryCreatePolicyVersionCommand,
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

export interface CreatePolicyVersionCommandInput extends CreatePolicyVersionRequest {}
export interface CreatePolicyVersionCommandOutput extends CreatePolicyVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of the specified managed policy. To update a managed policy, you
 *             create a new policy version. A managed policy can have up to five versions. If the
 *             policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p>
 *         <p>Optionally, you can set the new version as the policy's default version. The default
 *             version is the version that is in effect for the IAM users, groups, and roles to which
 *             the policy is attached.</p>
 *         <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreatePolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreatePolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreatePolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreatePolicyVersionCommand extends $Command<
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePolicyVersionCommandInput) {
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
  ): Handler<CreatePolicyVersionCommandInput, CreatePolicyVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreatePolicyVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePolicyVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePolicyVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePolicyVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreatePolicyVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePolicyVersionCommandOutput> {
    return deserializeAws_queryCreatePolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
