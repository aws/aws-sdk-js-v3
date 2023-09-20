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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListOfferingsRequest, ListOfferingsResult } from "../models/models_0";
import { de_ListOfferingsCommand, se_ListOfferingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOfferingsCommand}.
 */
export interface ListOfferingsCommandInput extends ListOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link ListOfferingsCommand}.
 */
export interface ListOfferingsCommandOutput extends ListOfferingsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of products or offerings that the user can manage through the API. Each offering record
 *             indicates the recurring price per unit and the frequency for that offering. The API returns a
 *                 <code>NotEligible</code> error if the user is not permitted to invoke the operation.  If you must be
 *             able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListOfferingsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListOfferingsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListOfferingsRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // ListOfferingsResult
 * //   offerings: [ // Offerings
 * //     { // Offering
 * //       id: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       type: "RECURRING",
 * //       platform: "ANDROID" || "IOS",
 * //       recurringCharges: [ // RecurringCharges
 * //         { // RecurringCharge
 * //           cost: { // MonetaryAmount
 * //             amount: Number("double"),
 * //             currencyCode: "USD",
 * //           },
 * //           frequency: "MONTHLY",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOfferingsCommandInput - {@link ListOfferingsCommandInput}
 * @returns {@link ListOfferingsCommandOutput}
 * @see {@link ListOfferingsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotEligibleException} (client fault)
 *  <p>Exception gets thrown when a user is not eligible to perform the specified
 *             transaction.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 * @example To get information about device offerings
 * ```javascript
 * // The following example returns information about available device offerings.
 * const input = {
 *   "nextToken": "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE="
 * };
 * const command = new ListOfferingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "offerings": [
 *     {
 *       "type": "RECURRING",
 *       "description": "iOS Unmetered Device Slot",
 *       "id": "A53D4D73-A6F6-4B82-A0B0-12345EXAMPLE",
 *       "platform": "IOS",
 *       "recurringCharges": [
 *         {
 *           "cost": {
 *             "amount": 250,
 *             "currencyCode": "USD"
 *           },
 *           "frequency": "MONTHLY"
 *         }
 *       ]
 *     },
 *     {
 *       "type": "RECURRING",
 *       "description": "Android Unmetered Device Slot",
 *       "id": "8980F81C-00D7-469D-8EC6-12345EXAMPLE",
 *       "platform": "ANDROID",
 *       "recurringCharges": [
 *         {
 *           "cost": {
 *             "amount": 250,
 *             "currencyCode": "USD"
 *           },
 *           "frequency": "MONTHLY"
 *         }
 *       ]
 *     },
 *     {
 *       "type": "RECURRING",
 *       "description": "Android Remote Access Unmetered Device Slot",
 *       "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
 *       "platform": "ANDROID",
 *       "recurringCharges": [
 *         {
 *           "cost": {
 *             "amount": 250,
 *             "currencyCode": "USD"
 *           },
 *           "frequency": "MONTHLY"
 *         }
 *       ]
 *     },
 *     {
 *       "type": "RECURRING",
 *       "description": "iOS Remote Access Unmetered Device Slot",
 *       "id": "552B4DAD-A6C9-45C4-94FB-12345EXAMPLE",
 *       "platform": "IOS",
 *       "recurringCharges": [
 *         {
 *           "cost": {
 *             "amount": 250,
 *             "currencyCode": "USD"
 *           },
 *           "frequency": "MONTHLY"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-information-about-device-offerings-1472562810999
 * ```
 *
 */
export class ListOfferingsCommand extends $Command<
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: ListOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOfferingsCommandInput, ListOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListOfferingsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "ListOfferings",
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
  private serialize(input: ListOfferingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOfferingsCommandOutput> {
    return de_ListOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
