// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterWorkspaceDirectoryRequest, RegisterWorkspaceDirectoryResult } from "../models/models_0";
import { RegisterWorkspaceDirectory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see [Creating the workspaces_DefaultRole Role](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RegisterWorkspaceDirectoryCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RegisterWorkspaceDirectoryCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // RegisterWorkspaceDirectoryRequest
 *   DirectoryId: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIds
 *     "STRING_VALUE",
 *   ],
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
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The state of the resource is not valid for this operation.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link UnsupportedNetworkConfigurationException} (client fault)
 *
 * The configuration of this network is not supported for this operation, or your network configuration conflicts with the Amazon WorkSpaces management network IP range. For more information, see [Configure a VPC for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html).
 *
 * @throws {@link WorkspacesDefaultRoleNotFoundException} (client fault)
 *
 * The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see [Creating the workspaces_DefaultRole Role](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role).
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class RegisterWorkspaceDirectoryCommand extends command<RegisterWorkspaceDirectoryCommandInput, RegisterWorkspaceDirectoryCommandOutput>(
  _ep0,
  _mw0,
  "RegisterWorkspaceDirectory",
  RegisterWorkspaceDirectory$
) {
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
