// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAnalysisLogExportInput, GetAnalysisLogExportOutput } from "../models/models_1";
import { GetAnalysisLogExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAnalysisLogExportCommand}.
 */
export interface GetAnalysisLogExportCommandInput extends GetAnalysisLogExportInput {}
/**
 * @public
 *
 * The output of {@link GetAnalysisLogExportCommand}.
 */
export interface GetAnalysisLogExportCommandOutput extends GetAnalysisLogExportOutput, __MetadataBearer {}

/**
 * <p>Returns information about an analysis log export, including its current status and, if the export failed, the reason for the failure.</p> <p>Poll this operation until the <code>status</code> is <code>SUCCESS</code> or <code>FAILED</code>. An export can't be canceled after it starts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetAnalysisLogExportCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetAnalysisLogExportCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetAnalysisLogExportInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   analysisLogExportIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetAnalysisLogExportCommand(input);
 * const response = await client.send(command);
 * // { // GetAnalysisLogExportOutput
 * //   analysisLogExport: { // AnalysisLogExport
 * //     analysisLogExportId: "STRING_VALUE", // required
 * //     analysisId: "STRING_VALUE", // required
 * //     analysisType: "PROTECTED_QUERY", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     status: "IN_PROGRESS" || "SUCCESS" || "FAILED", // required
 * //     resultConfiguration: { // AnalysisLogExportResultConfiguration
 * //       outputConfiguration: { // AnalysisLogExportOutputConfiguration
 * //         s3: { // AnalysisLogExportS3OutputConfiguration
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     error: { // AnalysisLogExportError
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAnalysisLogExportCommandInput - {@link GetAnalysisLogExportCommandInput}
 * @returns {@link GetAnalysisLogExportCommandOutput}
 * @see {@link GetAnalysisLogExportCommandInput} for command's `input` shape.
 * @see {@link GetAnalysisLogExportCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class GetAnalysisLogExportCommand extends command<GetAnalysisLogExportCommandInput, GetAnalysisLogExportCommandOutput>(
  _ep0,
  _mw0,
  "GetAnalysisLogExport",
  GetAnalysisLogExport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAnalysisLogExportInput;
      output: GetAnalysisLogExportOutput;
    };
    sdk: {
      input: GetAnalysisLogExportCommandInput;
      output: GetAnalysisLogExportCommandOutput;
    };
  };
}
