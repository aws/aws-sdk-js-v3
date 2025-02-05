// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetDataLakePrincipalRequest, GetDataLakePrincipalResponse } from "../models/models_0";
import { de_GetDataLakePrincipalCommand, se_GetDataLakePrincipalCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataLakePrincipalCommand}.
 */
export interface GetDataLakePrincipalCommandInput extends GetDataLakePrincipalRequest {}
/**
 * @public
 *
 * The output of {@link GetDataLakePrincipalCommand}.
 */
export interface GetDataLakePrincipalCommandOutput extends GetDataLakePrincipalResponse, __MetadataBearer {}

/**
 * <p>Returns the identity of the invoking principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetDataLakePrincipalCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetDataLakePrincipalCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LakeFormationClient(config);
 * const input = {};
 * const command = new GetDataLakePrincipalCommand(input);
 * const response = await client.send(command);
 * // { // GetDataLakePrincipalResponse
 * //   Identity: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataLakePrincipalCommandInput - {@link GetDataLakePrincipalCommandInput}
 * @returns {@link GetDataLakePrincipalCommandOutput}
 * @see {@link GetDataLakePrincipalCommandInput} for command's `input` shape.
 * @see {@link GetDataLakePrincipalCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class GetDataLakePrincipalCommand extends $Command
  .classBuilder<
    GetDataLakePrincipalCommandInput,
    GetDataLakePrincipalCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "GetDataLakePrincipal", {})
  .n("LakeFormationClient", "GetDataLakePrincipalCommand")
  .f(void 0, void 0)
  .ser(se_GetDataLakePrincipalCommand)
  .de(de_GetDataLakePrincipalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDataLakePrincipalResponse;
    };
    sdk: {
      input: GetDataLakePrincipalCommandInput;
      output: GetDataLakePrincipalCommandOutput;
    };
  };
}
