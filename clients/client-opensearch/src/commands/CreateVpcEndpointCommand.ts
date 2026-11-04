// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVpcEndpointRequest, CreateVpcEndpointResponse } from "../models/models_0";
import { CreateVpcEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateVpcEndpointCommand}.
 */
export interface CreateVpcEndpointCommandInput extends CreateVpcEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcEndpointCommand}.
 */
export interface CreateVpcEndpointCommandOutput extends CreateVpcEndpointResponse, __MetadataBearer {}

/**
 * Creates an Amazon OpenSearch Service-managed VPC endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, CreateVpcEndpointCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, CreateVpcEndpointCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // CreateVpcEndpointRequest
 *   DomainArn: "STRING_VALUE", // required
 *   VpcOptions: { // VPCOptions
 *     SubnetIds: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *     EgressEnabled: true || false,
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateVpcEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcEndpointResponse
 * //   VpcEndpoint: { // VpcEndpoint
 * //     VpcEndpointId: "STRING_VALUE",
 * //     VpcEndpointOwner: "STRING_VALUE",
 * //     DomainArn: "STRING_VALUE",
 * //     VpcOptions: { // VPCDerivedInfo
 * //       VPCId: "STRING_VALUE",
 * //       SubnetIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AvailabilityZones: [
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       EgressEnabled: true || false,
 * //     },
 * //     Status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //     Endpoint: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVpcEndpointCommandInput - {@link CreateVpcEndpointCommandInput}
 * @returns {@link CreateVpcEndpointCommandOutput}
 * @see {@link CreateVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * An error occurred because the client attempts to remove a resource that is currently in use.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * An error occured because the client wanted to access an unsupported operation.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An exception for trying to create more than the allowed number of resources or sub-resources.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link OpenSearchServiceException}
 *
 * Base exception class for all service exceptions from OpenSearch service.
 *
 * @public
 */
export class CreateVpcEndpointCommand extends command<CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreateVpcEndpoint",
  CreateVpcEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcEndpointRequest;
      output: CreateVpcEndpointResponse;
    };
    sdk: {
      input: CreateVpcEndpointCommandInput;
      output: CreateVpcEndpointCommandOutput;
    };
  };
}
