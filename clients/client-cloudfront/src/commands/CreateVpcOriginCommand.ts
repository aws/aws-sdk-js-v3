// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpcOriginRequest, CreateVpcOriginResult } from "../models/models_1";
import { de_CreateVpcOriginCommand, se_CreateVpcOriginCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcOriginCommand}.
 */
export interface CreateVpcOriginCommandInput extends CreateVpcOriginRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcOriginCommand}.
 */
export interface CreateVpcOriginCommandOutput extends CreateVpcOriginResult, __MetadataBearer {}

/**
 * <p>Create an Amazon CloudFront VPC origin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateVpcOriginCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateVpcOriginCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFrontClient(config);
 * const input = { // CreateVpcOriginRequest
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
 *   Tags: { // Tags
 *     Items: [ // TagList
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateVpcOriginCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcOriginResult
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
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVpcOriginCommandInput - {@link CreateVpcOriginCommandInput}
 * @returns {@link CreateVpcOriginCommandOutput}
 * @see {@link CreateVpcOriginCommandInput} for command's `input` shape.
 * @see {@link CreateVpcOriginCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityAlreadyExists} (client fault)
 *  <p>The entity already exists. You must provide a unique
 * 			entity.</p>
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *  <p>The entity limit has been exceeded.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidTagging} (client fault)
 *  <p>The tagging specified is not valid.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 * @example To create a VPC origin
 * ```javascript
 * // The following command creates a VPC origin:
 * const input = {
 *   "VpcOriginEndpointConfig": {
 *     "Arn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-alb-us-west-2/e6aa5c7d26415c6d",
 *     "HTTPPort": 80,
 *     "HTTPSPort": 443,
 *     "Name": "my-vpcorigin-name",
 *     "OriginProtocolPolicy": "match-viewer",
 *     "OriginSslProtocols": {
 *       "Items": [
 *         "TLSv1.1",
 *         "TLSv1.2"
 *       ],
 *       "Quantity": 2
 *     }
 *   }
 * };
 * const command = new CreateVpcOriginCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "E23ZP02F085DFQ",
 *   "Location": "https://cloudfront.amazonaws.com/2020-05-31/vpc-origin/vo_BQwjxxQxjCaBcQLzJUFkDM",
 *   "VpcOrigin": {
 *     "Arn": "arn:aws:cloudfront::123456789012:vpcorigin/vo_BQwjxxQxjCaBcQLzJUFkDM",
 *     "CreatedTime": "2024-10-15T17:19:42.318Z",
 *     "Id": "vo_BQwjxxQxjCaBcQLzJUFkDM",
 *     "LastModifiedTime": "2024-10-15T17:19:42.318Z",
 *     "Status": "Deploying",
 *     "VpcOriginEndpointConfig": {
 *       "Arn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-alb-us-west-2/e6aa5c7d26415c6d",
 *       "HTTPPort": 80,
 *       "HTTPSPort": 443,
 *       "Name": "my-vpcorigin-name",
 *       "OriginProtocolPolicy": "match-viewer",
 *       "OriginSslProtocols": {
 *         "Items": [
 *           "TLSv1.1",
 *           "TLSv1.2"
 *         ],
 *         "Quantity": 2
 *       }
 *     }
 *   }
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class CreateVpcOriginCommand extends $Command
  .classBuilder<
    CreateVpcOriginCommandInput,
    CreateVpcOriginCommandOutput,
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
  .s("Cloudfront2020_05_31", "CreateVpcOrigin", {})
  .n("CloudFrontClient", "CreateVpcOriginCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpcOriginCommand)
  .de(de_CreateVpcOriginCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcOriginRequest;
      output: CreateVpcOriginResult;
    };
    sdk: {
      input: CreateVpcOriginCommandInput;
      output: CreateVpcOriginCommandOutput;
    };
  };
}
