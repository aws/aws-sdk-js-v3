// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMetadataGenerationRunsInput, ListMetadataGenerationRunsOutput } from "../models/models_2";
import { de_ListMetadataGenerationRunsCommand, se_ListMetadataGenerationRunsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMetadataGenerationRunsCommand}.
 */
export interface ListMetadataGenerationRunsCommandInput extends ListMetadataGenerationRunsInput {}
/**
 * @public
 *
 * The output of {@link ListMetadataGenerationRunsCommand}.
 */
export interface ListMetadataGenerationRunsCommandOutput extends ListMetadataGenerationRunsOutput, __MetadataBearer {}

/**
 * <p>Lists all metadata generation runs.</p> <p>Metadata generation runs represent automated processes that leverage AI/ML capabilities to create or enhance asset metadata at scale. This feature helps organizations maintain comprehensive and consistent metadata across large numbers of assets without manual intervention. It can automatically generate business descriptions, tags, and other metadata elements, significantly reducing the time and effort required for metadata management while improving consistency and completeness.</p> <p>Prerequisites:</p> <ul> <li> <p>Valid domain identifier. </p> </li> <li> <p>User must have access to metadata generation runs in the domain.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListMetadataGenerationRunsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListMetadataGenerationRunsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListMetadataGenerationRunsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   status: "SUBMITTED" || "IN_PROGRESS" || "CANCELED" || "SUCCEEDED" || "FAILED",
 *   type: "BUSINESS_DESCRIPTIONS",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMetadataGenerationRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListMetadataGenerationRunsOutput
 * //   items: [ // MetadataGenerationRuns
 * //     { // MetadataGenerationRunItem
 * //       domainId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       target: { // MetadataGenerationRunTarget
 * //         type: "ASSET", // required
 * //         identifier: "STRING_VALUE", // required
 * //         revision: "STRING_VALUE",
 * //       },
 * //       status: "SUBMITTED" || "IN_PROGRESS" || "CANCELED" || "SUCCEEDED" || "FAILED",
 * //       type: "BUSINESS_DESCRIPTIONS",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       owningProjectId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMetadataGenerationRunsCommandInput - {@link ListMetadataGenerationRunsCommandInput}
 * @returns {@link ListMetadataGenerationRunsCommandOutput}
 * @see {@link ListMetadataGenerationRunsCommandInput} for command's `input` shape.
 * @see {@link ListMetadataGenerationRunsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListMetadataGenerationRunsCommand extends $Command
  .classBuilder<
    ListMetadataGenerationRunsCommandInput,
    ListMetadataGenerationRunsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListMetadataGenerationRuns", {})
  .n("DataZoneClient", "ListMetadataGenerationRunsCommand")
  .f(void 0, void 0)
  .ser(se_ListMetadataGenerationRunsCommand)
  .de(de_ListMetadataGenerationRunsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMetadataGenerationRunsInput;
      output: ListMetadataGenerationRunsOutput;
    };
    sdk: {
      input: ListMetadataGenerationRunsCommandInput;
      output: ListMetadataGenerationRunsCommandOutput;
    };
  };
}
