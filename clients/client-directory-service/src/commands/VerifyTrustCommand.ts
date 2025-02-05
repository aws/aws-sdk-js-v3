// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { VerifyTrustRequest, VerifyTrustResult } from "../models/models_0";
import { de_VerifyTrustCommand, se_VerifyTrustCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyTrustCommand}.
 */
export interface VerifyTrustCommandInput extends VerifyTrustRequest {}
/**
 * @public
 *
 * The output of {@link VerifyTrustCommand}.
 */
export interface VerifyTrustCommandOutput extends VerifyTrustResult, __MetadataBearer {}

/**
 * <p>Directory Service for Microsoft Active Directory allows you to configure and verify trust
 *       relationships.</p>
 *          <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an
 *       external domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, VerifyTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, VerifyTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DirectoryServiceClient(config);
 * const input = { // VerifyTrustRequest
 *   TrustId: "STRING_VALUE", // required
 * };
 * const command = new VerifyTrustCommand(input);
 * const response = await client.send(command);
 * // { // VerifyTrustResult
 * //   TrustId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param VerifyTrustCommandInput - {@link VerifyTrustCommandInput}
 * @returns {@link VerifyTrustCommandOutput}
 * @see {@link VerifyTrustCommandInput} for command's `input` shape.
 * @see {@link VerifyTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 * @public
 */
export class VerifyTrustCommand extends $Command
  .classBuilder<
    VerifyTrustCommandInput,
    VerifyTrustCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "VerifyTrust", {})
  .n("DirectoryServiceClient", "VerifyTrustCommand")
  .f(void 0, void 0)
  .ser(se_VerifyTrustCommand)
  .de(de_VerifyTrustCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyTrustRequest;
      output: VerifyTrustResult;
    };
    sdk: {
      input: VerifyTrustCommandInput;
      output: VerifyTrustCommandOutput;
    };
  };
}
