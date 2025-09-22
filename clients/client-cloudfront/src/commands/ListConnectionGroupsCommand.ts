// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListConnectionGroupsRequest, ListConnectionGroupsResult } from "../models/models_1";
import { ListConnectionGroups } from "../schemas/schemas_47_ListConnectionGroups";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectionGroupsCommand}.
 */
export interface ListConnectionGroupsCommandInput extends ListConnectionGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectionGroupsCommand}.
 */
export interface ListConnectionGroupsCommandOutput extends ListConnectionGroupsResult, __MetadataBearer {}

/**
 * <p>Lists the connection groups in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListConnectionGroupsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListConnectionGroupsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListConnectionGroupsRequest
 *   AssociationFilter: { // ConnectionGroupAssociationFilter
 *     AnycastIpListId: "STRING_VALUE",
 *   },
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListConnectionGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectionGroupsResult
 * //   NextMarker: "STRING_VALUE",
 * //   ConnectionGroups: [ // ConnectionGroupSummaryList
 * //     { // ConnectionGroupSummary
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       RoutingEndpoint: "STRING_VALUE", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       ETag: "STRING_VALUE", // required
 * //       AnycastIpListId: "STRING_VALUE",
 * //       Enabled: true || false,
 * //       Status: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConnectionGroupsCommandInput - {@link ListConnectionGroupsCommandInput}
 * @returns {@link ListConnectionGroupsCommandOutput}
 * @see {@link ListConnectionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListConnectionGroupsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListConnectionGroupsCommand extends $Command
  .classBuilder<
    ListConnectionGroupsCommandInput,
    ListConnectionGroupsCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListConnectionGroups", {})
  .n("CloudFrontClient", "ListConnectionGroupsCommand")
  .sc(ListConnectionGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectionGroupsRequest;
      output: ListConnectionGroupsResult;
    };
    sdk: {
      input: ListConnectionGroupsCommandInput;
      output: ListConnectionGroupsCommandOutput;
    };
  };
}
