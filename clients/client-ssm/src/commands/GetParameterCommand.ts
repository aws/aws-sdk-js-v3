// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetParameterRequest, GetParameterResult } from "../models/models_1";
import { GetParameter } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetParameterCommand}.
 */
export interface GetParameterCommandInput extends GetParameterRequest {}
/**
 * @public
 *
 * The output of {@link GetParameterCommand}.
 */
export interface GetParameterCommandOutput extends GetParameterResult, __MetadataBearer {}

/**
 * <p>Get information about a single parameter by specifying the parameter name.</p>
 *          <p>Parameter names can't contain spaces. The service removes any spaces specified for the
 *    beginning or end of a parameter name. If the specified name for a parameter contains spaces
 *    between characters, the request fails with a <code>ValidationException</code> error.</p>
 *          <note>
 *             <p>To get information about more than one parameter at a time, use the <a>GetParameters</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetParameterRequest
 *   Name: "STRING_VALUE", // required
 *   WithDecryption: true || false,
 * };
 * const command = new GetParameterCommand(input);
 * const response = await client.send(command);
 * // { // GetParameterResult
 * //   Parameter: { // Parameter
 * //     Name: "STRING_VALUE",
 * //     Type: "String" || "StringList" || "SecureString",
 * //     Value: "STRING_VALUE",
 * //     Version: Number("long"),
 * //     Selector: "STRING_VALUE",
 * //     SourceResult: "STRING_VALUE",
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     ARN: "STRING_VALUE",
 * //     DataType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetParameterCommandInput - {@link GetParameterCommandInput}
 * @returns {@link GetParameterCommandOutput}
 * @see {@link GetParameterCommandInput} for command's `input` shape.
 * @see {@link GetParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidKeyId} (client fault)
 *  <p>The query key ID isn't valid.</p>
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
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetParameterCommand extends $Command
  .classBuilder<
    GetParameterCommandInput,
    GetParameterCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "GetParameter", {})
  .n("SSMClient", "GetParameterCommand")
  .sc(GetParameter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetParameterRequest;
      output: GetParameterResult;
    };
    sdk: {
      input: GetParameterCommandInput;
      output: GetParameterCommandOutput;
    };
  };
}
