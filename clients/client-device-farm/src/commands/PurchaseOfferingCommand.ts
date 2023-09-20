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
import { PurchaseOfferingRequest, PurchaseOfferingResult } from "../models/models_0";
import { de_PurchaseOfferingCommand, se_PurchaseOfferingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PurchaseOfferingCommand}.
 */
export interface PurchaseOfferingCommandInput extends PurchaseOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseOfferingCommand}.
 */
export interface PurchaseOfferingCommandOutput extends PurchaseOfferingResult, __MetadataBearer {}

/**
 * @public
 * <p>Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased
 *             quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code>
 *             error if the user is not permitted to invoke the operation. If you must be able to invoke this operation,
 *             contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, PurchaseOfferingCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, PurchaseOfferingCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // PurchaseOfferingRequest
 *   offeringId: "STRING_VALUE", // required
 *   quantity: Number("int"), // required
 *   offeringPromotionId: "STRING_VALUE",
 * };
 * const command = new PurchaseOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseOfferingResult
 * //   offeringTransaction: { // OfferingTransaction
 * //     offeringStatus: { // OfferingStatus
 * //       type: "PURCHASE" || "RENEW" || "SYSTEM",
 * //       offering: { // Offering
 * //         id: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         type: "RECURRING",
 * //         platform: "ANDROID" || "IOS",
 * //         recurringCharges: [ // RecurringCharges
 * //           { // RecurringCharge
 * //             cost: { // MonetaryAmount
 * //               amount: Number("double"),
 * //               currencyCode: "USD",
 * //             },
 * //             frequency: "MONTHLY",
 * //           },
 * //         ],
 * //       },
 * //       quantity: Number("int"),
 * //       effectiveOn: new Date("TIMESTAMP"),
 * //     },
 * //     transactionId: "STRING_VALUE",
 * //     offeringPromotionId: "STRING_VALUE",
 * //     createdOn: new Date("TIMESTAMP"),
 * //     cost: {
 * //       amount: Number("double"),
 * //       currencyCode: "USD",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PurchaseOfferingCommandInput - {@link PurchaseOfferingCommandInput}
 * @returns {@link PurchaseOfferingCommandOutput}
 * @see {@link PurchaseOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseOfferingCommandOutput} for command's `response` shape.
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
 * @example To purchase a device slot offering
 * ```javascript
 * // The following example purchases a specific device slot offering.
 * const input = {
 *   "offeringId": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
 *   "quantity": 1
 * };
 * const command = new PurchaseOfferingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "offeringTransaction": {
 *     "cost": {
 *       "amount": 8.07,
 *       "currencyCode": "USD"
 *     },
 *     "createdOn": "1472648340",
 *     "offeringStatus": {
 *       "type": "PURCHASE",
 *       "effectiveOn": "1472648340",
 *       "offering": {
 *         "type": "RECURRING",
 *         "description": "Android Remote Access Unmetered Device Slot",
 *         "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
 *         "platform": "ANDROID"
 *       },
 *       "quantity": 1
 *     },
 *     "transactionId": "d30614ed-1b03-404c-9893-12345EXAMPLE"
 *   }
 * }
 * *\/
 * // example id: to-purchase-a-device-slot-offering-1472648146343
 * ```
 *
 */
export class PurchaseOfferingCommand extends $Command<
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput,
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
  constructor(readonly input: PurchaseOfferingCommandInput) {
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
  ): Handler<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PurchaseOfferingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "PurchaseOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "PurchaseOffering",
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
  private serialize(input: PurchaseOfferingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PurchaseOfferingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PurchaseOfferingCommandOutput> {
    return de_PurchaseOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
