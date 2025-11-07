// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import { DeleteEnvironmentRequest, DeleteEnvironmentResponse } from "../models/models_0";
import { DeleteEnvironment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandInput extends DeleteEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandOutput extends DeleteEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon EVS environment.</p> <p>Amazon EVS environments will only be enabled for deletion once the hosts are deleted. You can delete hosts using the <code>DeleteEnvironmentHost</code> action.</p> <p>Environment deletion also deletes the associated Amazon EVS VLAN subnets and Amazon Web Services Secrets Manager secrets that Amazon EVS created. Amazon Web Services resources that you create are not deleted. These resources may continue to incur costs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, DeleteEnvironmentCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, DeleteEnvironmentCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // DeleteEnvironmentRequest
 *   clientToken: "STRING_VALUE",
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEnvironmentResponse
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
 * @param DeleteEnvironmentCommandInput - {@link DeleteEnvironmentCommandInput}
 * @returns {@link DeleteEnvironmentCommandOutput}
 * @see {@link DeleteEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentCommandOutput} for command's `response` shape.
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
export class DeleteEnvironmentCommand extends $Command
  .classBuilder<
    DeleteEnvironmentCommandInput,
    DeleteEnvironmentCommandOutput,
    EvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticVMwareService", "DeleteEnvironment", {})
  .n("EvsClient", "DeleteEnvironmentCommand")
  .sc(DeleteEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentRequest;
      output: DeleteEnvironmentResponse;
    };
    sdk: {
      input: DeleteEnvironmentCommandInput;
      output: DeleteEnvironmentCommandOutput;
    };
  };
}
