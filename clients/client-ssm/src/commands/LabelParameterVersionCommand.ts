// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LabelParameterVersionRequest, LabelParameterVersionResult } from "../models/models_1";
import { de_LabelParameterVersionCommand, se_LabelParameterVersionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link LabelParameterVersionCommand}.
 */
export interface LabelParameterVersionCommandInput extends LabelParameterVersionRequest {}
/**
 * @public
 *
 * The output of {@link LabelParameterVersionCommand}.
 */
export interface LabelParameterVersionCommandOutput extends LabelParameterVersionResult, __MetadataBearer {}

/**
 * <p>A parameter label is a user-defined alias to help you manage different versions of a
 *    parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and
 *    increments the version number by one. A label can help you remember the purpose of a parameter
 *    when there are multiple versions. </p>
 *          <p>Parameter labels have the following requirements and restrictions.</p>
 *          <ul>
 *             <li>
 *                <p>A version of a parameter can have a maximum of 10 labels.</p>
 *             </li>
 *             <li>
 *                <p>You can't attach the same label to different versions of the same parameter. For example,
 *      if version 1 has the label Production, then you can't attach Production to version 2.</p>
 *             </li>
 *             <li>
 *                <p>You can move a label from one version of a parameter to another.</p>
 *             </li>
 *             <li>
 *                <p>You can't create a label when you create a new parameter. You must attach a label to a
 *      specific version of a parameter.</p>
 *             </li>
 *             <li>
 *                <p>If you no longer want to use a parameter label, then you can either delete it or move it
 *      to a different version of a parameter.</p>
 *             </li>
 *             <li>
 *                <p>A label can have a maximum of 100 characters.</p>
 *             </li>
 *             <li>
 *                <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or
 *      underscores (_).</p>
 *             </li>
 *             <li>
 *                <p>Labels can't begin with a number, "<code>aws</code>" or "<code>ssm</code>" (not case
 *      sensitive). If a label fails to meet these requirements, then the label isn't associated with a
 *      parameter and the system displays it in the list of InvalidLabels.</p>
 *             </li>
 *             <li>
 *                <p>Parameter names can't contain spaces. The service removes any spaces specified for
 *      the beginning or end of a parameter name. If the specified name for a parameter contains spaces
 *      between characters, the request fails with a <code>ValidationException</code> error.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, LabelParameterVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, LabelParameterVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // LabelParameterVersionRequest
 *   Name: "STRING_VALUE", // required
 *   ParameterVersion: Number("long"),
 *   Labels: [ // ParameterLabelList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new LabelParameterVersionCommand(input);
 * const response = await client.send(command);
 * // { // LabelParameterVersionResult
 * //   InvalidLabels: [ // ParameterLabelList
 * //     "STRING_VALUE",
 * //   ],
 * //   ParameterVersion: Number("long"),
 * // };
 *
 * ```
 *
 * @param LabelParameterVersionCommandInput - {@link LabelParameterVersionCommandInput}
 * @returns {@link LabelParameterVersionCommandOutput}
 * @see {@link LabelParameterVersionCommandInput} for command's `input` shape.
 * @see {@link LabelParameterVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ParameterNotFound} (client fault)
 *  <p>The parameter couldn't be found. Verify the name and try again.</p>
 *          <note>
 *             <p>For the <code>DeleteParameter</code> and <code>GetParameter</code> actions, if the
 *     specified parameter doesn't exist, the <code>ParameterNotFound</code> exception is
 *      <i>not</i> recorded in CloudTrail event logs.</p>
 *          </note>
 *
 * @throws {@link ParameterVersionLabelLimitExceeded} (client fault)
 *  <p>A parameter version can have a maximum of ten labels.</p>
 *
 * @throws {@link ParameterVersionNotFound} (client fault)
 *  <p>The specified parameter version wasn't found. Verify the parameter name and version, and try
 *    again.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class LabelParameterVersionCommand extends $Command
  .classBuilder<
    LabelParameterVersionCommandInput,
    LabelParameterVersionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "LabelParameterVersion", {})
  .n("SSMClient", "LabelParameterVersionCommand")
  .f(void 0, void 0)
  .ser(se_LabelParameterVersionCommand)
  .de(de_LabelParameterVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LabelParameterVersionRequest;
      output: LabelParameterVersionResult;
    };
    sdk: {
      input: LabelParameterVersionCommandInput;
      output: LabelParameterVersionCommandOutput;
    };
  };
}
