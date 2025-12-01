// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { ListRelaysRequest, ListRelaysResponse } from "../models/models_0";
import { ListRelays } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRelaysCommand}.
 */
export interface ListRelaysCommandInput extends ListRelaysRequest {}
/**
 * @public
 *
 * The output of {@link ListRelaysCommand}.
 */
export interface ListRelaysCommandOutput extends ListRelaysResponse, __MetadataBearer {}

/**
 * <p>Lists all the existing relay resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, ListRelaysCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, ListRelaysCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // ListRelaysRequest
 *   PageSize: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRelaysCommand(input);
 * const response = await client.send(command);
 * // { // ListRelaysResponse
 * //   Relays: [ // Relays // required
 * //     { // Relay
 * //       RelayId: "STRING_VALUE",
 * //       RelayName: "STRING_VALUE",
 * //       LastModifiedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRelaysCommandInput - {@link ListRelaysCommandInput}
 * @returns {@link ListRelaysCommandOutput}
 * @see {@link ListRelaysCommandInput} for command's `input` shape.
 * @see {@link ListRelaysCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class ListRelaysCommand extends $Command
  .classBuilder<
    ListRelaysCommandInput,
    ListRelaysCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "ListRelays", {})
  .n("MailManagerClient", "ListRelaysCommand")
  .sc(ListRelays)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRelaysRequest;
      output: ListRelaysResponse;
    };
    sdk: {
      input: ListRelaysCommandInput;
      output: ListRelaysCommandOutput;
    };
  };
}
