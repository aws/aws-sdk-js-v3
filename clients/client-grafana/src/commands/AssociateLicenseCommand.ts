// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import type { AssociateLicenseRequest, AssociateLicenseResponse } from "../models/models_0";
import { AssociateLicense } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateLicenseCommand}.
 */
export interface AssociateLicenseCommandInput extends AssociateLicenseRequest {}
/**
 * @public
 *
 * The output of {@link AssociateLicenseCommand}.
 */
export interface AssociateLicenseCommandOutput extends AssociateLicenseResponse, __MetadataBearer {}

/**
 * <p>Assigns a Grafana Enterprise license to a workspace. To upgrade, you must use
 *             <code>ENTERPRISE</code> for the <code>licenseType</code>, and pass in a valid
 *             Grafana Labs token for the <code>grafanaToken</code>. Upgrading to Grafana Enterprise
 *             incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a
 *                 workspace to Grafana Enterprise</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, AssociateLicenseCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, AssociateLicenseCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // AssociateLicenseRequest
 *   workspaceId: "STRING_VALUE", // required
 *   licenseType: "STRING_VALUE", // required
 *   grafanaToken: "STRING_VALUE",
 * };
 * const command = new AssociateLicenseCommand(input);
 * const response = await client.send(command);
 * // { // AssociateLicenseResponse
 * //   workspace: { // WorkspaceDescription
 * //     accountAccessType: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"), // required
 * //     dataSources: [ // DataSourceTypesList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     description: "STRING_VALUE",
 * //     endpoint: "STRING_VALUE", // required
 * //     grafanaVersion: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     modified: new Date("TIMESTAMP"), // required
 * //     name: "STRING_VALUE",
 * //     organizationRoleName: "STRING_VALUE",
 * //     notificationDestinations: [ // NotificationDestinationsList
 * //       "STRING_VALUE",
 * //     ],
 * //     organizationalUnits: [ // OrganizationalUnitList
 * //       "STRING_VALUE",
 * //     ],
 * //     permissionType: "STRING_VALUE",
 * //     stackSetName: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     workspaceRoleArn: "STRING_VALUE",
 * //     licenseType: "STRING_VALUE",
 * //     freeTrialConsumed: true || false,
 * //     licenseExpiration: new Date("TIMESTAMP"),
 * //     freeTrialExpiration: new Date("TIMESTAMP"),
 * //     authentication: { // AuthenticationSummary
 * //       providers: [ // AuthenticationProviders // required
 * //         "STRING_VALUE",
 * //       ],
 * //       samlConfigurationStatus: "STRING_VALUE",
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     vpcConfiguration: { // VpcConfiguration
 * //       securityGroupIds: [ // SecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // SubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     networkAccessControl: { // NetworkAccessConfiguration
 * //       prefixListIds: [ // PrefixListIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       vpceIds: [ // VpceIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     grafanaToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateLicenseCommandInput - {@link AssociateLicenseCommandInput}
 * @returns {@link AssociateLicenseCommandOutput}
 * @see {@link AssociateLicenseCommandInput} for command's `input` shape.
 * @see {@link AssociateLicenseCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link GrafanaServiceException}
 * <p>Base exception class for all service exceptions from Grafana service.</p>
 *
 *
 * @public
 */
export class AssociateLicenseCommand extends $Command
  .classBuilder<
    AssociateLicenseCommandInput,
    AssociateLicenseCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGrafanaControlPlane", "AssociateLicense", {})
  .n("GrafanaClient", "AssociateLicenseCommand")
  .sc(AssociateLicense)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateLicenseRequest;
      output: AssociateLicenseResponse;
    };
    sdk: {
      input: AssociateLicenseCommandInput;
      output: AssociateLicenseCommandOutput;
    };
  };
}
