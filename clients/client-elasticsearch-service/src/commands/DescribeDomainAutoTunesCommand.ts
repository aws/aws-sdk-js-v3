// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDomainAutoTunesRequest, DescribeDomainAutoTunesResponse } from "../models/models_0";
import { DescribeDomainAutoTunes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Provides scheduled Auto-Tune action details for the Elasticsearch domain, such as Auto-Tune action type, description, severity, and scheduled date.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeDomainAutoTunesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeDomainAutoTunesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
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
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class DescribeDomainAutoTunesCommand extends command<DescribeDomainAutoTunesCommandInput, DescribeDomainAutoTunesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDomainAutoTunes",
  DescribeDomainAutoTunes$
) {
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
