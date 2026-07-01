// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetNotebookExportInput, GetNotebookExportOutput } from "../models/models_1";
import { GetNotebookExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetNotebookExportCommand}.
 */
export interface GetNotebookExportCommandInput extends GetNotebookExportInput {}
/**
 * @public
 *
 * The output of {@link GetNotebookExportCommand}.
 */
export interface GetNotebookExportCommandOutput extends GetNotebookExportOutput, __MetadataBearer {}

/**
 * <p>Gets the details of a notebook export in Amazon SageMaker Unified Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetNotebookExportCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetNotebookExportCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetNotebookExportInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetNotebookExportCommand(input);
 * const response = await client.send(command);
 * // { // GetNotebookExportOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   owningProjectId: "STRING_VALUE", // required
 * //   notebookId: "STRING_VALUE", // required
 * //   fileFormat: "PDF" || "IPYNB", // required
 * //   status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //   outputLocation: { // OutputLocation Union: only one key present
 * //     s3: { // S3Destination
 * //       uri: "STRING_VALUE",
 * //     },
 * //   },
 * //   error: { // NotebookExportError
 * //     message: "STRING_VALUE", // required
 * //   },
 * //   completedAt: new Date("TIMESTAMP"),
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetNotebookExportCommandInput - {@link GetNotebookExportCommandInput}
 * @returns {@link GetNotebookExportCommandOutput}
 * @see {@link GetNotebookExportCommandInput} for command's `input` shape.
 * @see {@link GetNotebookExportCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class GetNotebookExportCommand extends command<GetNotebookExportCommandInput, GetNotebookExportCommandOutput>(
  _ep0,
  _mw0,
  "GetNotebookExport",
  GetNotebookExport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNotebookExportInput;
      output: GetNotebookExportOutput;
    };
    sdk: {
      input: GetNotebookExportCommandInput;
      output: GetNotebookExportCommandOutput;
    };
  };
}
