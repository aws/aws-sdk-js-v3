// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMeteredProductsRequest, ListMeteredProductsResponse } from "../models/models_1";
import { ListMeteredProducts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMeteredProductsCommand}.
 */
export interface ListMeteredProductsCommandInput extends ListMeteredProductsRequest {}
/**
 * @public
 *
 * The output of {@link ListMeteredProductsCommand}.
 */
export interface ListMeteredProductsCommandOutput extends ListMeteredProductsResponse, __MetadataBearer {}

/**
 * <p>Lists metered products.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListMeteredProductsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListMeteredProductsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListMeteredProductsRequest
 *   licenseEndpointId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMeteredProductsCommand(input);
 * const response = await client.send(command);
 * // { // ListMeteredProductsResponse
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
 * @param ListMeteredProductsCommandInput - {@link ListMeteredProductsCommandInput}
 * @returns {@link ListMeteredProductsCommandOutput}
 * @see {@link ListMeteredProductsCommandInput} for command's `input` shape.
 * @see {@link ListMeteredProductsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListMeteredProductsCommand extends $Command
  .classBuilder<
    ListMeteredProductsCommandInput,
    ListMeteredProductsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "ListMeteredProducts", {})
  .n("DeadlineClient", "ListMeteredProductsCommand")
  .sc(ListMeteredProducts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMeteredProductsRequest;
      output: ListMeteredProductsResponse;
    };
    sdk: {
      input: ListMeteredProductsCommandInput;
      output: ListMeteredProductsCommandOutput;
    };
  };
}
