// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConfiguredModelAlgorithmRequest, CreateConfiguredModelAlgorithmResponse } from "../models/models_0";
import {
  de_CreateConfiguredModelAlgorithmCommand,
  se_CreateConfiguredModelAlgorithmCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfiguredModelAlgorithmCommand}.
 */
export interface CreateConfiguredModelAlgorithmCommandInput extends CreateConfiguredModelAlgorithmRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredModelAlgorithmCommand}.
 */
export interface CreateConfiguredModelAlgorithmCommandOutput
  extends CreateConfiguredModelAlgorithmResponse,
    __MetadataBearer {}

/**
 * <p>Creates a configured model algorithm using a container image stored in an ECR repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, CreateConfiguredModelAlgorithmCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, CreateConfiguredModelAlgorithmCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // CreateConfiguredModelAlgorithmRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   trainingContainerConfig: { // ContainerConfig
 *     imageUri: "STRING_VALUE", // required
 *     entrypoint: [ // ContainerEntrypoint
 *       "STRING_VALUE",
 *     ],
 *     arguments: [ // ContainerArguments
 *       "STRING_VALUE",
 *     ],
 *     metricDefinitions: [ // MetricDefinitionList
 *       { // MetricDefinition
 *         name: "STRING_VALUE", // required
 *         regex: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   inferenceContainerConfig: { // InferenceContainerConfig
 *     imageUri: "STRING_VALUE", // required
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   kmsKeyArn: "STRING_VALUE",
 * };
 * const command = new CreateConfiguredModelAlgorithmCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredModelAlgorithmResponse
 * //   configuredModelAlgorithmArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateConfiguredModelAlgorithmCommandInput - {@link CreateConfiguredModelAlgorithmCommandInput}
 * @returns {@link CreateConfiguredModelAlgorithmCommandOutput}
 * @see {@link CreateConfiguredModelAlgorithmCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredModelAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 * @public
 */
export class CreateConfiguredModelAlgorithmCommand extends $Command
  .classBuilder<
    CreateConfiguredModelAlgorithmCommandInput,
    CreateConfiguredModelAlgorithmCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "CreateConfiguredModelAlgorithm", {})
  .n("CleanRoomsMLClient", "CreateConfiguredModelAlgorithmCommand")
  .f(void 0, void 0)
  .ser(se_CreateConfiguredModelAlgorithmCommand)
  .de(de_CreateConfiguredModelAlgorithmCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfiguredModelAlgorithmRequest;
      output: CreateConfiguredModelAlgorithmResponse;
    };
    sdk: {
      input: CreateConfiguredModelAlgorithmCommandInput;
      output: CreateConfiguredModelAlgorithmCommandOutput;
    };
  };
}
