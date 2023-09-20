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
import { GetOfferingStatusRequest, GetOfferingStatusResult } from "../models/models_0";
import { de_GetOfferingStatusCommand, se_GetOfferingStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOfferingStatusCommand}.
 */
export interface GetOfferingStatusCommandInput extends GetOfferingStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetOfferingStatusCommand}.
 */
export interface GetOfferingStatusCommandOutput extends GetOfferingStatusResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets the current status and future status of all offerings purchased by an AWS account. The response
 *             indicates how many offerings are currently available and the offerings that will be available in the next
 *             period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the
 *             operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetOfferingStatusCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetOfferingStatusCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // GetOfferingStatusRequest
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetOfferingStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetOfferingStatusResult
 * //   current: { // OfferingStatusMap
 * //     "<keys>": { // OfferingStatus
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
 * //   },
 * //   nextPeriod: {
 * //     "<keys>": {
 * //       type: "PURCHASE" || "RENEW" || "SYSTEM",
 * //       offering: {
 * //         id: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         type: "RECURRING",
 * //         platform: "ANDROID" || "IOS",
 * //         recurringCharges: [
 * //           {
 * //             cost: {
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
 * //   },
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOfferingStatusCommandInput - {@link GetOfferingStatusCommandInput}
 * @returns {@link GetOfferingStatusCommandOutput}
 * @see {@link GetOfferingStatusCommandInput} for command's `input` shape.
 * @see {@link GetOfferingStatusCommandOutput} for command's `response` shape.
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
 * @example To get status information about device offerings
 * ```javascript
 * // The following example returns information about Device Farm offerings available to your account.
 * const input = {
 *   "nextToken": "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE="
 * };
 * const command = new GetOfferingStatusCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "current": {
 *     "D68B3C05-1BA6-4360-BC69-12345EXAMPLE": {
 *       "offering": {
 *         "type": "RECURRING",
 *         "description": "Android Remote Access Unmetered Device Slot",
 *         "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
 *         "platform": "ANDROID"
 *       },
 *       "quantity": 1
 *     }
 *   },
 *   "nextPeriod": {
 *     "D68B3C05-1BA6-4360-BC69-12345EXAMPLE": {
 *       "effectiveOn": "1472688000",
 *       "offering": {
 *         "type": "RECURRING",
 *         "description": "Android Remote Access Unmetered Device Slot",
 *         "id": "D68B3C05-1BA6-4360-BC69-12345EXAMPLE",
 *         "platform": "ANDROID"
 *       },
 *       "quantity": 1
 *     }
 *   }
 * }
 * *\/
 * // example id: to-get-status-information-about-device-offerings-1472568124402
 * ```
 *
 */
export class GetOfferingStatusCommand extends $Command<
  GetOfferingStatusCommandInput,
  GetOfferingStatusCommandOutput,
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
  constructor(readonly input: GetOfferingStatusCommandInput) {
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
  ): Handler<GetOfferingStatusCommandInput, GetOfferingStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOfferingStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetOfferingStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "GetOfferingStatus",
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
  private serialize(input: GetOfferingStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOfferingStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOfferingStatusCommandOutput> {
    return de_GetOfferingStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
