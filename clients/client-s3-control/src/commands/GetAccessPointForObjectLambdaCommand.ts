// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccessPointForObjectLambdaRequest, GetAccessPointForObjectLambdaResult } from "../models/models_0";
import {
  de_GetAccessPointForObjectLambdaCommand,
  se_GetAccessPointForObjectLambdaCommand,
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
 * The input for {@link GetAccessPointForObjectLambdaCommand}.
 */
export interface GetAccessPointForObjectLambdaCommandInput extends GetAccessPointForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPointForObjectLambdaCommand}.
 */
export interface GetAccessPointForObjectLambdaCommandOutput
  extends GetAccessPointForObjectLambdaResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns configuration information about the specified Object Lambda Access Point</p>
 *          <p>The following actions are related to <code>GetAccessPointForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessPointForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPointForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPointForObjectLambdaResult
 * //   Name: "STRING_VALUE",
 * //   PublicAccessBlockConfiguration: { // PublicAccessBlockConfiguration
 * //     BlockPublicAcls: true || false,
 * //     IgnorePublicAcls: true || false,
 * //     BlockPublicPolicy: true || false,
 * //     RestrictPublicBuckets: true || false,
 * //   },
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   Alias: { // ObjectLambdaAccessPointAlias
 * //     Value: "STRING_VALUE",
 * //     Status: "PROVISIONING" || "READY",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessPointForObjectLambdaCommandInput - {@link GetAccessPointForObjectLambdaCommandInput}
 * @returns {@link GetAccessPointForObjectLambdaCommandOutput}
 * @see {@link GetAccessPointForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class GetAccessPointForObjectLambdaCommand extends $Command
  .classBuilder<
    GetAccessPointForObjectLambdaCommandInput,
    GetAccessPointForObjectLambdaCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "GetAccessPointForObjectLambda", {})
  .n("S3ControlClient", "GetAccessPointForObjectLambdaCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessPointForObjectLambdaCommand)
  .de(de_GetAccessPointForObjectLambdaCommand)
  .build() {}
