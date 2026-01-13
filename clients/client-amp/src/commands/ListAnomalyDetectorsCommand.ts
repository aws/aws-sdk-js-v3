// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAnomalyDetectorsRequest, ListAnomalyDetectorsResponse } from "../models/models_0";
import { ListAnomalyDetectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnomalyDetectorsCommand}.
 */
export interface ListAnomalyDetectorsCommandInput extends ListAnomalyDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnomalyDetectorsCommand}.
 */
export interface ListAnomalyDetectorsCommandOutput extends ListAnomalyDetectorsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of anomaly detectors for a workspace with optional filtering by alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListAnomalyDetectorsCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListAnomalyDetectorsCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // ListAnomalyDetectorsRequest
 *   workspaceId: "STRING_VALUE", // required
 *   alias: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAnomalyDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnomalyDetectorsResponse
 * //   anomalyDetectors: [ // AnomalyDetectorSummaryList // required
 * //     { // AnomalyDetectorSummary
 * //       arn: "STRING_VALUE", // required
 * //       anomalyDetectorId: "STRING_VALUE", // required
 * //       alias: "STRING_VALUE", // required
 * //       status: { // AnomalyDetectorStatus
 * //         statusCode: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATION_FAILED" || "UPDATE_FAILED" || "DELETION_FAILED", // required
 * //         statusReason: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"), // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnomalyDetectorsCommandInput - {@link ListAnomalyDetectorsCommandInput}
 * @returns {@link ListAnomalyDetectorsCommandOutput}
 * @see {@link ListAnomalyDetectorsCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyDetectorsCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class ListAnomalyDetectorsCommand extends $Command
  .classBuilder<
    ListAnomalyDetectorsCommandInput,
    ListAnomalyDetectorsCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "ListAnomalyDetectors", {})
  .n("AmpClient", "ListAnomalyDetectorsCommand")
  .sc(ListAnomalyDetectors$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnomalyDetectorsRequest;
      output: ListAnomalyDetectorsResponse;
    };
    sdk: {
      input: ListAnomalyDetectorsCommandInput;
      output: ListAnomalyDetectorsCommandOutput;
    };
  };
}
