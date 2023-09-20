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
import { DescribeDeliveryChannelsRequest, DescribeDeliveryChannelsResponse } from "../models/models_0";
import { de_DescribeDeliveryChannelsCommand, se_DescribeDeliveryChannelsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeliveryChannelsCommand}.
 */
export interface DescribeDeliveryChannelsCommandInput extends DescribeDeliveryChannelsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeliveryChannelsCommand}.
 */
export interface DescribeDeliveryChannelsCommandOutput extends DescribeDeliveryChannelsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns details about the specified delivery channel. If a
 * 			delivery channel is not specified, this action returns the details
 * 			of all delivery channels associated with the account.</p>
 *          <note>
 *             <p>Currently, you can specify only one delivery channel per
 * 				region in your account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeDeliveryChannelsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeDeliveryChannelsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeDeliveryChannelsRequest
 *   DeliveryChannelNames: [ // DeliveryChannelNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDeliveryChannelsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeliveryChannelsResponse
 * //   DeliveryChannels: [ // DeliveryChannelList
 * //     { // DeliveryChannel
 * //       name: "STRING_VALUE",
 * //       s3BucketName: "STRING_VALUE",
 * //       s3KeyPrefix: "STRING_VALUE",
 * //       s3KmsKeyArn: "STRING_VALUE",
 * //       snsTopicARN: "STRING_VALUE",
 * //       configSnapshotDeliveryProperties: { // ConfigSnapshotDeliveryProperties
 * //         deliveryFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDeliveryChannelsCommandInput - {@link DescribeDeliveryChannelsCommandInput}
 * @returns {@link DescribeDeliveryChannelsCommandOutput}
 * @see {@link DescribeDeliveryChannelsCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryChannelsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchDeliveryChannelException} (client fault)
 *  <p>You have specified a delivery channel that does not
 * 			exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeDeliveryChannelsCommand extends $Command<
  DescribeDeliveryChannelsCommandInput,
  DescribeDeliveryChannelsCommandOutput,
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
  constructor(readonly input: DescribeDeliveryChannelsCommandInput) {
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
  ): Handler<DescribeDeliveryChannelsCommandInput, DescribeDeliveryChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDeliveryChannelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeDeliveryChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "DescribeDeliveryChannels",
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
  private serialize(input: DescribeDeliveryChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDeliveryChannelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDeliveryChannelsCommandOutput> {
    return de_DescribeDeliveryChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
