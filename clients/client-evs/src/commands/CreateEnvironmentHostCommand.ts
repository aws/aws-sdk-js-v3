// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEnvironmentHostRequest, CreateEnvironmentHostResponse } from "../models/models_0";
import { CreateEnvironmentHost$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentHostCommand}.
 */
export interface CreateEnvironmentHostCommandInput extends CreateEnvironmentHostRequest {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentHostCommand}.
 */
export interface CreateEnvironmentHostCommandOutput extends CreateEnvironmentHostResponse, __MetadataBearer {}

/**
 * <p>Creates an ESX host and adds it to an Amazon EVS environment.</p> <p>This action can only be used after the Amazon EVS environment is deployed.</p> <p>You can use the <code>dedicatedHostId</code> parameter to specify an Amazon EC2 Dedicated Host for ESX host creation.</p> <p> You can use the <code>placementGroupId</code> parameter to specify a cluster or partition placement group to launch EC2 instances into.</p> <note> <p>If you don't specify an ESX version when adding hosts using <code>CreateEnvironmentHost</code> action, Amazon EVS automatically uses the default ESX version for your environment's VCF version. To find the available ESX versions for a particular VCF version, use the <code>GetVersions</code> action.</p> <p>You cannot use the <code>dedicatedHostId</code> and <code>placementGroupId</code> parameters together in the same <code>CreateEnvironmentHost</code> action. This results in a <code>ValidationException</code> response.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, CreateEnvironmentHostCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, CreateEnvironmentHostCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // CreateEnvironmentHostRequest
 *   clientToken: "STRING_VALUE",
 *   environmentId: "STRING_VALUE", // required
 *   host: { // HostInfoForCreate
 *     hostName: "STRING_VALUE", // required
 *     keyName: "STRING_VALUE", // required
 *     instanceType: "i4i.metal" || "i7i.metal-24xl", // required
 *     placementGroupId: "STRING_VALUE",
 *     dedicatedHostId: "STRING_VALUE",
 *   },
 *   esxVersion: "STRING_VALUE",
 * };
 * const command = new CreateEnvironmentHostCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentHostResponse
 * //   environmentSummary: { // EnvironmentSummary
 * //     environmentId: "STRING_VALUE",
 * //     environmentName: "STRING_VALUE",
 * //     vcfVersion: "VCF-5.2.1" || "VCF-5.2.2" || "SELF_DEPLOYED",
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
 * //     instanceType: "i4i.metal" || "i7i.metal-24xl",
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
 * @param CreateEnvironmentHostCommandInput - {@link CreateEnvironmentHostCommandInput}
 * @returns {@link CreateEnvironmentHostCommandOutput}
 * @see {@link CreateEnvironmentHostCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentHostCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The operation could not be performed because the service is throttling requests. This exception is thrown when the service endpoint receives too many concurrent requests.</p>
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
export class CreateEnvironmentHostCommand extends command<CreateEnvironmentHostCommandInput, CreateEnvironmentHostCommandOutput>(
  _ep0,
  _mw0,
  "CreateEnvironmentHost",
  CreateEnvironmentHost$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentHostRequest;
      output: CreateEnvironmentHostResponse;
    };
    sdk: {
      input: CreateEnvironmentHostCommandInput;
      output: CreateEnvironmentHostCommandOutput;
    };
  };
}
