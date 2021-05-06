import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutUserPermissionsBoundaryRequest } from "../models/models_0";
import {
  deserializeAws_queryPutUserPermissionsBoundaryCommand,
  serializeAws_queryPutUserPermissionsBoundaryCommand,
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

export interface PutUserPermissionsBoundaryCommandInput extends PutUserPermissionsBoundaryRequest {}
export interface PutUserPermissionsBoundaryCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or updates the policy that is specified as the IAM user's permissions boundary.
 *             You can use an AWS managed policy or a customer managed policy to set the boundary for
 *             a user. Use the boundary to control the maximum permissions that the user can have.
 *             Setting a permissions boundary is an advanced feature that can affect the permissions
 *             for the user.</p>
 *         <important>
 *             <p>Policies that are used as permissions boundaries do not provide permissions. You
 *                 must also attach a permissions policy to the user. To learn how the effective
 *                 permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy
 *                     evaluation logic</a> in the IAM User Guide. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutUserPermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new PutUserPermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutUserPermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link PutUserPermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutUserPermissionsBoundaryCommand extends $Command<
  PutUserPermissionsBoundaryCommandInput,
  PutUserPermissionsBoundaryCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutUserPermissionsBoundaryCommandInput) {
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
  ): Handler<PutUserPermissionsBoundaryCommandInput, PutUserPermissionsBoundaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "PutUserPermissionsBoundaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutUserPermissionsBoundaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutUserPermissionsBoundaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutUserPermissionsBoundaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutUserPermissionsBoundaryCommandOutput> {
    return deserializeAws_queryPutUserPermissionsBoundaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
