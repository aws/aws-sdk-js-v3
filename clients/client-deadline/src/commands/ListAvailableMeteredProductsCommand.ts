// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAvailableMeteredProductsRequest, ListAvailableMeteredProductsResponse } from "../models/models_1";
import {
  de_ListAvailableMeteredProductsCommand,
  se_ListAvailableMeteredProductsCommand,
} from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "ListAvailableMeteredProducts", {})
  .n("DeadlineClient", "ListAvailableMeteredProductsCommand")
  .f(void 0, void 0)
  .ser(se_ListAvailableMeteredProductsCommand)
  .de(de_ListAvailableMeteredProductsCommand)
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
