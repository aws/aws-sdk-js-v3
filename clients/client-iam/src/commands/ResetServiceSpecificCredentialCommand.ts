// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  ResetServiceSpecificCredentialRequest,
  ResetServiceSpecificCredentialResponse,
  ResetServiceSpecificCredentialResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ResetServiceSpecificCredentialCommand,
  se_ResetServiceSpecificCredentialCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetServiceSpecificCredentialCommand}.
 */
export interface ResetServiceSpecificCredentialCommandInput extends ResetServiceSpecificCredentialRequest {}
/**
 * @public
 *
 * The output of {@link ResetServiceSpecificCredentialCommand}.
 */
export interface ResetServiceSpecificCredentialCommandOutput
  extends ResetServiceSpecificCredentialResponse,
    __MetadataBearer {}

/**
 * <p>Resets the password for a service-specific credential. The new password is Amazon Web Services
 *             generated and cryptographically strong. It cannot be configured by the user. Resetting
 *             the password immediately invalidates the previous password associated with this
 *             user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ResetServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ResetServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ResetServiceSpecificCredentialRequest
 *   UserName: "STRING_VALUE",
 *   ServiceSpecificCredentialId: "STRING_VALUE", // required
 * };
 * const command = new ResetServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * // { // ResetServiceSpecificCredentialResponse
 * //   ServiceSpecificCredential: { // ServiceSpecificCredential
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     ExpirationDate: new Date("TIMESTAMP"),
 * //     ServiceName: "STRING_VALUE", // required
 * //     ServiceUserName: "STRING_VALUE",
 * //     ServicePassword: "STRING_VALUE",
 * //     ServiceCredentialAlias: "STRING_VALUE",
 * //     ServiceCredentialSecret: "STRING_VALUE",
 * //     ServiceSpecificCredentialId: "STRING_VALUE", // required
 * //     UserName: "STRING_VALUE", // required
 * //     Status: "Active" || "Inactive" || "Expired", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param ResetServiceSpecificCredentialCommandInput - {@link ResetServiceSpecificCredentialCommandInput}
 * @returns {@link ResetServiceSpecificCredentialCommandOutput}
 * @see {@link ResetServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link ResetServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class ResetServiceSpecificCredentialCommand extends $Command
  .classBuilder<
    ResetServiceSpecificCredentialCommandInput,
    ResetServiceSpecificCredentialCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ResetServiceSpecificCredential", {})
  .n("IAMClient", "ResetServiceSpecificCredentialCommand")
  .f(void 0, ResetServiceSpecificCredentialResponseFilterSensitiveLog)
  .ser(se_ResetServiceSpecificCredentialCommand)
  .de(de_ResetServiceSpecificCredentialCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetServiceSpecificCredentialRequest;
      output: ResetServiceSpecificCredentialResponse;
    };
    sdk: {
      input: ResetServiceSpecificCredentialCommandInput;
      output: ResetServiceSpecificCredentialCommandOutput;
    };
  };
}
