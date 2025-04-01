// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { GetArchiveExportRequest, GetArchiveExportResponse } from "../models/models_0";
import { de_GetArchiveExportCommand, se_GetArchiveExportCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetArchiveExportCommand}.
 */
export interface GetArchiveExportCommandInput extends GetArchiveExportRequest {}
/**
 * @public
 *
 * The output of {@link GetArchiveExportCommand}.
 */
export interface GetArchiveExportCommandOutput extends GetArchiveExportResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details and current status of a specific email archive export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetArchiveExportCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetArchiveExportCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // GetArchiveExportRequest
 *   ExportId: "STRING_VALUE", // required
 * };
 * const command = new GetArchiveExportCommand(input);
 * const response = await client.send(command);
 * // { // GetArchiveExportResponse
 * //   ArchiveId: "STRING_VALUE",
 * //   Filters: { // ArchiveFilters
 * //     Include: [ // ArchiveFilterConditions
 * //       { // ArchiveFilterCondition Union: only one key present
 * //         StringExpression: { // ArchiveStringExpression
 * //           Evaluate: { // ArchiveStringToEvaluate Union: only one key present
 * //             Attribute: "TO" || "FROM" || "CC" || "SUBJECT" || "ENVELOPE_TO" || "ENVELOPE_FROM",
 * //           },
 * //           Operator: "CONTAINS", // required
 * //           Values: [ // StringValueList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         BooleanExpression: { // ArchiveBooleanExpression
 * //           Evaluate: { // ArchiveBooleanToEvaluate Union: only one key present
 * //             Attribute: "HAS_ATTACHMENTS",
 * //           },
 * //           Operator: "IS_TRUE" || "IS_FALSE", // required
 * //         },
 * //       },
 * //     ],
 * //     Unless: [
 * //       {//  Union: only one key present
 * //         StringExpression: {
 * //           Evaluate: {//  Union: only one key present
 * //             Attribute: "TO" || "FROM" || "CC" || "SUBJECT" || "ENVELOPE_TO" || "ENVELOPE_FROM",
 * //           },
 * //           Operator: "CONTAINS", // required
 * //           Values: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         BooleanExpression: {
 * //           Evaluate: {//  Union: only one key present
 * //             Attribute: "HAS_ATTACHMENTS",
 * //           },
 * //           Operator: "IS_TRUE" || "IS_FALSE", // required
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   FromTimestamp: new Date("TIMESTAMP"),
 * //   ToTimestamp: new Date("TIMESTAMP"),
 * //   MaxResults: Number("int"),
 * //   ExportDestinationConfiguration: { // ExportDestinationConfiguration Union: only one key present
 * //     S3: { // S3ExportDestinationConfiguration
 * //       S3Location: "STRING_VALUE",
 * //     },
 * //   },
 * //   Status: { // ExportStatus
 * //     SubmissionTimestamp: new Date("TIMESTAMP"),
 * //     CompletionTimestamp: new Date("TIMESTAMP"),
 * //     State: "QUEUED" || "PREPROCESSING" || "PROCESSING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //     ErrorMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetArchiveExportCommandInput - {@link GetArchiveExportCommandInput}
 * @returns {@link GetArchiveExportCommandOutput}
 * @see {@link GetArchiveExportCommandInput} for command's `input` shape.
 * @see {@link GetArchiveExportCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class GetArchiveExportCommand extends $Command
  .classBuilder<
    GetArchiveExportCommandInput,
    GetArchiveExportCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "GetArchiveExport", {})
  .n("MailManagerClient", "GetArchiveExportCommand")
  .f(void 0, void 0)
  .ser(se_GetArchiveExportCommand)
  .de(de_GetArchiveExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetArchiveExportRequest;
      output: GetArchiveExportResponse;
    };
    sdk: {
      input: GetArchiveExportCommandInput;
      output: GetArchiveExportCommandOutput;
    };
  };
}
