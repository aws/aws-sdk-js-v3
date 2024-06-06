// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { DescribeUserRequest, DescribeUserResponse, DescribeUserResponseFilterSensitiveLog } from "../models/models_0";
import { de_DescribeUserCommand, se_DescribeUserCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserCommand}.
 */
export interface DescribeUserCommandInput extends DescribeUserRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserCommand}.
 */
export interface DescribeUserCommandOutput extends DescribeUserResponse, __MetadataBearer {}

/**
 * <p>Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.</p>
 *          <note>
 *             <p>If you have administrator access to a member account, you can use this API from the member account.
 *          Read about <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html">member accounts</a> in the
 *          <i>Organizations User Guide</i>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, DescribeUserCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, DescribeUserCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const input = { // DescribeUserRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserResponse
 * //   UserName: "STRING_VALUE",
 * //   UserId: "STRING_VALUE", // required
 * //   ExternalIds: [ // ExternalIds
 * //     { // ExternalId
 * //       Issuer: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Name: { // Name
 * //     Formatted: "STRING_VALUE",
 * //     FamilyName: "STRING_VALUE",
 * //     GivenName: "STRING_VALUE",
 * //     MiddleName: "STRING_VALUE",
 * //     HonorificPrefix: "STRING_VALUE",
 * //     HonorificSuffix: "STRING_VALUE",
 * //   },
 * //   DisplayName: "STRING_VALUE",
 * //   NickName: "STRING_VALUE",
 * //   ProfileUrl: "STRING_VALUE",
 * //   Emails: [ // Emails
 * //     { // Email
 * //       Value: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Primary: true || false,
 * //     },
 * //   ],
 * //   Addresses: [ // Addresses
 * //     { // Address
 * //       StreetAddress: "STRING_VALUE",
 * //       Locality: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       PostalCode: "STRING_VALUE",
 * //       Country: "STRING_VALUE",
 * //       Formatted: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Primary: true || false,
 * //     },
 * //   ],
 * //   PhoneNumbers: [ // PhoneNumbers
 * //     { // PhoneNumber
 * //       Value: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Primary: true || false,
 * //     },
 * //   ],
 * //   UserType: "STRING_VALUE",
 * //   Title: "STRING_VALUE",
 * //   PreferredLanguage: "STRING_VALUE",
 * //   Locale: "STRING_VALUE",
 * //   Timezone: "STRING_VALUE",
 * //   IdentityStoreId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeUserCommandInput - {@link DescribeUserCommandInput}
 * @returns {@link DescribeUserCommandOutput}
 * @see {@link DescribeUserCommandInput} for command's `input` shape.
 * @see {@link DescribeUserCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeUserCommand extends $Command
  .classBuilder<
    DescribeUserCommandInput,
    DescribeUserCommandOutput,
    IdentitystoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IdentitystoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityStore", "DescribeUser", {})
  .n("IdentitystoreClient", "DescribeUserCommand")
  .f(void 0, DescribeUserResponseFilterSensitiveLog)
  .ser(se_DescribeUserCommand)
  .de(de_DescribeUserCommand)
  .build() {}
