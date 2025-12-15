// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { ListWavesRequest, ListWavesResponse } from "../models/models_0";
import { ListWaves$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWavesCommand}.
 */
export interface ListWavesCommandInput extends ListWavesRequest {}
/**
 * @public
 *
 * The output of {@link ListWavesCommand}.
 */
export interface ListWavesCommandOutput extends ListWavesResponse, __MetadataBearer {}

/**
 * <p>Retrieves all waves or multiple waves by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListWavesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListWavesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListWavesRequest
 *   filters: { // ListWavesRequestFilters
 *     waveIDs: [ // WaveIDsFilter
 *       "STRING_VALUE",
 *     ],
 *     isArchived: true || false,
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new ListWavesCommand(input);
 * const response = await client.send(command);
 * // { // ListWavesResponse
 * //   items: [ // WavesList
 * //     { // Wave
 * //       waveID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       isArchived: true || false,
 * //       waveAggregatedStatus: { // WaveAggregatedStatus
 * //         lastUpdateDateTime: "STRING_VALUE",
 * //         replicationStartedDateTime: "STRING_VALUE",
 * //         healthStatus: "STRING_VALUE",
 * //         progressStatus: "STRING_VALUE",
 * //         totalApplications: Number("long"),
 * //       },
 * //       creationDateTime: "STRING_VALUE",
 * //       lastModifiedDateTime: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWavesCommandInput - {@link ListWavesCommandInput}
 * @returns {@link ListWavesCommandOutput}
 * @see {@link ListWavesCommandInput} for command's `input` shape.
 * @see {@link ListWavesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class ListWavesCommand extends $Command
  .classBuilder<
    ListWavesCommandInput,
    ListWavesCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListWaves", {})
  .n("MgnClient", "ListWavesCommand")
  .sc(ListWaves$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWavesRequest;
      output: ListWavesResponse;
    };
    sdk: {
      input: ListWavesCommandInput;
      output: ListWavesCommandOutput;
    };
  };
}
