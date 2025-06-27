// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelExportJobRequest, CancelExportJobResponse } from "../models/models_0";
import { de_CancelExportJobCommand, se_CancelExportJobCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelExportJobCommand}.
 */
export interface CancelExportJobCommandInput extends CancelExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelExportJobCommand}.
 */
export interface CancelExportJobCommandOutput extends CancelExportJobResponse, __MetadataBearer {}

/**
 * <p>Cancels an export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CancelExportJobCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CancelExportJobCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // CancelExportJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new CancelExportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelExportJobCommandInput - {@link CancelExportJobCommandInput}
 * @returns {@link CancelExportJobCommandOutput}
 * @see {@link CancelExportJobCommandInput} for command's `input` shape.
 * @see {@link CancelExportJobCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @example Cancel export job
 * ```javascript
 * // Cancels the export job with ID ef28cf62-9d8e-4b60-9283-b09816c99a99
 * const input = {
 *   JobId: "ef28cf62-9d8e-4b60-9283-b09816c99a99"
 * };
 * const command = new CancelExportJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CancelExportJobCommand extends $Command
  .classBuilder<
    CancelExportJobCommandInput,
    CancelExportJobCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "CancelExportJob", {})
  .n("SESv2Client", "CancelExportJobCommand")
  .f(void 0, void 0)
  .ser(se_CancelExportJobCommand)
  .de(de_CancelExportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelExportJobRequest;
      output: {};
    };
    sdk: {
      input: CancelExportJobCommandInput;
      output: CancelExportJobCommandOutput;
    };
  };
}
