// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetGovCloudAccountInformationRequest, GetGovCloudAccountInformationResponse } from "../models/models_0";
import { GetGovCloudAccountInformation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGovCloudAccountInformationCommand}.
 */
export interface GetGovCloudAccountInformationCommandInput extends GetGovCloudAccountInformationRequest {}
/**
 * @public
 *
 * The output of {@link GetGovCloudAccountInformationCommand}.
 */
export interface GetGovCloudAccountInformationCommandOutput
  extends GetGovCloudAccountInformationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the GovCloud account linked to the specified standard account (if it exists) including the GovCloud account ID and state. To use this API, an IAM user or role must have the <code>account:GetGovCloudAccountInformation</code> IAM permission. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, GetGovCloudAccountInformationCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, GetGovCloudAccountInformationCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // GetGovCloudAccountInformationRequest
 *   StandardAccountId: "STRING_VALUE",
 * };
 * const command = new GetGovCloudAccountInformationCommand(input);
 * const response = await client.send(command);
 * // { // GetGovCloudAccountInformationResponse
 * //   GovCloudAccountId: "STRING_VALUE", // required
 * //   AccountState: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetGovCloudAccountInformationCommandInput - {@link GetGovCloudAccountInformationCommandInput}
 * @returns {@link GetGovCloudAccountInformationCommandOutput}
 * @see {@link GetGovCloudAccountInformationCommandInput} for command's `input` shape.
 * @see {@link GetGovCloudAccountInformationCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation failed because the calling identity doesn't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation failed because it specified a resource that can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The operation failed because it specified a resource that is not currently available.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The operation failed because it was called too frequently and exceeded a throttle limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed because one of the input parameters was invalid.</p>
 *
 * @throws {@link AccountServiceException}
 * <p>Base exception class for all service exceptions from Account service.</p>
 *
 *
 * @public
 */
export class GetGovCloudAccountInformationCommand extends $Command
  .classBuilder<
    GetGovCloudAccountInformationCommandInput,
    GetGovCloudAccountInformationCommandOutput,
    AccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Account", "GetGovCloudAccountInformation", {})
  .n("AccountClient", "GetGovCloudAccountInformationCommand")
  .sc(GetGovCloudAccountInformation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGovCloudAccountInformationRequest;
      output: GetGovCloudAccountInformationResponse;
    };
    sdk: {
      input: GetGovCloudAccountInformationCommandInput;
      output: GetGovCloudAccountInformationCommandOutput;
    };
  };
}
