// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNetworkMigrationInsightsRequest, ListNetworkMigrationInsightsResponse } from "../models/models_0";
import { ListNetworkMigrationInsights$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationInsightsCommand}.
 */
export interface ListNetworkMigrationInsightsCommandInput extends ListNetworkMigrationInsightsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationInsightsCommand}.
 */
export interface ListNetworkMigrationInsightsCommandOutput extends ListNetworkMigrationInsightsResponse, __MetadataBearer {}

/**
 * <p>Lists network migration insights for a network migration definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationInsightsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationInsightsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationInsightsRequest
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   networkMigrationExecutionID: "STRING_VALUE",
 *   producerID: "STRING_VALUE",
 *   segmentID: "STRING_VALUE",
 *   constructID: "STRING_VALUE",
 *   filters: { // ListNetworkMigrationInsightsFilters
 *     insightTypes: [ // ListNetworkMigrationInsightsTypesFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkMigrationInsightsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationInsightsResponse
 * //   items: [ // NetworkMigrationInsightsList
 * //     { // NetworkMigrationInsight
 * //       networkMigrationDefinitionID: "STRING_VALUE",
 * //       networkMigrationExecutionID: "STRING_VALUE",
 * //       producerID: "STRING_VALUE",
 * //       producerType: "STRING_VALUE",
 * //       producerName: "STRING_VALUE",
 * //       segmentID: "STRING_VALUE",
 * //       constructID: "STRING_VALUE",
 * //       insightID: "STRING_VALUE",
 * //       insightLevel: "STRING_VALUE",
 * //       insightType: "STRING_VALUE",
 * //       insightMessage: { // InsightMessage
 * //         code: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //         topic: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkMigrationInsightsCommandInput - {@link ListNetworkMigrationInsightsCommandInput}
 * @returns {@link ListNetworkMigrationInsightsCommandOutput}
 * @see {@link ListNetworkMigrationInsightsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationInsightsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operation denied due to a file permission or access check error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Reached throttling quota exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example List the WARNING insights a mapping job recorded for one construct
 * ```javascript
 * //
 * const input = {
 *   filters: {
 *     insightTypes: [
 *       "WARNING"
 *     ]
 *   },
 *   networkMigrationDefinitionID: "nmd-54cf850b22f7cf65e",
 *   networkMigrationExecutionID: "b1235ba8-398e-4ef0-b803-78c8c85b5021",
 *   producerID: "f7aa9266-b070-421b-a630-e503783b7f12"
 * };
 * const command = new ListNetworkMigrationInsightsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       constructID: "533af212-2d0b-4a98-a89c-c01cd2070b5b",
 *       createdAt: 1793621845,
 *       insightID: "0bf04d20-205b-58f6-ac5d-9419e1decf8b",
 *       insightLevel: "CONSTRUCT",
 *       insightMessage: {
 *         code: "mapper.load_balancers.alb_address_conflict_risk",
 *         message: "AWS picks this application load balancer's addresses in its subnets when NM deploys it, before the servers launch, and adds more as it scales. Its subnets hold 2 addresses of servers or network load balancers: a server that keeps its address fails to launch, and a network load balancer fails to deploy, if this load balancer took it first. In each zone the load balancer uses the subnet with the most addresses free.",
 *         topic: "load_balancers.placement"
 *       },
 *       insightType: "WARNING",
 *       networkMigrationDefinitionID: "nmd-54cf850b22f7cf65e",
 *       networkMigrationExecutionID: "b1235ba8-398e-4ef0-b803-78c8c85b5021",
 *       producerID: "f7aa9266-b070-421b-a630-e503783b7f12",
 *       producerName: "MAPPING",
 *       producerType: "JOB",
 *       segmentID: "47088070-f6d7-4724-846e-bce3ee48a2d0"
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworkMigrationInsightsCommand extends command<ListNetworkMigrationInsightsCommandInput, ListNetworkMigrationInsightsCommandOutput>(
  _ep0,
  _mw0,
  "ListNetworkMigrationInsights",
  ListNetworkMigrationInsights$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationInsightsRequest;
      output: ListNetworkMigrationInsightsResponse;
    };
    sdk: {
      input: ListNetworkMigrationInsightsCommandInput;
      output: ListNetworkMigrationInsightsCommandOutput;
    };
  };
}
