// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetJobManifestRequest, GetJobManifestResult } from "../models/models_0";
import { GetJobManifest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified `JobId` value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the `GetJobManifest` action.
 *
 * The manifest is an encrypted file that you can download after your job enters the `WithCustomer` status. This is the only valid status for calling this API as the manifest and `UnlockCode` code value are used for securing your device and should only be used when you have the device. The manifest is decrypted by using the `UnlockCode` code value, when you pass both values to the Snow device through the Snowball client when the client is started for the first time.
 *
 * As a best practice, we recommend that you don't save a copy of an `UnlockCode` value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.
 *
 * The credentials of a given job, including its manifest file and unlock code, expire 360 days after the job is created.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetJobManifestCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetJobManifestCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
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
 *
 * The action can't be performed because the job's current state doesn't allow that action to be performed.
 *
 * @throws {@link InvalidResourceException} (client fault)
 *
 * The specified resource can't be found. Check the information you provided in your last request, and try again.
 *
 * @throws {@link SnowballServiceException}
 *
 * Base exception class for all service exceptions from Snowball service.
 *
 * @example To get the manifest for a job you've created for AWS Snowball
 * ```javascript
 * // Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified JobId value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the GetJobManifest action.
 *
 * The manifest is an encrypted file that you can download after your job enters the WithCustomer status. The manifest is decrypted by using the UnlockCode code value, when you pass both values to the Snowball through the Snowball client when the client is started for the first time.
 *
 * As a best practice, we recommend that you don't save a copy of an UnlockCode value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.
 *
 * The credentials of a given job, including its manifest file and unlock code, expire 90 days after the job is created.
 * const input = {
 *   JobId: "JID123e4567-e89b-12d3-a456-426655440000"
 * };
 * const command = new GetJobManifestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ManifestURI: "https://awsie-frosty-manifests-prod.s3.amazonaws.com/JID123e4567-e89b-12d3-a456-426655440000_manifest.bin?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20161224T005115Z&X-Amz-SignedHeaders=..."
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetJobManifestCommand extends command<GetJobManifestCommandInput, GetJobManifestCommandOutput>(
  _ep0,
  _mw0,
  "GetJobManifest",
  GetJobManifest$
) {
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
