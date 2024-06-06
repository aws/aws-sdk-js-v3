// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { StopArchiveExportRequest, StopArchiveExportResponse } from "../models/models_0";
import { de_StopArchiveExportCommand, se_StopArchiveExportCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopArchiveExportCommand}.
 */
export interface StopArchiveExportCommandInput extends StopArchiveExportRequest {}
/**
 * @public
 *
 * The output of {@link StopArchiveExportCommand}.
 */
export interface StopArchiveExportCommandOutput extends StopArchiveExportResponse, __MetadataBearer {}

/**
 * <p>Stops an in-progress export of emails from an archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, StopArchiveExportCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, StopArchiveExportCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // StopArchiveExportRequest
 *   ExportId: "STRING_VALUE", // required
 * };
 * const command = new StopArchiveExportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopArchiveExportCommandInput - {@link StopArchiveExportCommandInput}
 * @returns {@link StopArchiveExportCommandOutput}
 * @see {@link StopArchiveExportCommandInput} for command's `input` shape.
 * @see {@link StopArchiveExportCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StopArchiveExportCommand extends $Command
  .classBuilder<
    StopArchiveExportCommandInput,
    StopArchiveExportCommandOutput,
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
  .s("MailManagerSvc", "StopArchiveExport", {})
  .n("MailManagerClient", "StopArchiveExportCommand")
  .f(void 0, void 0)
  .ser(se_StopArchiveExportCommand)
  .de(de_StopArchiveExportCommand)
  .build() {}
