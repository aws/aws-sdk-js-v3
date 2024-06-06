// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { CancelFindingsReportRequest, CancelFindingsReportResponse } from "../models/models_0";
import { de_CancelFindingsReportCommand, se_CancelFindingsReportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelFindingsReportCommand}.
 */
export interface CancelFindingsReportCommandInput extends CancelFindingsReportRequest {}
/**
 * @public
 *
 * The output of {@link CancelFindingsReportCommand}.
 */
export interface CancelFindingsReportCommandOutput extends CancelFindingsReportResponse, __MetadataBearer {}

/**
 * <p>Cancels the given findings report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, CancelFindingsReportCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, CancelFindingsReportCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // CancelFindingsReportRequest
 *   reportId: "STRING_VALUE", // required
 * };
 * const command = new CancelFindingsReportCommand(input);
 * const response = await client.send(command);
 * // { // CancelFindingsReportResponse
 * //   reportId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CancelFindingsReportCommandInput - {@link CancelFindingsReportCommandInput}
 * @returns {@link CancelFindingsReportCommandOutput}
 * @see {@link CancelFindingsReportCommandInput} for command's `input` shape.
 * @see {@link CancelFindingsReportCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class CancelFindingsReportCommand extends $Command
  .classBuilder<
    CancelFindingsReportCommandInput,
    CancelFindingsReportCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "CancelFindingsReport", {})
  .n("Inspector2Client", "CancelFindingsReportCommand")
  .f(void 0, void 0)
  .ser(se_CancelFindingsReportCommand)
  .de(de_CancelFindingsReportCommand)
  .build() {}
