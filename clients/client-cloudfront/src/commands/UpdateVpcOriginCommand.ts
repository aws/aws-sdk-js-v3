// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateVpcOriginRequest, UpdateVpcOriginResult } from "../models/models_2";
import { de_UpdateVpcOriginCommand, se_UpdateVpcOriginCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVpcOriginCommand}.
 */
export interface UpdateVpcOriginCommandInput extends UpdateVpcOriginRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVpcOriginCommand}.
 */
export interface UpdateVpcOriginCommandOutput extends UpdateVpcOriginResult, __MetadataBearer {}

/**
 * <p>Update an Amazon CloudFront VPC origin in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateVpcOriginCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateVpcOriginCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateVpcOriginRequest
 *   VpcOriginEndpointConfig: { // VpcOriginEndpointConfig
 *     Name: "STRING_VALUE", // required
 *     Arn: "STRING_VALUE", // required
 *     HTTPPort: Number("int"), // required
 *     HTTPSPort: Number("int"), // required
 *     OriginProtocolPolicy: "http-only" || "match-viewer" || "https-only", // required
 *     OriginSslProtocols: { // OriginSslProtocols
 *       Quantity: Number("int"), // required
 *       Items: [ // SslProtocolsList // required
 *         "SSLv3" || "TLSv1" || "TLSv1.1" || "TLSv1.2",
 *       ],
 *     },
 *   },
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new UpdateVpcOriginCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVpcOriginResult
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
 * @param UpdateVpcOriginCommandInput - {@link UpdateVpcOriginCommandInput}
 * @returns {@link UpdateVpcOriginCommandOutput}
 * @see {@link UpdateVpcOriginCommandInput} for command's `input` shape.
 * @see {@link UpdateVpcOriginCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CannotUpdateEntityWhileInUse} (client fault)
 *  <p>The entity cannot be updated while it is in use.</p>
 *
 * @throws {@link EntityAlreadyExists} (client fault)
 *  <p>The entity already exists. You must provide a unique entity.</p>
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *  <p>The entity limit has been exceeded.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link IllegalUpdate} (client fault)
 *  <p>The update contains modifications that are not allowed.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @example To update a VPC origin
 * ```javascript
 * // The following command updates a VPC origin:
 * const input = {
 *   Id: "vo_BQwjxxQxjCaBcQLzJUFkDM",
 *   IfMatch: "ETVPDKIKX0DER",
 *   VpcOriginEndpointConfig: {
 *     Arn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-alb-us-west-2/e6aa5c7d26415c6d",
 *     HTTPPort: 80,
 *     HTTPSPort: 443,
 *     Name: "my-vpcorigin-name",
 *     OriginProtocolPolicy: "match-viewer",
 *     OriginSslProtocols: {
 *       Items: [
 *         "TLSv1.1",
 *         "TLSv1.2"
 *       ],
 *       Quantity: 2
 *     }
 *   }
 * };
 * const command = new UpdateVpcOriginCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ETag: "E3UN6WX5RRO2AG",
 *   VpcOrigin: {
 *     Arn: "arn:aws:cloudfront::123456789012:vpcorigin/vo_BQwjxxQxjCaBcQLzJUFkDM",
 *     CreatedTime: "2024-10-15T17:19:42.318Z",
 *     Id: "vo_BQwjxxQxjCaBcQLzJUFkDM",
 *     LastModifiedTime: "2024-10-15T17:47:08.133Z",
 *     Status: "Deploying",
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
export class UpdateVpcOriginCommand extends $Command
  .classBuilder<
    UpdateVpcOriginCommandInput,
    UpdateVpcOriginCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "UpdateVpcOrigin", {})
  .n("CloudFrontClient", "UpdateVpcOriginCommand")
  .f(void 0, void 0)
  .ser(se_UpdateVpcOriginCommand)
  .de(de_UpdateVpcOriginCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVpcOriginRequest;
      output: UpdateVpcOriginResult;
    };
    sdk: {
      input: UpdateVpcOriginCommandInput;
      output: UpdateVpcOriginCommandOutput;
    };
  };
}
