// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetParametersRequest, GetParametersResult, GetParametersResultFilterSensitiveLog } from "../models/models_1";
import { de_GetParametersCommand, se_GetParametersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetParametersCommand}.
 */
export interface GetParametersCommandInput extends GetParametersRequest {}
/**
 * @public
 *
 * The output of {@link GetParametersCommand}.
 */
export interface GetParametersCommandOutput extends GetParametersResult, __MetadataBearer {}

/**
 * <p>Get information about one or more parameters by specifying multiple parameter names.</p>
 *          <note>
 *             <p>To get information about a single parameter, you can use the <a>GetParameter</a>
 *     operation instead.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetParametersRequest
 *   Names: [ // ParameterNameList // required
 *     "STRING_VALUE",
 *   ],
 *   WithDecryption: true || false,
 * };
 * const command = new GetParametersCommand(input);
 * const response = await client.send(command);
 * // { // GetParametersResult
 * //   Parameters: [ // ParameterList
 * //     { // Parameter
 * //       Name: "STRING_VALUE",
 * //       Type: "String" || "StringList" || "SecureString",
 * //       Value: "STRING_VALUE",
 * //       Version: Number("long"),
 * //       Selector: "STRING_VALUE",
 * //       SourceResult: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       ARN: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   InvalidParameters: [ // ParameterNameList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetParametersCommandInput - {@link GetParametersCommandInput}
 * @returns {@link GetParametersCommandOutput}
 * @see {@link GetParametersCommandInput} for command's `input` shape.
 * @see {@link GetParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidKeyId} (client fault)
 *  <p>The query key ID isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetParametersCommand extends $Command
  .classBuilder<
    GetParametersCommandInput,
    GetParametersCommandOutput,
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
  .s("AmazonSSM", "GetParameters", {})
  .n("SSMClient", "GetParametersCommand")
  .f(void 0, GetParametersResultFilterSensitiveLog)
  .ser(se_GetParametersCommand)
  .de(de_GetParametersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetParametersRequest;
      output: GetParametersResult;
    };
    sdk: {
      input: GetParametersCommandInput;
      output: GetParametersCommandOutput;
    };
  };
}
