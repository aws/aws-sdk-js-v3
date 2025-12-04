// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCidrBlocksRequest, ListCidrBlocksResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListCidrBlocks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCidrBlocksCommand}.
 */
export interface ListCidrBlocksCommandInput extends ListCidrBlocksRequest {}
/**
 * @public
 *
 * The output of {@link ListCidrBlocksCommand}.
 */
export interface ListCidrBlocksCommandOutput extends ListCidrBlocksResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of location objects and their CIDR blocks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListCidrBlocksCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListCidrBlocksCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListCidrBlocksRequest
 *   CollectionId: "STRING_VALUE", // required
 *   LocationName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCidrBlocksCommand(input);
 * const response = await client.send(command);
 * // { // ListCidrBlocksResponse
 * //   NextToken: "STRING_VALUE",
 * //   CidrBlocks: [ // CidrBlockSummaries
 * //     { // CidrBlockSummary
 * //       CidrBlock: "STRING_VALUE",
 * //       LocationName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCidrBlocksCommandInput - {@link ListCidrBlocksCommandInput}
 * @returns {@link ListCidrBlocksCommandOutput}
 * @see {@link ListCidrBlocksCommandInput} for command's `input` shape.
 * @see {@link ListCidrBlocksCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchCidrCollectionException} (client fault)
 *  <p>The CIDR collection you specified, doesn't exist.</p>
 *
 * @throws {@link NoSuchCidrLocationException} (client fault)
 *  <p>The CIDR collection location doesn't match any locations in your account.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListCidrBlocksCommand extends $Command
  .classBuilder<
    ListCidrBlocksCommandInput,
    ListCidrBlocksCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "ListCidrBlocks", {})
  .n("Route53Client", "ListCidrBlocksCommand")
  .sc(ListCidrBlocks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCidrBlocksRequest;
      output: ListCidrBlocksResponse;
    };
    sdk: {
      input: ListCidrBlocksCommandInput;
      output: ListCidrBlocksCommandOutput;
    };
  };
}
