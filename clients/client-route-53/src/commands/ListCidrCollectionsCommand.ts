// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCidrCollectionsRequest, ListCidrCollectionsResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListCidrCollections } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCidrCollectionsCommand}.
 */
export interface ListCidrCollectionsCommandInput extends ListCidrCollectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCidrCollectionsCommand}.
 */
export interface ListCidrCollectionsCommandOutput extends ListCidrCollectionsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of CIDR collections in the Amazon Web Services account
 * 			(metadata only).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListCidrCollectionsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListCidrCollectionsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListCidrCollectionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCidrCollectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCidrCollectionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   CidrCollections: [ // CollectionSummaries
 * //     { // CollectionSummary
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCidrCollectionsCommandInput - {@link ListCidrCollectionsCommandInput}
 * @returns {@link ListCidrCollectionsCommandOutput}
 * @see {@link ListCidrCollectionsCommandInput} for command's `input` shape.
 * @see {@link ListCidrCollectionsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListCidrCollectionsCommand extends $Command
  .classBuilder<
    ListCidrCollectionsCommandInput,
    ListCidrCollectionsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "ListCidrCollections", {})
  .n("Route53Client", "ListCidrCollectionsCommand")
  .sc(ListCidrCollections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCidrCollectionsRequest;
      output: ListCidrCollectionsResponse;
    };
    sdk: {
      input: ListCidrCollectionsCommandInput;
      output: ListCidrCollectionsCommandOutput;
    };
  };
}
