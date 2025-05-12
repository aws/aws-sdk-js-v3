// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreatePresignedMlflowTrackingServerUrlRequest,
  CreatePresignedMlflowTrackingServerUrlResponse,
} from "../models/models_2";
import {
  de_CreatePresignedMlflowTrackingServerUrlCommand,
  se_CreatePresignedMlflowTrackingServerUrlCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePresignedMlflowTrackingServerUrlCommand}.
 */
export interface CreatePresignedMlflowTrackingServerUrlCommandInput
  extends CreatePresignedMlflowTrackingServerUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreatePresignedMlflowTrackingServerUrlCommand}.
 */
export interface CreatePresignedMlflowTrackingServerUrlCommandOutput
  extends CreatePresignedMlflowTrackingServerUrlResponse,
    __MetadataBearer {}

/**
 * <p>Returns a presigned URL that you can use to connect to the MLflow UI attached to your tracking server. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow-launch-ui.html">Launch the MLflow UI using a presigned URL</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreatePresignedMlflowTrackingServerUrlCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreatePresignedMlflowTrackingServerUrlCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreatePresignedMlflowTrackingServerUrlRequest
 *   TrackingServerName: "STRING_VALUE", // required
 *   ExpiresInSeconds: Number("int"),
 *   SessionExpirationDurationInSeconds: Number("int"),
 * };
 * const command = new CreatePresignedMlflowTrackingServerUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreatePresignedMlflowTrackingServerUrlResponse
 * //   AuthorizedUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePresignedMlflowTrackingServerUrlCommandInput - {@link CreatePresignedMlflowTrackingServerUrlCommandInput}
 * @returns {@link CreatePresignedMlflowTrackingServerUrlCommandOutput}
 * @see {@link CreatePresignedMlflowTrackingServerUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedMlflowTrackingServerUrlCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreatePresignedMlflowTrackingServerUrlCommand extends $Command
  .classBuilder<
    CreatePresignedMlflowTrackingServerUrlCommandInput,
    CreatePresignedMlflowTrackingServerUrlCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreatePresignedMlflowTrackingServerUrl", {})
  .n("SageMakerClient", "CreatePresignedMlflowTrackingServerUrlCommand")
  .f(void 0, void 0)
  .ser(se_CreatePresignedMlflowTrackingServerUrlCommand)
  .de(de_CreatePresignedMlflowTrackingServerUrlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePresignedMlflowTrackingServerUrlRequest;
      output: CreatePresignedMlflowTrackingServerUrlResponse;
    };
    sdk: {
      input: CreatePresignedMlflowTrackingServerUrlCommandInput;
      output: CreatePresignedMlflowTrackingServerUrlCommandOutput;
    };
  };
}
