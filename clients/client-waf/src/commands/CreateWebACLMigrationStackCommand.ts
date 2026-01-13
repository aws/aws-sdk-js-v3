// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateWebACLMigrationStackRequest, CreateWebACLMigrationStackResponse } from "../models/models_0";
import { CreateWebACLMigrationStack$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket.
 *            Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2.
 *            Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF.</p>
 *          <p>This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF.
 *            For the full procedure, including caveats and manual steps to complete
 *            the migration and switch over to the new web ACL, see
 *            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-migrating-from-classic.html">Migrating your AWS WAF Classic resources to AWS WAF</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF
 *   Developer Guide</a>.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateWebACLMigrationStackCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateWebACLMigrationStackCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
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
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFEntityMigrationException} (client fault)
 *  <p>The operation failed due to a problem with the migration. The failure cause is provided in the exception, in the <code>MigrationErrorType</code>: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ENTITY_NOT_SUPPORTED</code> - The web ACL has an unsupported entity but the <code>IgnoreUnsupportedType</code> is not set to true.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ENTITY_NOT_FOUND</code> - The web ACL doesn't exist.  </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>S3_BUCKET_NO_PERMISSION</code> - You don't have permission to perform the <code>PutObject</code> action to the specified Amazon S3 bucket.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>S3_BUCKET_NOT_ACCESSIBLE</code> - The bucket policy doesn't allow AWS WAF to perform the <code>PutObject</code> action in the bucket.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>S3_BUCKET_NOT_FOUND</code> - The S3 bucket doesn't exist. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>S3_BUCKET_INVALID_REGION</code> - The S3 bucket is not in the same Region as the web ACL.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>S3_INTERNAL_ERROR</code> - AWS WAF failed to create the template in the S3 bucket for another reason.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do. For example:</p>
 * 			      <ul>
 *             <li>
 *                <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code>
 * 					isn't in the specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the
 * 					specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code>
 *                already exists in the specified <code>WebACL</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p>
 * 			      <ul>
 *             <li>
 *                <p>You specified an invalid parameter name.</p>
 *             </li>
 *             <li>
 *                <p>You specified an invalid value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>)
 * 					using an action other than <code>INSERT</code> or <code>DELETE</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 * 		 	           <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p>
 * 		          </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code>
 *                   <code>Type</code> other than
 * 					HEADER, METHOD, QUERY_STRING, URI, or BODY.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code>
 * 					but no value for <code>Data</code>.</p>
 *             </li>
 *             <li>
 * 			   		       <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p>
 * 			   	     </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 *
 * @public
 */
export class CreateWebACLMigrationStackCommand extends $Command
  .classBuilder<
    CreateWebACLMigrationStackCommandInput,
    CreateWebACLMigrationStackCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20150824", "CreateWebACLMigrationStack", {})
  .n("WAFClient", "CreateWebACLMigrationStackCommand")
  .sc(CreateWebACLMigrationStack$)
  .build() {
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
