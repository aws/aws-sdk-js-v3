// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateOTelEnrichmentInput, UpdateOTelEnrichmentOutput } from "../models/models_0";
import { UpdateOTelEnrichment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateOTelEnrichmentCommand}.
 */
export interface UpdateOTelEnrichmentCommandInput extends UpdateOTelEnrichmentInput {}
/**
 * @public
 *
 * The output of {@link UpdateOTelEnrichmentCommand}.
 */
export interface UpdateOTelEnrichmentCommandOutput extends UpdateOTelEnrichmentOutput, __MetadataBearer {}

/**
 * <p>Replaces the filters that determine which CloudWatch vended metrics are enriched
 *             with resource ARN and resource tag labels for the account. Enrichment must already be
 *             running for the account. If it is not, this operation returns a
 *                 <code>ResourceNotFoundException</code>. To start enrichment, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_StartOTelEnrichment.html">StartOTelEnrichment</a>.</p>
 *          <p>The filters in the request completely replace the stored filters; they are not
 *             merged with them. <code>IncludeFilters</code> and <code>ExcludeFilters</code> are
 *             replaced as a pair, so a request that specifies only <code>IncludeFilters</code> also
 *             clears the stored <code>ExcludeFilters</code>, and a request that specifies neither
 *             clears both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, UpdateOTelEnrichmentCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, UpdateOTelEnrichmentCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // UpdateOTelEnrichmentInput
 *   IncludeFilters: [ // OTelEnrichmentMetricSelectorList
 *     { // OTelEnrichmentMetricSelector
 *       Namespace: "STRING_VALUE", // required
 *       MetricNames: [ // OTelEnrichmentMetricNameList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ExcludeFilters: [
 *     {
 *       Namespace: "STRING_VALUE", // required
 *       MetricNames: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateOTelEnrichmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOTelEnrichmentOutput
 * //   IncludeFilters: [ // OTelEnrichmentMetricSelectorList
 * //     { // OTelEnrichmentMetricSelector
 * //       Namespace: "STRING_VALUE", // required
 * //       MetricNames: [ // OTelEnrichmentMetricNameList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   ExcludeFilters: [
 * //     {
 * //       Namespace: "STRING_VALUE", // required
 * //       MetricNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateOTelEnrichmentCommandInput - {@link UpdateOTelEnrichmentCommandInput}
 * @returns {@link UpdateOTelEnrichmentCommandOutput}
 * @see {@link UpdateOTelEnrichmentCommandInput} for command's `input` shape.
 * @see {@link UpdateOTelEnrichmentCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. One or more input parameters do not satisfy the
 *             constraints that the operation requires.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class UpdateOTelEnrichmentCommand extends command<UpdateOTelEnrichmentCommandInput, UpdateOTelEnrichmentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOTelEnrichment",
  UpdateOTelEnrichment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOTelEnrichmentInput;
      output: UpdateOTelEnrichmentOutput;
    };
    sdk: {
      input: UpdateOTelEnrichmentCommandInput;
      output: UpdateOTelEnrichmentCommandOutput;
    };
  };
}
