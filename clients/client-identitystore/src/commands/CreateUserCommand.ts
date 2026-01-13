// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import type { CreateUserRequest, CreateUserResponse } from "../models/models_0";
import { CreateUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserCommand}.
 */
export interface CreateUserCommandInput extends CreateUserRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserCommand}.
 */
export interface CreateUserCommandOutput extends CreateUserResponse, __MetadataBearer {}

/**
 * <p>Creates a user within the specified identity store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, CreateUserCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, CreateUserCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * // import type { IdentitystoreClientConfig } from "@aws-sdk/client-identitystore";
 * const config = {}; // type is IdentitystoreClientConfig
 * const client = new IdentitystoreClient(config);
 * const input = { // CreateUserRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE",
 *   Name: { // Name
 *     Formatted: "STRING_VALUE",
 *     FamilyName: "STRING_VALUE",
 *     GivenName: "STRING_VALUE",
 *     MiddleName: "STRING_VALUE",
 *     HonorificPrefix: "STRING_VALUE",
 *     HonorificSuffix: "STRING_VALUE",
 *   },
 *   DisplayName: "STRING_VALUE",
 *   NickName: "STRING_VALUE",
 *   ProfileUrl: "STRING_VALUE",
 *   Emails: [ // Emails
 *     { // Email
 *       Value: "STRING_VALUE",
 *       Type: "STRING_VALUE",
 *       Primary: true || false,
 *     },
 *   ],
 *   Addresses: [ // Addresses
 *     { // Address
 *       StreetAddress: "STRING_VALUE",
 *       Locality: "STRING_VALUE",
 *       Region: "STRING_VALUE",
 *       PostalCode: "STRING_VALUE",
 *       Country: "STRING_VALUE",
 *       Formatted: "STRING_VALUE",
 *       Type: "STRING_VALUE",
 *       Primary: true || false,
 *     },
 *   ],
 *   PhoneNumbers: [ // PhoneNumbers
 *     { // PhoneNumber
 *       Value: "STRING_VALUE",
 *       Type: "STRING_VALUE",
 *       Primary: true || false,
 *     },
 *   ],
 *   UserType: "STRING_VALUE",
 *   Title: "STRING_VALUE",
 *   PreferredLanguage: "STRING_VALUE",
 *   Locale: "STRING_VALUE",
 *   Timezone: "STRING_VALUE",
 *   Photos: [ // Photos
 *     { // Photo
 *       Value: "STRING_VALUE", // required
 *       Type: "STRING_VALUE",
 *       Display: "STRING_VALUE",
 *       Primary: true || false,
 *     },
 *   ],
 *   Website: "STRING_VALUE",
 *   Birthdate: "STRING_VALUE",
 *   Roles: [ // Roles
 *     { // Role
 *       Value: "STRING_VALUE",
 *       Type: "STRING_VALUE",
 *       Primary: true || false,
 *     },
 *   ],
 *   Extensions: { // Extensions
 *     "<keys>": "DOCUMENT_VALUE",
 *   },
 * };
 * const command = new CreateUserCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserResponse
 * //   IdentityStoreId: "STRING_VALUE", // required
 * //   UserId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateUserCommandInput - {@link CreateUserCommandInput}
 * @returns {@link CreateUserCommandOutput}
 * @see {@link CreateUserCommandInput} for command's `input` shape.
 * @see {@link CreateUserCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons:</p> <ul> <li> <p>Performing the requested operation would violate an existing uniqueness claim in the identity store. Resolve the conflict before retrying this request.</p> </li> <li> <p>The requested resource was being concurrently modified by another request.</p> </li> </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause the number of users or groups in the identity store to exceed the maximum allowed.</p>
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
export class CreateUserCommand extends $Command
  .classBuilder<
    CreateUserCommandInput,
    CreateUserCommandOutput,
    IdentitystoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IdentitystoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityStore", "CreateUser", {})
  .n("IdentitystoreClient", "CreateUserCommand")
  .sc(CreateUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserRequest;
      output: CreateUserResponse;
    };
    sdk: {
      input: CreateUserCommandInput;
      output: CreateUserCommandOutput;
    };
  };
}
