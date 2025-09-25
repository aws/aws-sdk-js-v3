// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAccessPointPolicyStatusForObjectLambdaRequest,
  GetAccessPointPolicyStatusForObjectLambdaResult,
} from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessPointPolicyStatusForObjectLambda } from "../schemas/schemas_3_Access";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessPointPolicyStatusForObjectLambdaCommand}.
 */
export interface GetAccessPointPolicyStatusForObjectLambdaCommandInput
  extends GetAccessPointPolicyStatusForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPointPolicyStatusForObjectLambdaCommand}.
 */
export interface GetAccessPointPolicyStatusForObjectLambdaCommandOutput
  extends GetAccessPointPolicyStatusForObjectLambdaResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns the status of the resource policy associated with an Object Lambda Access Point.</p>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointPolicyStatusForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointPolicyStatusForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessPointPolicyStatusForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPointPolicyStatusForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPointPolicyStatusForObjectLambdaResult
 * //   PolicyStatus: { // PolicyStatus
 * //     IsPublic: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessPointPolicyStatusForObjectLambdaCommandInput - {@link GetAccessPointPolicyStatusForObjectLambdaCommandInput}
 * @returns {@link GetAccessPointPolicyStatusForObjectLambdaCommandOutput}
 * @see {@link GetAccessPointPolicyStatusForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointPolicyStatusForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetAccessPointPolicyStatusForObjectLambdaCommand extends $Command
  .classBuilder<
    GetAccessPointPolicyStatusForObjectLambdaCommandInput,
    GetAccessPointPolicyStatusForObjectLambdaCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getProcessArnablesPlugin(config)];
  })
  .s("AWSS3ControlServiceV20180820", "GetAccessPointPolicyStatusForObjectLambda", {})
  .n("S3ControlClient", "GetAccessPointPolicyStatusForObjectLambdaCommand")
  .sc(GetAccessPointPolicyStatusForObjectLambda)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessPointPolicyStatusForObjectLambdaRequest;
      output: GetAccessPointPolicyStatusForObjectLambdaResult;
    };
    sdk: {
      input: GetAccessPointPolicyStatusForObjectLambdaCommandInput;
      output: GetAccessPointPolicyStatusForObjectLambdaCommandOutput;
    };
  };
}
