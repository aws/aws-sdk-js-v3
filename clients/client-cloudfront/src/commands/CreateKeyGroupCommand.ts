// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateKeyGroupRequest, CreateKeyGroupResult } from "../models/models_0";
import { CreateKeyGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKeyGroupCommand}.
 */
export interface CreateKeyGroupCommandInput extends CreateKeyGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeyGroupCommand}.
 */
export interface CreateKeyGroupCommandOutput extends CreateKeyGroupResult, __MetadataBearer {}

/**
 * <p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> <p>To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateKeyGroupRequest
 *   KeyGroupConfig: { // KeyGroupConfig
 *     Name: "STRING_VALUE", // required
 *     Items: [ // PublicKeyIdList // required
 *       "STRING_VALUE",
 *     ],
 *     Comment: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateKeyGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeyGroupResult
 * //   KeyGroup: { // KeyGroup
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     KeyGroupConfig: { // KeyGroupConfig
 * //       Name: "STRING_VALUE", // required
 * //       Items: [ // PublicKeyIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Comment: "STRING_VALUE",
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateKeyGroupCommandInput - {@link CreateKeyGroupCommandInput}
 * @returns {@link CreateKeyGroupCommandOutput}
 * @see {@link CreateKeyGroupCommandInput} for command's `input` shape.
 * @see {@link CreateKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link KeyGroupAlreadyExists} (client fault)
 *  <p>A key group with this name already exists. You must provide a unique name. To modify an existing key group, use <code>UpdateKeyGroup</code>.</p>
 *
 * @throws {@link TooManyKeyGroups} (client fault)
 *  <p>You have reached the maximum number of key groups for this Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyPublicKeysInKeyGroup} (client fault)
 *  <p>The number of public keys in this key group is more than the maximum allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class CreateKeyGroupCommand extends $Command
  .classBuilder<
    CreateKeyGroupCommandInput,
    CreateKeyGroupCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "CreateKeyGroup", {})
  .n("CloudFrontClient", "CreateKeyGroupCommand")
  .sc(CreateKeyGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKeyGroupRequest;
      output: CreateKeyGroupResult;
    };
    sdk: {
      input: CreateKeyGroupCommandInput;
      output: CreateKeyGroupCommandOutput;
    };
  };
}
