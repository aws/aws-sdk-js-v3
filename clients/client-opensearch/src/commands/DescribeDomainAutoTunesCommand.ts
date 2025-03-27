// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDomainAutoTunesRequest, DescribeDomainAutoTunesResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_DescribeDomainAutoTunesCommand, se_DescribeDomainAutoTunesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainAutoTunesCommand}.
 */
export interface DescribeDomainAutoTunesCommandInput extends DescribeDomainAutoTunesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainAutoTunesCommand}.
 */
export interface DescribeDomainAutoTunesCommandOutput extends DescribeDomainAutoTunesResponse, __MetadataBearer {}

/**
 * <p>Returns the list of optimizations that Auto-Tune has made to an Amazon OpenSearch Service
 *    domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch
 *     Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeDomainAutoTunesCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeDomainAutoTunesCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeDomainAutoTunesRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDomainAutoTunesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainAutoTunesResponse
 * //   AutoTunes: [ // AutoTuneList
 * //     { // AutoTune
 * //       AutoTuneType: "SCHEDULED_ACTION",
 * //       AutoTuneDetails: { // AutoTuneDetails
 * //         ScheduledAutoTuneDetails: { // ScheduledAutoTuneDetails
 * //           Date: new Date("TIMESTAMP"),
 * //           ActionType: "JVM_HEAP_SIZE_TUNING" || "JVM_YOUNG_GEN_TUNING",
 * //           Action: "STRING_VALUE",
 * //           Severity: "LOW" || "MEDIUM" || "HIGH",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDomainAutoTunesCommandInput - {@link DescribeDomainAutoTunesCommandInput}
 * @returns {@link DescribeDomainAutoTunesCommandOutput}
 * @see {@link DescribeDomainAutoTunesCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainAutoTunesCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class DescribeDomainAutoTunesCommand extends $Command
  .classBuilder<
    DescribeDomainAutoTunesCommandInput,
    DescribeDomainAutoTunesCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "DescribeDomainAutoTunes", {})
  .n("OpenSearchClient", "DescribeDomainAutoTunesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDomainAutoTunesCommand)
  .de(de_DescribeDomainAutoTunesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDomainAutoTunesRequest;
      output: DescribeDomainAutoTunesResponse;
    };
    sdk: {
      input: DescribeDomainAutoTunesCommandInput;
      output: DescribeDomainAutoTunesCommandOutput;
    };
  };
}
