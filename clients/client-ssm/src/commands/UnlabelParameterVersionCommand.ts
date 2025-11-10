// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UnlabelParameterVersionRequest, UnlabelParameterVersionResult } from "../models/models_2";
import { UnlabelParameterVersion } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnlabelParameterVersionCommand}.
 */
export interface UnlabelParameterVersionCommandInput extends UnlabelParameterVersionRequest {}
/**
 * @public
 *
 * The output of {@link UnlabelParameterVersionCommand}.
 */
export interface UnlabelParameterVersionCommandOutput extends UnlabelParameterVersionResult, __MetadataBearer {}

/**
 * <p>Remove a label or labels from a parameter.</p>
 *          <p>Parameter names can't contain spaces. The service removes any spaces specified for the
 *    beginning or end of a parameter name. If the specified name for a parameter contains spaces
 *    between characters, the request fails with a <code>ValidationException</code> error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UnlabelParameterVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UnlabelParameterVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UnlabelParameterVersionRequest
 *   Name: "STRING_VALUE", // required
 *   ParameterVersion: Number("long"), // required
 *   Labels: [ // ParameterLabelList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UnlabelParameterVersionCommand(input);
 * const response = await client.send(command);
 * // { // UnlabelParameterVersionResult
 * //   RemovedLabels: [ // ParameterLabelList
 * //     "STRING_VALUE",
 * //   ],
 * //   InvalidLabels: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UnlabelParameterVersionCommandInput - {@link UnlabelParameterVersionCommandInput}
 * @returns {@link UnlabelParameterVersionCommandOutput}
 * @see {@link UnlabelParameterVersionCommandInput} for command's `input` shape.
 * @see {@link UnlabelParameterVersionCommandOutput} for command's `response` shape.
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
export class UnlabelParameterVersionCommand extends $Command
  .classBuilder<
    UnlabelParameterVersionCommandInput,
    UnlabelParameterVersionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "UnlabelParameterVersion", {})
  .n("SSMClient", "UnlabelParameterVersionCommand")
  .sc(UnlabelParameterVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnlabelParameterVersionRequest;
      output: UnlabelParameterVersionResult;
    };
    sdk: {
      input: UnlabelParameterVersionCommandInput;
      output: UnlabelParameterVersionCommandOutput;
    };
  };
}
