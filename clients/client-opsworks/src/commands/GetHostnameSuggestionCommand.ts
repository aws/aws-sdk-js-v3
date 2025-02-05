// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetHostnameSuggestionRequest, GetHostnameSuggestionResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_GetHostnameSuggestionCommand, se_GetHostnameSuggestionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHostnameSuggestionCommand}.
 */
export interface GetHostnameSuggestionCommandInput extends GetHostnameSuggestionRequest {}
/**
 * @public
 *
 * The output of {@link GetHostnameSuggestionCommand}.
 */
export interface GetHostnameSuggestionCommandOutput extends GetHostnameSuggestionResult, __MetadataBearer {}

/**
 * <p>Gets a generated host name for the specified layer, based on the current host name theme.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, GetHostnameSuggestionCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, GetHostnameSuggestionCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // GetHostnameSuggestionRequest
 *   LayerId: "STRING_VALUE", // required
 * };
 * const command = new GetHostnameSuggestionCommand(input);
 * const response = await client.send(command);
 * // { // GetHostnameSuggestionResult
 * //   LayerId: "STRING_VALUE",
 * //   Hostname: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetHostnameSuggestionCommandInput - {@link GetHostnameSuggestionCommandInput}
 * @returns {@link GetHostnameSuggestionCommandOutput}
 * @see {@link GetHostnameSuggestionCommandInput} for command's `input` shape.
 * @see {@link GetHostnameSuggestionCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 * @public
 */
export class GetHostnameSuggestionCommand extends $Command
  .classBuilder<
    GetHostnameSuggestionCommandInput,
    GetHostnameSuggestionCommandOutput,
    OpsWorksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorks_20130218", "GetHostnameSuggestion", {})
  .n("OpsWorksClient", "GetHostnameSuggestionCommand")
  .f(void 0, void 0)
  .ser(se_GetHostnameSuggestionCommand)
  .de(de_GetHostnameSuggestionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHostnameSuggestionRequest;
      output: GetHostnameSuggestionResult;
    };
    sdk: {
      input: GetHostnameSuggestionCommandInput;
      output: GetHostnameSuggestionCommandOutput;
    };
  };
}
