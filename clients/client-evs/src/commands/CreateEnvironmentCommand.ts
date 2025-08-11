// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import { CreateEnvironmentRequest, CreateEnvironmentResponse } from "../models/models_0";
import { de_CreateEnvironmentCommand, se_CreateEnvironmentCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandInput extends CreateEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandOutput extends CreateEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon EVS environment that runs VCF software, such as SDDC Manager, NSX Manager, and vCenter Server.</p> <p>During environment creation, Amazon EVS performs validations on DNS settings, provisions VLAN subnets and hosts, and deploys the supplied version of VCF.</p> <p>It can take several hours to create an environment. After the deployment completes, you can configure VCF in the vSphere user interface according to your needs.</p> <note> <p>You cannot use the <code>dedicatedHostId</code> and <code>placementGroupId</code> parameters together in the same <code>CreateEnvironment</code> action. This results in a <code>ValidationException</code> response.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, CreateEnvironmentCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, CreateEnvironmentCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * const client = new EvsClient(config);
 * const input = { // CreateEnvironmentRequest
 *   clientToken: "STRING_VALUE",
 *   environmentName: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   serviceAccessSecurityGroups: { // ServiceAccessSecurityGroups
 *     securityGroups: [ // SecurityGroups
 *       "STRING_VALUE",
 *     ],
 *   },
 *   vpcId: "STRING_VALUE", // required
 *   serviceAccessSubnetId: "STRING_VALUE", // required
 *   vcfVersion: "VCF-5.2.1", // required
 *   termsAccepted: true || false, // required
 *   licenseInfo: [ // LicenseInfoList // required
 *     { // LicenseInfo
 *       solutionKey: "STRING_VALUE", // required
 *       vsanKey: "STRING_VALUE", // required
 *     },
 *   ],
 *   initialVlans: { // InitialVlans
 *     vmkManagement: { // InitialVlanInfo
 *       cidr: "STRING_VALUE", // required
 *     },
 *     vmManagement: {
 *       cidr: "STRING_VALUE", // required
 *     },
 *     vMotion: {
 *       cidr: "STRING_VALUE", // required
 *     },
 *     vSan: {
 *       cidr: "STRING_VALUE", // required
 *     },
 *     vTep: {
 *       cidr: "STRING_VALUE", // required
 *     },
 *     edgeVTep: "<InitialVlanInfo>", // required
 *     nsxUplink: "<InitialVlanInfo>", // required
 *     hcx: "<InitialVlanInfo>", // required
 *     expansionVlan1: "<InitialVlanInfo>", // required
 *     expansionVlan2: "<InitialVlanInfo>", // required
 *   },
 *   hosts: [ // HostInfoForCreateList // required
 *     { // HostInfoForCreate
 *       hostName: "STRING_VALUE", // required
 *       keyName: "STRING_VALUE", // required
 *       instanceType: "i4i.metal", // required
 *       placementGroupId: "STRING_VALUE",
 *       dedicatedHostId: "STRING_VALUE",
 *     },
 *   ],
 *   connectivityInfo: { // ConnectivityInfo
 *     privateRouteServerPeerings: [ // RouteServerPeeringList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   vcfHostnames: { // VcfHostnames
 *     vCenter: "STRING_VALUE", // required
 *     nsx: "STRING_VALUE", // required
 *     nsxManager1: "STRING_VALUE", // required
 *     nsxManager2: "STRING_VALUE", // required
 *     nsxManager3: "STRING_VALUE", // required
 *     nsxEdge1: "STRING_VALUE", // required
 *     nsxEdge2: "STRING_VALUE", // required
 *     sddcManager: "STRING_VALUE", // required
 *     cloudBuilder: "STRING_VALUE", // required
 *   },
 *   siteId: "STRING_VALUE", // required
 * };
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentResponse
 * //   environment: { // Environment
 * //     environmentId: "STRING_VALUE",
 * //     environmentState: "CREATING" || "CREATED" || "DELETING" || "DELETED" || "CREATE_FAILED",
 * //     stateDetails: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     environmentArn: "STRING_VALUE",
 * //     environmentName: "STRING_VALUE",
 * //     vpcId: "STRING_VALUE",
 * //     serviceAccessSubnetId: "STRING_VALUE",
 * //     vcfVersion: "VCF-5.2.1",
 * //     termsAccepted: true || false,
 * //     licenseInfo: [ // LicenseInfoList
 * //       { // LicenseInfo
 * //         solutionKey: "STRING_VALUE", // required
 * //         vsanKey: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     siteId: "STRING_VALUE",
 * //     environmentStatus: "PASSED" || "FAILED" || "UNKNOWN",
 * //     checks: [ // ChecksList
 * //       { // Check
 * //         type: "KEY_REUSE" || "KEY_COVERAGE" || "REACHABILITY" || "HOST_COUNT",
 * //         result: "PASSED" || "FAILED" || "UNKNOWN",
 * //         impairedSince: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     connectivityInfo: { // ConnectivityInfo
 * //       privateRouteServerPeerings: [ // RouteServerPeeringList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     vcfHostnames: { // VcfHostnames
 * //       vCenter: "STRING_VALUE", // required
 * //       nsx: "STRING_VALUE", // required
 * //       nsxManager1: "STRING_VALUE", // required
 * //       nsxManager2: "STRING_VALUE", // required
 * //       nsxManager3: "STRING_VALUE", // required
 * //       nsxEdge1: "STRING_VALUE", // required
 * //       nsxEdge2: "STRING_VALUE", // required
 * //       sddcManager: "STRING_VALUE", // required
 * //       cloudBuilder: "STRING_VALUE", // required
 * //     },
 * //     kmsKeyId: "STRING_VALUE",
 * //     serviceAccessSecurityGroups: { // ServiceAccessSecurityGroups
 * //       securityGroups: [ // SecurityGroups
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     credentials: [ // SecretList
 * //       { // Secret
 * //         secretArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEnvironmentCommandInput - {@link CreateEnvironmentCommandInput}
 * @returns {@link CreateEnvironmentCommandOutput}
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
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
export class CreateEnvironmentCommand extends $Command
  .classBuilder<
    CreateEnvironmentCommandInput,
    CreateEnvironmentCommandOutput,
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
  .s("AmazonElasticVMwareService", "CreateEnvironment", {})
  .n("EvsClient", "CreateEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_CreateEnvironmentCommand)
  .de(de_CreateEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentRequest;
      output: CreateEnvironmentResponse;
    };
    sdk: {
      input: CreateEnvironmentCommandInput;
      output: CreateEnvironmentCommandOutput;
    };
  };
}
