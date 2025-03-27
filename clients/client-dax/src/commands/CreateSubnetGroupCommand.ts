// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSubnetGroupRequest, CreateSubnetGroupResponse } from "../models/models_0";
import { de_CreateSubnetGroupCommand, se_CreateSubnetGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubnetGroupCommand}.
 */
export interface CreateSubnetGroupCommandInput extends CreateSubnetGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubnetGroupCommand}.
 */
export interface CreateSubnetGroupCommandOutput extends CreateSubnetGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a new subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, CreateSubnetGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, CreateSubnetGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const input = { // CreateSubnetGroupRequest
 *   SubnetGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubnetGroupResponse
 * //   SubnetGroup: { // SubnetGroup
 * //     SubnetGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSubnetGroupCommandInput - {@link CreateSubnetGroupCommandInput}
 * @returns {@link CreateSubnetGroupCommandOutput}
 * @see {@link CreateSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>An invalid subnet identifier was specified.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link SubnetGroupAlreadyExistsFault} (client fault)
 *  <p>The specified subnet group already exists.</p>
 *
 * @throws {@link SubnetGroupQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of
 *             subnets in a subnet group.</p>
 *
 * @throws {@link SubnetQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of
 *             subnets in a subnet group.</p>
 *
 * @throws {@link DAXServiceException}
 * <p>Base exception class for all service exceptions from DAX service.</p>
 *
 *
 * @public
 */
export class CreateSubnetGroupCommand extends $Command
  .classBuilder<
    CreateSubnetGroupCommandInput,
    CreateSubnetGroupCommandOutput,
    DAXClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DAXClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDAXV3", "CreateSubnetGroup", {})
  .n("DAXClient", "CreateSubnetGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateSubnetGroupCommand)
  .de(de_CreateSubnetGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubnetGroupRequest;
      output: CreateSubnetGroupResponse;
    };
    sdk: {
      input: CreateSubnetGroupCommandInput;
      output: CreateSubnetGroupCommandOutput;
    };
  };
}
