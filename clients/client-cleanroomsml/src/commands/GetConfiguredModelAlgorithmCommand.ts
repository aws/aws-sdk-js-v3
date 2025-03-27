// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConfiguredModelAlgorithmRequest, GetConfiguredModelAlgorithmResponse } from "../models/models_0";
import {
  de_GetConfiguredModelAlgorithmCommand,
  se_GetConfiguredModelAlgorithmCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfiguredModelAlgorithmCommand}.
 */
export interface GetConfiguredModelAlgorithmCommandInput extends GetConfiguredModelAlgorithmRequest {}
/**
 * @public
 *
 * The output of {@link GetConfiguredModelAlgorithmCommand}.
 */
export interface GetConfiguredModelAlgorithmCommandOutput
  extends GetConfiguredModelAlgorithmResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a configured model algorithm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetConfiguredModelAlgorithmCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetConfiguredModelAlgorithmCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetConfiguredModelAlgorithmRequest
 *   configuredModelAlgorithmArn: "STRING_VALUE", // required
 * };
 * const command = new GetConfiguredModelAlgorithmCommand(input);
 * const response = await client.send(command);
 * // { // GetConfiguredModelAlgorithmResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   configuredModelAlgorithmArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   trainingContainerConfig: { // ContainerConfig
 * //     imageUri: "STRING_VALUE", // required
 * //     entrypoint: [ // ContainerEntrypoint
 * //       "STRING_VALUE",
 * //     ],
 * //     arguments: [ // ContainerArguments
 * //       "STRING_VALUE",
 * //     ],
 * //     metricDefinitions: [ // MetricDefinitionList
 * //       { // MetricDefinition
 * //         name: "STRING_VALUE", // required
 * //         regex: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   inferenceContainerConfig: { // InferenceContainerConfig
 * //     imageUri: "STRING_VALUE", // required
 * //   },
 * //   roleArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   kmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConfiguredModelAlgorithmCommandInput - {@link GetConfiguredModelAlgorithmCommandInput}
 * @returns {@link GetConfiguredModelAlgorithmCommandOutput}
 * @see {@link GetConfiguredModelAlgorithmCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredModelAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class GetConfiguredModelAlgorithmCommand extends $Command
  .classBuilder<
    GetConfiguredModelAlgorithmCommandInput,
    GetConfiguredModelAlgorithmCommandOutput,
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
  .s("AWSStarkControlService", "GetConfiguredModelAlgorithm", {})
  .n("CleanRoomsMLClient", "GetConfiguredModelAlgorithmCommand")
  .f(void 0, void 0)
  .ser(se_GetConfiguredModelAlgorithmCommand)
  .de(de_GetConfiguredModelAlgorithmCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfiguredModelAlgorithmRequest;
      output: GetConfiguredModelAlgorithmResponse;
    };
    sdk: {
      input: GetConfiguredModelAlgorithmCommandInput;
      output: GetConfiguredModelAlgorithmCommandOutput;
    };
  };
}
