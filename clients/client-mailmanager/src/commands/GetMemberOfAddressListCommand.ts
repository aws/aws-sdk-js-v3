// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import {
  GetMemberOfAddressListRequest,
  GetMemberOfAddressListRequestFilterSensitiveLog,
  GetMemberOfAddressListResponse,
  GetMemberOfAddressListResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetMemberOfAddressListCommand, se_GetMemberOfAddressListCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMemberOfAddressListCommand}.
 */
export interface GetMemberOfAddressListCommandInput extends GetMemberOfAddressListRequest {}
/**
 * @public
 *
 * The output of {@link GetMemberOfAddressListCommand}.
 */
export interface GetMemberOfAddressListCommandOutput extends GetMemberOfAddressListResponse, __MetadataBearer {}

/**
 * <p>Fetch attributes of a member in an address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetMemberOfAddressListCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetMemberOfAddressListCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MailManagerClient(config);
 * const input = { // GetMemberOfAddressListRequest
 *   AddressListId: "STRING_VALUE", // required
 *   Address: "STRING_VALUE", // required
 * };
 * const command = new GetMemberOfAddressListCommand(input);
 * const response = await client.send(command);
 * // { // GetMemberOfAddressListResponse
 * //   Address: "STRING_VALUE", // required
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetMemberOfAddressListCommandInput - {@link GetMemberOfAddressListCommandInput}
 * @returns {@link GetMemberOfAddressListCommandOutput}
 * @see {@link GetMemberOfAddressListCommandInput} for command's `input` shape.
 * @see {@link GetMemberOfAddressListCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 * @public
 */
export class GetMemberOfAddressListCommand extends $Command
  .classBuilder<
    GetMemberOfAddressListCommandInput,
    GetMemberOfAddressListCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "GetMemberOfAddressList", {})
  .n("MailManagerClient", "GetMemberOfAddressListCommand")
  .f(GetMemberOfAddressListRequestFilterSensitiveLog, GetMemberOfAddressListResponseFilterSensitiveLog)
  .ser(se_GetMemberOfAddressListCommand)
  .de(de_GetMemberOfAddressListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMemberOfAddressListRequest;
      output: GetMemberOfAddressListResponse;
    };
    sdk: {
      input: GetMemberOfAddressListCommandInput;
      output: GetMemberOfAddressListCommandOutput;
    };
  };
}
