// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddProfileKeyRequest, AddProfileKeyResponse } from "../models/models_0";
import { de_AddProfileKeyCommand, se_AddProfileKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates a new key value with a specific profile, such as a Contact Record
 *          ContactId.</p>
 *          <p>A profile object can have a single unique key and any number of additional keys that can
 *          be used to identify the profile that it belongs to.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class AddProfileKeyCommand extends $Command
  .classBuilder<
    AddProfileKeyCommandInput,
    AddProfileKeyCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "AddProfileKey", {})
  .n("CustomerProfilesClient", "AddProfileKeyCommand")
  .f(void 0, void 0)
  .ser(se_AddProfileKeyCommand)
  .de(de_AddProfileKeyCommand)
  .build() {
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
