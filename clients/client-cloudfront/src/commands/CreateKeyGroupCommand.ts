// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateKeyGroupRequest, CreateKeyGroupResult } from "../models/models_0";
import { CreateKeyGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a key group that you can use with [CloudFront signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).
 *
 * To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
 *
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
 *
 * An argument is invalid.
 *
 * @throws {@link KeyGroupAlreadyExists} (client fault)
 *
 * A key group with this name already exists. You must provide a unique name. To modify an existing key group, use `UpdateKeyGroup`.
 *
 * @throws {@link TooManyKeyGroups} (client fault)
 *
 * You have reached the maximum number of key groups for this Amazon Web Services account. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyPublicKeysInKeyGroup} (client fault)
 *
 * The number of public keys in this key group is more than the maximum allowed. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateKeyGroupCommand extends command<CreateKeyGroupCommandInput, CreateKeyGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateKeyGroup",
  CreateKeyGroup$
) {
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
