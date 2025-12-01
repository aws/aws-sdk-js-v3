// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAccessPointsForObjectLambdaRequest, ListAccessPointsForObjectLambdaResult } from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListAccessPointsForObjectLambda } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessPointsForObjectLambdaCommand}.
 */
export interface ListAccessPointsForObjectLambdaCommandInput extends ListAccessPointsForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessPointsForObjectLambdaCommand}.
 */
export interface ListAccessPointsForObjectLambdaCommandOutput
  extends ListAccessPointsForObjectLambdaResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns some or all (up to 1,000) access points associated with the Object Lambda Access Point per call. If there
 *          are more access points than what can be returned in one call, the response will include a
 *          continuation token that you can use to list the additional access points.</p>
 *          <p>The following actions are related to
 *          <code>ListAccessPointsForObjectLambda</code>:</p>
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
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListAccessPointsForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListAccessPointsForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // ListAccessPointsForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAccessPointsForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessPointsForObjectLambdaResult
 * //   ObjectLambdaAccessPointList: [ // ObjectLambdaAccessPointList
 * //     { // ObjectLambdaAccessPoint
 * //       Name: "STRING_VALUE", // required
 * //       ObjectLambdaAccessPointArn: "STRING_VALUE",
 * //       Alias: { // ObjectLambdaAccessPointAlias
 * //         Value: "STRING_VALUE",
 * //         Status: "PROVISIONING" || "READY",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessPointsForObjectLambdaCommandInput - {@link ListAccessPointsForObjectLambdaCommandInput}
 * @returns {@link ListAccessPointsForObjectLambdaCommandOutput}
 * @see {@link ListAccessPointsForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link ListAccessPointsForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListAccessPointsForObjectLambdaCommand extends $Command
  .classBuilder<
    ListAccessPointsForObjectLambdaCommandInput,
    ListAccessPointsForObjectLambdaCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "ListAccessPointsForObjectLambda", {})
  .n("S3ControlClient", "ListAccessPointsForObjectLambdaCommand")
  .sc(ListAccessPointsForObjectLambda)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessPointsForObjectLambdaRequest;
      output: ListAccessPointsForObjectLambdaResult;
    };
    sdk: {
      input: ListAccessPointsForObjectLambdaCommandInput;
      output: ListAccessPointsForObjectLambdaCommandOutput;
    };
  };
}
