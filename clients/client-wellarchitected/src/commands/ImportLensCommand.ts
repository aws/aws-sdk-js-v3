// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImportLensInput, ImportLensOutput } from "../models/models_0";
import { de_ImportLensCommand, se_ImportLensCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportLensCommand}.
 */
export interface ImportLensCommandInput extends ImportLensInput {}
/**
 * @public
 *
 * The output of {@link ImportLensCommand}.
 */
export interface ImportLensCommandOutput extends ImportLensOutput, __MetadataBearer {}

/**
 * <p>Import a new custom lens or update an existing custom lens.</p>
 *          <p>To update an existing custom lens, specify its ARN as the  <code>LensAlias</code>. If
 *             no ARN is specified, a new custom lens is created.</p>
 *          <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be
 *             applied to workloads or shared with other Amazon Web Services accounts until it's
 *             published with <a>CreateLensVersion</a>.</p>
 *          <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a>
 *             in the <i>Well-Architected Tool User Guide</i>.</p>
 *          <p>A custom lens cannot exceed 500 KB in size.</p>
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
 * import { WellArchitectedClient, ImportLensCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ImportLensCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ImportLensInput
 *   LensAlias: "STRING_VALUE",
 *   JSONString: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ImportLensCommand(input);
 * const response = await client.send(command);
 * // { // ImportLensOutput
 * //   LensArn: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "COMPLETE" || "ERROR",
 * // };
 *
 * ```
 *
 * @param ImportLensCommandInput - {@link ImportLensCommandInput}
 * @returns {@link ImportLensCommandOutput}
 * @see {@link ImportLensCommandInput} for command's `input` shape.
 * @see {@link ImportLensCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
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
export class ImportLensCommand extends $Command
  .classBuilder<
    ImportLensCommandInput,
    ImportLensCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "ImportLens", {})
  .n("WellArchitectedClient", "ImportLensCommand")
  .f(void 0, void 0)
  .ser(se_ImportLensCommand)
  .de(de_ImportLensCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportLensInput;
      output: ImportLensOutput;
    };
    sdk: {
      input: ImportLensCommandInput;
      output: ImportLensCommandOutput;
    };
  };
}
