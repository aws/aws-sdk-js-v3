// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetBehaviorModelTrainingSummariesRequest,
  GetBehaviorModelTrainingSummariesResponse,
} from "../models/models_1";
import { GetBehaviorModelTrainingSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetBehaviorModelTrainingSummariesCommandOutput extends GetBehaviorModelTrainingSummariesResponse, __MetadataBearer {}

/**
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Returns a Device Defender's ML Detect Security Profile training model's status.
 *
 * Requires permission to access the [GetBehaviorModelTrainingSummaries](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetBehaviorModelTrainingSummariesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetBehaviorModelTrainingSummariesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class GetBehaviorModelTrainingSummariesCommand extends command<GetBehaviorModelTrainingSummariesCommandInput, GetBehaviorModelTrainingSummariesCommandOutput>(
  _ep0,
  _mw0,
  "GetBehaviorModelTrainingSummaries",
  GetBehaviorModelTrainingSummaries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBehaviorModelTrainingSummariesRequest;
      output: GetBehaviorModelTrainingSummariesResponse;
    };
    sdk: {
      input: GetBehaviorModelTrainingSummariesCommandInput;
      output: GetBehaviorModelTrainingSummariesCommandOutput;
    };
  };
}
