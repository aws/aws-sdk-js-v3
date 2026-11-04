// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartNotebookExportInput, StartNotebookExportOutput } from "../models/models_2";
import { StartNotebookExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartNotebookExportCommand}.
 */
export interface StartNotebookExportCommandInput extends StartNotebookExportInput {}
/**
 * @public
 *
 * The output of {@link StartNotebookExportCommand}.
 */
export interface StartNotebookExportCommandOutput extends StartNotebookExportOutput, __MetadataBearer {}

/**
 * Starts a notebook export in Amazon SageMaker Unified Studio. This operation exports a notebook to a specified file format and stores the output in Amazon Simple Storage Service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, StartNotebookExportCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, StartNotebookExportCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // StartNotebookExportInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   notebookIdentifier: "STRING_VALUE", // required
 *   owningProjectIdentifier: "STRING_VALUE", // required
 *   fileFormat: "PDF" || "IPYNB", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartNotebookExportCommand(input);
 * const response = await client.send(command);
 * // { // StartNotebookExportOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   owningProjectId: "STRING_VALUE", // required
 * //   notebookId: "STRING_VALUE", // required
 * //   fileFormat: "PDF" || "IPYNB", // required
 * //   status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartNotebookExportCommandInput - {@link StartNotebookExportCommandInput}
 * @returns {@link StartNotebookExportCommandOutput}
 * @see {@link StartNotebookExportCommandInput} for command's `input` shape.
 * @see {@link StartNotebookExportCommandOutput} for command's `response` shape.
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
export class StartNotebookExportCommand extends command<StartNotebookExportCommandInput, StartNotebookExportCommandOutput>(
  _ep0,
  _mw0,
  "StartNotebookExport",
  StartNotebookExport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartNotebookExportInput;
      output: StartNotebookExportOutput;
    };
    sdk: {
      input: StartNotebookExportCommandInput;
      output: StartNotebookExportCommandOutput;
    };
  };
}
