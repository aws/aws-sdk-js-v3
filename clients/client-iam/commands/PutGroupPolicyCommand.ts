import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutGroupPolicyRequest } from "../models/models_0";
import {
  deserializeAws_queryPutGroupPolicyCommand,
  serializeAws_queryPutGroupPolicyCommand,
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

export type PutGroupPolicyCommandInput = PutGroupPolicyRequest;
export type PutGroupPolicyCommandOutput = __MetadataBearer;

/**
 * <p>Adds or updates an inline policy document that is embedded in the specified IAM
 *          group.</p>
 *          <p>A user can also have managed policies attached to it. To attach a managed policy to a
 *          group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *             Policies and Inline Policies</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <p>For information about limits on the number of inline policies that you can embed in a
 *          group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>Because policy documents can be large, you should use POST rather than GET when
 *             calling <code>PutGroupPolicy</code>. For general information about using the Query API
 *             with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the
 *                <i>IAM User Guide</i>.</p>
 *          </note>
 */
export class PutGroupPolicyCommand extends $Command<
  PutGroupPolicyCommandInput,
  PutGroupPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutGroupPolicyCommandInput) {
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
  ): Handler<PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "PutGroupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutGroupPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutGroupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutGroupPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutGroupPolicyCommandOutput> {
    return deserializeAws_queryPutGroupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
