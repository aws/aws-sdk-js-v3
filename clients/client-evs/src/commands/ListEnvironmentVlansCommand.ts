// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import { ListEnvironmentVlansRequest, ListEnvironmentVlansResponse } from "../models/models_0";
import { de_ListEnvironmentVlansCommand, se_ListEnvironmentVlansCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentVlansCommand}.
 */
export interface ListEnvironmentVlansCommandInput extends ListEnvironmentVlansRequest {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentVlansCommand}.
 */
export interface ListEnvironmentVlansCommandOutput extends ListEnvironmentVlansResponse, __MetadataBearer {}

/**
 * <note> <p>Amazon EVS is in public preview release and is subject to change.</p> </note> <p>Lists environment VLANs that are associated with the specified environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, ListEnvironmentVlansCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, ListEnvironmentVlansCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * const client = new EvsClient(config);
 * const input = { // ListEnvironmentVlansRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new ListEnvironmentVlansCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentVlansResponse
 * //   nextToken: "STRING_VALUE",
 * //   environmentVlans: [ // VlanList
 * //     { // Vlan
 * //       vlanId: Number("int"),
 * //       cidr: "STRING_VALUE",
 * //       availabilityZone: "STRING_VALUE",
 * //       functionName: "STRING_VALUE",
 * //       subnetId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //       vlanState: "CREATING" || "CREATED" || "DELETING" || "DELETED" || "CREATE_FAILED",
 * //       stateDetails: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEnvironmentVlansCommandInput - {@link ListEnvironmentVlansCommandInput}
 * @returns {@link ListEnvironmentVlansCommandOutput}
 * @see {@link ListEnvironmentVlansCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentVlansCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A service resource associated with the request could not be found. The resource might not be specified correctly, or it may have a <code>state</code> of <code>DELETED</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints. You will see this exception if invalid inputs are provided for any of the Amazon EVS environment operations, or if a list operation is performed on an environment resource that is still initializing.</p>
 *
 * @throws {@link EvsServiceException}
 * <p>Base exception class for all service exceptions from Evs service.</p>
 *
 *
 * @public
 */
export class ListEnvironmentVlansCommand extends $Command
  .classBuilder<
    ListEnvironmentVlansCommandInput,
    ListEnvironmentVlansCommandOutput,
    EvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticVMwareService", "ListEnvironmentVlans", {})
  .n("EvsClient", "ListEnvironmentVlansCommand")
  .f(void 0, void 0)
  .ser(se_ListEnvironmentVlansCommand)
  .de(de_ListEnvironmentVlansCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentVlansRequest;
      output: ListEnvironmentVlansResponse;
    };
    sdk: {
      input: ListEnvironmentVlansCommandInput;
      output: ListEnvironmentVlansCommandOutput;
    };
  };
}
