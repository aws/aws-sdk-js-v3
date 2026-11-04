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
 * Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see [Access Amazon OpenSearch Serverless using an interface endpoint](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, DeleteVpcEndpointCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, DeleteVpcEndpointCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // DeleteVpcEndpointRequest
 *   id: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteVpcEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcEndpointResponse
 * //   deleteVpcEndpointDetail: { // DeleteVpcEndpointDetail
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVpcEndpointCommandInput - {@link DeleteVpcEndpointCommandInput}
 * @returns {@link DeleteVpcEndpointCommandOutput}
 * @see {@link DeleteVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * When creating a resource, thrown when a resource with the same name already exists or is being created. When deleting a resource, thrown when the resource is not in the ACTIVE, FAILED, or UPDATE_FAILED state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Thrown when an error internal to the service occurs while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Thrown when accessing or deleting a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Thrown when the HTTP request contains invalid input or is missing required input.
 *
 * @throws {@link OpenSearchServerlessServiceException}
 *
 * Base exception class for all service exceptions from OpenSearchServerless service.
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
