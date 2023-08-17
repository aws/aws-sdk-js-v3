// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutUserPolicyRequest } from "../models/models_0";
import { de_PutUserPolicyCommand, se_PutUserPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutUserPolicyCommand}.
 */
export interface PutUserPolicyCommandInput extends PutUserPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutUserPolicyCommand}.
 */
export interface PutUserPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Adds or updates an inline policy document that is embedded in the specified IAM
 *             user.</p>
 *          <p>An IAM user can also have a managed policy attached to it. To attach a managed
 *             policy to a user, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html">
 *                <code>AttachUserPolicy</code>
 *             </a>. To create a new managed policy, use
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">
 *                <code>CreatePolicy</code>
 *             </a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>For information about the maximum number of inline policies that you can embed in a
 *             user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>Because policy documents can be large, you should use POST rather than GET when
 *                 calling <code>PutUserPolicy</code>. For general information about using the Query
 *                 API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making query requests</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // PutUserPolicyRequest
 *   UserName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE", // required
 * };
 * const command = new PutUserPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutUserPolicyCommandInput - {@link PutUserPolicyCommandInput}
 * @returns {@link PutUserPolicyCommandOutput}
 * @see {@link PutUserPolicyCommandInput} for command's `input` shape.
 * @see {@link PutUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To attach a policy to an IAM user
 * ```javascript
 * // The following command attaches a policy to the IAM user named Bob.
 * const input = {
 *   "PolicyDocument": "{\"Version\":\"2012-10-17\",\"Statement\":{\"Effect\":\"Allow\",\"Action\":\"*\",\"Resource\":\"*\"}}",
 *   "PolicyName": "AllAccessPolicy",
 *   "UserName": "Bob"
 * };
 * const command = new PutUserPolicyCommand(input);
 * await client.send(command);
 * // example id: 2551ffc6-3576-4d39-823f-30b60bffc2c7
 * ```
 *
 */
export class PutUserPolicyCommand extends $Command<
  PutUserPolicyCommandInput,
  PutUserPolicyCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: PutUserPolicyCommandInput) {
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
  ): Handler<PutUserPolicyCommandInput, PutUserPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutUserPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "PutUserPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutUserPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutUserPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutUserPolicyCommandOutput> {
    return de_PutUserPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
