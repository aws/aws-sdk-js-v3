// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartExportTaskRequest, StartExportTaskResponse } from "../models/models_0";
import { StartExportTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartExportTaskCommand}.
 */
export interface StartExportTaskCommandInput extends StartExportTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartExportTaskCommand}.
 */
export interface StartExportTaskCommandOutput extends StartExportTaskResponse, __MetadataBearer {}

/**
 * <p>Begins the export of a discovered data report to an Amazon S3 bucket managed by Amazon Web Services.</p>
 *          <note>
 *             <p>Exports might provide an estimate of fees and savings based on certain information
 *       that you provide. Fee estimates do not include any taxes that might apply.
 *       Your actual fees and savings depend on a variety of factors, including your actual usage of Amazon Web Services
 *       services, which might vary from the estimates provided in this report.</p>
 *          </note>
 *          <p>If you do not specify <code>preferences</code> or <code>agentIds</code> in the filter, a
 *       summary of all servers, applications, tags, and performance is generated. This data is an
 *       aggregation of all server data collected through on-premises tooling, file import, application
 *       grouping and applying tags.</p>
 *          <p>If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of
 *       detailed data collected by the identified Application Discovery Agent, including network,
 *       process, and performance details. A time range for exported agent data may be set by using
 *         <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to
 *       five concurrently running exports.
 *       Export of detailed agent data is limited to two exports per day.</p>
 *          <p>If you enable <code>ec2RecommendationsPreferences</code> in <code>preferences</code>
 *       , an
 *       Amazon EC2 instance matching the characteristics of each server in Application Discovery Service is generated.
 *       Changing the attributes of the <code>ec2RecommendationsPreferences</code> changes the
 *       criteria of the recommendation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartExportTaskCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartExportTaskCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // StartExportTaskRequest
 *   exportDataFormat: [ // ExportDataFormats
 *     "CSV",
 *   ],
 *   filters: [ // ExportFilters
 *     { // ExportFilter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       condition: "STRING_VALUE", // required
 *     },
 *   ],
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   preferences: { // ExportPreferences Union: only one key present
 *     ec2RecommendationsPreferences: { // Ec2RecommendationsExportPreferences
 *       enabled: true || false,
 *       cpuPerformanceMetricBasis: { // UsageMetricBasis
 *         name: "STRING_VALUE",
 *         percentageAdjust: Number("double"),
 *       },
 *       ramPerformanceMetricBasis: {
 *         name: "STRING_VALUE",
 *         percentageAdjust: Number("double"),
 *       },
 *       tenancy: "DEDICATED" || "SHARED",
 *       excludedInstanceTypes: [ // ExcludedInstanceTypes
 *         "STRING_VALUE",
 *       ],
 *       preferredRegion: "STRING_VALUE",
 *       reservedInstanceOptions: { // ReservedInstanceOptions
 *         purchasingOption: "ALL_UPFRONT" || "PARTIAL_UPFRONT" || "NO_UPFRONT", // required
 *         offeringClass: "STANDARD" || "CONVERTIBLE", // required
 *         termLength: "ONE_YEAR" || "THREE_YEAR", // required
 *       },
 *     },
 *   },
 * };
 * const command = new StartExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartExportTaskResponse
 * //   exportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartExportTaskCommandInput - {@link StartExportTaskCommandInput}
 * @returns {@link StartExportTaskCommandOutput}
 * @see {@link StartExportTaskCommandInput} for command's `input` shape.
 * @see {@link StartExportTaskCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not permitted.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 *
 * @public
 */
export class StartExportTaskCommand extends $Command
  .classBuilder<
    StartExportTaskCommandInput,
    StartExportTaskCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPoseidonService_V2015_11_01", "StartExportTask", {})
  .n("ApplicationDiscoveryServiceClient", "StartExportTaskCommand")
  .sc(StartExportTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartExportTaskRequest;
      output: StartExportTaskResponse;
    };
    sdk: {
      input: StartExportTaskCommandInput;
      output: StartExportTaskCommandOutput;
    };
  };
}
