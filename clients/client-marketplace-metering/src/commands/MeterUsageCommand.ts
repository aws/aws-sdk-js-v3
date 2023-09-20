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
import { MeterUsageRequest, MeterUsageResult } from "../models/models_0";
import { de_MeterUsageCommand, se_MeterUsageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link MeterUsageCommand}.
 */
export interface MeterUsageCommandInput extends MeterUsageRequest {}
/**
 * @public
 *
 * The output of {@link MeterUsageCommand}.
 */
export interface MeterUsageCommandOutput extends MeterUsageResult, __MetadataBearer {}

/**
 * @public
 * <p>API to emit metering records. For identical requests, the API is idempotent. It simply
 *             returns the metering record ID.</p>
 *          <p>
 *             <code>MeterUsage</code> is authenticated on the buyer's AWS account using credentials
 *             from the EC2 instance, ECS task, or EKS pod.</p>
 *          <p>
 *             <code>MeterUsage</code> can optionally include multiple usage allocations, to provide
 *             customers with usage data split into buckets by tags that you define (or allow the
 *             customer to define).</p>
 *          <p>Usage records are expected to be submitted as quickly as possible after the event that
 *             is being recorded, and are not accepted more than 6 hours after the event.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, MeterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, MeterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const input = { // MeterUsageRequest
 *   ProductCode: "STRING_VALUE", // required
 *   Timestamp: new Date("TIMESTAMP"), // required
 *   UsageDimension: "STRING_VALUE", // required
 *   UsageQuantity: Number("int"),
 *   DryRun: true || false,
 *   UsageAllocations: [ // UsageAllocations
 *     { // UsageAllocation
 *       AllocatedUsageQuantity: Number("int"), // required
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new MeterUsageCommand(input);
 * const response = await client.send(command);
 * // { // MeterUsageResult
 * //   MeteringRecordId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MeterUsageCommandInput - {@link MeterUsageCommandInput}
 * @returns {@link MeterUsageCommandOutput}
 * @see {@link MeterUsageCommandInput} for command's `input` shape.
 * @see {@link MeterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for MarketplaceMeteringClient's `config` shape.
 *
 * @throws {@link CustomerNotEntitledException} (client fault)
 *  <p>Exception thrown when the customer does not have a valid subscription for the
 *             product.</p>
 *
 * @throws {@link DuplicateRequestException} (client fault)
 *  <p>A metering record has already been emitted by the same EC2 instance, ECS task, or EKS
 *             pod for the given {<code>usageDimension</code>, <code>timestamp</code>} with a different
 *                 <code>usageQuantity</code>.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *             message with details on the AWS forums.</p>
 *
 * @throws {@link InvalidEndpointRegionException} (client fault)
 *  <p>The endpoint being called is in a AWS Region different from your EC2 instance, ECS
 *             task, or EKS pod. The Region of the Metering Service endpoint and the AWS Region of the
 *             resource must match.</p>
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
export class MeterUsageCommand extends $Command<
  MeterUsageCommandInput,
  MeterUsageCommandOutput,
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
  constructor(readonly input: MeterUsageCommandInput) {
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
  ): Handler<MeterUsageCommandInput, MeterUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, MeterUsageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceMeteringClient";
    const commandName = "MeterUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMPMeteringService",
        operation: "MeterUsage",
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
  private serialize(input: MeterUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_MeterUsageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MeterUsageCommandOutput> {
    return de_MeterUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
