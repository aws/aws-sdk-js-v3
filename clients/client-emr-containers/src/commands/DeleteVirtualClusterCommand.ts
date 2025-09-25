// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVirtualClusterRequest, DeleteVirtualClusterResponse } from "../models/models_0";
import { DeleteVirtualCluster } from "../schemas/schemas_11_DeleteVirtualCluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVirtualClusterCommand}.
 */
export interface DeleteVirtualClusterCommandInput extends DeleteVirtualClusterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVirtualClusterCommand}.
 */
export interface DeleteVirtualClusterCommandOutput extends DeleteVirtualClusterResponse, __MetadataBearer {}

/**
 * <p>Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any
 *          additional resource in your system. A single virtual cluster maps to a single Kubernetes
 *          namespace. Given this relationship, you can model virtual clusters the same way you model
 *          Kubernetes namespaces to meet your requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DeleteVirtualClusterCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DeleteVirtualClusterCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // DeleteVirtualClusterRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteVirtualClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVirtualClusterResponse
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteVirtualClusterCommandInput - {@link DeleteVirtualClusterCommandInput}
 * @returns {@link DeleteVirtualClusterCommandOutput}
 * @see {@link DeleteVirtualClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualClusterCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteVirtualClusterCommand extends $Command
  .classBuilder<
    DeleteVirtualClusterCommandInput,
    DeleteVirtualClusterCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsChicagoWebService", "DeleteVirtualCluster", {})
  .n("EMRContainersClient", "DeleteVirtualClusterCommand")
  .sc(DeleteVirtualCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVirtualClusterRequest;
      output: DeleteVirtualClusterResponse;
    };
    sdk: {
      input: DeleteVirtualClusterCommandInput;
      output: DeleteVirtualClusterCommandOutput;
    };
  };
}
