// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartNotebookExportInput, StartNotebookExportOutput } from "../models/models_1";
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
 * <p>Starts a notebook export in Amazon SageMaker Unified Studio. This operation exports a notebook to a specified file format and stores the output in Amazon Simple Storage Service.</p>
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
