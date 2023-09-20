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

import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import { BatchMeterUsageRequest, BatchMeterUsageResult } from "../models/models_0";
import { de_BatchMeterUsageCommand, se_BatchMeterUsageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchMeterUsageCommand}.
 */
export interface BatchMeterUsageCommandInput extends BatchMeterUsageRequest {}
/**
 * @public
 *
 * The output of {@link BatchMeterUsageCommand}.
 */
export interface BatchMeterUsageCommandOutput extends BatchMeterUsageResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <code>BatchMeterUsage</code> is called from a SaaS application listed on AWS
 *             Marketplace to post metering records for a set of customers.</p>
 *          <p>For identical requests, the API is idempotent; requests can be retried with the same
 *             records or a subset of the input records.</p>
 *          <p>Every request to <code>BatchMeterUsage</code> is for one product. If you need to meter
 *             usage for multiple products, you must make multiple calls to
 *                 <code>BatchMeterUsage</code>.</p>
 *          <p>Usage records are expected to be submitted as quickly as possible after the event that
 *             is being recorded, and are not accepted more than 6 hours after the event.</p>
 *          <p>
 *             <code>BatchMeterUsage</code> can process up to 25 <code>UsageRecords</code> at a
 *             time.</p>
 *          <p>A <code>UsageRecord</code> can optionally include multiple usage allocations, to
 *             provide customers with usage data split into buckets by tags that you define (or allow
 *             the customer to define).</p>
 *          <p>
 *             <code>BatchMeterUsage</code> returns a list of <code>UsageRecordResult</code> objects,
 *             showing the result for each <code>UsageRecord</code>, as well as a list of
 *                 <code>UnprocessedRecords</code>, indicating errors in the service side that you
 *             should retry.</p>
 *          <p>
 *             <code>BatchMeterUsage</code> requests must be less than 1MB in size.</p>
 *          <note>
 *             <p>For an example of using <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>AWS Marketplace Seller
 *                     Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, BatchMeterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, BatchMeterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const input = { // BatchMeterUsageRequest
 *   UsageRecords: [ // UsageRecordList // required
 *     { // UsageRecord
 *       Timestamp: new Date("TIMESTAMP"), // required
 *       CustomerIdentifier: "STRING_VALUE", // required
 *       Dimension: "STRING_VALUE", // required
 *       Quantity: Number("int"),
 *       UsageAllocations: [ // UsageAllocations
 *         { // UsageAllocation
 *           AllocatedUsageQuantity: Number("int"), // required
 *           Tags: [ // TagList
 *             { // Tag
 *               Key: "STRING_VALUE", // required
 *               Value: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 *   ProductCode: "STRING_VALUE", // required
 * };
 * const command = new BatchMeterUsageCommand(input);
 * const response = await client.send(command);
 * // { // BatchMeterUsageResult
 * //   Results: [ // UsageRecordResultList
 * //     { // UsageRecordResult
 * //       UsageRecord: { // UsageRecord
 * //         Timestamp: new Date("TIMESTAMP"), // required
 * //         CustomerIdentifier: "STRING_VALUE", // required
 * //         Dimension: "STRING_VALUE", // required
 * //         Quantity: Number("int"),
 * //         UsageAllocations: [ // UsageAllocations
 * //           { // UsageAllocation
 * //             AllocatedUsageQuantity: Number("int"), // required
 * //             Tags: [ // TagList
 * //               { // Tag
 * //                 Key: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       MeteringRecordId: "STRING_VALUE",
 * //       Status: "Success" || "CustomerNotSubscribed" || "DuplicateRecord",
 * //     },
 * //   ],
 * //   UnprocessedRecords: [ // UsageRecordList
 * //     {
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       CustomerIdentifier: "STRING_VALUE", // required
 * //       Dimension: "STRING_VALUE", // required
 * //       Quantity: Number("int"),
 * //       UsageAllocations: [
 * //         {
 * //           AllocatedUsageQuantity: Number("int"), // required
 * //           Tags: [
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchMeterUsageCommandInput - {@link BatchMeterUsageCommandInput}
 * @returns {@link BatchMeterUsageCommandOutput}
 * @see {@link BatchMeterUsageCommandInput} for command's `input` shape.
 * @see {@link BatchMeterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for MarketplaceMeteringClient's `config` shape.
 *
 * @throws {@link DisabledApiException} (client fault)
 *  <p>The API is disabled in the Region.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *             message with details on the AWS forums.</p>
 *
 * @throws {@link InvalidCustomerIdentifierException} (client fault)
 *  <p>You have metered usage for a <code>CustomerIdentifier</code> that does not
 *             exist.</p>
 *
 * @throws {@link InvalidProductCodeException} (client fault)
 *  <p>The product code passed does not match the product code used for publishing the
 *             product.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>The tag is invalid, or the number of tags is greater than 5.</p>
 *
 * @throws {@link InvalidUsageAllocationsException} (client fault)
 *  <p>The usage allocation objects are invalid, or the number of allocations is greater than
 *             500 for a single usage record.</p>
 *
 * @throws {@link InvalidUsageDimensionException} (client fault)
 *  <p>The usage dimension does not match one of the <code>UsageDimensions</code> associated
 *             with products.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to the API are throttled.</p>
 *
 * @throws {@link TimestampOutOfBoundsException} (client fault)
 *  <p>The <code>timestamp</code> value passed in the <code>UsageRecord</code> is out of
 *             allowed range.</p>
 *          <p>For <code>BatchMeterUsage</code>, if any of the records are outside of the allowed
 *             range, the entire batch is not processed. You must remove invalid records and try
 *             again.</p>
 *
 * @throws {@link MarketplaceMeteringServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceMetering service.</p>
 *
 */
export class BatchMeterUsageCommand extends $Command<
  BatchMeterUsageCommandInput,
  BatchMeterUsageCommandOutput,
  MarketplaceMeteringClientResolvedConfig
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
  constructor(readonly input: BatchMeterUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceMeteringClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchMeterUsageCommandInput, BatchMeterUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchMeterUsageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceMeteringClient";
    const commandName = "BatchMeterUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMPMeteringService",
        operation: "BatchMeterUsage",
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
  private serialize(input: BatchMeterUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchMeterUsageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchMeterUsageCommandOutput> {
    return de_BatchMeterUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
