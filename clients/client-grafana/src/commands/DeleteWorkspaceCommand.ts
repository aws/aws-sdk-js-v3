// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import type { DeleteWorkspaceRequest, DeleteWorkspaceResponse } from "../models/models_0";
import { DeleteWorkspace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkspaceCommand}.
 */
export interface DeleteWorkspaceCommandInput extends DeleteWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspaceCommand}.
 */
export interface DeleteWorkspaceCommandOutput extends DeleteWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon Managed Grafana workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DeleteWorkspaceCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DeleteWorkspaceCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // DeleteWorkspaceRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWorkspaceResponse
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
 * @param DeleteWorkspaceCommandInput - {@link DeleteWorkspaceCommandInput}
 * @returns {@link DeleteWorkspaceCommandOutput}
 * @see {@link DeleteWorkspaceCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
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
export class DeleteWorkspaceCommand extends $Command
  .classBuilder<
    DeleteWorkspaceCommandInput,
    DeleteWorkspaceCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGrafanaControlPlane", "DeleteWorkspace", {})
  .n("GrafanaClient", "DeleteWorkspaceCommand")
  .sc(DeleteWorkspace$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkspaceRequest;
      output: DeleteWorkspaceResponse;
    };
    sdk: {
      input: DeleteWorkspaceCommandInput;
      output: DeleteWorkspaceCommandOutput;
    };
  };
}
