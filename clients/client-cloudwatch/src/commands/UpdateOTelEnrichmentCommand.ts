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
 * Replaces the filters that determine which CloudWatch vended metrics are enriched with resource ARN and resource tag labels for the account. Enrichment must already be running for the account. If it is not, this operation returns a `ResourceNotFoundException`. To start enrichment, use [StartOTelEnrichment](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_StartOTelEnrichment.html).
 *
 * The filters in the request completely replace the stored filters; they are not merged with them. `IncludeFilters` and `ExcludeFilters` are replaced as a pair, so a request that specifies only `IncludeFilters` also clears the stored `ExcludeFilters`, and a request that specifies neither clears both.
 *
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
 *
 * The named resource does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed validation. One or more input parameters do not satisfy the constraints that the operation requires.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
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
