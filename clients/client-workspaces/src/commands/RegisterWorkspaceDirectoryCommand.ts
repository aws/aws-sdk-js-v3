// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterWorkspaceDirectoryRequest, RegisterWorkspaceDirectoryResult } from "../models/models_1";
import { de_RegisterWorkspaceDirectoryCommand, se_RegisterWorkspaceDirectoryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterWorkspaceDirectoryCommand}.
 */
export interface RegisterWorkspaceDirectoryCommandInput extends RegisterWorkspaceDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link RegisterWorkspaceDirectoryCommand}.
 */
export interface RegisterWorkspaceDirectoryCommandOutput extends RegisterWorkspaceDirectoryResult, __MetadataBearer {}

/**
 * <p>Registers the specified directory. This operation is asynchronous and returns before the
 *          WorkSpace directory is registered. If this is the first time you are registering a
 *          directory, you will need to create the workspaces_DefaultRole role before you can register
 *          a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">
 *             Creating the workspaces_DefaultRole Role</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RegisterWorkspaceDirectoryCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RegisterWorkspaceDirectoryCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // RegisterWorkspaceDirectoryRequest
 *   DirectoryId: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIds
 *     "STRING_VALUE",
 *   ],
 *   EnableWorkDocs: true || false,
 *   EnableSelfService: true || false,
 *   Tenancy: "DEDICATED" || "SHARED",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   WorkspaceDirectoryName: "STRING_VALUE",
 *   WorkspaceDirectoryDescription: "STRING_VALUE",
 *   UserIdentityType: "CUSTOMER_MANAGED" || "AWS_DIRECTORY_SERVICE" || "AWS_IAM_IDENTITY_CENTER",
 *   IdcInstanceArn: "STRING_VALUE",
 *   MicrosoftEntraConfig: { // MicrosoftEntraConfig
 *     TenantId: "STRING_VALUE",
 *     ApplicationConfigSecretArn: "STRING_VALUE",
 *   },
 *   WorkspaceType: "PERSONAL" || "POOLS",
 *   ActiveDirectoryConfig: { // ActiveDirectoryConfig
 *     DomainName: "STRING_VALUE", // required
 *     ServiceAccountSecretArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new RegisterWorkspaceDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // RegisterWorkspaceDirectoryResult
 * //   DirectoryId: "STRING_VALUE",
 * //   State: "REGISTERING" || "REGISTERED" || "DEREGISTERING" || "DEREGISTERED" || "ERROR",
 * // };
 *
 * ```
 *
 * @param RegisterWorkspaceDirectoryCommandInput - {@link RegisterWorkspaceDirectoryCommandInput}
 * @returns {@link RegisterWorkspaceDirectoryCommandOutput}
 * @see {@link RegisterWorkspaceDirectoryCommandInput} for command's `input` shape.
 * @see {@link RegisterWorkspaceDirectoryCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link UnsupportedNetworkConfigurationException} (client fault)
 *  <p>The configuration of this network is not supported for this operation, or your network configuration
 *          conflicts with the Amazon WorkSpaces management network IP range. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
 *             Configure a VPC for Amazon WorkSpaces</a>.</p>
 *
 * @throws {@link WorkspacesDefaultRoleNotFoundException} (client fault)
 *  <p>The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you
 *          will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">Creating the workspaces_DefaultRole Role</a>.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class RegisterWorkspaceDirectoryCommand extends $Command
  .classBuilder<
    RegisterWorkspaceDirectoryCommandInput,
    RegisterWorkspaceDirectoryCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "RegisterWorkspaceDirectory", {})
  .n("WorkSpacesClient", "RegisterWorkspaceDirectoryCommand")
  .f(void 0, void 0)
  .ser(se_RegisterWorkspaceDirectoryCommand)
  .de(de_RegisterWorkspaceDirectoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterWorkspaceDirectoryRequest;
      output: RegisterWorkspaceDirectoryResult;
    };
    sdk: {
      input: RegisterWorkspaceDirectoryCommandInput;
      output: RegisterWorkspaceDirectoryCommandOutput;
    };
  };
}
