// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAccessPointPolicyForObjectLambdaRequest,
  GetAccessPointPolicyForObjectLambdaResult,
} from "../models/models_0";
import {
  de_GetAccessPointPolicyForObjectLambdaCommand,
  se_GetAccessPointPolicyForObjectLambdaCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetAccessPointPolicyForObjectLambdaCommandOutput
  extends GetAccessPointPolicyForObjectLambdaResult,
    __MetadataBearer {}

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
 * @public
 */
export class GetAccessPointPolicyForObjectLambdaCommand extends $Command
  .classBuilder<
    GetAccessPointPolicyForObjectLambdaCommandInput,
    GetAccessPointPolicyForObjectLambdaCommandOutput,
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "GetAccessPointPolicyForObjectLambda", {})
  .n("S3ControlClient", "GetAccessPointPolicyForObjectLambdaCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessPointPolicyForObjectLambdaCommand)
  .de(de_GetAccessPointPolicyForObjectLambdaCommand)
  .build() {}
