// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteManagedEndpointRequest, DeleteManagedEndpointResponse } from "../models/models_0";
import { DeleteManagedEndpoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteManagedEndpointCommand}.
 */
export interface DeleteManagedEndpointCommandInput extends DeleteManagedEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteManagedEndpointCommand}.
 */
export interface DeleteManagedEndpointCommandOutput extends DeleteManagedEndpointResponse, __MetadataBearer {}

/**
 * <p>Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can
 *          communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DeleteManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DeleteManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // DeleteManagedEndpointRequest
 *   id: "STRING_VALUE", // required
 *   virtualClusterId: "STRING_VALUE", // required
 * };
 * const command = new DeleteManagedEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteManagedEndpointResponse
 * //   id: "STRING_VALUE",
 * //   virtualClusterId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteManagedEndpointCommandInput - {@link DeleteManagedEndpointCommandInput}
 * @returns {@link DeleteManagedEndpointCommandOutput}
 * @see {@link DeleteManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteManagedEndpointCommandOutput} for command's `response` shape.
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
export class DeleteManagedEndpointCommand extends $Command
  .classBuilder<
    DeleteManagedEndpointCommandInput,
    DeleteManagedEndpointCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsChicagoWebService", "DeleteManagedEndpoint", {})
  .n("EMRContainersClient", "DeleteManagedEndpointCommand")
  .sc(DeleteManagedEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteManagedEndpointRequest;
      output: DeleteManagedEndpointResponse;
    };
    sdk: {
      input: DeleteManagedEndpointCommandInput;
      output: DeleteManagedEndpointCommandOutput;
    };
  };
}
