// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetLoginProfileRequest, GetLoginProfileResponse } from "../models/models_0";
import { de_GetLoginProfileCommand, se_GetLoginProfileCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLoginProfileCommand}.
 */
export interface GetLoginProfileCommandInput extends GetLoginProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetLoginProfileCommand}.
 */
export interface GetLoginProfileCommandOutput extends GetLoginProfileResponse, __MetadataBearer {}

/**
 * <p>Retrieves the user name for the specified IAM user. A login profile is created when
 *             you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist
 *             or does not have a password, the operation returns a 404 (<code>NoSuchEntity</code>)
 *             error.</p>
 *          <p>If you create an IAM user with access to the console, the <code>CreateDate</code>
 *             reflects the date you created the initial password for the user.</p>
 *          <p>If you create an IAM user with programmatic access, and then later add a password
 *             for the user to access the Amazon Web Services Management Console, the <code>CreateDate</code> reflects the initial
 *             password creation date. A user with programmatic access does not have a login profile
 *             unless you create a password for the user to access the Amazon Web Services Management Console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetLoginProfileRequest
 *   UserName: "STRING_VALUE",
 * };
 * const command = new GetLoginProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetLoginProfileResponse
 * //   LoginProfile: { // LoginProfile
 * //     UserName: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     PasswordResetRequired: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLoginProfileCommandInput - {@link GetLoginProfileCommandInput}
 * @returns {@link GetLoginProfileCommandOutput}
 * @see {@link GetLoginProfileCommandInput} for command's `input` shape.
 * @see {@link GetLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To get password information for an IAM user
 * ```javascript
 * // The following command gets information about the password for the IAM user named Anika.
 * const input = {
 *   "UserName": "Anika"
 * };
 * const command = new GetLoginProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoginProfile": {
 *     "CreateDate": "2012-09-21T23:03:39Z",
 *     "UserName": "Anika"
 *   }
 * }
 * *\/
 * // example id: d6b580cc-909f-4925-9caa-d425cbc1ad47
 * ```
 *
 */
export class GetLoginProfileCommand extends $Command
  .classBuilder<
    GetLoginProfileCommandInput,
    GetLoginProfileCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "GetLoginProfile", {})
  .n("IAMClient", "GetLoginProfileCommand")
  .f(void 0, void 0)
  .ser(se_GetLoginProfileCommand)
  .de(de_GetLoginProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLoginProfileRequest;
      output: GetLoginProfileResponse;
    };
    sdk: {
      input: GetLoginProfileCommandInput;
      output: GetLoginProfileCommandOutput;
    };
  };
}
