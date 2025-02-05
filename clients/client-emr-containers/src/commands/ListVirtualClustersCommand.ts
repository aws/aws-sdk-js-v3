// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListVirtualClustersRequest, ListVirtualClustersResponse } from "../models/models_0";
import { de_ListVirtualClustersCommand, se_ListVirtualClustersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVirtualClustersCommand}.
 */
export interface ListVirtualClustersCommandInput extends ListVirtualClustersRequest {}
/**
 * @public
 *
 * The output of {@link ListVirtualClustersCommand}.
 */
export interface ListVirtualClustersCommandOutput extends ListVirtualClustersResponse, __MetadataBearer {}

/**
 * <p>Lists information about the specified virtual cluster. Virtual cluster is a managed
 *          entity on Amazon EMR on EKS. You can create, describe, list and delete virtual
 *          clusters. They do not consume any additional resource in your system. A single virtual
 *          cluster maps to a single Kubernetes namespace. Given this relationship, you can model
 *          virtual clusters the same way you model Kubernetes namespaces to meet your
 *          requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListVirtualClustersCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListVirtualClustersCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EMRContainersClient(config);
 * const input = { // ListVirtualClustersRequest
 *   containerProviderId: "STRING_VALUE",
 *   containerProviderType: "EKS",
 *   createdAfter: new Date("TIMESTAMP"),
 *   createdBefore: new Date("TIMESTAMP"),
 *   states: [ // VirtualClusterStates
 *     "RUNNING" || "TERMINATING" || "TERMINATED" || "ARRESTED",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   eksAccessEntryIntegrated: true || false,
 * };
 * const command = new ListVirtualClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualClustersResponse
 * //   virtualClusters: [ // VirtualClusters
 * //     { // VirtualCluster
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       state: "RUNNING" || "TERMINATING" || "TERMINATED" || "ARRESTED",
 * //       containerProvider: { // ContainerProvider
 * //         type: "EKS", // required
 * //         id: "STRING_VALUE", // required
 * //         info: { // ContainerInfo Union: only one key present
 * //           eksInfo: { // EksInfo
 * //             namespace: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       securityConfigurationId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVirtualClustersCommandInput - {@link ListVirtualClustersCommandInput}
 * @returns {@link ListVirtualClustersCommandOutput}
 * @see {@link ListVirtualClustersCommandInput} for command's `input` shape.
 * @see {@link ListVirtualClustersCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 * @public
 */
export class ListVirtualClustersCommand extends $Command
  .classBuilder<
    ListVirtualClustersCommandInput,
    ListVirtualClustersCommandOutput,
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
  .s("AwsChicagoWebService", "ListVirtualClusters", {})
  .n("EMRContainersClient", "ListVirtualClustersCommand")
  .f(void 0, void 0)
  .ser(se_ListVirtualClustersCommand)
  .de(de_ListVirtualClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVirtualClustersRequest;
      output: ListVirtualClustersResponse;
    };
    sdk: {
      input: ListVirtualClustersCommandInput;
      output: ListVirtualClustersCommandOutput;
    };
  };
}
