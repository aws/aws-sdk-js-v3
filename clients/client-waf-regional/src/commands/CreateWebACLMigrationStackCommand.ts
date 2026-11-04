// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWebACLMigrationStackRequest, CreateWebACLMigrationStackResponse } from "../models/models_0";
import { CreateWebACLMigrationStack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWebACLMigrationStackCommand}.
 */
export interface CreateWebACLMigrationStackCommandInput extends CreateWebACLMigrationStackRequest {}
/**
 * @public
 *
 * The output of {@link CreateWebACLMigrationStackCommand}.
 */
export interface CreateWebACLMigrationStackCommandOutput extends CreateWebACLMigrationStackResponse, __MetadataBearer {}

/**
 * Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket. Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2. Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF.
 *
 * This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF. For the full procedure, including caveats and manual steps to complete the migration and switch over to the new web ACL, see [Migrating your AWS WAF Classic resources to AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-migrating-from-classic.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateWebACLMigrationStackCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateWebACLMigrationStackCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // CreateWebACLMigrationStackRequest
 *   WebACLId: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE", // required
 *   IgnoreUnsupportedType: true || false, // required
 * };
 * const command = new CreateWebACLMigrationStackCommand(input);
 * const response = await client.send(command);
 * // { // CreateWebACLMigrationStackResponse
 * //   S3ObjectUrl: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWebACLMigrationStackCommandInput - {@link CreateWebACLMigrationStackCommandInput}
 * @returns {@link CreateWebACLMigrationStackCommandOutput}
 * @see {@link CreateWebACLMigrationStackCommandInput} for command's `input` shape.
 * @see {@link CreateWebACLMigrationStackCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFEntityMigrationException} (client fault)
 *
 * The operation failed due to a problem with the migration. The failure cause is provided in the exception, in the `MigrationErrorType`:
 *
 * - `ENTITY_NOT_SUPPORTED` - The web ACL has an unsupported entity but the `IgnoreUnsupportedType` is not set to true.
 * - `ENTITY_NOT_FOUND` - The web ACL doesn't exist.
 * - `S3_BUCKET_NO_PERMISSION` - You don't have permission to perform the `PutObject` action to the specified Amazon S3 bucket.
 * - `S3_BUCKET_NOT_ACCESSIBLE` - The bucket policy doesn't allow AWS WAF to perform the `PutObject` action in the bucket.
 * - `S3_BUCKET_NOT_FOUND` - The S3 bucket doesn't exist.
 * - `S3_BUCKET_INVALID_REGION` - The S3 bucket is not in the same Region as the web ACL.
 * - `S3_INTERNAL_ERROR` - AWS WAF failed to create the template in the S3 bucket for another reason.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *
 * The operation failed because there was nothing to do. For example:
 *
 * - You tried to remove a `Rule` from a `WebACL`, but the `Rule` isn't in the specified `WebACL`.
 * - You tried to remove an IP address from an `IPSet`, but the IP address isn't in the specified `IPSet`.
 * - You tried to remove a `ByteMatchTuple` from a `ByteMatchSet`, but the `ByteMatchTuple` isn't in the specified `WebACL`.
 * - You tried to add a `Rule` to a `WebACL`, but the `Rule` already exists in the specified `WebACL`.
 * - You tried to add a `ByteMatchTuple` to a `ByteMatchSet`, but the `ByteMatchTuple` already exists in the specified `WebACL`.
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *
 * The operation failed because AWS WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified an invalid parameter name.
 * - You specified an invalid value.
 * - You tried to update an object (`ByteMatchSet`, `IPSet`, `Rule`, or `WebACL`) using an action other than `INSERT` or `DELETE`.
 * - You tried to create a `WebACL` with a `DefaultAction` `Type` other than `ALLOW`, `BLOCK`, or `COUNT`.
 * - You tried to create a `RateBasedRule` with a `RateKey` value other than `IP`.
 * - You tried to update a `WebACL` with a `WafAction` `Type` other than `ALLOW`, `BLOCK`, or `COUNT`.
 * - You tried to update a `ByteMatchSet` with a `FieldToMatch` `Type` other than HEADER, METHOD, QUERY_STRING, URI, or BODY.
 * - You tried to update a `ByteMatchSet` with a `Field` of `HEADER` but no value for `Data`.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * The operation failed because the referenced object doesn't exist.
 *
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @public
 */
export class CreateWebACLMigrationStackCommand extends command<CreateWebACLMigrationStackCommandInput, CreateWebACLMigrationStackCommandOutput>(
  _ep0,
  _mw0,
  "CreateWebACLMigrationStack",
  CreateWebACLMigrationStack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWebACLMigrationStackRequest;
      output: CreateWebACLMigrationStackResponse;
    };
    sdk: {
      input: CreateWebACLMigrationStackCommandInput;
      output: CreateWebACLMigrationStackCommandOutput;
    };
  };
}
