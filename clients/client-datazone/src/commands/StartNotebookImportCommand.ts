// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartNotebookImportInput, StartNotebookImportOutput } from "../models/models_2";
import { StartNotebookImport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartNotebookImportCommand}.
 */
export interface StartNotebookImportCommandInput extends StartNotebookImportInput {}
/**
 * @public
 *
 * The output of {@link StartNotebookImportCommand}.
 */
export interface StartNotebookImportCommandOutput extends StartNotebookImportOutput, __MetadataBearer {}

/**
 * Starts a notebook import in Amazon SageMaker Unified Studio. This operation imports a notebook from an Amazon Simple Storage Service location into a project.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, StartNotebookImportCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, StartNotebookImportCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // StartNotebookImportInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   owningProjectIdentifier: "STRING_VALUE", // required
 *   sourceLocation: { // SourceLocation Union: only one key present
 *     s3: "STRING_VALUE",
 *     s3Files: { // S3FilesLocation
 *       bucket: "STRING_VALUE", // required
 *       fileList: [ // S3FileList // required
 *         { // S3File
 *           key: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   type: "DATA" || "SQL",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartNotebookImportCommand(input);
 * const response = await client.send(command);
 * // { // StartNotebookImportOutput
 * //   notebookId: "STRING_VALUE",
 * //   status: "ACTIVE" || "ARCHIVED" || "SYNC_IN_PROGRESS" || "SYNC_FAILED",
 * //   domainId: "STRING_VALUE",
 * //   owningProjectId: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   type: "DATA" || "SQL",
 * //   sourceLocation: { // SourceLocation Union: only one key present
 * //     s3: "STRING_VALUE",
 * //     s3Files: { // S3FilesLocation
 * //       bucket: "STRING_VALUE", // required
 * //       fileList: [ // S3FileList // required
 * //         { // S3File
 * //           key: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartNotebookImportCommandInput - {@link StartNotebookImportCommandInput}
 * @returns {@link StartNotebookImportCommandOutput}
 * @see {@link StartNotebookImportCommandInput} for command's `input` shape.
 * @see {@link StartNotebookImportCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class StartNotebookImportCommand extends command<StartNotebookImportCommandInput, StartNotebookImportCommandOutput>(
  _ep0,
  _mw0,
  "StartNotebookImport",
  StartNotebookImport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartNotebookImportInput;
      output: StartNotebookImportOutput;
    };
    sdk: {
      input: StartNotebookImportCommandInput;
      output: StartNotebookImportCommandOutput;
    };
  };
}
