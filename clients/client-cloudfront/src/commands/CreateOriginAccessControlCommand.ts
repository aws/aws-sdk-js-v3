// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateOriginAccessControlRequest, CreateOriginAccessControlResult } from "../models/models_0";
import { de_CreateOriginAccessControlCommand, se_CreateOriginAccessControlCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOriginAccessControlCommand}.
 */
export interface CreateOriginAccessControlCommandInput extends CreateOriginAccessControlRequest {}
/**
 * @public
 *
 * The output of {@link CreateOriginAccessControlCommand}.
 */
export interface CreateOriginAccessControlCommandOutput extends CreateOriginAccessControlResult, __MetadataBearer {}

/**
 * <p>Creates a new origin access control in CloudFront. After you create an origin access
 * 			control, you can add it to an origin in a CloudFront distribution so that CloudFront sends
 * 			authenticated (signed) requests to the origin.</p>
 *          <p>This makes it possible to block public access to the origin, allowing viewers (users) to
 * 			access the origin's content only through CloudFront.</p>
 *          <p>For more information about using a CloudFront origin access control, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html">Restricting access to an Amazon Web Services origin</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateOriginAccessControlCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateOriginAccessControlCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateOriginAccessControlRequest
 *   OriginAccessControlConfig: { // OriginAccessControlConfig
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     SigningProtocol: "sigv4", // required
 *     SigningBehavior: "never" || "always" || "no-override", // required
 *     OriginAccessControlOriginType: "s3" || "mediastore" || "mediapackagev2" || "lambda", // required
 *   },
 * };
 * const command = new CreateOriginAccessControlCommand(input);
 * const response = await client.send(command);
 * // { // CreateOriginAccessControlResult
 * //   OriginAccessControl: { // OriginAccessControl
 * //     Id: "STRING_VALUE", // required
 * //     OriginAccessControlConfig: { // OriginAccessControlConfig
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       SigningProtocol: "sigv4", // required
 * //       SigningBehavior: "never" || "always" || "no-override", // required
 * //       OriginAccessControlOriginType: "s3" || "mediastore" || "mediapackagev2" || "lambda", // required
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOriginAccessControlCommandInput - {@link CreateOriginAccessControlCommandInput}
 * @returns {@link CreateOriginAccessControlCommandOutput}
 * @see {@link CreateOriginAccessControlCommandInput} for command's `input` shape.
 * @see {@link CreateOriginAccessControlCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link OriginAccessControlAlreadyExists} (client fault)
 *  <p>An origin access control with the specified parameters already exists.</p>
 *
 * @throws {@link TooManyOriginAccessControls} (client fault)
 *  <p>The number of origin access controls in your Amazon Web Services account exceeds the maximum
 * 			allowed.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class CreateOriginAccessControlCommand extends $Command
  .classBuilder<
    CreateOriginAccessControlCommandInput,
    CreateOriginAccessControlCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "CreateOriginAccessControl", {})
  .n("CloudFrontClient", "CreateOriginAccessControlCommand")
  .f(void 0, void 0)
  .ser(se_CreateOriginAccessControlCommand)
  .de(de_CreateOriginAccessControlCommand)
  .build() {}
