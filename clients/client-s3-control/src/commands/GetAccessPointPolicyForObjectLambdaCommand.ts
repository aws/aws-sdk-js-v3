// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type {
  GetAccessPointPolicyForObjectLambdaRequest,
  GetAccessPointPolicyForObjectLambdaResult,
} from "../models/models_0";
import { GetAccessPointPolicyForObjectLambda$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccessPointPolicyForObjectLambdaCommand}.
 */
export interface GetAccessPointPolicyForObjectLambdaCommandInput extends GetAccessPointPolicyForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPointPolicyForObjectLambdaCommand}.
 */
export interface GetAccessPointPolicyForObjectLambdaCommandOutput extends GetAccessPointPolicyForObjectLambdaResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns the resource policy for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to
 *          <code>GetAccessPointPolicyForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html">DeleteAccessPointPolicyForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html">PutAccessPointPolicyForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointPolicyForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointPolicyForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessPointPolicyForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPointPolicyForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPointPolicyForObjectLambdaResult
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccessPointPolicyForObjectLambdaCommandInput - {@link GetAccessPointPolicyForObjectLambdaCommandInput}
 * @returns {@link GetAccessPointPolicyForObjectLambdaCommandOutput}
 * @see {@link GetAccessPointPolicyForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointPolicyForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetAccessPointPolicyForObjectLambdaCommand extends command<GetAccessPointPolicyForObjectLambdaCommandInput, GetAccessPointPolicyForObjectLambdaCommandOutput>(
  _ep0,
  _mw1,
  "GetAccessPointPolicyForObjectLambda",
  GetAccessPointPolicyForObjectLambda$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessPointPolicyForObjectLambdaRequest;
      output: GetAccessPointPolicyForObjectLambdaResult;
    };
    sdk: {
      input: GetAccessPointPolicyForObjectLambdaCommandInput;
      output: GetAccessPointPolicyForObjectLambdaCommandOutput;
    };
  };
}
