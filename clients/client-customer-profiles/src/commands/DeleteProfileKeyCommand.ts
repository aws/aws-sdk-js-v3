// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProfileKeyRequest, DeleteProfileKeyResponse } from "../models/models_0";
import { de_DeleteProfileKeyCommand, se_DeleteProfileKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProfileKeyCommand}.
 */
export interface DeleteProfileKeyCommandInput extends DeleteProfileKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProfileKeyCommand}.
 */
export interface DeleteProfileKeyCommandOutput extends DeleteProfileKeyResponse, __MetadataBearer {}

/**
 * <p>Removes a searchable key from a customer profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteProfileKeyCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteProfileKeyCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteProfileKeyRequest
 *   ProfileId: "STRING_VALUE", // required
 *   KeyName: "STRING_VALUE", // required
 *   Values: [ // requestValueList // required
 *     "STRING_VALUE",
 *   ],
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DeleteProfileKeyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProfileKeyResponse
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteProfileKeyCommandInput - {@link DeleteProfileKeyCommandInput}
 * @returns {@link DeleteProfileKeyCommandOutput}
 * @see {@link DeleteProfileKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileKeyCommandOutput} for command's `response` shape.
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
export class DeleteProfileKeyCommand extends $Command
  .classBuilder<
    DeleteProfileKeyCommandInput,
    DeleteProfileKeyCommandOutput,
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
  .s("CustomerProfiles_20200815", "DeleteProfileKey", {})
  .n("CustomerProfilesClient", "DeleteProfileKeyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProfileKeyCommand)
  .de(de_DeleteProfileKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProfileKeyRequest;
      output: DeleteProfileKeyResponse;
    };
    sdk: {
      input: DeleteProfileKeyCommandInput;
      output: DeleteProfileKeyCommandOutput;
    };
  };
}
