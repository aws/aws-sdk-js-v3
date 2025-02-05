// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { GetTestExecutionArtifactsUrlRequest, GetTestExecutionArtifactsUrlResponse } from "../models/models_1";
import {
  de_GetTestExecutionArtifactsUrlCommand,
  se_GetTestExecutionArtifactsUrlCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTestExecutionArtifactsUrlCommand}.
 */
export interface GetTestExecutionArtifactsUrlCommandInput extends GetTestExecutionArtifactsUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetTestExecutionArtifactsUrlCommand}.
 */
export interface GetTestExecutionArtifactsUrlCommandOutput
  extends GetTestExecutionArtifactsUrlResponse,
    __MetadataBearer {}

/**
 * <p>The pre-signed Amazon S3 URL to download the test execution result artifacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, GetTestExecutionArtifactsUrlCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, GetTestExecutionArtifactsUrlCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LexModelsV2Client(config);
 * const input = { // GetTestExecutionArtifactsUrlRequest
 *   testExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetTestExecutionArtifactsUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetTestExecutionArtifactsUrlResponse
 * //   testExecutionId: "STRING_VALUE",
 * //   downloadArtifactsUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTestExecutionArtifactsUrlCommandInput - {@link GetTestExecutionArtifactsUrlCommandInput}
 * @returns {@link GetTestExecutionArtifactsUrlCommandOutput}
 * @see {@link GetTestExecutionArtifactsUrlCommandInput} for command's `input` shape.
 * @see {@link GetTestExecutionArtifactsUrlCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 * @public
 */
export class GetTestExecutionArtifactsUrlCommand extends $Command
  .classBuilder<
    GetTestExecutionArtifactsUrlCommandInput,
    GetTestExecutionArtifactsUrlCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "GetTestExecutionArtifactsUrl", {})
  .n("LexModelsV2Client", "GetTestExecutionArtifactsUrlCommand")
  .f(void 0, void 0)
  .ser(se_GetTestExecutionArtifactsUrlCommand)
  .de(de_GetTestExecutionArtifactsUrlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTestExecutionArtifactsUrlRequest;
      output: GetTestExecutionArtifactsUrlResponse;
    };
    sdk: {
      input: GetTestExecutionArtifactsUrlCommandInput;
      output: GetTestExecutionArtifactsUrlCommandOutput;
    };
  };
}
