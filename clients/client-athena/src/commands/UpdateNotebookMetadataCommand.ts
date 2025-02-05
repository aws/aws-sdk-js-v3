// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateNotebookMetadataInput, UpdateNotebookMetadataOutput } from "../models/models_0";
import { de_UpdateNotebookMetadataCommand, se_UpdateNotebookMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNotebookMetadataCommand}.
 */
export interface UpdateNotebookMetadataCommandInput extends UpdateNotebookMetadataInput {}
/**
 * @public
 *
 * The output of {@link UpdateNotebookMetadataCommand}.
 */
export interface UpdateNotebookMetadataCommandOutput extends UpdateNotebookMetadataOutput, __MetadataBearer {}

/**
 * <p>Updates the metadata for a notebook.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, UpdateNotebookMetadataCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, UpdateNotebookMetadataCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AthenaClient(config);
 * const input = { // UpdateNotebookMetadataInput
 *   NotebookId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new UpdateNotebookMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNotebookMetadataCommandInput - {@link UpdateNotebookMetadataCommandInput}
 * @returns {@link UpdateNotebookMetadataCommandOutput}
 * @see {@link UpdateNotebookMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateNotebookMetadataCommandOutput} for command's `response` shape.
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
export class UpdateNotebookMetadataCommand extends $Command
  .classBuilder<
    UpdateNotebookMetadataCommandInput,
    UpdateNotebookMetadataCommandOutput,
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
  .s("AmazonAthena", "UpdateNotebookMetadata", {})
  .n("AthenaClient", "UpdateNotebookMetadataCommand")
  .f(void 0, void 0)
  .ser(se_UpdateNotebookMetadataCommand)
  .de(de_UpdateNotebookMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNotebookMetadataInput;
      output: {};
    };
    sdk: {
      input: UpdateNotebookMetadataCommandInput;
      output: UpdateNotebookMetadataCommandOutput;
    };
  };
}
