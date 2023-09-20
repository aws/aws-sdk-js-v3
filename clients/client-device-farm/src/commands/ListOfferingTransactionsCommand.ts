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
import { ListOfferingTransactionsRequest, ListOfferingTransactionsResult } from "../models/models_0";
import { de_ListOfferingTransactionsCommand, se_ListOfferingTransactionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOfferingTransactionsCommand}.
 */
export interface ListOfferingTransactionsCommandInput extends ListOfferingTransactionsRequest {}
/**
 * @public
 *
 * The output of {@link ListOfferingTransactionsCommand}.
 */
export interface ListOfferingTransactionsCommandOutput extends ListOfferingTransactionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS
 *             account. The list is paginated and ordered by a descending timestamp (most recent transactions are first).
 *             The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If
 *             you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListOfferingTransactionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListOfferingTransactionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListOfferingTransactionsRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListOfferingTransactionsCommand(input);
 * const response = await client.send(command);
 * // { // ListOfferingTransactionsResult
 * //   offeringTransactions: [ // OfferingTransactions
 * //     { // OfferingTransaction
 * //       offeringStatus: { // OfferingStatus
 * //         type: "PURCHASE" || "RENEW" || "SYSTEM",
 * //         offering: { // Offering
 * //           id: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           type: "RECURRING",
 * //           platform: "ANDROID" || "IOS",
 * //           recurringCharges: [ // RecurringCharges
 * //             { // RecurringCharge
 * //               cost: { // MonetaryAmount
 * //                 amount: Number("double"),
 * //                 currencyCode: "USD",
 * //               },
 * //               frequency: "MONTHLY",
 * //             },
 * //           ],
 * //         },
 * //         quantity: Number("int"),
 * //         effectiveOn: new Date("TIMESTAMP"),
 * //       },
 * //       transactionId: "STRING_VALUE",
 * //       offeringPromotionId: "STRING_VALUE",
 * //       createdOn: new Date("TIMESTAMP"),
 * //       cost: {
 * //         amount: Number("double"),
 * //         currencyCode: "USD",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOfferingTransactionsCommandInput - {@link ListOfferingTransactionsCommandInput}
 * @returns {@link ListOfferingTransactionsCommandOutput}
 * @see {@link ListOfferingTransactionsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingTransactionsCommandOutput} for command's `response` shape.
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
 * @example To get information about device offering transactions
 * ```javascript
 * // The following example returns information about Device Farm offering transactions.
 * const input = {
 *   "nextToken": "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE="
 * };
 * const command = new ListOfferingTransactionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "offeringTransactions": [
 *     {
 *       "cost": {
 *         "amount": 0,
 *         "currencyCode": "USD"
 *       },
 *       "createdOn": "1470021420",
 *       "offeringStatus": {
 *         "type": "RENEW",
 *         "effectiveOn": "1472688000",
 *         "offering": {
 *           "type": "RECURRING",
 *           "description": "Android Remote Access Unmetered Device Slot",
 *           "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
 *           "platform": "ANDROID"
 *         },
 *         "quantity": 0
 *       },
 *       "transactionId": "03728003-d1ea-4851-abd6-12345EXAMPLE"
 *     },
 *     {
 *       "cost": {
 *         "amount": 250,
 *         "currencyCode": "USD"
 *       },
 *       "createdOn": "1470021420",
 *       "offeringStatus": {
 *         "type": "PURCHASE",
 *         "effectiveOn": "1470021420",
 *         "offering": {
 *           "type": "RECURRING",
 *           "description": "Android Remote Access Unmetered Device Slot",
 *           "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
 *           "platform": "ANDROID"
 *         },
 *         "quantity": 1
 *       },
 *       "transactionId": "56820b6e-06bd-473a-8ff8-12345EXAMPLE"
 *     },
 *     {
 *       "cost": {
 *         "amount": 175,
 *         "currencyCode": "USD"
 *       },
 *       "createdOn": "1465538520",
 *       "offeringStatus": {
 *         "type": "PURCHASE",
 *         "effectiveOn": "1465538520",
 *         "offering": {
 *           "type": "RECURRING",
 *           "description": "Android Unmetered Device Slot",
 *           "id": "8980F81C-00D7-469D-8EC6-12345EXAMPLE",
 *           "platform": "ANDROID"
 *         },
 *         "quantity": 1
 *       },
 *       "transactionId": "953ae2c6-d760-4a04-9597-12345EXAMPLE"
 *     },
 *     {
 *       "cost": {
 *         "amount": 8.07,
 *         "currencyCode": "USD"
 *       },
 *       "createdOn": "1459344300",
 *       "offeringStatus": {
 *         "type": "PURCHASE",
 *         "effectiveOn": "1459344300",
 *         "offering": {
 *           "type": "RECURRING",
 *           "description": "iOS Unmetered Device Slot",
 *           "id": "A53D4D73-A6F6-4B82-A0B0-12345EXAMPLE",
 *           "platform": "IOS"
 *         },
 *         "quantity": 1
 *       },
 *       "transactionId": "2baf9021-ae3e-47f5-ab52-12345EXAMPLE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-information-about-device-offering-transactions-1472561712315
 * ```
 *
 */
export class ListOfferingTransactionsCommand extends $Command<
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
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
  constructor(readonly input: ListOfferingTransactionsCommandInput) {
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
  ): Handler<ListOfferingTransactionsCommandInput, ListOfferingTransactionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOfferingTransactionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListOfferingTransactionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "ListOfferingTransactions",
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
  private serialize(input: ListOfferingTransactionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOfferingTransactionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOfferingTransactionsCommandOutput> {
    return de_ListOfferingTransactionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
