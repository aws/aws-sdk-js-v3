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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutDeliveryChannelRequest } from "../models/models_1";
import { de_PutDeliveryChannelCommand, se_PutDeliveryChannelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutDeliveryChannelCommand}.
 */
export interface PutDeliveryChannelCommandInput extends PutDeliveryChannelRequest {}
/**
 * @public
 *
 * The output of {@link PutDeliveryChannelCommand}.
 */
export interface PutDeliveryChannelCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates a delivery channel object to deliver configuration
 * 			information and other compliance information to an Amazon S3 bucket and Amazon SNS topic.
 * 			For more information,
 * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/notifications-for-AWS-Config.html">Notifications that Config Sends to an Amazon SNS topic</a>.</p>
 *          <p>Before you can create a delivery channel, you must create a
 * 			configuration recorder.</p>
 *          <p>You can use this action to change the Amazon S3 bucket or an
 * 			Amazon SNS topic of the existing delivery channel. To change the
 * 			Amazon S3 bucket or an Amazon SNS topic, call this action and
 * 			specify the changed values for the S3 bucket and the SNS topic. If
 * 			you specify a different value for either the S3 bucket or the SNS
 * 			topic, this action will keep the existing value for the parameter
 * 			that is not changed.</p>
 *          <note>
 *             <p>You can have only one delivery channel per region in your
 * 				account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutDeliveryChannelCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutDeliveryChannelCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // PutDeliveryChannelRequest
 *   DeliveryChannel: { // DeliveryChannel
 *     name: "STRING_VALUE",
 *     s3BucketName: "STRING_VALUE",
 *     s3KeyPrefix: "STRING_VALUE",
 *     s3KmsKeyArn: "STRING_VALUE",
 *     snsTopicARN: "STRING_VALUE",
 *     configSnapshotDeliveryProperties: { // ConfigSnapshotDeliveryProperties
 *       deliveryFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 *     },
 *   },
 * };
 * const command = new PutDeliveryChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDeliveryChannelCommandInput - {@link PutDeliveryChannelCommandInput}
 * @returns {@link PutDeliveryChannelCommandOutput}
 * @see {@link PutDeliveryChannelCommandInput} for command's `input` shape.
 * @see {@link PutDeliveryChannelCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InsufficientDeliveryPolicyException} (client fault)
 *  <p>Your Amazon S3 bucket policy does not permit Config to
 * 			write to it.</p>
 *
 * @throws {@link InvalidDeliveryChannelNameException} (client fault)
 *  <p>The specified delivery channel name is not valid.</p>
 *
 * @throws {@link InvalidS3KeyPrefixException} (client fault)
 *  <p>The specified Amazon S3 key prefix is not valid.</p>
 *
 * @throws {@link InvalidS3KmsKeyArnException} (client fault)
 *  <p>The specified Amazon KMS Key ARN is not valid.</p>
 *
 * @throws {@link InvalidSNSTopicARNException} (client fault)
 *  <p>The specified Amazon SNS topic does not exist.</p>
 *
 * @throws {@link MaxNumberOfDeliveryChannelsExceededException} (client fault)
 *  <p>You have reached the limit of the number of delivery channels
 * 			you can create.</p>
 *
 * @throws {@link NoAvailableConfigurationRecorderException} (client fault)
 *  <p>There are no configuration recorders available to provide the
 * 			role needed to describe your resources. Create a configuration
 * 			recorder.</p>
 *
 * @throws {@link NoSuchBucketException} (client fault)
 *  <p>The specified Amazon S3 bucket does not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class PutDeliveryChannelCommand extends $Command<
  PutDeliveryChannelCommandInput,
  PutDeliveryChannelCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: PutDeliveryChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDeliveryChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutDeliveryChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "PutDeliveryChannel",
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
  private serialize(input: PutDeliveryChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutDeliveryChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDeliveryChannelCommandOutput> {
    return de_PutDeliveryChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
