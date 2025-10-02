// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import { ListEnvironmentHostsRequest, ListEnvironmentHostsResponse } from "../models/models_0";
import { de_ListEnvironmentHostsCommand, se_ListEnvironmentHostsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentHostsCommand}.
 */
export interface ListEnvironmentHostsCommandInput extends ListEnvironmentHostsRequest {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentHostsCommand}.
 */
export interface ListEnvironmentHostsCommandOutput extends ListEnvironmentHostsResponse, __MetadataBearer {}

/**
 * <p>List the hosts within an environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, ListEnvironmentHostsCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, ListEnvironmentHostsCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // ListEnvironmentHostsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new ListEnvironmentHostsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentHostsResponse
 * //   nextToken: "STRING_VALUE",
 * //   environmentHosts: [ // HostList
 * //     { // Host
 * //       hostName: "STRING_VALUE",
 * //       ipAddress: "STRING_VALUE",
 * //       keyName: "STRING_VALUE",
 * //       instanceType: "i4i.metal",
 * //       placementGroupId: "STRING_VALUE",
 * //       dedicatedHostId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //       hostState: "CREATING" || "CREATED" || "UPDATING" || "DELETING" || "DELETED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //       stateDetails: "STRING_VALUE",
 * //       ec2InstanceId: "STRING_VALUE",
 * //       networkInterfaces: [ // NetworkInterfaceList
 * //         { // NetworkInterface
 * //           networkInterfaceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEnvironmentHostsCommandInput - {@link ListEnvironmentHostsCommandInput}
 * @returns {@link ListEnvironmentHostsCommandOutput}
 * @see {@link ListEnvironmentHostsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentHostsCommandOutput} for command's `response` shape.
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
export class ListEnvironmentHostsCommand extends $Command
  .classBuilder<
    ListEnvironmentHostsCommandInput,
    ListEnvironmentHostsCommandOutput,
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
  .s("AmazonElasticVMwareService", "ListEnvironmentHosts", {})
  .n("EvsClient", "ListEnvironmentHostsCommand")
  .f(void 0, void 0)
  .ser(se_ListEnvironmentHostsCommand)
  .de(de_ListEnvironmentHostsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentHostsRequest;
      output: ListEnvironmentHostsResponse;
    };
    sdk: {
      input: ListEnvironmentHostsCommandInput;
      output: ListEnvironmentHostsCommandOutput;
    };
  };
}
