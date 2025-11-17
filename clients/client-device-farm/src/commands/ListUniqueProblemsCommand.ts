// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListUniqueProblemsRequest, ListUniqueProblemsResult } from "../models/models_0";
import { ListUniqueProblems } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUniqueProblemsCommand}.
 */
export interface ListUniqueProblemsCommandInput extends ListUniqueProblemsRequest {}
/**
 * @public
 *
 * The output of {@link ListUniqueProblemsCommand}.
 */
export interface ListUniqueProblemsCommandOutput extends ListUniqueProblemsResult, __MetadataBearer {}

/**
 * <p>Gets information about unique problems, such as exceptions or crashes.</p>
 *          <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example,
 *             if a call in your application consistently raises an exception (<code>OutOfBoundsException in
 *                 MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many
 *             individual entries for that exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListUniqueProblemsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListUniqueProblemsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // ListUniqueProblemsRequest
 *   arn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListUniqueProblemsCommand(input);
 * const response = await client.send(command);
 * // { // ListUniqueProblemsResult
 * //   uniqueProblems: { // UniqueProblemsByExecutionResultMap
 * //     "<keys>": [ // UniqueProblems
 * //       { // UniqueProblem
 * //         message: "STRING_VALUE",
 * //         problems: [ // Problems
 * //           { // Problem
 * //             run: { // ProblemDetail
 * //               arn: "STRING_VALUE",
 * //               name: "STRING_VALUE",
 * //             },
 * //             job: {
 * //               arn: "STRING_VALUE",
 * //               name: "STRING_VALUE",
 * //             },
 * //             suite: {
 * //               arn: "STRING_VALUE",
 * //               name: "STRING_VALUE",
 * //             },
 * //             test: {
 * //               arn: "STRING_VALUE",
 * //               name: "STRING_VALUE",
 * //             },
 * //             device: { // Device
 * //               arn: "STRING_VALUE",
 * //               name: "STRING_VALUE",
 * //               manufacturer: "STRING_VALUE",
 * //               model: "STRING_VALUE",
 * //               modelId: "STRING_VALUE",
 * //               formFactor: "PHONE" || "TABLET",
 * //               platform: "ANDROID" || "IOS",
 * //               os: "STRING_VALUE",
 * //               cpu: { // CPU
 * //                 frequency: "STRING_VALUE",
 * //                 architecture: "STRING_VALUE",
 * //                 clock: Number("double"),
 * //               },
 * //               resolution: { // Resolution
 * //                 width: Number("int"),
 * //                 height: Number("int"),
 * //               },
 * //               heapSize: Number("long"),
 * //               memory: Number("long"),
 * //               image: "STRING_VALUE",
 * //               carrier: "STRING_VALUE",
 * //               radio: "STRING_VALUE",
 * //               remoteAccessEnabled: true || false,
 * //               remoteDebugEnabled: true || false,
 * //               fleetType: "STRING_VALUE",
 * //               fleetName: "STRING_VALUE",
 * //               instances: [ // DeviceInstances
 * //                 { // DeviceInstance
 * //                   arn: "STRING_VALUE",
 * //                   deviceArn: "STRING_VALUE",
 * //                   labels: [ // InstanceLabels
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //                   udid: "STRING_VALUE",
 * //                   instanceProfile: { // InstanceProfile
 * //                     arn: "STRING_VALUE",
 * //                     packageCleanup: true || false,
 * //                     excludeAppPackagesFromCleanup: [ // PackageIds
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     rebootAfterUse: true || false,
 * //                     name: "STRING_VALUE",
 * //                     description: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //               availability: "TEMPORARY_NOT_AVAILABLE" || "BUSY" || "AVAILABLE" || "HIGHLY_AVAILABLE",
 * //             },
 * //             result: "PENDING" || "PASSED" || "WARNED" || "FAILED" || "SKIPPED" || "ERRORED" || "STOPPED",
 * //             message: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUniqueProblemsCommandInput - {@link ListUniqueProblemsCommandInput}
 * @returns {@link ListUniqueProblemsCommandOutput}
 * @see {@link ListUniqueProblemsCommandInput} for command's `input` shape.
 * @see {@link ListUniqueProblemsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @example To get information about unique problems
 * ```javascript
 * // The following example returns information about unique problems, given a specific Device Farm project.
 * const input = {
 *   arn: "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456",
 *   nextToken: "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE"
 * };
 * const command = new ListUniqueProblemsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   uniqueProblems:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListUniqueProblemsCommand extends $Command
  .classBuilder<
    ListUniqueProblemsCommandInput,
    ListUniqueProblemsCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "ListUniqueProblems", {})
  .n("DeviceFarmClient", "ListUniqueProblemsCommand")
  .sc(ListUniqueProblems)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUniqueProblemsRequest;
      output: ListUniqueProblemsResult;
    };
    sdk: {
      input: ListUniqueProblemsCommandInput;
      output: ListUniqueProblemsCommandOutput;
    };
  };
}
