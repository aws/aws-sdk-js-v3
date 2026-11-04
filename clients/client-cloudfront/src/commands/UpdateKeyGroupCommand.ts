// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateKeyGroupRequest, UpdateKeyGroupResult } from "../models/models_1";
import { UpdateKeyGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateKeyGroupCommand}.
 */
export interface UpdateKeyGroupCommandInput extends UpdateKeyGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKeyGroupCommand}.
 */
export interface UpdateKeyGroupCommandOutput extends UpdateKeyGroupResult, __MetadataBearer {}

/**
 * Updates a key group.
 *
 * When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group:
 *
 * 1. Get the current key group with `GetKeyGroup` or `GetKeyGroupConfig`.
 * 2. Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs.
 * 3. Call `UpdateKeyGroup` with the entire key group object, including the fields that you modified and those that you didn't.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateKeyGroupRequest
 *   KeyGroupConfig: { // KeyGroupConfig
 *     Name: "STRING_VALUE", // required
 *     Items: [ // PublicKeyIdList // required
 *       "STRING_VALUE",
 *     ],
 *     Comment: "STRING_VALUE",
 *   },
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateKeyGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKeyGroupResult
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
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateKeyGroupCommandInput - {@link UpdateKeyGroupCommandInput}
 * @returns {@link UpdateKeyGroupCommandOutput}
 * @see {@link UpdateKeyGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link KeyGroupAlreadyExists} (client fault)
 *
 * A key group with this name already exists. You must provide a unique name. To modify an existing key group, use `UpdateKeyGroup`.
 *
 * @throws {@link NoSuchResource} (client fault)
 *
 * A resource that was specified is not valid.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
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
export class UpdateKeyGroupCommand extends command<UpdateKeyGroupCommandInput, UpdateKeyGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateKeyGroup",
  UpdateKeyGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKeyGroupRequest;
      output: UpdateKeyGroupResult;
    };
    sdk: {
      input: UpdateKeyGroupCommandInput;
      output: UpdateKeyGroupCommandOutput;
    };
  };
}
