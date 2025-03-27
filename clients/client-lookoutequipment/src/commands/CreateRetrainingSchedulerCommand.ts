// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { CreateRetrainingSchedulerRequest, CreateRetrainingSchedulerResponse } from "../models/models_0";
import { de_CreateRetrainingSchedulerCommand, se_CreateRetrainingSchedulerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRetrainingSchedulerCommand}.
 */
export interface CreateRetrainingSchedulerCommandInput extends CreateRetrainingSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link CreateRetrainingSchedulerCommand}.
 */
export interface CreateRetrainingSchedulerCommandOutput extends CreateRetrainingSchedulerResponse, __MetadataBearer {}

/**
 * <p>Creates a retraining scheduler on the specified model. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateRetrainingSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateRetrainingSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // CreateRetrainingSchedulerRequest
 *   ModelName: "STRING_VALUE", // required
 *   RetrainingStartDate: new Date("TIMESTAMP"),
 *   RetrainingFrequency: "STRING_VALUE", // required
 *   LookbackWindow: "STRING_VALUE", // required
 *   PromoteMode: "MANAGED" || "MANUAL",
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * // { // CreateRetrainingSchedulerResponse
 * //   ModelName: "STRING_VALUE",
 * //   ModelArn: "STRING_VALUE",
 * //   Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param CreateRetrainingSchedulerCommandInput - {@link CreateRetrainingSchedulerCommandInput}
 * @returns {@link CreateRetrainingSchedulerCommandOutput}
 * @see {@link CreateRetrainingSchedulerCommandInput} for command's `input` shape.
 * @see {@link CreateRetrainingSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be completed due to a conflict with the current state of the
 *          target resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 *
 * @example Creates a retraining scheduler with manual promote mode
 * ```javascript
 * //
 * const input = {
 *   ClientToken: "sample-client-token",
 *   LookbackWindow: "P360D",
 *   ModelName: "sample-model",
 *   PromoteMode: "MANUAL",
 *   RetrainingFrequency: "P1M"
 * };
 * const command = new CreateRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ModelArn: "arn:aws:lookoutequipment:us-east-1:123456789012:model/sample-model/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   ModelName: "sample-model",
 *   Status: "PENDING"
 * }
 * *\/
 * ```
 *
 * @example Creates a retraining scheduler with a specific start date
 * ```javascript
 * //
 * const input = {
 *   ClientToken: "sample-client-token",
 *   LookbackWindow: "P360D",
 *   ModelName: "sample-model",
 *   RetrainingFrequency: "P1M",
 *   RetrainingStartDate: "2024-01-01T00:00:00Z"
 * };
 * const command = new CreateRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ModelArn: "arn:aws:lookoutequipment:us-east-1:123456789012:model/sample-model/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   ModelName: "sample-model",
 *   Status: "PENDING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRetrainingSchedulerCommand extends $Command
  .classBuilder<
    CreateRetrainingSchedulerCommandInput,
    CreateRetrainingSchedulerCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLookoutEquipmentFrontendService", "CreateRetrainingScheduler", {})
  .n("LookoutEquipmentClient", "CreateRetrainingSchedulerCommand")
  .f(void 0, void 0)
  .ser(se_CreateRetrainingSchedulerCommand)
  .de(de_CreateRetrainingSchedulerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRetrainingSchedulerRequest;
      output: CreateRetrainingSchedulerResponse;
    };
    sdk: {
      input: CreateRetrainingSchedulerCommandInput;
      output: CreateRetrainingSchedulerCommandOutput;
    };
  };
}
