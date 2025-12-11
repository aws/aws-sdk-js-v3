// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import type { GetWorkloadInput, GetWorkloadOutput } from "../models/models_0";
import { GetWorkload } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkloadCommand}.
 */
export interface GetWorkloadCommandInput extends GetWorkloadInput {}
/**
 * @public
 *
 * The output of {@link GetWorkloadCommand}.
 */
export interface GetWorkloadCommandOutput extends GetWorkloadOutput, __MetadataBearer {}

/**
 * <p>Returns information about a workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, GetWorkloadCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, GetWorkloadCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
 * const client = new LaunchWizardClient(config);
 * const input = { // GetWorkloadInput
 *   workloadName: "STRING_VALUE", // required
 * };
 * const command = new GetWorkloadCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkloadOutput
 * //   workload: { // WorkloadData
 * //     workloadName: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     documentationUrl: "STRING_VALUE",
 * //     iconUrl: "STRING_VALUE",
 * //     status: "ACTIVE" || "INACTIVE" || "DISABLED" || "DELETED",
 * //     statusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkloadCommandInput - {@link GetWorkloadCommandInput}
 * @returns {@link GetWorkloadCommandOutput}
 * @see {@link GetWorkloadCommandInput} for command's `input` shape.
 * @see {@link GetWorkloadCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified workload or deployment resource can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link LaunchWizardServiceException}
 * <p>Base exception class for all service exceptions from LaunchWizard service.</p>
 *
 *
 * @example Get details about a specific workload.
 * ```javascript
 * //
 * const input = {
 *   workloadName: "SAP"
 * };
 * const command = new GetWorkloadCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   workload: {
 *     description: "Workload Description",
 *     displayName: "SAP",
 *     documentationUrl: "https://docs.aws.amazon.com/launchwizard/latest/userguide/launch-wizard-sap.html",
 *     iconUrl: "https://aws-lw-workload-assets-test-us-east-1.s3.amazonaws.com/amazon/SAP/icon.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLWVhc3QtMSJHMEUCIC4l3GCH4o%2Bgq3pJzcD1YJmtrmyNCoEgG2RIayjDWf9kAiEAnMK5nYixaZLuF1s1UVoNd7xIbDrOQ8EAbhcZWexMp9cq7wIIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgw1ODI1NTgxMjEyMDYiDHxMN%2BZ8CoPORzvo4yrDAtkVZlBVxLwnFmwHw005vo13LOUUbyajEpp3HNh%2BaBL8K2DLx7Kzi0UPPD6z8pL1eiFLHAQ9zZgVc7pLVQjBKOdcw1GmIADDepqYEb%2B8zLi7zwWP1JT72YbT6ZXSoWpb5NCqcyAvdK47b0Ae586s6VkWzoeJ65jR%2FgbJMhRpFpqVSP2XI6Rf6yA3%2BkQyUCk3RdyF4ljIL8Nf5nIFb%2BOMK2PZ8aJX85l1j7UpJE1rfNb1PitVcQz3KlW5xkiXfcWRKeVhgHRyuCEL3FY0DyPFdqe3NxcA0%2FzPgBq6Y9B41kM6af5u2kQRfQOjWejDpzpG7w40eaIKAYnhBkjIA9550geSLB7O%2FuAPQLI9fI2lVowIBUKsKVOr0%2FFGIzW3WM7%2BbEx%2FZ0mDkP1IhcpZdP7owC77K8O%2BXDgBCabAy48K3ndi%2BQKQMPXjz6YGOp4Bbgv9mVc3sE4KvXZv1skhnOYcOKGdCncIKLne0W%2BgO3URxyDQiyO2FhM3OekXDH83CNCyDVIpkgpWkvgXDSaZiD5mj0T9iqEeJzfh6uQvX1dRN%2BxI1eV0M7HKY2e7F%2BKNjeLhzKgKpSpDqFIUSjLeBlLLyQCNKuUiO3DMiy3rB89aX4b9wyC8au0SfGb72YyNLXjh6M1whcj1VNGePyw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230809T202649Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAYPIZLPT3GGDNTHTI%2F20230809%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6a37e41e47208b426a5e7d32392d0815388cd0231187652204836943c37ad86a",
 *     status: "ACTIVE",
 *     workloadName: "SAP"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetWorkloadCommand extends $Command
  .classBuilder<
    GetWorkloadCommandInput,
    GetWorkloadCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LaunchWizard", "GetWorkload", {})
  .n("LaunchWizardClient", "GetWorkloadCommand")
  .sc(GetWorkload)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkloadInput;
      output: GetWorkloadOutput;
    };
    sdk: {
      input: GetWorkloadCommandInput;
      output: GetWorkloadCommandOutput;
    };
  };
}
