// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartServiceSoftwareUpdateRequest, StartServiceSoftwareUpdateResponse } from "../models/models_0";
import type { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { StartServiceSoftwareUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartServiceSoftwareUpdateCommand}.
 */
export interface StartServiceSoftwareUpdateCommandInput extends StartServiceSoftwareUpdateRequest {}
/**
 * @public
 *
 * The output of {@link StartServiceSoftwareUpdateCommand}.
 */
export interface StartServiceSoftwareUpdateCommandOutput extends StartServiceSoftwareUpdateResponse, __MetadataBearer {}

/**
 * <p>Schedules a service software update for an Amazon OpenSearch Service domain. For more
 *             information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service
 *                 software updates in Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, StartServiceSoftwareUpdateCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, StartServiceSoftwareUpdateCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // StartServiceSoftwareUpdateRequest
 *   DomainName: "STRING_VALUE", // required
 *   ScheduleAt: "NOW" || "TIMESTAMP" || "OFF_PEAK_WINDOW",
 *   DesiredStartTime: Number("long"),
 * };
 * const command = new StartServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * // { // StartServiceSoftwareUpdateResponse
 * //   ServiceSoftwareOptions: { // ServiceSoftwareOptions
 * //     CurrentVersion: "STRING_VALUE",
 * //     NewVersion: "STRING_VALUE",
 * //     UpdateAvailable: true || false,
 * //     Cancellable: true || false,
 * //     UpdateStatus: "PENDING_UPDATE" || "IN_PROGRESS" || "COMPLETED" || "NOT_ELIGIBLE" || "ELIGIBLE",
 * //     Description: "STRING_VALUE",
 * //     AutomatedUpdateDate: new Date("TIMESTAMP"),
 * //     OptionalDeployment: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param StartServiceSoftwareUpdateCommandInput - {@link StartServiceSoftwareUpdateCommandInput}
 * @returns {@link StartServiceSoftwareUpdateCommandOutput}
 * @see {@link StartServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link StartServiceSoftwareUpdateCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class StartServiceSoftwareUpdateCommand extends $Command
  .classBuilder<
    StartServiceSoftwareUpdateCommandInput,
    StartServiceSoftwareUpdateCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "StartServiceSoftwareUpdate", {})
  .n("OpenSearchClient", "StartServiceSoftwareUpdateCommand")
  .sc(StartServiceSoftwareUpdate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartServiceSoftwareUpdateRequest;
      output: StartServiceSoftwareUpdateResponse;
    };
    sdk: {
      input: StartServiceSoftwareUpdateCommandInput;
      output: StartServiceSoftwareUpdateCommandOutput;
    };
  };
}
