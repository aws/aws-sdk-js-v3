// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetJobUnlockCodeRequest, GetJobUnlockCodeResult } from "../models/models_0";
import { GetJobUnlockCode } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobUnlockCodeCommand}.
 */
export interface GetJobUnlockCodeCommandInput extends GetJobUnlockCodeRequest {}
/**
 * @public
 *
 * The output of {@link GetJobUnlockCodeCommand}.
 */
export interface GetJobUnlockCodeCommandOutput extends GetJobUnlockCodeResult, __MetadataBearer {}

/**
 * <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular
 *         <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job
 *       has been created.</p>
 *          <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric
 *       characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed
 *       along with the manifest to the Snow device through the Snowball client when the client is
 *       started for the first time. The only valid status for calling this API is
 *         <code>WithCustomer</code> as the manifest and <code>Unlock</code> code values are used for
 *       securing your device and should only be used when you have the device.</p>
 *          <p>As a best practice, we recommend that you don't save a copy of the
 *         <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these
 *       separately helps prevent unauthorized parties from gaining access to the Snow device
 *       associated with that job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetJobUnlockCodeCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetJobUnlockCodeCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // GetJobUnlockCodeRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetJobUnlockCodeCommand(input);
 * const response = await client.send(command);
 * // { // GetJobUnlockCodeResult
 * //   UnlockCode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetJobUnlockCodeCommandInput - {@link GetJobUnlockCodeCommandInput}
 * @returns {@link GetJobUnlockCodeCommandOutput}
 * @see {@link GetJobUnlockCodeCommandInput} for command's `input` shape.
 * @see {@link GetJobUnlockCodeCommandOutput} for command's `response` shape.
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
 *
 * @example To get the unlock code for a job you've created for AWS Snowball
 * ```javascript
 * // Returns the UnlockCode code value for the specified job. A particular UnlockCode value can be accessed for up to 90 days after the associated job has been created.
 *
 * The UnlockCode value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snowball through the Snowball client when the client is started for the first time.
 *
 * As a best practice, we recommend that you don't save a copy of the UnlockCode in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.
 * const input = {
 *   JobId: "JID123e4567-e89b-12d3-a456-426655440000"
 * };
 * const command = new GetJobUnlockCodeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   UnlockCode: "12345-abcde-56789-fghij-01234"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetJobUnlockCodeCommand extends $Command
  .classBuilder<
    GetJobUnlockCodeCommandInput,
    GetJobUnlockCodeCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIESnowballJobManagementService", "GetJobUnlockCode", {})
  .n("SnowballClient", "GetJobUnlockCodeCommand")
  .sc(GetJobUnlockCode)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobUnlockCodeRequest;
      output: GetJobUnlockCodeResult;
    };
    sdk: {
      input: GetJobUnlockCodeCommandInput;
      output: GetJobUnlockCodeCommandOutput;
    };
  };
}
