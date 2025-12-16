// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetMetricDataRequest, BatchGetMetricDataResponse } from "../models/models_0";
import { BatchGetMetricData$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves batches of metric data collected based on your sending activity.</p>
 *          <p>You can execute this operation no more than 16 times per second,
 *             and with at most 160 queries from the batches per second (cumulative).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, BatchGetMetricDataCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, BatchGetMetricDataCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
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
 *
 * @public
 */
export class BatchGetMetricDataCommand extends $Command
  .classBuilder<
    BatchGetMetricDataCommandInput,
    BatchGetMetricDataCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "BatchGetMetricData", {})
  .n("SESv2Client", "BatchGetMetricDataCommand")
  .sc(BatchGetMetricData$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetMetricDataRequest;
      output: BatchGetMetricDataResponse;
    };
    sdk: {
      input: BatchGetMetricDataCommandInput;
      output: BatchGetMetricDataCommandOutput;
    };
  };
}
