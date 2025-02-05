// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetJobManifestRequest, GetJobManifestResult } from "../models/models_0";
import { de_GetJobManifestCommand, se_GetJobManifestCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobManifestCommand}.
 */
export interface GetJobManifestCommandInput extends GetJobManifestRequest {}
/**
 * @public
 *
 * The output of {@link GetJobManifestCommand}.
 */
export interface GetJobManifestCommandOutput extends GetJobManifestResult, __MetadataBearer {}

/**
 * <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the
 *       specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes
 *       after this request has been made. To access the manifest file after 60 minutes have passed,
 *       you'll have to make another call to the <code>GetJobManifest</code> action.</p>
 *          <p>The manifest is an encrypted file that you can download after your job enters the
 *         <code>WithCustomer</code> status. This is the only valid status for calling this API as the
 *       manifest and <code>UnlockCode</code> code value are used for securing your device and should
 *       only be used when you have the device.  The manifest is decrypted by using the
 *         <code>UnlockCode</code> code value, when you pass both values to the Snow device through the
 *       Snowball client when the client is started for the first time. </p>
 *          <p>As a best practice, we recommend that you don't save a copy of an
 *         <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving
 *       these separately helps prevent unauthorized parties from gaining access to the Snow device
 *       associated with that job.</p>
 *          <p>The credentials of a given job, including its manifest file and unlock code, expire 360
 *       days after the job is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetJobManifestCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetJobManifestCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SnowballClient(config);
 * const input = { // GetJobManifestRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetJobManifestCommand(input);
 * const response = await client.send(command);
 * // { // GetJobManifestResult
 * //   ManifestURI: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetJobManifestCommandInput - {@link GetJobManifestCommandInput}
 * @returns {@link GetJobManifestCommandOutput}
 * @see {@link GetJobManifestCommandInput} for command's `input` shape.
 * @see {@link GetJobManifestCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @public
 * @example To get the manifest for a job you've created for AWS Snowball
 * ```javascript
 * // Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified JobId value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the GetJobManifest action.
 * //
 * // The manifest is an encrypted file that you can download after your job enters the WithCustomer status. The manifest is decrypted by using the UnlockCode code value, when you pass both values to the Snowball through the Snowball client when the client is started for the first time.
 * //
 * // As a best practice, we recommend that you don't save a copy of an UnlockCode value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.
 * //
 * // The credentials of a given job, including its manifest file and unlock code, expire 90 days after the job is created.
 * const input = {
 *   "JobId": "JID123e4567-e89b-12d3-a456-426655440000"
 * };
 * const command = new GetJobManifestCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ManifestURI": "https://awsie-frosty-manifests-prod.s3.amazonaws.com/JID123e4567-e89b-12d3-a456-426655440000_manifest.bin?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20161224T005115Z&X-Amz-SignedHeaders=..."
 * }
 * *\/
 * // example id: to-get-the-manifest-for-a-job-youve-created-for-aws-snowball-1482540389246
 * ```
 *
 */
export class GetJobManifestCommand extends $Command
  .classBuilder<
    GetJobManifestCommandInput,
    GetJobManifestCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIESnowballJobManagementService", "GetJobManifest", {})
  .n("SnowballClient", "GetJobManifestCommand")
  .f(void 0, void 0)
  .ser(se_GetJobManifestCommand)
  .de(de_GetJobManifestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobManifestRequest;
      output: GetJobManifestResult;
    };
    sdk: {
      input: GetJobManifestCommandInput;
      output: GetJobManifestCommandOutput;
    };
  };
}
