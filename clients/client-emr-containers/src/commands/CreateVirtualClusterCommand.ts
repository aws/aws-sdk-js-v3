// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVirtualClusterRequest, CreateVirtualClusterResponse } from "../models/models_0";
import { de_CreateVirtualClusterCommand, se_CreateVirtualClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVirtualClusterCommand}.
 */
export interface CreateVirtualClusterCommandInput extends CreateVirtualClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateVirtualClusterCommand}.
 */
export interface CreateVirtualClusterCommandOutput extends CreateVirtualClusterResponse, __MetadataBearer {}

/**
 * <p>Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any
 *          additional resource in your system. A single virtual cluster maps to a single Kubernetes
 *          namespace. Given this relationship, you can model virtual clusters the same way you model
 *          Kubernetes namespaces to meet your requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CreateVirtualClusterCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CreateVirtualClusterCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // CreateVirtualClusterRequest
 *   name: "STRING_VALUE", // required
 *   containerProvider: { // ContainerProvider
 *     type: "EKS", // required
 *     id: "STRING_VALUE", // required
 *     info: { // ContainerInfo Union: only one key present
 *       eksInfo: { // EksInfo
 *         namespace: "STRING_VALUE",
 *         nodeLabel: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   securityConfigurationId: "STRING_VALUE",
 * };
 * const command = new CreateVirtualClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateVirtualClusterResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVirtualClusterCommandInput - {@link CreateVirtualClusterCommandInput}
 * @returns {@link CreateVirtualClusterCommandOutput}
 * @see {@link CreateVirtualClusterCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualClusterCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link EKSRequestThrottledException} (client fault)
 *  <p>The request exceeded the Amazon EKS API operation limits.</p>
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
 *
 * @public
 */
export class CreateVirtualClusterCommand extends $Command
  .classBuilder<
    CreateVirtualClusterCommandInput,
    CreateVirtualClusterCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsChicagoWebService", "CreateVirtualCluster", {})
  .n("EMRContainersClient", "CreateVirtualClusterCommand")
  .f(void 0, void 0)
  .ser(se_CreateVirtualClusterCommand)
  .de(de_CreateVirtualClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVirtualClusterRequest;
      output: CreateVirtualClusterResponse;
    };
    sdk: {
      input: CreateVirtualClusterCommandInput;
      output: CreateVirtualClusterCommandOutput;
    };
  };
}
