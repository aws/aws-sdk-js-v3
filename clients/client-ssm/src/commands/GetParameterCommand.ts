// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetParameterRequest, GetParameterResult, GetParameterResultFilterSensitiveLog } from "../models/models_1";
import { de_GetParameterCommand, se_GetParameterCommand } from "../protocols/Aws_json1_1";
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
 *          <note>
 *             <p>To get information about more than one parameter at a time, use the <a>GetParameters</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *
 * @throws {@link ParameterVersionNotFound} (client fault)
 *  <p>The specified parameter version wasn't found. Verify the parameter name and version, and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetParameter", {})
  .n("SSMClient", "GetParameterCommand")
  .f(void 0, GetParameterResultFilterSensitiveLog)
  .ser(se_GetParameterCommand)
  .de(de_GetParameterCommand)
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
