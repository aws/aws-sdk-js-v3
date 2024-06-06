// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVirtualClusterRequest, DescribeVirtualClusterResponse } from "../models/models_0";
import { de_DescribeVirtualClusterCommand, se_DescribeVirtualClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVirtualClusterCommand}.
 */
export interface DescribeVirtualClusterCommandInput extends DescribeVirtualClusterRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVirtualClusterCommand}.
 */
export interface DescribeVirtualClusterCommandOutput extends DescribeVirtualClusterResponse, __MetadataBearer {}

/**
 * <p>Displays detailed information about a specified virtual cluster. Virtual cluster is a
 *          managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual
 *          clusters. They do not consume any additional resource in your system. A single virtual
 *          cluster maps to a single Kubernetes namespace. Given this relationship, you can model
 *          virtual clusters the same way you model Kubernetes namespaces to meet your
 *          requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DescribeVirtualClusterCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DescribeVirtualClusterCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // DescribeVirtualClusterRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeVirtualClusterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVirtualClusterResponse
 * //   virtualCluster: { // VirtualCluster
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     state: "RUNNING" || "TERMINATING" || "TERMINATED" || "ARRESTED",
 * //     containerProvider: { // ContainerProvider
 * //       type: "EKS", // required
 * //       id: "STRING_VALUE", // required
 * //       info: { // ContainerInfo Union: only one key present
 * //         eksInfo: { // EksInfo
 * //           namespace: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     securityConfigurationId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeVirtualClusterCommandInput - {@link DescribeVirtualClusterCommandInput}
 * @returns {@link DescribeVirtualClusterCommandOutput}
 * @see {@link DescribeVirtualClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualClusterCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 * @public
 */
export class DescribeVirtualClusterCommand extends $Command
  .classBuilder<
    DescribeVirtualClusterCommandInput,
    DescribeVirtualClusterCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsChicagoWebService", "DescribeVirtualCluster", {})
  .n("EMRContainersClient", "DescribeVirtualClusterCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVirtualClusterCommand)
  .de(de_DescribeVirtualClusterCommand)
  .build() {}
