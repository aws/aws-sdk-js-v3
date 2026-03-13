// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  GetNetworkMigrationMapperSegmentConstructRequest,
  GetNetworkMigrationMapperSegmentConstructResponse,
} from "../models/models_0";
import { GetNetworkMigrationMapperSegmentConstruct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkMigrationMapperSegmentConstructCommand}.
 */
export interface GetNetworkMigrationMapperSegmentConstructCommandInput extends GetNetworkMigrationMapperSegmentConstructRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkMigrationMapperSegmentConstructCommand}.
 */
export interface GetNetworkMigrationMapperSegmentConstructCommandOutput extends GetNetworkMigrationMapperSegmentConstructResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific construct within a mapper segment, including its properties and configuration data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, GetNetworkMigrationMapperSegmentConstructCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, GetNetworkMigrationMapperSegmentConstructCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // GetNetworkMigrationMapperSegmentConstructRequest
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   segmentID: "STRING_VALUE", // required
 *   constructID: "STRING_VALUE", // required
 * };
 * const command = new GetNetworkMigrationMapperSegmentConstructCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkMigrationMapperSegmentConstructResponse
 * //   construct: { // NetworkMigrationMapperSegmentConstruct
 * //     constructID: "STRING_VALUE",
 * //     constructType: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     logicalID: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     properties: { // ConstructProperties
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNetworkMigrationMapperSegmentConstructCommandInput - {@link GetNetworkMigrationMapperSegmentConstructCommandInput}
 * @returns {@link GetNetworkMigrationMapperSegmentConstructCommandOutput}
 * @see {@link GetNetworkMigrationMapperSegmentConstructCommandInput} for command's `input` shape.
 * @see {@link GetNetworkMigrationMapperSegmentConstructCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample GetNetworkMigrationMapperSegmentConstruct call
 * ```javascript
 * //
 * const input = {
 *   constructID: "abc45678-abcd-abcd-efab-012345678abc",
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab",
 *   segmentID: "12345678-abcd-abcd-efab-0123456789ab"
 * };
 * const command = new GetNetworkMigrationMapperSegmentConstructCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   construct: {
 *     constructID: "abc45678-abcd-abcd-efab-012345678abc",
 *     constructType: "AWS::EC2::VPC",
 *     createdAt: 1735334198,
 *     description: "Segment construct description",
 *     logicalID: "logical-id1",
 *     name: "SegmentConstructName",
 *     properties: {
 *       CidrBlock: "192.168.101.0/24",
 *       MapPublicIpOnLaunch: "False",
 *       Tags: "[{'Key': 'Name', 'Value': '/infra/tier-1s/cgw/segments/Lab1-veeam-test-192.168.101.0/24'}]"
 *     },
 *     updatedAt: 1735334198
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetNetworkMigrationMapperSegmentConstructCommand extends $Command
  .classBuilder<
    GetNetworkMigrationMapperSegmentConstructCommandInput,
    GetNetworkMigrationMapperSegmentConstructCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "GetNetworkMigrationMapperSegmentConstruct", {})
  .n("MgnClient", "GetNetworkMigrationMapperSegmentConstructCommand")
  .sc(GetNetworkMigrationMapperSegmentConstruct$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkMigrationMapperSegmentConstructRequest;
      output: GetNetworkMigrationMapperSegmentConstructResponse;
    };
    sdk: {
      input: GetNetworkMigrationMapperSegmentConstructCommandInput;
      output: GetNetworkMigrationMapperSegmentConstructCommandOutput;
    };
  };
}
