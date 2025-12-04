// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSinksInput, ListSinksOutput } from "../models/models_0";
import type { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { ListSinks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSinksCommand}.
 */
export interface ListSinksCommandInput extends ListSinksInput {}
/**
 * @public
 *
 * The output of {@link ListSinksCommand}.
 */
export interface ListSinksCommandOutput extends ListSinksOutput, __MetadataBearer {}

/**
 * <p>Use this operation in a monitoring account to return the list of sinks created in that account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, ListSinksCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, ListSinksCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * // import type { OAMClientConfig } from "@aws-sdk/client-oam";
 * const config = {}; // type is OAMClientConfig
 * const client = new OAMClient(config);
 * const input = { // ListSinksInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSinksCommand(input);
 * const response = await client.send(command);
 * // { // ListSinksOutput
 * //   Items: [ // ListSinksItems // required
 * //     { // ListSinksItem
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSinksCommandInput - {@link ListSinksCommandInput}
 * @returns {@link ListSinksCommandOutput}
 * @see {@link ListSinksCommandInput} for command's `input` shape.
 * @see {@link ListSinksCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 *
 * @public
 */
export class ListSinksCommand extends $Command
  .classBuilder<
    ListSinksCommandInput,
    ListSinksCommandOutput,
    OAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("oamservice", "ListSinks", {})
  .n("OAMClient", "ListSinksCommand")
  .sc(ListSinks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSinksInput;
      output: ListSinksOutput;
    };
    sdk: {
      input: ListSinksCommandInput;
      output: ListSinksCommandOutput;
    };
  };
}
