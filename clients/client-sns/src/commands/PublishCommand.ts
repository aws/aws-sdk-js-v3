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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { PublishInput, PublishResponse } from "../models/models_0";
import { de_PublishCommand, se_PublishCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PublishCommand}.
 */
export interface PublishCommandInput extends PublishInput {}
/**
 * @public
 *
 * The output of {@link PublishCommand}.
 */
export interface PublishCommandOutput extends PublishResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone
 *             number, or a message to a mobile platform endpoint (when you specify the
 *                 <code>TargetArn</code>).</p>
 *          <p>If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is
 *             subscribed to the topic. The format of the message depends on the notification protocol
 *             for each subscribed endpoint.</p>
 *          <p>When a <code>messageId</code> is returned, the message is saved and Amazon SNS immediately
 *             delivers it to subscribers.</p>
 *          <p>To use the <code>Publish</code> action for publishing a message to a mobile endpoint,
 *             such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for
 *             the TargetArn parameter. The EndpointArn is returned when making a call with the
 *                 <code>CreatePlatformEndpoint</code> action. </p>
 *          <p>For more information about formatting messages, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html">Send Custom
 *                 Platform-Specific Payloads in Messages to Mobile Devices</a>. </p>
 *          <important>
 *             <p>You can publish messages only to topics and endpoints in the same
 *                 Amazon Web Services Region.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, PublishCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // PublishInput
 *   TopicArn: "STRING_VALUE",
 *   TargetArn: "STRING_VALUE",
 *   PhoneNumber: "STRING_VALUE",
 *   Message: "STRING_VALUE", // required
 *   Subject: "STRING_VALUE",
 *   MessageStructure: "STRING_VALUE",
 *   MessageAttributes: { // MessageAttributeMap
 *     "<keys>": { // MessageAttributeValue
 *       DataType: "STRING_VALUE", // required
 *       StringValue: "STRING_VALUE",
 *       BinaryValue: "BLOB_VALUE",
 *     },
 *   },
 *   MessageDeduplicationId: "STRING_VALUE",
 *   MessageGroupId: "STRING_VALUE",
 * };
 * const command = new PublishCommand(input);
 * const response = await client.send(command);
 * // { // PublishResponse
 * //   MessageId: "STRING_VALUE",
 * //   SequenceNumber: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PublishCommandInput - {@link PublishCommandInput}
 * @returns {@link PublishCommandOutput}
 * @see {@link PublishCommandInput} for command's `input` shape.
 * @see {@link PublishCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link EndpointDisabledException} (client fault)
 *  <p>Exception error indicating endpoint disabled.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated constraints.</p>
 *
 * @throws {@link InvalidSecurityException} (client fault)
 *  <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
 *
 * @throws {@link KMSAccessDeniedException} (client fault)
 *  <p>The ciphertext references a key that doesn't exist or that you don't have access
 *             to.</p>
 *
 * @throws {@link KMSDisabledException} (client fault)
 *  <p>The request was rejected because the specified customer master key (CMK) isn't
 *             enabled.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource isn't valid for
 *             this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a
 *                 Customer Master Key</a> in the <i>Key Management Service Developer
 *                 Guide</i>.</p>
 *
 * @throws {@link KMSNotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource can't be
 *             found.</p>
 *
 * @throws {@link KMSOptInRequired} (client fault)
 *  <p>The Amazon Web Services access key ID needs a subscription for the service.</p>
 *
 * @throws {@link KMSThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. For more information about
 *             throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in
 *             the <i>Key Management Service Developer Guide.</i>
 *          </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link PlatformApplicationDisabledException} (client fault)
 *  <p>Exception error indicating platform application disabled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a parameter in the request is invalid.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 */
export class PublishCommand extends $Command<PublishCommandInput, PublishCommandOutput, SNSClientResolvedConfig> {
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
  constructor(readonly input: PublishCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishCommandInput, PublishCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PublishCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "PublishCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSimpleNotificationService",
        operation: "Publish",
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
  private serialize(input: PublishCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PublishCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishCommandOutput> {
    return de_PublishCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
