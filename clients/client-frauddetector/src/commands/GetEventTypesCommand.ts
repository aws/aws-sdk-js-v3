// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetEventTypesRequest, GetEventTypesResult } from "../models/models_0";
import { GetEventTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventTypesCommand}.
 */
export interface GetEventTypesCommandInput extends GetEventTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetEventTypesCommand}.
 */
export interface GetEventTypesCommandOutput extends GetEventTypesResult, __MetadataBearer {}

/**
 * <p>Gets all event types or a specific event type if name is provided. This is a paginated API. If you
 *          provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records
 *          per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10.
 *          To get the next page results, provide the pagination token from the
 *             <code>GetEventTypesResponse</code> as part of your request. A null pagination token
 *          fetches the records from the beginning. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEventTypesCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEventTypesCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // GetEventTypesRequest
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetEventTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetEventTypesResult
 * //   eventTypes: [ // eventTypeList
 * //     { // EventType
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       eventVariables: [ // ListOfStrings
 * //         "STRING_VALUE",
 * //       ],
 * //       labels: [
 * //         "STRING_VALUE",
 * //       ],
 * //       entityTypes: [ // NonEmptyListOfStrings
 * //         "STRING_VALUE",
 * //       ],
 * //       eventIngestion: "ENABLED" || "DISABLED",
 * //       ingestedEventStatistics: { // IngestedEventStatistics
 * //         numberOfEvents: Number("long"),
 * //         eventDataSizeInBytes: Number("long"),
 * //         leastRecentEvent: "STRING_VALUE",
 * //         mostRecentEvent: "STRING_VALUE",
 * //         lastUpdatedTime: "STRING_VALUE",
 * //       },
 * //       lastUpdatedTime: "STRING_VALUE",
 * //       createdTime: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       eventOrchestration: { // EventOrchestration
 * //         eventBridgeEnabled: true || false, // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEventTypesCommandInput - {@link GetEventTypesCommandInput}
 * @returns {@link GetEventTypesCommandOutput}
 * @see {@link GetEventTypesCommandInput} for command's `input` shape.
 * @see {@link GetEventTypesCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class GetEventTypesCommand extends $Command
  .classBuilder<
    GetEventTypesCommandInput,
    GetEventTypesCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "GetEventTypes", {})
  .n("FraudDetectorClient", "GetEventTypesCommand")
  .sc(GetEventTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventTypesRequest;
      output: GetEventTypesResult;
    };
    sdk: {
      input: GetEventTypesCommandInput;
      output: GetEventTypesCommandOutput;
    };
  };
}
