// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFleetsRequest, ListFleetsResponse } from "../models/models_0";
import { ListFleets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFleetsCommand}.
 */
export interface ListFleetsCommandInput extends ListFleetsRequest {}
/**
 * @public
 *
 * The output of {@link ListFleetsCommand}.
 */
export interface ListFleetsCommandOutput extends ListFleetsResponse, __MetadataBearer {}

/**
 * <p>Lists fleets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListFleetsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListFleetsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListFleetsRequest
 *   farmId: "STRING_VALUE", // required
 *   principalId: "STRING_VALUE",
 *   displayName: "STRING_VALUE",
 *   status: "ACTIVE" || "CREATE_IN_PROGRESS" || "UPDATE_IN_PROGRESS" || "CREATE_FAILED" || "UPDATE_FAILED" || "SUSPENDED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFleetsCommand(input);
 * const response = await client.send(command);
 * // { // ListFleetsResponse
 * //   fleets: [ // FleetSummaries // required
 * //     { // FleetSummary
 * //       fleetId: "STRING_VALUE", // required
 * //       farmId: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "CREATE_IN_PROGRESS" || "UPDATE_IN_PROGRESS" || "CREATE_FAILED" || "UPDATE_FAILED" || "SUSPENDED", // required
 * //       statusMessage: "STRING_VALUE",
 * //       autoScalingStatus: "GROWING" || "STEADY" || "SHRINKING",
 * //       targetWorkerCount: Number("int"),
 * //       workerCount: Number("int"), // required
 * //       minWorkerCount: Number("int"), // required
 * //       maxWorkerCount: Number("int"), // required
 * //       configuration: { // FleetConfiguration Union: only one key present
 * //         customerManaged: { // CustomerManagedFleetConfiguration
 * //           mode: "NO_SCALING" || "EVENT_BASED_AUTO_SCALING", // required
 * //           workerCapabilities: { // CustomerManagedWorkerCapabilities
 * //             vCpuCount: { // VCpuCountRange
 * //               min: Number("int"), // required
 * //               max: Number("int"),
 * //             },
 * //             memoryMiB: { // MemoryMiBRange
 * //               min: Number("int"), // required
 * //               max: Number("int"),
 * //             },
 * //             acceleratorTypes: [ // AcceleratorTypes
 * //               "gpu",
 * //             ],
 * //             acceleratorCount: { // AcceleratorCountRange
 * //               min: Number("int"), // required
 * //               max: Number("int"),
 * //             },
 * //             acceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRange
 * //               min: Number("int"), // required
 * //               max: Number("int"),
 * //             },
 * //             osFamily: "WINDOWS" || "LINUX" || "MACOS", // required
 * //             cpuArchitectureType: "x86_64" || "arm64", // required
 * //             customAmounts: [ // CustomFleetAmountCapabilities
 * //               { // FleetAmountCapability
 * //                 name: "STRING_VALUE", // required
 * //                 min: Number("float"), // required
 * //                 max: Number("float"),
 * //               },
 * //             ],
 * //             customAttributes: [ // CustomFleetAttributeCapabilities
 * //               { // FleetAttributeCapability
 * //                 name: "STRING_VALUE", // required
 * //                 values: [ // AttributeCapabilityValuesList // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           storageProfileId: "STRING_VALUE",
 * //           tagPropagationMode: "NO_PROPAGATION" || "PROPAGATE_TAGS_TO_WORKERS_AT_LAUNCH",
 * //         },
 * //         serviceManagedEc2: { // ServiceManagedEc2FleetConfiguration
 * //           instanceCapabilities: { // ServiceManagedEc2InstanceCapabilities
 * //             vCpuCount: {
 * //               min: Number("int"), // required
 * //               max: Number("int"),
 * //             },
 * //             memoryMiB: {
 * //               min: Number("int"), // required
 * //               max: Number("int"),
 * //             },
 * //             osFamily: "WINDOWS" || "LINUX", // required
 * //             cpuArchitectureType: "x86_64" || "arm64", // required
 * //             rootEbsVolume: { // Ec2EbsVolume
 * //               sizeGiB: Number("int"),
 * //               iops: Number("int"),
 * //               throughputMiB: Number("int"),
 * //             },
 * //             acceleratorCapabilities: { // AcceleratorCapabilities
 * //               selections: [ // AcceleratorSelections // required
 * //                 { // AcceleratorSelection
 * //                   name: "t4" || "a10g" || "l4" || "l40s", // required
 * //                   runtime: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               count: {
 * //                 min: Number("int"), // required
 * //                 max: Number("int"),
 * //               },
 * //             },
 * //             allowedInstanceTypes: [ // InstanceTypes
 * //               "STRING_VALUE",
 * //             ],
 * //             excludedInstanceTypes: [
 * //               "STRING_VALUE",
 * //             ],
 * //             customAmounts: [
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //                 min: Number("float"), // required
 * //                 max: Number("float"),
 * //               },
 * //             ],
 * //             customAttributes: [
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //                 values: [ // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           instanceMarketOptions: { // ServiceManagedEc2InstanceMarketOptions
 * //             type: "on-demand" || "spot" || "wait-and-save", // required
 * //           },
 * //           vpcConfiguration: { // VpcConfiguration
 * //             resourceConfigurationArns: [ // VpcResourceConfigurationArns
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           storageProfileId: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFleetsCommandInput - {@link ListFleetsCommandInput}
 * @returns {@link ListFleetsCommandOutput}
 * @see {@link ListFleetsCommandInput} for command's `input` shape.
 * @see {@link ListFleetsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListFleetsCommand extends $Command
  .classBuilder<
    ListFleetsCommandInput,
    ListFleetsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "ListFleets", {})
  .n("DeadlineClient", "ListFleetsCommand")
  .sc(ListFleets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFleetsRequest;
      output: ListFleetsResponse;
    };
    sdk: {
      input: ListFleetsCommandInput;
      output: ListFleetsCommandOutput;
    };
  };
}
