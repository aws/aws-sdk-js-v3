// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep4, _mw1, command } from "../commandBuilder";
import type { PutAccessPointScopeRequest } from "../models/models_0";
import { PutAccessPointScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *          <note>
 *             <p>You can specify any amount of prefixes, but the total length of characters of all prefixes must be less than 256 bytes in size.</p>
 *          </note>
 *          <p>To use this operation, you must have the permission to perform the
 *          <code>s3express:PutAccessPointScope</code> action.</p>
 *          <p>For information about REST API errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">REST error responses</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessPointScopeCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessPointScopeCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
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
export class PutAccessPointScopeCommand extends command<PutAccessPointScopeCommandInput, PutAccessPointScopeCommandOutput>(
  _ep4,
  _mw1,
  "PutAccessPointScope",
  PutAccessPointScope$
) {
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
