// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddProfileKeyRequest, AddProfileKeyResponse } from "../models/models_0";
import { AddProfileKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddProfileKeyCommand}.
 */
export interface AddProfileKeyCommandInput extends AddProfileKeyRequest {}
/**
 * @public
 *
 * The output of {@link AddProfileKeyCommand}.
 */
export interface AddProfileKeyCommandOutput extends AddProfileKeyResponse, __MetadataBearer {}

/**
 * Associates a new key value with a specific profile, such as a Contact Record ContactId.
 *
 * A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, AddProfileKeyCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, AddProfileKeyCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // AddProfileKeyRequest
 *   ProfileId: "STRING_VALUE", // required
 *   KeyName: "STRING_VALUE", // required
 *   Values: [ // requestValueList // required
 *     "STRING_VALUE",
 *   ],
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new AddProfileKeyCommand(input);
 * const response = await client.send(command);
 * // { // AddProfileKeyResponse
 * //   KeyName: "STRING_VALUE",
 * //   Values: [ // requestValueList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddProfileKeyCommandInput - {@link AddProfileKeyCommandInput}
 * @returns {@link AddProfileKeyCommandOutput}
 * @see {@link AddProfileKeyCommandInput} for command's `input` shape.
 * @see {@link AddProfileKeyCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class AddProfileKeyCommand extends command<AddProfileKeyCommandInput, AddProfileKeyCommandOutput>(
  _ep0,
  _mw0,
  "AddProfileKey",
  AddProfileKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddProfileKeyRequest;
      output: AddProfileKeyResponse;
    };
    sdk: {
      input: AddProfileKeyCommandInput;
      output: AddProfileKeyCommandOutput;
    };
  };
}
