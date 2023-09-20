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

import { DescribeConfigurationSetsRequest, DescribeConfigurationSetsResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DescribeConfigurationSetsCommand, se_DescribeConfigurationSetsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationSetsCommand}.
 */
export interface DescribeConfigurationSetsCommandInput extends DescribeConfigurationSetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationSetsCommand}.
 */
export interface DescribeConfigurationSetsCommandOutput extends DescribeConfigurationSetsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified configuration sets or all in your account.</p>
 *         <p>If you specify configuration set names, the output includes information for only the
 *             specified configuration sets. If you specify filters, the output includes information
 *             for only those configuration sets that meet the filter criteria. If you don't specify
 *             configuration set names or filters, the output includes information for all
 *             configuration sets.</p>
 *         <p>If you specify a configuration set name that isn't valid, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeConfigurationSetsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeConfigurationSetsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeConfigurationSetsRequest
 *   ConfigurationSetNames: [ // ConfigurationSetNameList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // ConfigurationSetFilterList
 *     { // ConfigurationSetFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeConfigurationSetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationSetsResult
 * //   ConfigurationSets: [ // ConfigurationSetInformationList
 * //     { // ConfigurationSetInformation
 * //       ConfigurationSetArn: "STRING_VALUE", // required
 * //       ConfigurationSetName: "STRING_VALUE", // required
 * //       EventDestinations: [ // EventDestinationList // required
 * //         { // EventDestination
 * //           EventDestinationName: "STRING_VALUE", // required
 * //           Enabled: true || false, // required
 * //           MatchingEventTypes: [ // EventTypeList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           CloudWatchLogsDestination: { // CloudWatchLogsDestination
 * //             IamRoleArn: "STRING_VALUE", // required
 * //             LogGroupArn: "STRING_VALUE", // required
 * //           },
 * //           KinesisFirehoseDestination: { // KinesisFirehoseDestination
 * //             IamRoleArn: "STRING_VALUE", // required
 * //             DeliveryStreamArn: "STRING_VALUE", // required
 * //           },
 * //           SnsDestination: { // SnsDestination
 * //             TopicArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //       DefaultMessageType: "STRING_VALUE",
 * //       DefaultSenderId: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationSetsCommandInput - {@link DescribeConfigurationSetsCommandInput}
 * @returns {@link DescribeConfigurationSetsCommandOutput}
 * @see {@link DescribeConfigurationSetsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationSetsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 */
export class DescribeConfigurationSetsCommand extends $Command<
  DescribeConfigurationSetsCommandInput,
  DescribeConfigurationSetsCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
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
  constructor(readonly input: DescribeConfigurationSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConfigurationSetsCommandInput, DescribeConfigurationSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConfigurationSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DescribeConfigurationSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoiceV2",
        operation: "DescribeConfigurationSets",
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
  private serialize(input: DescribeConfigurationSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConfigurationSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationSetsCommandOutput> {
    return de_DescribeConfigurationSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
