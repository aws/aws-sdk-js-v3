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

import { DescribePhoneNumbersRequest, DescribePhoneNumbersResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DescribePhoneNumbersCommand, se_DescribePhoneNumbersCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePhoneNumbersCommand}.
 */
export interface DescribePhoneNumbersCommandInput extends DescribePhoneNumbersRequest {}
/**
 * @public
 *
 * The output of {@link DescribePhoneNumbersCommand}.
 */
export interface DescribePhoneNumbersCommandOutput extends DescribePhoneNumbersResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified origination phone number, or all the phone numbers in your
 *             account.</p>
 *         <p>If you specify phone number IDs, the output includes information for only the
 *             specified phone numbers. If you specify filters, the output includes information for
 *             only those phone numbers that meet the filter criteria. If you don't specify phone
 *             number IDs or filters, the output includes information for all phone numbers.</p>
 *         <p>If you specify a phone number ID that isn't valid, an Error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribePhoneNumbersCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribePhoneNumbersCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribePhoneNumbersRequest
 *   PhoneNumberIds: [ // PhoneNumberIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // PhoneNumberFilterList
 *     { // PhoneNumberFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribePhoneNumbersCommand(input);
 * const response = await client.send(command);
 * // { // DescribePhoneNumbersResult
 * //   PhoneNumbers: [ // PhoneNumberInformationList
 * //     { // PhoneNumberInformation
 * //       PhoneNumberArn: "STRING_VALUE", // required
 * //       PhoneNumberId: "STRING_VALUE",
 * //       PhoneNumber: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       IsoCountryCode: "STRING_VALUE", // required
 * //       MessageType: "STRING_VALUE", // required
 * //       NumberCapabilities: [ // NumberCapabilityList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       NumberType: "STRING_VALUE", // required
 * //       MonthlyLeasingPrice: "STRING_VALUE", // required
 * //       TwoWayEnabled: true || false, // required
 * //       TwoWayChannelArn: "STRING_VALUE",
 * //       SelfManagedOptOutsEnabled: true || false, // required
 * //       OptOutListName: "STRING_VALUE", // required
 * //       DeletionProtectionEnabled: true || false, // required
 * //       PoolId: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePhoneNumbersCommandInput - {@link DescribePhoneNumbersCommandInput}
 * @returns {@link DescribePhoneNumbersCommandOutput}
 * @see {@link DescribePhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link DescribePhoneNumbersCommandOutput} for command's `response` shape.
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
export class DescribePhoneNumbersCommand extends $Command<
  DescribePhoneNumbersCommandInput,
  DescribePhoneNumbersCommandOutput,
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
  constructor(readonly input: DescribePhoneNumbersCommandInput) {
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
  ): Handler<DescribePhoneNumbersCommandInput, DescribePhoneNumbersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePhoneNumbersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DescribePhoneNumbersCommand";
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
  private serialize(input: DescribePhoneNumbersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePhoneNumbersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePhoneNumbersCommandOutput> {
    return de_DescribePhoneNumbersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
