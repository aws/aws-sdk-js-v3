// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStandbyWorkspacesRequest, CreateStandbyWorkspacesResult } from "../models/models_0";
import { de_CreateStandbyWorkspacesCommand, se_CreateStandbyWorkspacesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a standby WorkSpace in a secondary Region.</p>
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
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class CreateStandbyWorkspacesCommand extends $Command
  .classBuilder<
    CreateStandbyWorkspacesCommandInput,
    CreateStandbyWorkspacesCommandOutput,
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
  .s("WorkspacesService", "CreateStandbyWorkspaces", {})
  .n("WorkSpacesClient", "CreateStandbyWorkspacesCommand")
  .f(void 0, void 0)
  .ser(se_CreateStandbyWorkspacesCommand)
  .de(de_CreateStandbyWorkspacesCommand)
  .build() {
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
