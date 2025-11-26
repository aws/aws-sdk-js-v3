// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetCalculatedAttributeForProfileRequest,
  GetCalculatedAttributeForProfileResponse,
} from "../models/models_0";
import { GetCalculatedAttributeForProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCalculatedAttributeForProfileCommand}.
 */
export interface GetCalculatedAttributeForProfileCommandInput extends GetCalculatedAttributeForProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetCalculatedAttributeForProfileCommand}.
 */
export interface GetCalculatedAttributeForProfileCommandOutput
  extends GetCalculatedAttributeForProfileResponse,
    __MetadataBearer {}

/**
 * <p>Retrieve a calculated attribute for a customer profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetCalculatedAttributeForProfileCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetCalculatedAttributeForProfileCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetCalculatedAttributeForProfileRequest
 *   DomainName: "STRING_VALUE", // required
 *   ProfileId: "STRING_VALUE", // required
 *   CalculatedAttributeName: "STRING_VALUE", // required
 * };
 * const command = new GetCalculatedAttributeForProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetCalculatedAttributeForProfileResponse
 * //   CalculatedAttributeName: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   IsDataPartial: "STRING_VALUE",
 * //   Value: "STRING_VALUE",
 * //   LastObjectTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCalculatedAttributeForProfileCommandInput - {@link GetCalculatedAttributeForProfileCommandInput}
 * @returns {@link GetCalculatedAttributeForProfileCommandOutput}
 * @see {@link GetCalculatedAttributeForProfileCommandInput} for command's `input` shape.
 * @see {@link GetCalculatedAttributeForProfileCommandOutput} for command's `response` shape.
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
export class GetCalculatedAttributeForProfileCommand extends $Command
  .classBuilder<
    GetCalculatedAttributeForProfileCommandInput,
    GetCalculatedAttributeForProfileCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetCalculatedAttributeForProfile", {})
  .n("CustomerProfilesClient", "GetCalculatedAttributeForProfileCommand")
  .sc(GetCalculatedAttributeForProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCalculatedAttributeForProfileRequest;
      output: GetCalculatedAttributeForProfileResponse;
    };
    sdk: {
      input: GetCalculatedAttributeForProfileCommandInput;
      output: GetCalculatedAttributeForProfileCommandOutput;
    };
  };
}
