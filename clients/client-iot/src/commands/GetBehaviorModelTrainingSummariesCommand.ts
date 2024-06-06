// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  GetBehaviorModelTrainingSummariesRequest,
  GetBehaviorModelTrainingSummariesResponse,
} from "../models/models_1";
import {
  de_GetBehaviorModelTrainingSummariesCommand,
  se_GetBehaviorModelTrainingSummariesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBehaviorModelTrainingSummariesCommand}.
 */
export interface GetBehaviorModelTrainingSummariesCommandInput extends GetBehaviorModelTrainingSummariesRequest {}
/**
 * @public
 *
 * The output of {@link GetBehaviorModelTrainingSummariesCommand}.
 */
export interface GetBehaviorModelTrainingSummariesCommandOutput
  extends GetBehaviorModelTrainingSummariesResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Returns a Device Defender's ML Detect Security Profile training model's status.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBehaviorModelTrainingSummaries</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetBehaviorModelTrainingSummariesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetBehaviorModelTrainingSummariesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // GetBehaviorModelTrainingSummariesRequest
 *   securityProfileName: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetBehaviorModelTrainingSummariesCommand(input);
 * const response = await client.send(command);
 * // { // GetBehaviorModelTrainingSummariesResponse
 * //   summaries: [ // BehaviorModelTrainingSummaries
 * //     { // BehaviorModelTrainingSummary
 * //       securityProfileName: "STRING_VALUE",
 * //       behaviorName: "STRING_VALUE",
 * //       trainingDataCollectionStartDate: new Date("TIMESTAMP"),
 * //       modelStatus: "PENDING_BUILD" || "ACTIVE" || "EXPIRED",
 * //       datapointsCollectionPercentage: Number("double"),
 * //       lastModelRefreshDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBehaviorModelTrainingSummariesCommandInput - {@link GetBehaviorModelTrainingSummariesCommandInput}
 * @returns {@link GetBehaviorModelTrainingSummariesCommandOutput}
 * @see {@link GetBehaviorModelTrainingSummariesCommandInput} for command's `input` shape.
 * @see {@link GetBehaviorModelTrainingSummariesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class GetBehaviorModelTrainingSummariesCommand extends $Command
  .classBuilder<
    GetBehaviorModelTrainingSummariesCommandInput,
    GetBehaviorModelTrainingSummariesCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "GetBehaviorModelTrainingSummaries", {})
  .n("IoTClient", "GetBehaviorModelTrainingSummariesCommand")
  .f(void 0, void 0)
  .ser(se_GetBehaviorModelTrainingSummariesCommand)
  .de(de_GetBehaviorModelTrainingSummariesCommand)
  .build() {}
