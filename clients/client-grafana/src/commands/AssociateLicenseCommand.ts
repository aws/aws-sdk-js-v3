// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateLicenseRequest, AssociateLicenseResponse } from "../models/models_0";
import { AssociateLicense$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Assigns a Grafana Enterprise license to a workspace. To upgrade, you must use `ENTERPRISE` for the `licenseType`, and pass in a valid Grafana Labs token for the `grafanaToken`. Upgrading to Grafana Enterprise incurs additional fees. For more information, see [Upgrade a workspace to Grafana Enterprise](https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html).
 *
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
 * //     ipAddressType: "STRING_VALUE",
 * //     kmsKeyId: "STRING_VALUE",
 * //     degradedWorkspaceReason: "STRING_VALUE",
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error while processing the request. Retry the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling. Retry the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The value of a parameter in the request caused an error.
 *
 * @throws {@link GrafanaServiceException}
 *
 * Base exception class for all service exceptions from Grafana service.
 *
 * @public
 */
export class AssociateLicenseCommand extends command<AssociateLicenseCommandInput, AssociateLicenseCommandOutput>(
  _ep0,
  _mw0,
  "AssociateLicense",
  AssociateLicense$
) {
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
