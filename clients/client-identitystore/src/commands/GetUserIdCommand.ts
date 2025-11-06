// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { GetUserIdRequest, GetUserIdRequestFilterSensitiveLog, GetUserIdResponse } from "../models/models_0";
import { de_GetUserIdCommand, se_GetUserIdCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUserIdCommand}.
 */
export interface GetUserIdCommandInput extends GetUserIdRequest {}
/**
 * @public
 *
 * The output of {@link GetUserIdCommand}.
 */
export interface GetUserIdCommandOutput extends GetUserIdResponse, __MetadataBearer {}

/**
 * <p>Retrieves the <code>UserId</code> in an identity store.</p> <note> <p>If you have access to a member account, you can use this API operation from the member account. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-accounts.html#limiting-access-from-member-accounts">Limiting access to the identity store from member accounts</a> in the <i> IAM Identity Center User Guide</i>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, GetUserIdCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, GetUserIdCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * // import type { IdentitystoreClientConfig } from "@aws-sdk/client-identitystore";
 * const config = {}; // type is IdentitystoreClientConfig
 * const client = new IdentitystoreClient(config);
 * const input = { // GetUserIdRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   AlternateIdentifier: { // AlternateIdentifier Union: only one key present
 *     ExternalId: { // ExternalId
 *       Issuer: "STRING_VALUE", // required
 *       Id: "STRING_VALUE", // required
 *     },
 *     UniqueAttribute: { // UniqueAttribute
 *       AttributePath: "STRING_VALUE", // required
 *       AttributeValue: "DOCUMENT_VALUE", // required
 *     },
 *   },
 * };
 * const command = new GetUserIdCommand(input);
 * const response = await client.send(command);
 * // { // GetUserIdResponse
 * //   IdentityStoreId: "STRING_VALUE", // required
 * //   UserId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetUserIdCommandInput - {@link GetUserIdCommandInput}
 * @returns {@link GetUserIdCommandOutput}
 * @see {@link GetUserIdCommandInput} for command's `input` shape.
 * @see {@link GetUserIdCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link IdentitystoreServiceException}
 * <p>Base exception class for all service exceptions from Identitystore service.</p>
 *
 *
 * @public
 */
export class GetUserIdCommand extends $Command
  .classBuilder<
    GetUserIdCommandInput,
    GetUserIdCommandOutput,
    IdentitystoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IdentitystoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityStore", "GetUserId", {})
  .n("IdentitystoreClient", "GetUserIdCommand")
  .f(GetUserIdRequestFilterSensitiveLog, void 0)
  .ser(se_GetUserIdCommand)
  .de(de_GetUserIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserIdRequest;
      output: GetUserIdResponse;
    };
    sdk: {
      input: GetUserIdCommandInput;
      output: GetUserIdCommandOutput;
    };
  };
}
