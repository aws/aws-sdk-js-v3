// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateMlflowTrackingServerRequest, CreateMlflowTrackingServerResponse } from "../models/models_1";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateMlflowTrackingServer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMlflowTrackingServerCommand}.
 */
export interface CreateMlflowTrackingServerCommandInput extends CreateMlflowTrackingServerRequest {}
/**
 * @public
 *
 * The output of {@link CreateMlflowTrackingServerCommand}.
 */
export interface CreateMlflowTrackingServerCommandOutput extends CreateMlflowTrackingServerResponse, __MetadataBearer {}

/**
 * <p>Creates an MLflow Tracking Server using a general purpose Amazon S3 bucket as the artifact store. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow-create-tracking-server.html">Create an MLflow Tracking Server</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateMlflowTrackingServerCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateMlflowTrackingServerCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateMlflowTrackingServerRequest
 *   TrackingServerName: "STRING_VALUE", // required
 *   ArtifactStoreUri: "STRING_VALUE", // required
 *   TrackingServerSize: "Small" || "Medium" || "Large",
 *   MlflowVersion: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE", // required
 *   AutomaticModelRegistration: true || false,
 *   WeeklyMaintenanceWindowStart: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMlflowTrackingServerCommand(input);
 * const response = await client.send(command);
 * // { // CreateMlflowTrackingServerResponse
 * //   TrackingServerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMlflowTrackingServerCommandInput - {@link CreateMlflowTrackingServerCommandInput}
 * @returns {@link CreateMlflowTrackingServerCommandOutput}
 * @see {@link CreateMlflowTrackingServerCommandInput} for command's `input` shape.
 * @see {@link CreateMlflowTrackingServerCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreateMlflowTrackingServerCommand extends $Command
  .classBuilder<
    CreateMlflowTrackingServerCommandInput,
    CreateMlflowTrackingServerCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "CreateMlflowTrackingServer", {})
  .n("SageMakerClient", "CreateMlflowTrackingServerCommand")
  .sc(CreateMlflowTrackingServer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMlflowTrackingServerRequest;
      output: CreateMlflowTrackingServerResponse;
    };
    sdk: {
      input: CreateMlflowTrackingServerCommandInput;
      output: CreateMlflowTrackingServerCommandOutput;
    };
  };
}
