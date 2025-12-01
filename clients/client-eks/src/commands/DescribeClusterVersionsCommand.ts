// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeClusterVersionsRequest, DescribeClusterVersionsResponse } from "../models/models_0";
import { DescribeClusterVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterVersionsCommand}.
 */
export interface DescribeClusterVersionsCommandInput extends DescribeClusterVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterVersionsCommand}.
 */
export interface DescribeClusterVersionsCommandOutput extends DescribeClusterVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists available Kubernetes versions for Amazon EKS clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeClusterVersionsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeClusterVersionsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DescribeClusterVersionsRequest
 *   clusterType: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   defaultOnly: true || false,
 *   includeAll: true || false,
 *   clusterVersions: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   status: "unsupported" || "standard-support" || "extended-support",
 *   versionStatus: "UNSUPPORTED" || "STANDARD_SUPPORT" || "EXTENDED_SUPPORT",
 * };
 * const command = new DescribeClusterVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterVersionsResponse
 * //   nextToken: "STRING_VALUE",
 * //   clusterVersions: [ // ClusterVersionList
 * //     { // ClusterVersionInformation
 * //       clusterVersion: "STRING_VALUE",
 * //       clusterType: "STRING_VALUE",
 * //       defaultPlatformVersion: "STRING_VALUE",
 * //       defaultVersion: true || false,
 * //       releaseDate: new Date("TIMESTAMP"),
 * //       endOfStandardSupportDate: new Date("TIMESTAMP"),
 * //       endOfExtendedSupportDate: new Date("TIMESTAMP"),
 * //       status: "unsupported" || "standard-support" || "extended-support",
 * //       versionStatus: "UNSUPPORTED" || "STANDARD_SUPPORT" || "EXTENDED_SUPPORT",
 * //       kubernetesPatchVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClusterVersionsCommandInput - {@link DescribeClusterVersionsCommandInput}
 * @returns {@link DescribeClusterVersionsCommandOutput}
 * @see {@link DescribeClusterVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterVersionsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
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
export class DescribeClusterVersionsCommand extends $Command
  .classBuilder<
    DescribeClusterVersionsCommandInput,
    DescribeClusterVersionsCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "DescribeClusterVersions", {})
  .n("EKSClient", "DescribeClusterVersionsCommand")
  .sc(DescribeClusterVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterVersionsRequest;
      output: DescribeClusterVersionsResponse;
    };
    sdk: {
      input: DescribeClusterVersionsCommandInput;
      output: DescribeClusterVersionsCommandOutput;
    };
  };
}
