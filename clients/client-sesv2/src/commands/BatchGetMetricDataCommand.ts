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

import { BatchGetMetricDataRequest, BatchGetMetricDataResponse } from "../models/models_0";
import { de_BatchGetMetricDataCommand, se_BatchGetMetricDataCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetMetricDataCommand}.
 */
export interface BatchGetMetricDataCommandInput extends BatchGetMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetMetricDataCommand}.
 */
export interface BatchGetMetricDataCommandOutput extends BatchGetMetricDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves batches of metric data collected based on your sending activity.</p>
 *          <p>You can execute this operation no more than 16 times per second,
 *             and with at most 160 queries from the batches per second (cumulative).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, BatchGetMetricDataCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, BatchGetMetricDataCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // BatchGetMetricDataRequest
 *   Queries: [ // BatchGetMetricDataQueries // required
 *     { // BatchGetMetricDataQuery
 *       Id: "STRING_VALUE", // required
 *       Namespace: "VDM", // required
 *       Metric: "SEND" || "COMPLAINT" || "PERMANENT_BOUNCE" || "TRANSIENT_BOUNCE" || "OPEN" || "CLICK" || "DELIVERY" || "DELIVERY_OPEN" || "DELIVERY_CLICK" || "DELIVERY_COMPLAINT", // required
 *       Dimensions: { // Dimensions
 *         "<keys>": "STRING_VALUE",
 *       },
 *       StartDate: new Date("TIMESTAMP"), // required
 *       EndDate: new Date("TIMESTAMP"), // required
 *     },
 *   ],
 * };
 * const command = new BatchGetMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetMetricDataResponse
 * //   Results: [ // MetricDataResultList
 * //     { // MetricDataResult
 * //       Id: "STRING_VALUE",
 * //       Timestamps: [ // TimestampList
 * //         new Date("TIMESTAMP"),
 * //       ],
 * //       Values: [ // MetricValueList
 * //         Number("long"),
 * //       ],
 * //     },
 * //   ],
 * //   Errors: [ // MetricDataErrorList
 * //     { // MetricDataError
 * //       Id: "STRING_VALUE",
 * //       Code: "INTERNAL_FAILURE" || "ACCESS_DENIED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetMetricDataCommandInput - {@link BatchGetMetricDataCommandInput}
 * @returns {@link BatchGetMetricDataCommandOutput}
 * @see {@link BatchGetMetricDataCommandInput} for command's `input` shape.
 * @see {@link BatchGetMetricDataCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>The request couldn't be processed because an error occurred with the Amazon SES API v2.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class BatchGetMetricDataCommand extends $Command<
  BatchGetMetricDataCommandInput,
  BatchGetMetricDataCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: BatchGetMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetMetricDataCommandInput, BatchGetMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetMetricDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "BatchGetMetricDataCommand";
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
  private serialize(input: BatchGetMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetMetricDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetMetricDataCommandOutput> {
    return de_BatchGetMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
