// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCidrBlocksRequest, ListCidrBlocksResponse } from "../models/models_0";
import { de_ListCidrBlocksCommand, se_ListCidrBlocksCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDnsV20130401", "ListCidrBlocks", {})
  .n("Route53Client", "ListCidrBlocksCommand")
  .f(void 0, void 0)
  .ser(se_ListCidrBlocksCommand)
  .de(de_ListCidrBlocksCommand)
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
