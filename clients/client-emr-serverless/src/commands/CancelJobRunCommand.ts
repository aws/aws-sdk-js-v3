// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelJobRunRequest, CancelJobRunResponse } from "../models/models_0";
import { de_CancelJobRunCommand, se_CancelJobRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelJobRunCommand}.
 */
export interface CancelJobRunCommandInput extends CancelJobRunRequest {}
/**
 * @public
 *
 * The output of {@link CancelJobRunCommand}.
 */
export interface CancelJobRunCommandOutput extends CancelJobRunResponse, __MetadataBearer {}

/**
 * <p>Cancels a job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, CancelJobRunCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, CancelJobRunCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EMRServerlessClient(config);
 * const input = { // CancelJobRunRequest
 *   applicationId: "STRING_VALUE", // required
 *   jobRunId: "STRING_VALUE", // required
 * };
 * const command = new CancelJobRunCommand(input);
 * const response = await client.send(command);
 * // { // CancelJobRunResponse
 * //   applicationId: "STRING_VALUE", // required
 * //   jobRunId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CancelJobRunCommandInput - {@link CancelJobRunCommandInput}
 * @returns {@link CancelJobRunCommandOutput}
 * @see {@link CancelJobRunCommandInput} for command's `input` shape.
 * @see {@link CancelJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 * @public
 */
export class CancelJobRunCommand extends $Command
  .classBuilder<
    CancelJobRunCommandInput,
    CancelJobRunCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsToledoWebService", "CancelJobRun", {})
  .n("EMRServerlessClient", "CancelJobRunCommand")
  .f(void 0, void 0)
  .ser(se_CancelJobRunCommand)
  .de(de_CancelJobRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelJobRunRequest;
      output: CancelJobRunResponse;
    };
    sdk: {
      input: CancelJobRunCommandInput;
      output: CancelJobRunCommandOutput;
    };
  };
}
