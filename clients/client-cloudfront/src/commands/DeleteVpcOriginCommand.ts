// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVpcOriginRequest, DeleteVpcOriginResult } from "../models/models_0";
import { DeleteVpcOrigin } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcOriginCommand}.
 */
export interface DeleteVpcOriginCommandInput extends DeleteVpcOriginRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcOriginCommand}.
 */
export interface DeleteVpcOriginCommandOutput extends DeleteVpcOriginResult, __MetadataBearer {}

/**
 * <p>Delete an Amazon CloudFront VPC origin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteVpcOriginCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteVpcOriginCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteVpcOriginRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcOriginCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcOriginResult
 * //   VpcOrigin: { // VpcOrigin
 * //     Id: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     AccountId: "STRING_VALUE",
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
 * @param DeleteVpcOriginCommandInput - {@link DeleteVpcOriginCommandInput}
 * @returns {@link DeleteVpcOriginCommandOutput}
 * @see {@link DeleteVpcOriginCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcOriginCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CannotDeleteEntityWhileInUse} (client fault)
 *  <p>The entity cannot be deleted while it is in use.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link IllegalDelete} (client fault)
 *  <p>Deletion is not allowed for this entity.</p>
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
 * @example To delete a VPC origin
 * ```javascript
 * // The following command deletes a VPC origin:
 * const input = {
 *   Id: "vo_BQwjxxQxjCaBcQLzJUFkDM",
 *   IfMatch: "E1F83G8C2ARO7P"
 * };
 * const command = new DeleteVpcOriginCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ETag: "E1PA6795UKMFR9",
 *   VpcOrigin: {
 *     Arn: "arn:aws:cloudfront::123456789012:vpcorigin/vo_BQwjxxQxjCaBcQLzJUFkDM",
 *     CreatedTime: "2024-10-15T17:19:42.318Z",
 *     Id: "vo_BQwjxxQxjCaBcQLzJUFkDM",
 *     LastModifiedTime: "2024-10-15T17:57:08.965Z",
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
export class DeleteVpcOriginCommand extends $Command
  .classBuilder<
    DeleteVpcOriginCommandInput,
    DeleteVpcOriginCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "DeleteVpcOrigin", {})
  .n("CloudFrontClient", "DeleteVpcOriginCommand")
  .sc(DeleteVpcOrigin)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcOriginRequest;
      output: DeleteVpcOriginResult;
    };
    sdk: {
      input: DeleteVpcOriginCommandInput;
      output: DeleteVpcOriginCommandOutput;
    };
  };
}
