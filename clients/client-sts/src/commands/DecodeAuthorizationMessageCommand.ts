// smithy-typescript generated code
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DecodeAuthorizationMessageRequest, DecodeAuthorizationMessageResponse } from "../models/models_0";
import { de_DecodeAuthorizationMessageCommand, se_DecodeAuthorizationMessageCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, STSClientResolvedConfig } from "../STSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DecodeAuthorizationMessageCommand}.
 */
export interface DecodeAuthorizationMessageCommandInput extends DecodeAuthorizationMessageRequest {}
/**
 * @public
 *
 * The output of {@link DecodeAuthorizationMessageCommand}.
 */
export interface DecodeAuthorizationMessageCommandOutput extends DecodeAuthorizationMessageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Decodes additional information about the authorization status of a request from an
 *          encoded message returned in response to an Amazon Web Services request.</p>
 *          <p>For example, if a user is not authorized to perform an operation that he or she has
 *          requested, the request returns a <code>Client.UnauthorizedOperation</code> response (an
 *          HTTP 403 response). Some Amazon Web Services operations additionally return an encoded message that can
 *          provide details about this authorization failure. </p>
 *          <note>
 *             <p>Only certain Amazon Web Services operations return an encoded authorization message. The
 *             documentation for an individual operation indicates whether that operation returns an
 *             encoded message in addition to returning an HTTP code.</p>
 *          </note>
 *          <p>The message is encoded because the details of the authorization status can contain
 *          privileged information that the user who requested the operation should not see. To decode
 *          an authorization status message, a user must be granted permissions through an IAM <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">policy</a> to
 *          request the <code>DecodeAuthorizationMessage</code>
 *             (<code>sts:DecodeAuthorizationMessage</code>) action. </p>
 *          <p>The decoded message includes the following type of information:</p>
 *          <ul>
 *             <li>
 *                <p>Whether the request was denied due to an explicit deny or due to the absence of an
 *                explicit allow. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-denyallow">Determining Whether a Request is Allowed or Denied</a> in the
 *                   <i>IAM User Guide</i>. </p>
 *             </li>
 *             <li>
 *                <p>The principal who made the request.</p>
 *             </li>
 *             <li>
 *                <p>The requested action.</p>
 *             </li>
 *             <li>
 *                <p>The requested resource.</p>
 *             </li>
 *             <li>
 *                <p>The values of condition keys in the context of the user's request.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, DecodeAuthorizationMessageCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, DecodeAuthorizationMessageCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const input = { // DecodeAuthorizationMessageRequest
 *   EncodedMessage: "STRING_VALUE", // required
 * };
 * const command = new DecodeAuthorizationMessageCommand(input);
 * const response = await client.send(command);
 * // { // DecodeAuthorizationMessageResponse
 * //   DecodedMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DecodeAuthorizationMessageCommandInput - {@link DecodeAuthorizationMessageCommandInput}
 * @returns {@link DecodeAuthorizationMessageCommandOutput}
 * @see {@link DecodeAuthorizationMessageCommandInput} for command's `input` shape.
 * @see {@link DecodeAuthorizationMessageCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link InvalidAuthorizationMessageException} (client fault)
 *  <p>The error returned if the message passed to <code>DecodeAuthorizationMessage</code>
 *             was invalid. This can happen if the token contains invalid characters, such as
 *             linebreaks. </p>
 *
 * @throws {@link STSServiceException}
 * <p>Base exception class for all service exceptions from STS service.</p>
 *
 * @example To decode information about an authorization status of a request
 * ```javascript
 * //
 * const input = {
 *   "EncodedMessage": "<encoded-message>"
 * };
 * const command = new DecodeAuthorizationMessageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DecodedMessage": "{\"allowed\": \"false\",\"explicitDeny\": \"false\",\"matchedStatements\": \"\",\"failures\": \"\",\"context\": {\"principal\": {\"id\": \"AIDACKCEVSQ6C2EXAMPLE\",\"name\": \"Bob\",\"arn\": \"arn:aws:iam::123456789012:user/Bob\"},\"action\": \"ec2:StopInstances\",\"resource\": \"arn:aws:ec2:us-east-1:123456789012:instance/i-dd01c9bd\",\"conditions\": [{\"item\": {\"key\": \"ec2:Tenancy\",\"values\": [\"default\"]},{\"item\": {\"key\": \"ec2:ResourceTag/elasticbeanstalk:environment-name\",\"values\": [\"Default-Environment\"]}},(Additional items ...)]}}"
 * }
 * *\/
 * // example id: to-decode-information-about-an-authorization-status-of-a-request-1480533854499
 * ```
 *
 */
export class DecodeAuthorizationMessageCommand extends $Command<
  DecodeAuthorizationMessageCommandInput,
  DecodeAuthorizationMessageCommandOutput,
  STSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DecodeAuthorizationMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DecodeAuthorizationMessageCommandInput, DecodeAuthorizationMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DecodeAuthorizationMessageCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "STSClient";
    const commandName = "DecodeAuthorizationMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSecurityTokenServiceV20110615",
        operation: "DecodeAuthorizationMessage",
      },
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
  private serialize(input: DecodeAuthorizationMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DecodeAuthorizationMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DecodeAuthorizationMessageCommandOutput> {
    return de_DecodeAuthorizationMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
