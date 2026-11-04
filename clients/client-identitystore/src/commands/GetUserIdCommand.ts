// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUserIdRequest, GetUserIdResponse } from "../models/models_0";
import { GetUserId$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the `UserId` in an identity store.
 *
 * > **Note:** If you have access to a member account, you can use this API operation from the member account. For more information, see [Limiting access to the identity store from member accounts](https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-accounts.html#limiting-access-from-member-accounts) in the *IAM Identity Center User Guide*.
 *
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
 * //   UserArn: "STRING_VALUE", // required
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
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure with an internal server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link IdentitystoreServiceException}
 *
 * Base exception class for all service exceptions from Identitystore service.
 *
 * @public
 */
export class GetUserIdCommand extends command<GetUserIdCommandInput, GetUserIdCommandOutput>(
  _ep0,
  _mw0,
  "GetUserId",
  GetUserId$
) {
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
