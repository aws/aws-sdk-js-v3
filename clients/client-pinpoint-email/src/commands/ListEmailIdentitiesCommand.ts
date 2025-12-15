// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEmailIdentitiesRequest, ListEmailIdentitiesResponse } from "../models/models_0";
import type { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { ListEmailIdentities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEmailIdentitiesCommand}.
 */
export interface ListEmailIdentitiesCommandInput extends ListEmailIdentitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListEmailIdentitiesCommand}.
 */
export interface ListEmailIdentitiesCommandOutput extends ListEmailIdentitiesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all of the email identities that are associated with your Amazon Pinpoint
 *             account. An identity can be either an email address or a domain. This operation returns
 *             identities that are verified as well as those that aren't.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListEmailIdentitiesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, ListEmailIdentitiesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // ListEmailIdentitiesRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListEmailIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListEmailIdentitiesResponse
 * //   EmailIdentities: [ // IdentityInfoList
 * //     { // IdentityInfo
 * //       IdentityType: "EMAIL_ADDRESS" || "DOMAIN" || "MANAGED_DOMAIN",
 * //       IdentityName: "STRING_VALUE",
 * //       SendingEnabled: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEmailIdentitiesCommandInput - {@link ListEmailIdentitiesCommandInput}
 * @returns {@link ListEmailIdentitiesCommandOutput}
 * @see {@link ListEmailIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListEmailIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class ListEmailIdentitiesCommand extends $Command
  .classBuilder<
    ListEmailIdentitiesCommandInput,
    ListEmailIdentitiesCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "ListEmailIdentities", {})
  .n("PinpointEmailClient", "ListEmailIdentitiesCommand")
  .sc(ListEmailIdentities$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEmailIdentitiesRequest;
      output: ListEmailIdentitiesResponse;
    };
    sdk: {
      input: ListEmailIdentitiesCommandInput;
      output: ListEmailIdentitiesCommandOutput;
    };
  };
}
