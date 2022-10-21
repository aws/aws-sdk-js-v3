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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutGroupPolicyRequest, PutGroupPolicyRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryPutGroupPolicyCommand,
  serializeAws_queryPutGroupPolicyCommand,
} from "../protocols/Aws_query";

export interface PutGroupPolicyCommandInput extends PutGroupPolicyRequest {}
export interface PutGroupPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or updates an inline policy document that is embedded in the specified IAM
 *             group.</p>
 *         <p>A user can also have managed policies attached to it. To attach a managed policy to a
 *             group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use
 *                 <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>For information about the maximum number of inline policies that you can embed in a
 *             group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
 *         <note>
 *             <p>Because policy documents can be large, you should use POST rather than GET when
 *                 calling <code>PutGroupPolicy</code>. For general information about using the Query
 *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new PutGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class PutGroupPolicyCommand extends $Command<
  PutGroupPolicyCommandInput,
  PutGroupPolicyCommandOutput,
  IAMClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutGroupPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "PutGroupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutGroupPolicyRequestFilterSensitiveLog,
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
