// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStandbyWorkspacesRequest, CreateStandbyWorkspacesResult } from "../models/models_0";
import { CreateStandbyWorkspaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStandbyWorkspacesCommand}.
 */
export interface CreateStandbyWorkspacesCommandInput extends CreateStandbyWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link CreateStandbyWorkspacesCommand}.
 */
export interface CreateStandbyWorkspacesCommandOutput extends CreateStandbyWorkspacesResult, __MetadataBearer {}

/**
 * Creates a standby WorkSpace in a secondary Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateStandbyWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateStandbyWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateStandbyWorkspacesRequest
 *   PrimaryRegion: "STRING_VALUE", // required
 *   StandbyWorkspaces: [ // StandbyWorkspacesList // required
 *     { // StandbyWorkspace
 *       PrimaryWorkspaceId: "STRING_VALUE", // required
 *       VolumeEncryptionKey: "STRING_VALUE",
 *       DirectoryId: "STRING_VALUE", // required
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *       DataReplication: "NO_REPLICATION" || "PRIMARY_AS_SOURCE",
 *     },
 *   ],
 * };
 * const command = new CreateStandbyWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // CreateStandbyWorkspacesResult
 * //   FailedStandbyRequests: [ // FailedCreateStandbyWorkspacesRequestList
 * //     { // FailedCreateStandbyWorkspacesRequest
 * //       StandbyWorkspaceRequest: { // StandbyWorkspace
 * //         PrimaryWorkspaceId: "STRING_VALUE", // required
 * //         VolumeEncryptionKey: "STRING_VALUE",
 * //         DirectoryId: "STRING_VALUE", // required
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         DataReplication: "NO_REPLICATION" || "PRIMARY_AS_SOURCE",
 * //       },
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PendingStandbyRequests: [ // PendingCreateStandbyWorkspacesRequestList
 * //     { // PendingCreateStandbyWorkspacesRequest
 * //       UserName: "STRING_VALUE",
 * //       DirectoryId: "STRING_VALUE",
 * //       State: "PENDING" || "AVAILABLE" || "IMPAIRED" || "UNHEALTHY" || "REBOOTING" || "STARTING" || "REBUILDING" || "RESTORING" || "MAINTENANCE" || "ADMIN_MAINTENANCE" || "TERMINATING" || "TERMINATED" || "SUSPENDED" || "UPDATING" || "STOPPING" || "STOPPED" || "ERROR",
 * //       WorkspaceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateStandbyWorkspacesCommandInput - {@link CreateStandbyWorkspacesCommandInput}
 * @returns {@link CreateStandbyWorkspacesCommandOutput}
 * @see {@link CreateStandbyWorkspacesCommandInput} for command's `input` shape.
 * @see {@link CreateStandbyWorkspacesCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class CreateStandbyWorkspacesCommand extends command<CreateStandbyWorkspacesCommandInput, CreateStandbyWorkspacesCommandOutput>(
  _ep0,
  _mw0,
  "CreateStandbyWorkspaces",
  CreateStandbyWorkspaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStandbyWorkspacesRequest;
      output: CreateStandbyWorkspacesResult;
    };
    sdk: {
      input: CreateStandbyWorkspacesCommandInput;
      output: CreateStandbyWorkspacesCommandOutput;
    };
  };
}
