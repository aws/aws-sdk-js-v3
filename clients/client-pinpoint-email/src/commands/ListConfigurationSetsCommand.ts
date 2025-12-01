// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListConfigurationSetsRequest, ListConfigurationSetsResponse } from "../models/models_0";
import type { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { ListConfigurationSets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationSetsCommand}.
 */
export interface ListConfigurationSetsCommandInput extends ListConfigurationSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationSetsCommand}.
 */
export interface ListConfigurationSetsCommandOutput extends ListConfigurationSetsResponse, __MetadataBearer {}

/**
 * <p>List all of the configuration sets associated with your Amazon Pinpoint account in the current
 *             region.</p>
 *         <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can
 *             apply to the emails you send. You apply a configuration set to an email by including a
 *             reference to the configuration set in the headers of the email. When you apply a
 *             configuration set to an email, all of the rules in that configuration set are applied to
 *             the email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListConfigurationSetsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, ListConfigurationSetsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // ListConfigurationSetsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListConfigurationSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationSetsResponse
 * //   ConfigurationSets: [ // ConfigurationSetNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationSetsCommandInput - {@link ListConfigurationSetsCommandInput}
 * @returns {@link ListConfigurationSetsCommandOutput}
 * @see {@link ListConfigurationSetsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationSetsCommandOutput} for command's `response` shape.
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
export class ListConfigurationSetsCommand extends $Command
  .classBuilder<
    ListConfigurationSetsCommandInput,
    ListConfigurationSetsCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "ListConfigurationSets", {})
  .n("PinpointEmailClient", "ListConfigurationSetsCommand")
  .sc(ListConfigurationSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationSetsRequest;
      output: ListConfigurationSetsResponse;
    };
    sdk: {
      input: ListConfigurationSetsCommandInput;
      output: ListConfigurationSetsCommandOutput;
    };
  };
}
