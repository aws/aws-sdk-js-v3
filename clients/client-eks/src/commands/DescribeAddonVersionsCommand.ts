// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAddonVersionsRequest, DescribeAddonVersionsResponse } from "../models/models_0";
import { de_DescribeAddonVersionsCommand, se_DescribeAddonVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAddonVersionsCommand}.
 */
export interface DescribeAddonVersionsCommandInput extends DescribeAddonVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddonVersionsCommand}.
 */
export interface DescribeAddonVersionsCommandOutput extends DescribeAddonVersionsResponse, __MetadataBearer {}

/**
 * <p>Describes the versions for an add-on.</p>
 *          <p>Information such as the Kubernetes versions that you can use the add-on with, the
 *                 <code>owner</code>, <code>publisher</code>, and the <code>type</code> of the add-on
 *             are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeAddonVersionsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeAddonVersionsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EKSClient(config);
 * const input = { // DescribeAddonVersionsRequest
 *   kubernetesVersion: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   addonName: "STRING_VALUE",
 *   types: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   publishers: [
 *     "STRING_VALUE",
 *   ],
 *   owners: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAddonVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAddonVersionsResponse
 * //   addons: [ // Addons
 * //     { // AddonInfo
 * //       addonName: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       addonVersions: [ // AddonVersionInfoList
 * //         { // AddonVersionInfo
 * //           addonVersion: "STRING_VALUE",
 * //           architecture: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           computeTypes: [
 * //             "STRING_VALUE",
 * //           ],
 * //           compatibilities: [ // Compatibilities
 * //             { // Compatibility
 * //               clusterVersion: "STRING_VALUE",
 * //               platformVersions: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               defaultVersion: true || false,
 * //             },
 * //           ],
 * //           requiresConfiguration: true || false,
 * //           requiresIamPermissions: true || false,
 * //         },
 * //       ],
 * //       publisher: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
 * //       marketplaceInformation: { // MarketplaceInformation
 * //         productId: "STRING_VALUE",
 * //         productUrl: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAddonVersionsCommandInput - {@link DescribeAddonVersionsCommandInput}
 * @returns {@link DescribeAddonVersionsCommandOutput}
 * @see {@link DescribeAddonVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAddonVersionsCommandOutput} for command's `response` shape.
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
 *                  specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @public
 */
export class DescribeAddonVersionsCommand extends $Command
  .classBuilder<
    DescribeAddonVersionsCommandInput,
    DescribeAddonVersionsCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "DescribeAddonVersions", {})
  .n("EKSClient", "DescribeAddonVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAddonVersionsCommand)
  .de(de_DescribeAddonVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAddonVersionsRequest;
      output: DescribeAddonVersionsResponse;
    };
    sdk: {
      input: DescribeAddonVersionsCommandInput;
      output: DescribeAddonVersionsCommandOutput;
    };
  };
}
