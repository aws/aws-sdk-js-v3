// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import { DeleteEnvironmentHostRequest, DeleteEnvironmentHostResponse } from "../models/models_0";
import { DeleteEnvironmentHost } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentHostCommand}.
 */
export interface DeleteEnvironmentHostCommandInput extends DeleteEnvironmentHostRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentHostCommand}.
 */
export interface DeleteEnvironmentHostCommandOutput extends DeleteEnvironmentHostResponse, __MetadataBearer {}

/**
 * <p>Deletes a host from an Amazon EVS environment.</p> <note> <p>Before deleting a host, you must unassign and decommission the host from within the SDDC Manager user interface. Not doing so could impact the availability of your virtual machines or result in data loss.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, DeleteEnvironmentHostCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, DeleteEnvironmentHostCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // DeleteEnvironmentHostRequest
 *   clientToken: "STRING_VALUE",
 *   environmentId: "STRING_VALUE", // required
 *   hostName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentHostCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEnvironmentHostResponse
 * //   environmentSummary: { // EnvironmentSummary
 * //     environmentId: "STRING_VALUE",
 * //     environmentName: "STRING_VALUE",
 * //     vcfVersion: "VCF-5.2.1",
 * //     environmentStatus: "PASSED" || "FAILED" || "UNKNOWN",
 * //     environmentState: "CREATING" || "CREATED" || "DELETING" || "DELETED" || "CREATE_FAILED",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     environmentArn: "STRING_VALUE",
 * //   },
 * //   host: { // Host
 * //     hostName: "STRING_VALUE",
 * //     ipAddress: "STRING_VALUE",
 * //     keyName: "STRING_VALUE",
 * //     instanceType: "i4i.metal",
 * //     placementGroupId: "STRING_VALUE",
 * //     dedicatedHostId: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     hostState: "CREATING" || "CREATED" || "UPDATING" || "DELETING" || "DELETED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //     stateDetails: "STRING_VALUE",
 * //     ec2InstanceId: "STRING_VALUE",
 * //     networkInterfaces: [ // NetworkInterfaceList
 * //       { // NetworkInterface
 * //         networkInterfaceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEnvironmentHostCommandInput - {@link DeleteEnvironmentHostCommandInput}
 * @returns {@link DeleteEnvironmentHostCommandOutput}
 * @see {@link DeleteEnvironmentHostCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentHostCommandOutput} for command's `response` shape.
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
export class DeleteEnvironmentHostCommand extends $Command
  .classBuilder<
    DeleteEnvironmentHostCommandInput,
    DeleteEnvironmentHostCommandOutput,
    EvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticVMwareService", "DeleteEnvironmentHost", {})
  .n("EvsClient", "DeleteEnvironmentHostCommand")
  .sc(DeleteEnvironmentHost)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentHostRequest;
      output: DeleteEnvironmentHostResponse;
    };
    sdk: {
      input: DeleteEnvironmentHostCommandInput;
      output: DeleteEnvironmentHostCommandOutput;
    };
  };
}
