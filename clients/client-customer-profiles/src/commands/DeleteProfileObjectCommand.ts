// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProfileObjectRequest, DeleteProfileObjectResponse } from "../models/models_0";
import { DeleteProfileObject } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProfileObjectCommand}.
 */
export interface DeleteProfileObjectCommandInput extends DeleteProfileObjectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProfileObjectCommand}.
 */
export interface DeleteProfileObjectCommandOutput extends DeleteProfileObjectResponse, __MetadataBearer {}

/**
 * <p>Removes an object associated with a profile of a given ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteProfileObjectCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteProfileObjectCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteProfileObjectRequest
 *   ProfileId: "STRING_VALUE", // required
 *   ProfileObjectUniqueKey: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DeleteProfileObjectCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProfileObjectResponse
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteProfileObjectCommandInput - {@link DeleteProfileObjectCommandInput}
 * @returns {@link DeleteProfileObjectCommandOutput}
 * @see {@link DeleteProfileObjectCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileObjectCommandOutput} for command's `response` shape.
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
export class DeleteProfileObjectCommand extends $Command
  .classBuilder<
    DeleteProfileObjectCommandInput,
    DeleteProfileObjectCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "DeleteProfileObject", {})
  .n("CustomerProfilesClient", "DeleteProfileObjectCommand")
  .sc(DeleteProfileObject)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProfileObjectRequest;
      output: DeleteProfileObjectResponse;
    };
    sdk: {
      input: DeleteProfileObjectCommandInput;
      output: DeleteProfileObjectCommandOutput;
    };
  };
}
