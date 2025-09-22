// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExportLensInput, ExportLensOutput } from "../models/models_0";
import { ExportLens } from "../schemas/schemas_3_Lens";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportLensCommand}.
 */
export interface ExportLensCommandInput extends ExportLensInput {}
/**
 * @public
 *
 * The output of {@link ExportLensCommand}.
 */
export interface ExportLensCommandOutput extends ExportLensOutput, __MetadataBearer {}

/**
 * <p>Export an existing lens.</p>
 *          <p>Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content)
 *             cannot be exported.</p>
 *          <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a>
 *             in the <i>Well-Architected Tool User Guide</i>.</p>
 *          <note>
 *             <p>
 *                <b>Disclaimer</b>
 *             </p>
 *             <p>Do not include or gather personal identifiable information (PII) of end users or
 *                 other identifiable individuals in or via your custom lenses. If your custom
 *                 lens or those shared with you and used in your account do include or collect
 *                 PII you are responsible for: ensuring that the included PII is processed in accordance
 *                 with applicable law, providing adequate privacy notices, and obtaining necessary
 *                 consents for processing such data.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ExportLensCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ExportLensCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ExportLensInput
 *   LensAlias: "STRING_VALUE", // required
 *   LensVersion: "STRING_VALUE",
 * };
 * const command = new ExportLensCommand(input);
 * const response = await client.send(command);
 * // { // ExportLensOutput
 * //   LensJSON: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportLensCommandInput - {@link ExportLensCommandInput}
 * @returns {@link ExportLensCommandOutput}
 * @see {@link ExportLensCommandInput} for command's `input` shape.
 * @see {@link ExportLensCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class ExportLensCommand extends $Command
  .classBuilder<
    ExportLensCommandInput,
    ExportLensCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "ExportLens", {})
  .n("WellArchitectedClient", "ExportLensCommand")
  .sc(ExportLens)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportLensInput;
      output: ExportLensOutput;
    };
    sdk: {
      input: ExportLensCommandInput;
      output: ExportLensCommandOutput;
    };
  };
}
