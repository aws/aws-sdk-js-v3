// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { QueryGraphOutput } from "../models/models_1";
import type { QueryGraphInput } from "../models/models_2";
import { QueryGraph$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryGraphCommand}.
 */
export interface QueryGraphCommandInput extends QueryGraphInput {}
/**
 * @public
 *
 * The output of {@link QueryGraphCommand}.
 */
export interface QueryGraphCommandOutput extends QueryGraphOutput, __MetadataBearer {}

/**
 * <p>Queries entities in the graph store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, QueryGraphCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, QueryGraphCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // QueryGraphInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   match: [ // MatchClauses // required
 *     { // MatchClause Union: only one key present
 *       relationPattern: { // RelationPattern
 *         relationType: "LINEAGE", // required
 *         relationDirection: "IN" || "OUT", // required
 *         maxPathLength: Number("int"),
 *       },
 *       entityPattern: { // EntityPattern
 *         entityType: "LINEAGE_NODE", // required
 *         identifier: "STRING_VALUE", // required
 *         filters: { // FilterClause Union: only one key present
 *           filter: { // Filter
 *             attribute: "STRING_VALUE", // required
 *             value: "STRING_VALUE",
 *             intValue: Number("long"),
 *             operator: "EQ" || "LE" || "LT" || "GE" || "GT" || "TEXT_SEARCH",
 *           },
 *           and: [ // FilterList
 *             {//  Union: only one key present
 *               filter: {
 *                 attribute: "STRING_VALUE", // required
 *                 value: "STRING_VALUE",
 *                 intValue: Number("long"),
 *                 operator: "EQ" || "LE" || "LT" || "GE" || "GT" || "TEXT_SEARCH",
 *               },
 *               and: [
 *                 "<FilterClause>",
 *               ],
 *               or: [
 *                 "<FilterClause>",
 *               ],
 *             },
 *           ],
 *           or: [
 *             "<FilterClause>",
 *           ],
 *         },
 *       },
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   additionalAttributes: { // AdditionalAttributes
 *     formNames: [ // FormNameList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new QueryGraphCommand(input);
 * const response = await client.send(command);
 * // { // QueryGraphOutput
 * //   items: [ // ResultItemList
 * //     { // ResultItem Union: only one key present
 * //       lineageNode: { // LineageNodeItem
 * //         domainId: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         updatedBy: "STRING_VALUE",
 * //         id: "STRING_VALUE", // required
 * //         typeName: "STRING_VALUE", // required
 * //         typeRevision: "STRING_VALUE",
 * //         sourceIdentifier: "STRING_VALUE",
 * //         eventTimestamp: new Date("TIMESTAMP"),
 * //         formsOutput: [ // FormOutputList
 * //           { // FormOutput
 * //             formName: "STRING_VALUE", // required
 * //             typeName: "STRING_VALUE",
 * //             typeRevision: "STRING_VALUE",
 * //             content: "STRING_VALUE",
 * //           },
 * //         ],
 * //         upstreamLineageNodeIds: [ // LineageNodeIds
 * //           "STRING_VALUE",
 * //         ],
 * //         downstreamLineageNodeIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param QueryGraphCommandInput - {@link QueryGraphCommandInput}
 * @returns {@link QueryGraphCommandOutput}
 * @see {@link QueryGraphCommandInput} for command's `input` shape.
 * @see {@link QueryGraphCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
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
export class QueryGraphCommand extends $Command
  .classBuilder<
    QueryGraphCommandInput,
    QueryGraphCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "QueryGraph", {})
  .n("DataZoneClient", "QueryGraphCommand")
  .sc(QueryGraph$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryGraphInput;
      output: QueryGraphOutput;
    };
    sdk: {
      input: QueryGraphCommandInput;
      output: QueryGraphCommandOutput;
    };
  };
}
