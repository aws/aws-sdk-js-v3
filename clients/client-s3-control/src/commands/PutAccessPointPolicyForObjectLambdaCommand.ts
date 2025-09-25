// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccessPointPolicyForObjectLambdaRequest } from "../models/models_1";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutAccessPointPolicyForObjectLambda } from "../schemas/schemas_3_Access";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccessPointPolicyForObjectLambdaCommand}.
 */
export interface PutAccessPointPolicyForObjectLambdaCommandInput extends PutAccessPointPolicyForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link PutAccessPointPolicyForObjectLambdaCommand}.
 */
export interface PutAccessPointPolicyForObjectLambdaCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html#olap-create-cli">Creating Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to
 *          <code>PutAccessPointPolicyForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html">DeleteAccessPointPolicyForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html">GetAccessPointPolicyForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessPointPolicyForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessPointPolicyForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutAccessPointPolicyForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutAccessPointPolicyForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccessPointPolicyForObjectLambdaCommandInput - {@link PutAccessPointPolicyForObjectLambdaCommandInput}
 * @returns {@link PutAccessPointPolicyForObjectLambdaCommandOutput}
 * @see {@link PutAccessPointPolicyForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link PutAccessPointPolicyForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutAccessPointPolicyForObjectLambdaCommand extends $Command
  .classBuilder<
    PutAccessPointPolicyForObjectLambdaCommandInput,
    PutAccessPointPolicyForObjectLambdaCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "PutAccessPointPolicyForObjectLambda", {})
  .n("S3ControlClient", "PutAccessPointPolicyForObjectLambdaCommand")
  .sc(PutAccessPointPolicyForObjectLambda)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccessPointPolicyForObjectLambdaRequest;
      output: {};
    };
    sdk: {
      input: PutAccessPointPolicyForObjectLambdaCommandInput;
      output: PutAccessPointPolicyForObjectLambdaCommandOutput;
    };
  };
}
