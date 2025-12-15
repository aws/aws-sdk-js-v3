// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAvailableMeteredProductsRequest, ListAvailableMeteredProductsResponse } from "../models/models_1";
import { ListAvailableMeteredProducts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableMeteredProductsCommand}.
 */
export interface ListAvailableMeteredProductsCommandInput extends ListAvailableMeteredProductsRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableMeteredProductsCommand}.
 */
export interface ListAvailableMeteredProductsCommandOutput
  extends ListAvailableMeteredProductsResponse,
    __MetadataBearer {}

/**
 * <p>A list of the available metered products.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListAvailableMeteredProductsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListAvailableMeteredProductsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListAvailableMeteredProductsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAvailableMeteredProductsCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableMeteredProductsResponse
 * //   meteredProducts: [ // MeteredProductSummaryList // required
 * //     { // MeteredProductSummary
 * //       productId: "STRING_VALUE", // required
 * //       family: "STRING_VALUE", // required
 * //       vendor: "STRING_VALUE", // required
 * //       port: Number("int"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailableMeteredProductsCommandInput - {@link ListAvailableMeteredProductsCommandInput}
 * @returns {@link ListAvailableMeteredProductsCommandOutput}
 * @see {@link ListAvailableMeteredProductsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableMeteredProductsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListAvailableMeteredProductsCommand extends $Command
  .classBuilder<
    ListAvailableMeteredProductsCommandInput,
    ListAvailableMeteredProductsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "ListAvailableMeteredProducts", {})
  .n("DeadlineClient", "ListAvailableMeteredProductsCommand")
  .sc(ListAvailableMeteredProducts$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAvailableMeteredProductsRequest;
      output: ListAvailableMeteredProductsResponse;
    };
    sdk: {
      input: ListAvailableMeteredProductsCommandInput;
      output: ListAvailableMeteredProductsCommandOutput;
    };
  };
}
