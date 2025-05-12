// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFleetRequest, CreateFleetRequestFilterSensitiveLog, CreateFleetResponse } from "../models/models_0";
import { de_CreateFleetCommand, se_CreateFleetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFleetCommand}.
 */
export interface CreateFleetCommandInput extends CreateFleetRequest {}
/**
 * @public
 *
 * The output of {@link CreateFleetCommand}.
 */
export interface CreateFleetCommandOutput extends CreateFleetResponse, __MetadataBearer {}

/**
 * <p>Creates a fleet. Fleets gather information relating to compute, or capacity, for renders within your farms. You can choose to manage your own capacity or opt to have fleets fully managed by Deadline Cloud.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateFleetCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateFleetCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // CreateFleetRequest
 *   clientToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   minWorkerCount: Number("int"),
 *   maxWorkerCount: Number("int"), // required
 *   configuration: { // FleetConfiguration Union: only one key present
 *     customerManaged: { // CustomerManagedFleetConfiguration
 *       mode: "NO_SCALING" || "EVENT_BASED_AUTO_SCALING", // required
 *       workerCapabilities: { // CustomerManagedWorkerCapabilities
 *         vCpuCount: { // VCpuCountRange
 *           min: Number("int"), // required
 *           max: Number("int"),
 *         },
 *         memoryMiB: { // MemoryMiBRange
 *           min: Number("int"), // required
 *           max: Number("int"),
 *         },
 *         acceleratorTypes: [ // AcceleratorTypes
 *           "gpu",
 *         ],
 *         acceleratorCount: { // AcceleratorCountRange
 *           min: Number("int"), // required
 *           max: Number("int"),
 *         },
 *         acceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRange
 *           min: Number("int"), // required
 *           max: Number("int"),
 *         },
 *         osFamily: "WINDOWS" || "LINUX" || "MACOS", // required
 *         cpuArchitectureType: "x86_64" || "arm64", // required
 *         customAmounts: [ // CustomFleetAmountCapabilities
 *           { // FleetAmountCapability
 *             name: "STRING_VALUE", // required
 *             min: Number("float"), // required
 *             max: Number("float"),
 *           },
 *         ],
 *         customAttributes: [ // CustomFleetAttributeCapabilities
 *           { // FleetAttributeCapability
 *             name: "STRING_VALUE", // required
 *             values: [ // AttributeCapabilityValuesList // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *       storageProfileId: "STRING_VALUE",
 *       tagPropagationMode: "NO_PROPAGATION" || "PROPAGATE_TAGS_TO_WORKERS_AT_LAUNCH",
 *     },
 *     serviceManagedEc2: { // ServiceManagedEc2FleetConfiguration
 *       instanceCapabilities: { // ServiceManagedEc2InstanceCapabilities
 *         vCpuCount: {
 *           min: Number("int"), // required
 *           max: Number("int"),
 *         },
 *         memoryMiB: {
 *           min: Number("int"), // required
 *           max: Number("int"),
 *         },
 *         osFamily: "WINDOWS" || "LINUX", // required
 *         cpuArchitectureType: "x86_64" || "arm64", // required
 *         rootEbsVolume: { // Ec2EbsVolume
 *           sizeGiB: Number("int"),
 *           iops: Number("int"),
 *           throughputMiB: Number("int"),
 *         },
 *         acceleratorCapabilities: { // AcceleratorCapabilities
 *           selections: [ // AcceleratorSelections // required
 *             { // AcceleratorSelection
 *               name: "t4" || "a10g" || "l4" || "l40s", // required
 *               runtime: "STRING_VALUE",
 *             },
 *           ],
 *           count: {
 *             min: Number("int"), // required
 *             max: Number("int"),
 *           },
 *         },
 *         allowedInstanceTypes: [ // InstanceTypes
 *           "STRING_VALUE",
 *         ],
 *         excludedInstanceTypes: [
 *           "STRING_VALUE",
 *         ],
 *         customAmounts: [
 *           {
 *             name: "STRING_VALUE", // required
 *             min: Number("float"), // required
 *             max: Number("float"),
 *           },
 *         ],
 *         customAttributes: [
 *           {
 *             name: "STRING_VALUE", // required
 *             values: [ // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *       instanceMarketOptions: { // ServiceManagedEc2InstanceMarketOptions
 *         type: "on-demand" || "spot", // required
 *       },
 *     },
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   hostConfiguration: { // HostConfiguration
 *     scriptBody: "STRING_VALUE", // required
 *     scriptTimeoutSeconds: Number("int"),
 *   },
 * };
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * // { // CreateFleetResponse
 * //   fleetId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateFleetCommandInput - {@link CreateFleetCommandInput}
 * @returns {@link CreateFleetCommandOutput}
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the maximum number of service resources or operations for your Amazon Web Services account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class CreateFleetCommand extends $Command
  .classBuilder<
    CreateFleetCommandInput,
    CreateFleetCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "CreateFleet", {})
  .n("DeadlineClient", "CreateFleetCommand")
  .f(CreateFleetRequestFilterSensitiveLog, void 0)
  .ser(se_CreateFleetCommand)
  .de(de_CreateFleetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFleetRequest;
      output: CreateFleetResponse;
    };
    sdk: {
      input: CreateFleetCommandInput;
      output: CreateFleetCommandOutput;
    };
  };
}
