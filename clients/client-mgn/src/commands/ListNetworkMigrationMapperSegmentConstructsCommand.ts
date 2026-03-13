// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  ListNetworkMigrationMapperSegmentConstructsRequest,
  ListNetworkMigrationMapperSegmentConstructsResponse,
} from "../models/models_0";
import { ListNetworkMigrationMapperSegmentConstructs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationMapperSegmentConstructsCommand}.
 */
export interface ListNetworkMigrationMapperSegmentConstructsCommandInput extends ListNetworkMigrationMapperSegmentConstructsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationMapperSegmentConstructsCommand}.
 */
export interface ListNetworkMigrationMapperSegmentConstructsCommandOutput extends ListNetworkMigrationMapperSegmentConstructsResponse, __MetadataBearer {}

/**
 * <p>Lists constructs within a mapper segment, representing individual infrastructure components like VPCs, subnets, or security groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationMapperSegmentConstructsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationMapperSegmentConstructsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationMapperSegmentConstructsRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   segmentID: "STRING_VALUE", // required
 *   filters: { // ListNetworkMigrationMapperSegmentConstructsFilters
 *     constructIDs: [ // ListNetworkMigrationMapperSegmentConstructsIDsFilter
 *       "STRING_VALUE",
 *     ],
 *     constructTypes: [ // ListNetworkMigrationMapperSegmentConstructTypesFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkMigrationMapperSegmentConstructsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationMapperSegmentConstructsResponse
 * //   items: [ // NetworkMigrationMapperSegmentConstructs
 * //     { // NetworkMigrationMapperSegmentConstruct
 * //       constructID: "STRING_VALUE",
 * //       constructType: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       logicalID: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       properties: { // ConstructProperties
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkMigrationMapperSegmentConstructsCommandInput - {@link ListNetworkMigrationMapperSegmentConstructsCommandInput}
 * @returns {@link ListNetworkMigrationMapperSegmentConstructsCommandOutput}
 * @see {@link ListNetworkMigrationMapperSegmentConstructsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationMapperSegmentConstructsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
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
 * @example Sample ListNetworkMigrationMapperSegmentConstructs call with properties enabled
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab",
 *   segmentID: "12345678-abcd-abcd-efab-0123456789ab"
 * };
 * const command = new ListNetworkMigrationMapperSegmentConstructsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       constructID: "abc45678-abcd-abcd-efab-012345678abc",
 *       constructType: "AWS::EC2::VPC",
 *       createdAt: 1735334198,
 *       description: "Segment construct description",
 *       logicalID: "logical-id1",
 *       name: "SegmentConstructName",
 *       properties: {
 *         CidrBlock: "192.168.101.0/24",
 *         MapPublicIpOnLaunch: "False",
 *         Tags: "[{'Key': 'Name', 'Value': '/infra/tier-1s/cgw/segments/Lab1-veeam-test-192.168.101.0/24'}]"
 *       },
 *       updatedAt: 1735334198
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @example Sample ListNetworkMigrationMapperSegmentConstructs call with properties disabled (default)
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab",
 *   segmentID: "12345678-abcd-abcd-efab-0123456789ab"
 * };
 * const command = new ListNetworkMigrationMapperSegmentConstructsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       constructID: "abc45678-abcd-abcd-efab-012345678abc",
 *       constructType: "AWS::EC2::VPC",
 *       createdAt: 1735334198,
 *       description: "Segment construct description",
 *       logicalID: "logical-id1",
 *       name: "SegmentConstructName",
 *       updatedAt: 1735334198
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworkMigrationMapperSegmentConstructsCommand extends $Command
  .classBuilder<
    ListNetworkMigrationMapperSegmentConstructsCommandInput,
    ListNetworkMigrationMapperSegmentConstructsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListNetworkMigrationMapperSegmentConstructs", {})
  .n("MgnClient", "ListNetworkMigrationMapperSegmentConstructsCommand")
  .sc(ListNetworkMigrationMapperSegmentConstructs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationMapperSegmentConstructsRequest;
      output: ListNetworkMigrationMapperSegmentConstructsResponse;
    };
    sdk: {
      input: ListNetworkMigrationMapperSegmentConstructsCommandInput;
      output: ListNetworkMigrationMapperSegmentConstructsCommandOutput;
    };
  };
}
