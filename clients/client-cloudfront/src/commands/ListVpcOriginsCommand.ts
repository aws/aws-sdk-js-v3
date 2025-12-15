// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListVpcOriginsRequest, ListVpcOriginsResult } from "../models/models_1";
import { ListVpcOrigins$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVpcOriginsCommand}.
 */
export interface ListVpcOriginsCommandInput extends ListVpcOriginsRequest {}
/**
 * @public
 *
 * The output of {@link ListVpcOriginsCommand}.
 */
export interface ListVpcOriginsCommandOutput extends ListVpcOriginsResult, __MetadataBearer {}

/**
 * <p>List the CloudFront VPC origins in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListVpcOriginsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListVpcOriginsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListVpcOriginsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListVpcOriginsCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcOriginsResult
 * //   VpcOriginList: { // VpcOriginList
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // VpcOriginSummaryList
 * //       { // VpcOriginSummary
 * //         Id: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         Status: "STRING_VALUE", // required
 * //         CreatedTime: new Date("TIMESTAMP"), // required
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //         Arn: "STRING_VALUE", // required
 * //         AccountId: "STRING_VALUE",
 * //         OriginEndpointArn: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListVpcOriginsCommandInput - {@link ListVpcOriginsCommandInput}
 * @returns {@link ListVpcOriginsCommandOutput}
 * @see {@link ListVpcOriginsCommandInput} for command's `input` shape.
 * @see {@link ListVpcOriginsCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @example To list VPC origins
 * ```javascript
 * // The following command lists VPC origins:
 * const input = { /* empty *\/ };
 * const command = new ListVpcOriginsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   VpcOriginList: {
 *     IsTruncated: true,
 *     Items: [
 *       {
 *         Arn: "arn:aws:cloudfront::123456789012:vpcorigin/vo_BQwjxxQxjCaBcQLzJUFkDM",
 *         CreatedTime: "2024-10-15T17:19:42.318Z",
 *         Id: "vo_BQwjxxQxjCaBcQLzJUFkDM",
 *         LastModifiedTime: "2024-10-15T17:24:35.188Z",
 *         Name: "my-vpcorigin-name",
 *         OriginEndpointArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-alb-us-west-2/e6aa5c7d26415c6d",
 *         Status: "Deployed"
 *       }
 *     ],
 *     Marker: "a",
 *     MaxItems: 100,
 *     Quantity: 1
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListVpcOriginsCommand extends $Command
  .classBuilder<
    ListVpcOriginsCommandInput,
    ListVpcOriginsCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListVpcOrigins", {})
  .n("CloudFrontClient", "ListVpcOriginsCommand")
  .sc(ListVpcOrigins$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVpcOriginsRequest;
      output: ListVpcOriginsResult;
    };
    sdk: {
      input: ListVpcOriginsCommandInput;
      output: ListVpcOriginsCommandOutput;
    };
  };
}
