// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { StartArchiveExportRequest, StartArchiveExportResponse } from "../models/models_0";
import { de_StartArchiveExportCommand, se_StartArchiveExportCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartArchiveExportCommand}.
 */
export interface StartArchiveExportCommandInput extends StartArchiveExportRequest {}
/**
 * @public
 *
 * The output of {@link StartArchiveExportCommand}.
 */
export interface StartArchiveExportCommandOutput extends StartArchiveExportResponse, __MetadataBearer {}

/**
 * <p>Initiates an export of emails from the specified archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, StartArchiveExportCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, StartArchiveExportCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // StartArchiveExportRequest
 *   ArchiveId: "STRING_VALUE", // required
 *   Filters: { // ArchiveFilters
 *     Include: [ // ArchiveFilterConditions
 *       { // ArchiveFilterCondition Union: only one key present
 *         StringExpression: { // ArchiveStringExpression
 *           Evaluate: { // ArchiveStringToEvaluate Union: only one key present
 *             Attribute: "TO" || "FROM" || "CC" || "SUBJECT",
 *           },
 *           Operator: "CONTAINS", // required
 *           Values: [ // StringValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         BooleanExpression: { // ArchiveBooleanExpression
 *           Evaluate: { // ArchiveBooleanToEvaluate Union: only one key present
 *             Attribute: "HAS_ATTACHMENTS",
 *           },
 *           Operator: "IS_TRUE" || "IS_FALSE", // required
 *         },
 *       },
 *     ],
 *     Unless: [
 *       {//  Union: only one key present
 *         StringExpression: {
 *           Evaluate: {//  Union: only one key present
 *             Attribute: "TO" || "FROM" || "CC" || "SUBJECT",
 *           },
 *           Operator: "CONTAINS", // required
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         BooleanExpression: {
 *           Evaluate: {//  Union: only one key present
 *             Attribute: "HAS_ATTACHMENTS",
 *           },
 *           Operator: "IS_TRUE" || "IS_FALSE", // required
 *         },
 *       },
 *     ],
 *   },
 *   FromTimestamp: new Date("TIMESTAMP"), // required
 *   ToTimestamp: new Date("TIMESTAMP"), // required
 *   MaxResults: Number("int"),
 *   ExportDestinationConfiguration: { // ExportDestinationConfiguration Union: only one key present
 *     S3: { // S3ExportDestinationConfiguration
 *       S3Location: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new StartArchiveExportCommand(input);
 * const response = await client.send(command);
 * // { // StartArchiveExportResponse
 * //   ExportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartArchiveExportCommandInput - {@link StartArchiveExportCommandInput}
 * @returns {@link StartArchiveExportCommandOutput}
 * @see {@link StartArchiveExportCommandInput} for command's `input` shape.
 * @see {@link StartArchiveExportCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when an operation exceeds a predefined service quota or limit.</p>
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
 * @public
 */
export class StartArchiveExportCommand extends $Command
  .classBuilder<
    StartArchiveExportCommandInput,
    StartArchiveExportCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "StartArchiveExport", {})
  .n("MailManagerClient", "StartArchiveExportCommand")
  .f(void 0, void 0)
  .ser(se_StartArchiveExportCommand)
  .de(de_StartArchiveExportCommand)
  .build() {}
