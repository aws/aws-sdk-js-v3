// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetUserRequest, GetUserResponse } from "../models/models_0";
import { de_GetUserCommand, se_GetUserCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUserCommand}.
 */
export interface GetUserCommandInput extends GetUserRequest {}
/**
 * @public
 *
 * The output of {@link GetUserCommand}.
 */
export interface GetUserCommandOutput extends GetUserResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified IAM user, including the user's creation
 *             date, path, unique ID, and ARN.</p>
 *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the Amazon Web Services access key ID used to sign the request to this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetUserRequest
 *   UserName: "STRING_VALUE",
 * };
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * // { // GetUserResponse
 * //   User: { // User
 * //     Path: "STRING_VALUE", // required
 * //     UserName: "STRING_VALUE", // required
 * //     UserId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     PasswordLastUsed: new Date("TIMESTAMP"),
 * //     PermissionsBoundary: { // AttachedPermissionsBoundary
 * //       PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //       PermissionsBoundaryArn: "STRING_VALUE",
 * //     },
 * //     Tags: [ // tagListType
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserCommandInput - {@link GetUserCommandInput}
 * @returns {@link GetUserCommandOutput}
 * @see {@link GetUserCommandInput} for command's `input` shape.
 * @see {@link GetUserCommandOutput} for command's `response` shape.
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
 *
 * @example To get information about an IAM user
 * ```javascript
 * // The following command gets information about the IAM user named Bob.
 * const input = {
 *   UserName: "Bob"
 * };
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   User: {
 *     Arn: "arn:aws:iam::123456789012:user/Bob",
 *     CreateDate: "2012-09-21T23:03:13Z",
 *     Path: "/",
 *     UserId: "AKIAIOSFODNN7EXAMPLE",
 *     UserName: "Bob"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetUserCommand extends $Command
  .classBuilder<
    GetUserCommandInput,
    GetUserCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "GetUser", {})
  .n("IAMClient", "GetUserCommand")
  .f(void 0, void 0)
  .ser(se_GetUserCommand)
  .de(de_GetUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserRequest;
      output: GetUserResponse;
    };
    sdk: {
      input: GetUserCommandInput;
      output: GetUserCommandOutput;
    };
  };
}
