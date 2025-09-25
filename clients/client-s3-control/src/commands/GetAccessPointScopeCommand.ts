// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessPointScopeRequest, GetAccessPointScopeResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessPointScope } from "../schemas/schemas_17_AccessPoint";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessPointScopeCommand}.
 */
export interface GetAccessPointScopeCommandInput extends GetAccessPointScopeRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPointScopeCommand}.
 */
export interface GetAccessPointScopeCommandOutput extends GetAccessPointScopeResult, __MetadataBearer {}

/**
 * <p> Returns the access point scope for a directory bucket.</p>
 *          <p>To use this operation, you must have the permission to perform the
 *             <code>s3express:GetAccessPointScope</code>
 *          action.</p>
 *          <p>For information about REST API errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses">REST error responses</a>.</p>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointScopeCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointScopeCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessPointScopeRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPointScopeCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPointScopeResult
 * //   Scope: { // Scope
 * //     Prefixes: [ // PrefixesList
 * //       "STRING_VALUE",
 * //     ],
 * //     Permissions: [ // ScopePermissionList
 * //       "GetObject" || "GetObjectAttributes" || "ListMultipartUploadParts" || "ListBucket" || "ListBucketMultipartUploads" || "PutObject" || "DeleteObject" || "AbortMultipartUpload",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessPointScopeCommandInput - {@link GetAccessPointScopeCommandInput}
 * @returns {@link GetAccessPointScopeCommandOutput}
 * @see {@link GetAccessPointScopeCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointScopeCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetAccessPointScopeCommand extends $Command
  .classBuilder<
    GetAccessPointScopeCommandInput,
    GetAccessPointScopeCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getProcessArnablesPlugin(config)];
  })
  .s("AWSS3ControlServiceV20180820", "GetAccessPointScope", {})
  .n("S3ControlClient", "GetAccessPointScopeCommand")
  .sc(GetAccessPointScope)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessPointScopeRequest;
      output: GetAccessPointScopeResult;
    };
    sdk: {
      input: GetAccessPointScopeCommandInput;
      output: GetAccessPointScopeCommandOutput;
    };
  };
}
