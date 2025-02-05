// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportNotebookInput, ExportNotebookOutput } from "../models/models_0";
import { de_ExportNotebookCommand, se_ExportNotebookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportNotebookCommand}.
 */
export interface ExportNotebookCommandInput extends ExportNotebookInput {}
/**
 * @public
 *
 * The output of {@link ExportNotebookCommand}.
 */
export interface ExportNotebookCommandOutput extends ExportNotebookOutput, __MetadataBearer {}

/**
 * <p>Exports the specified notebook and its metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ExportNotebookCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ExportNotebookCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AthenaClient(config);
 * const input = { // ExportNotebookInput
 *   NotebookId: "STRING_VALUE", // required
 * };
 * const command = new ExportNotebookCommand(input);
 * const response = await client.send(command);
 * // { // ExportNotebookOutput
 * //   NotebookMetadata: { // NotebookMetadata
 * //     NotebookId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     WorkGroup: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Type: "IPYNB",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * //   Payload: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportNotebookCommandInput - {@link ExportNotebookCommandInput}
 * @returns {@link ExportNotebookCommandOutput}
 * @see {@link ExportNotebookCommandInput} for command's `input` shape.
 * @see {@link ExportNotebookCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 * @public
 */
export class ExportNotebookCommand extends $Command
  .classBuilder<
    ExportNotebookCommandInput,
    ExportNotebookCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "ExportNotebook", {})
  .n("AthenaClient", "ExportNotebookCommand")
  .f(void 0, void 0)
  .ser(se_ExportNotebookCommand)
  .de(de_ExportNotebookCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportNotebookInput;
      output: ExportNotebookOutput;
    };
    sdk: {
      input: ExportNotebookCommandInput;
      output: ExportNotebookCommandOutput;
    };
  };
}
