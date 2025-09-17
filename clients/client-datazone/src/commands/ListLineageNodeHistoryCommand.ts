// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLineageNodeHistoryInput, ListLineageNodeHistoryOutput } from "../models/models_1";
import { de_ListLineageNodeHistoryCommand, se_ListLineageNodeHistoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLineageNodeHistoryCommand}.
 */
export interface ListLineageNodeHistoryCommandInput extends ListLineageNodeHistoryInput {}
/**
 * @public
 *
 * The output of {@link ListLineageNodeHistoryCommand}.
 */
export interface ListLineageNodeHistoryCommandOutput extends ListLineageNodeHistoryOutput, __MetadataBearer {}

/**
 * <p>Lists the history of the specified data lineage node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListLineageNodeHistoryCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListLineageNodeHistoryCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListLineageNodeHistoryInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   identifier: "STRING_VALUE", // required
 *   direction: "UPSTREAM" || "DOWNSTREAM",
 *   eventTimestampGTE: new Date("TIMESTAMP"),
 *   eventTimestampLTE: new Date("TIMESTAMP"),
 *   sortOrder: "ASCENDING" || "DESCENDING",
 * };
 * const command = new ListLineageNodeHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListLineageNodeHistoryOutput
 * //   nodes: [ // LineageNodeSummaries
 * //     { // LineageNodeSummary
 * //       domainId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       id: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE", // required
 * //       typeRevision: "STRING_VALUE",
 * //       sourceIdentifier: "STRING_VALUE",
 * //       eventTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLineageNodeHistoryCommandInput - {@link ListLineageNodeHistoryCommandInput}
 * @returns {@link ListLineageNodeHistoryCommandOutput}
 * @see {@link ListLineageNodeHistoryCommandInput} for command's `input` shape.
 * @see {@link ListLineageNodeHistoryCommandOutput} for command's `response` shape.
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
export class ListLineageNodeHistoryCommand extends $Command
  .classBuilder<
    ListLineageNodeHistoryCommandInput,
    ListLineageNodeHistoryCommandOutput,
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
  .s("DataZone", "ListLineageNodeHistory", {})
  .n("DataZoneClient", "ListLineageNodeHistoryCommand")
  .f(void 0, void 0)
  .ser(se_ListLineageNodeHistoryCommand)
  .de(de_ListLineageNodeHistoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLineageNodeHistoryInput;
      output: ListLineageNodeHistoryOutput;
    };
    sdk: {
      input: ListLineageNodeHistoryCommandInput;
      output: ListLineageNodeHistoryCommandOutput;
    };
  };
}
