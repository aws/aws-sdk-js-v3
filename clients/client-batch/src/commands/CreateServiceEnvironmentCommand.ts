// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateServiceEnvironmentRequest, CreateServiceEnvironmentResponse } from "../models/models_0";
import { de_CreateServiceEnvironmentCommand, se_CreateServiceEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceEnvironmentCommand}.
 */
export interface CreateServiceEnvironmentCommandInput extends CreateServiceEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceEnvironmentCommand}.
 */
export interface CreateServiceEnvironmentCommandOutput extends CreateServiceEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Creates a service environment for running service jobs. Service environments define capacity limits for specific service types such as SageMaker Training jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CreateServiceEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CreateServiceEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // CreateServiceEnvironmentRequest
 *   serviceEnvironmentName: "STRING_VALUE", // required
 *   serviceEnvironmentType: "SAGEMAKER_TRAINING", // required
 *   state: "ENABLED" || "DISABLED",
 *   capacityLimits: [ // CapacityLimits // required
 *     { // CapacityLimit
 *       maxCapacity: Number("int"),
 *       capacityUnit: "STRING_VALUE",
 *     },
 *   ],
 *   tags: { // TagrisTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateServiceEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceEnvironmentResponse
 * //   serviceEnvironmentName: "STRING_VALUE", // required
 * //   serviceEnvironmentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateServiceEnvironmentCommandInput - {@link CreateServiceEnvironmentCommandInput}
 * @returns {@link CreateServiceEnvironmentCommandOutput}
 * @see {@link CreateServiceEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateServiceEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @public
 */
export class CreateServiceEnvironmentCommand extends $Command
  .classBuilder<
    CreateServiceEnvironmentCommandInput,
    CreateServiceEnvironmentCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "CreateServiceEnvironment", {})
  .n("BatchClient", "CreateServiceEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_CreateServiceEnvironmentCommand)
  .de(de_CreateServiceEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceEnvironmentRequest;
      output: CreateServiceEnvironmentResponse;
    };
    sdk: {
      input: CreateServiceEnvironmentCommandInput;
      output: CreateServiceEnvironmentCommandOutput;
    };
  };
}
