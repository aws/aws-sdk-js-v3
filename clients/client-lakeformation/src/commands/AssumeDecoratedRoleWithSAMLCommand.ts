// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { AssumeDecoratedRoleWithSAMLRequest, AssumeDecoratedRoleWithSAMLResponse } from "../models/models_0";
import {
  de_AssumeDecoratedRoleWithSAMLCommand,
  se_AssumeDecoratedRoleWithSAMLCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssumeDecoratedRoleWithSAMLCommand}.
 */
export interface AssumeDecoratedRoleWithSAMLCommandInput extends AssumeDecoratedRoleWithSAMLRequest {}
/**
 * @public
 *
 * The output of {@link AssumeDecoratedRoleWithSAMLCommand}.
 */
export interface AssumeDecoratedRoleWithSAMLCommandOutput
  extends AssumeDecoratedRoleWithSAMLResponse,
    __MetadataBearer {}

/**
 * <p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups.  This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions.
 *       Lake Formation does not scope down the permission of the assumed role.  All permissions attached to the role via the SAML federation setup will be included in the role session.
 *     </p>
 *          <p>
 *       This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>.  Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies.  A typical IAM policy attached to such a role would look as follows:
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, AssumeDecoratedRoleWithSAMLCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, AssumeDecoratedRoleWithSAMLCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LakeFormationClient(config);
 * const input = { // AssumeDecoratedRoleWithSAMLRequest
 *   SAMLAssertion: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   PrincipalArn: "STRING_VALUE", // required
 *   DurationSeconds: Number("int"),
 * };
 * const command = new AssumeDecoratedRoleWithSAMLCommand(input);
 * const response = await client.send(command);
 * // { // AssumeDecoratedRoleWithSAMLResponse
 * //   AccessKeyId: "STRING_VALUE",
 * //   SecretAccessKey: "STRING_VALUE",
 * //   SessionToken: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param AssumeDecoratedRoleWithSAMLCommandInput - {@link AssumeDecoratedRoleWithSAMLCommandInput}
 * @returns {@link AssumeDecoratedRoleWithSAMLCommandOutput}
 * @see {@link AssumeDecoratedRoleWithSAMLCommandInput} for command's `input` shape.
 * @see {@link AssumeDecoratedRoleWithSAMLCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class AssumeDecoratedRoleWithSAMLCommand extends $Command
  .classBuilder<
    AssumeDecoratedRoleWithSAMLCommandInput,
    AssumeDecoratedRoleWithSAMLCommandOutput,
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
  .s("AWSLakeFormation", "AssumeDecoratedRoleWithSAML", {})
  .n("LakeFormationClient", "AssumeDecoratedRoleWithSAMLCommand")
  .f(void 0, void 0)
  .ser(se_AssumeDecoratedRoleWithSAMLCommand)
  .de(de_AssumeDecoratedRoleWithSAMLCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeDecoratedRoleWithSAMLRequest;
      output: AssumeDecoratedRoleWithSAMLResponse;
    };
    sdk: {
      input: AssumeDecoratedRoleWithSAMLCommandInput;
      output: AssumeDecoratedRoleWithSAMLCommandOutput;
    };
  };
}
