// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartNotebookSyncInput, StartNotebookSyncOutput } from "../models/models_2";
import { StartNotebookSync$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartNotebookSyncCommand}.
 */
export interface StartNotebookSyncCommandInput extends StartNotebookSyncInput {}
/**
 * @public
 *
 * The output of {@link StartNotebookSyncCommand}.
 */
export interface StartNotebookSyncCommandOutput extends StartNotebookSyncOutput, __MetadataBearer {}

/**
 * <p>Starts a notebook sync in Amazon SageMaker Unified Studio. This operation syncs a notebook from a Git repository into a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, StartNotebookSyncCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, StartNotebookSyncCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // StartNotebookSyncInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   owningProjectIdentifier: "STRING_VALUE", // required
 *   sourceLocation: { // SourceLocation Union: only one key present
 *     s3: "STRING_VALUE",
 *   },
 *   gitMetadata: { // GitMetadata
 *     connectionId: "STRING_VALUE", // required
 *     repository: "STRING_VALUE", // required
 *     branch: "STRING_VALUE", // required
 *     commitHash: "STRING_VALUE", // required
 *     fileName: "STRING_VALUE",
 *     committedAt: new Date("TIMESTAMP"),
 *     commitMessage: "STRING_VALUE",
 *   },
 *   notebookId: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartNotebookSyncCommand(input);
 * const response = await client.send(command);
 * // { // StartNotebookSyncOutput
 * //   notebookId: "STRING_VALUE",
 * //   status: "ACTIVE" || "ARCHIVED" || "SYNC_IN_PROGRESS" || "SYNC_FAILED",
 * //   domainId: "STRING_VALUE",
 * //   owningProjectId: "STRING_VALUE",
 * //   sourceLocation: { // SourceLocation Union: only one key present
 * //     s3: "STRING_VALUE",
 * //   },
 * //   gitMetadata: { // GitMetadata
 * //     connectionId: "STRING_VALUE", // required
 * //     repository: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //     commitHash: "STRING_VALUE", // required
 * //     fileName: "STRING_VALUE",
 * //     committedAt: new Date("TIMESTAMP"),
 * //     commitMessage: "STRING_VALUE",
 * //   },
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartNotebookSyncCommandInput - {@link StartNotebookSyncCommandInput}
 * @returns {@link StartNotebookSyncCommandOutput}
 * @see {@link StartNotebookSyncCommandInput} for command's `input` shape.
 * @see {@link StartNotebookSyncCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class StartNotebookSyncCommand extends command<StartNotebookSyncCommandInput, StartNotebookSyncCommandOutput>(
  _ep0,
  _mw0,
  "StartNotebookSync",
  StartNotebookSync$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartNotebookSyncInput;
      output: StartNotebookSyncOutput;
    };
    sdk: {
      input: StartNotebookSyncCommandInput;
      output: StartNotebookSyncCommandOutput;
    };
  };
}
