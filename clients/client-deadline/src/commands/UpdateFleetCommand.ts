// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFleetRequest, UpdateFleetRequestFilterSensitiveLog, UpdateFleetResponse } from "../models/models_0";
import { de_UpdateFleetCommand, se_UpdateFleetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFleetCommand}.
 */
export interface UpdateFleetCommandInput extends UpdateFleetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFleetCommand}.
 */
export interface UpdateFleetCommandOutput extends UpdateFleetResponse, __MetadataBearer {}

/**
 * <p>Updates a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateFleetCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateFleetCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // UpdateFleetRequest
 *   clientToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE",
 *   minWorkerCount: Number("int"),
 *   maxWorkerCount: Number("int"),
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
 *   hostConfiguration: { // HostConfiguration
 *     scriptBody: "STRING_VALUE", // required
 *     scriptTimeoutSeconds: Number("int"),
 *   },
 * };
 * const command = new UpdateFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFleetCommandInput - {@link UpdateFleetCommandInput}
 * @returns {@link UpdateFleetCommandOutput}
 * @see {@link UpdateFleetCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetCommandOutput} for command's `response` shape.
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
export class UpdateFleetCommand extends $Command
  .classBuilder<
    UpdateFleetCommandInput,
    UpdateFleetCommandOutput,
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
  .s("Deadline", "UpdateFleet", {})
  .n("DeadlineClient", "UpdateFleetCommand")
  .f(UpdateFleetRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateFleetCommand)
  .de(de_UpdateFleetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFleetRequest;
      output: {};
    };
    sdk: {
      input: UpdateFleetCommandInput;
      output: UpdateFleetCommandOutput;
    };
  };
}
