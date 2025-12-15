// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateMlflowAppRequest, CreateMlflowAppResponse } from "../models/models_1";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateMlflowApp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMlflowAppCommand}.
 */
export interface CreateMlflowAppCommandInput extends CreateMlflowAppRequest {}
/**
 * @public
 *
 * The output of {@link CreateMlflowAppCommand}.
 */
export interface CreateMlflowAppCommandOutput extends CreateMlflowAppResponse, __MetadataBearer {}

/**
 * <p>Creates an MLflow Tracking Server using a general purpose Amazon S3 bucket as the artifact store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateMlflowAppCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateMlflowAppCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateMlflowAppRequest
 *   Name: "STRING_VALUE", // required
 *   ArtifactStoreUri: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   ModelRegistrationMode: "AutoModelRegistrationEnabled" || "AutoModelRegistrationDisabled",
 *   WeeklyMaintenanceWindowStart: "STRING_VALUE",
 *   AccountDefaultStatus: "ENABLED" || "DISABLED",
 *   DefaultDomainIdList: [ // DefaultDomainIdList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMlflowAppCommand(input);
 * const response = await client.send(command);
 * // { // CreateMlflowAppResponse
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMlflowAppCommandInput - {@link CreateMlflowAppCommandInput}
 * @returns {@link CreateMlflowAppCommandOutput}
 * @see {@link CreateMlflowAppCommandInput} for command's `input` shape.
 * @see {@link CreateMlflowAppCommandOutput} for command's `response` shape.
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
export class CreateMlflowAppCommand extends $Command
  .classBuilder<
    CreateMlflowAppCommandInput,
    CreateMlflowAppCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "CreateMlflowApp", {})
  .n("SageMakerClient", "CreateMlflowAppCommand")
  .sc(CreateMlflowApp$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMlflowAppRequest;
      output: CreateMlflowAppResponse;
    };
    sdk: {
      input: CreateMlflowAppCommandInput;
      output: CreateMlflowAppCommandOutput;
    };
  };
}
