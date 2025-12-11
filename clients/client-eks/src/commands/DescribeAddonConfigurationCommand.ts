// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAddonConfigurationRequest, DescribeAddonConfigurationResponse } from "../models/models_0";
import { DescribeAddonConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAddonConfigurationCommand}.
 */
export interface DescribeAddonConfigurationCommandInput extends DescribeAddonConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddonConfigurationCommand}.
 */
export interface DescribeAddonConfigurationCommandOutput extends DescribeAddonConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns configuration options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeAddonConfigurationCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeAddonConfigurationCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DescribeAddonConfigurationRequest
 *   addonName: "STRING_VALUE", // required
 *   addonVersion: "STRING_VALUE", // required
 * };
 * const command = new DescribeAddonConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAddonConfigurationResponse
 * //   addonName: "STRING_VALUE",
 * //   addonVersion: "STRING_VALUE",
 * //   configurationSchema: "STRING_VALUE",
 * //   podIdentityConfiguration: [ // AddonPodIdentityConfigurationList
 * //     { // AddonPodIdentityConfiguration
 * //       serviceAccount: "STRING_VALUE",
 * //       recommendedManagedPolicies: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAddonConfigurationCommandInput - {@link DescribeAddonConfigurationCommandInput}
 * @returns {@link DescribeAddonConfigurationCommandOutput}
 * @see {@link DescribeAddonConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAddonConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region
 *             specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class DescribeAddonConfigurationCommand extends $Command
  .classBuilder<
    DescribeAddonConfigurationCommandInput,
    DescribeAddonConfigurationCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "DescribeAddonConfiguration", {})
  .n("EKSClient", "DescribeAddonConfigurationCommand")
  .sc(DescribeAddonConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAddonConfigurationRequest;
      output: DescribeAddonConfigurationResponse;
    };
    sdk: {
      input: DescribeAddonConfigurationCommandInput;
      output: DescribeAddonConfigurationCommandOutput;
    };
  };
}
