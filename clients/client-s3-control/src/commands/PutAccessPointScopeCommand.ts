// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccessPointScopeRequest } from "../models/models_1";
import { de_PutAccessPointScopeCommand, se_PutAccessPointScopeCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccessPointScopeCommand}.
 */
export interface PutAccessPointScopeCommandInput extends PutAccessPointScopeRequest {}
/**
 * @public
 *
 * The output of {@link PutAccessPointScopeCommand}.
 */
export interface PutAccessPointScopeCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or replaces the access point scope for a directory bucket. You can use the access point scope to restrict access to specific prefixes, API operations, or a combination of both.</p>
 *          <p>You can include one or more of the following API operations as permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PutObjet</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetObject</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteObject</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListBucket</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetObjectAttributes</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>AbortMultipartUpload</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListBucketMultipartUpload</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListMultiPartUploadParts</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You can specify any amount of prefixes, but the total length of characters of all prefixes must be less than 512 KB in size.</p>
 *          </note>
 *          <p>To use this operation, you must have the permission to perform the
 *          <code>s3express:PutAccessPointScope</code> action.</p>
 *          <p>For information about REST API errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">REST error responses</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessPointScopeCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessPointScopeCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // PutAccessPointScopeRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Scope: { // Scope
 *     Prefixes: [ // PrefixesList
 *       "STRING_VALUE",
 *     ],
 *     Permissions: [ // ScopePermissionList
 *       "GetObject" || "GetObjectAttributes" || "ListMultipartUploadParts" || "ListBucket" || "ListBucketMultipartUploads" || "PutObject" || "DeleteObject" || "AbortMultipartUpload",
 *     ],
 *   },
 * };
 * const command = new PutAccessPointScopeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccessPointScopeCommandInput - {@link PutAccessPointScopeCommandInput}
 * @returns {@link PutAccessPointScopeCommandOutput}
 * @see {@link PutAccessPointScopeCommandInput} for command's `input` shape.
 * @see {@link PutAccessPointScopeCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutAccessPointScopeCommand extends $Command
  .classBuilder<
    PutAccessPointScopeCommandInput,
    PutAccessPointScopeCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    AccessPointName: { type: "contextParams", name: "Name" },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "PutAccessPointScope", {})
  .n("S3ControlClient", "PutAccessPointScopeCommand")
  .f(void 0, void 0)
  .ser(se_PutAccessPointScopeCommand)
  .de(de_PutAccessPointScopeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccessPointScopeRequest;
      output: {};
    };
    sdk: {
      input: PutAccessPointScopeCommandInput;
      output: PutAccessPointScopeCommandOutput;
    };
  };
}
