// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVpcOriginRequest, GetVpcOriginResult } from "../models/models_1";
import { GetVpcOrigin } from "../schemas/schemas_57_Origin";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVpcOriginCommand}.
 */
export interface GetVpcOriginCommandInput extends GetVpcOriginRequest {}
/**
 * @public
 *
 * The output of {@link GetVpcOriginCommand}.
 */
export interface GetVpcOriginCommandOutput extends GetVpcOriginResult, __MetadataBearer {}

/**
 * <p>Get the details of an Amazon CloudFront VPC origin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetVpcOriginCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetVpcOriginCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetVpcOriginRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetVpcOriginCommand(input);
 * const response = await client.send(command);
 * // { // GetVpcOriginResult
 * //   VpcOrigin: { // VpcOrigin
 * //     Id: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     VpcOriginEndpointConfig: { // VpcOriginEndpointConfig
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       HTTPPort: Number("int"), // required
 * //       HTTPSPort: Number("int"), // required
 * //       OriginProtocolPolicy: "http-only" || "match-viewer" || "https-only", // required
 * //       OriginSslProtocols: { // OriginSslProtocols
 * //         Quantity: Number("int"), // required
 * //         Items: [ // SslProtocolsList // required
 * //           "SSLv3" || "TLSv1" || "TLSv1.1" || "TLSv1.2",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVpcOriginCommandInput - {@link GetVpcOriginCommandInput}
 * @returns {@link GetVpcOriginCommandOutput}
 * @see {@link GetVpcOriginCommandInput} for command's `input` shape.
 * @see {@link GetVpcOriginCommandOutput} for command's `response` shape.
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
 * @example To get a VPC origin
 * ```javascript
 * // The following command gets a VPC origin:
 * const input = {
 *   Id: "vo_BQwjxxQxjCaBcQLzJUFkDM"
 * };
 * const command = new GetVpcOriginCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ETag: "ETVPDKIKX0DER",
 *   VpcOrigin: {
 *     Arn: "arn:aws:cloudfront::123456789012:vpcorigin/vo_BQwjxxQxjCaBcQLzJUFkDM",
 *     CreatedTime: "2024-10-15T17:19:42.318Z",
 *     Id: "vo_BQwjxxQxjCaBcQLzJUFkDM",
 *     LastModifiedTime: "2024-10-15T17:24:35.188Z",
 *     Status: "Deployed",
 *     VpcOriginEndpointConfig: {
 *       Arn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-alb-us-west-2/e6aa5c7d26415c6d",
 *       HTTPPort: 80,
 *       HTTPSPort: 443,
 *       Name: "my-vpcorigin-name",
 *       OriginProtocolPolicy: "match-viewer",
 *       OriginSslProtocols: {
 *         Items: [
 *           "TLSv1.1",
 *           "TLSv1.2"
 *         ],
 *         Quantity: 2
 *       }
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetVpcOriginCommand extends $Command
  .classBuilder<
    GetVpcOriginCommandInput,
    GetVpcOriginCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetVpcOrigin", {})
  .n("CloudFrontClient", "GetVpcOriginCommand")
  .sc(GetVpcOrigin)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVpcOriginRequest;
      output: GetVpcOriginResult;
    };
    sdk: {
      input: GetVpcOriginCommandInput;
      output: GetVpcOriginCommandOutput;
    };
  };
}
