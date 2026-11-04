// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVpcEndpointRequest, DeleteVpcEndpointResponse } from "../models/models_0";
import { DeleteVpcEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVpcEndpointCommand}.
 */
export interface DeleteVpcEndpointCommandInput extends DeleteVpcEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcEndpointCommand}.
 */
export interface DeleteVpcEndpointCommandOutput extends DeleteVpcEndpointResponse, __MetadataBearer {}

/**
 * Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteVpcEndpointCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteVpcEndpointCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // DeleteVpcEndpointRequest
 *   VpcEndpointId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcEndpointResponse
 * //   VpcEndpointSummary: { // VpcEndpointSummary
 * //     VpcEndpointId: "STRING_VALUE",
 * //     VpcEndpointOwner: "STRING_VALUE",
 * //     DomainArn: "STRING_VALUE",
 * //     Status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVpcEndpointCommandInput - {@link DeleteVpcEndpointCommandInput}
 * @returns {@link DeleteVpcEndpointCommandOutput}
 * @see {@link DeleteVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * An error occured because the client wanted to access a not supported operation. Gives http status code of 409.
 *
 * @throws {@link InternalException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.
 *
 * @throws {@link ElasticsearchServiceServiceException}
 *
 * Base exception class for all service exceptions from ElasticsearchService service.
 *
 * @public
 */
export class DeleteVpcEndpointCommand extends command<DeleteVpcEndpointCommandInput, DeleteVpcEndpointCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVpcEndpoint",
  DeleteVpcEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcEndpointRequest;
      output: DeleteVpcEndpointResponse;
    };
    sdk: {
      input: DeleteVpcEndpointCommandInput;
      output: DeleteVpcEndpointCommandOutput;
    };
  };
}
