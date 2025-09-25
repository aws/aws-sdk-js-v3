// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateVpcEndpointRequest, UpdateVpcEndpointResponse } from "../models/models_0";
import { UpdateVpcEndpoint } from "../schemas/schemas_4_Domain";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVpcEndpointCommand}.
 */
export interface UpdateVpcEndpointCommandInput extends UpdateVpcEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVpcEndpointCommand}.
 */
export interface UpdateVpcEndpointCommandOutput extends UpdateVpcEndpointResponse, __MetadataBearer {}

/**
 * <p>Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, UpdateVpcEndpointCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, UpdateVpcEndpointCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // UpdateVpcEndpointRequest
 *   VpcEndpointId: "STRING_VALUE", // required
 *   VpcOptions: { // VPCOptions
 *     SubnetIds: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateVpcEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVpcEndpointResponse
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
 * //     },
 * //     Status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //     Endpoint: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVpcEndpointCommandInput - {@link UpdateVpcEndpointCommandInput}
 * @returns {@link UpdateVpcEndpointCommandOutput}
 * @see {@link UpdateVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use. Returns HTTP status code 409.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class UpdateVpcEndpointCommand extends $Command
  .classBuilder<
    UpdateVpcEndpointCommandInput,
    UpdateVpcEndpointCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "UpdateVpcEndpoint", {})
  .n("ElasticsearchServiceClient", "UpdateVpcEndpointCommand")
  .sc(UpdateVpcEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVpcEndpointRequest;
      output: UpdateVpcEndpointResponse;
    };
    sdk: {
      input: UpdateVpcEndpointCommandInput;
      output: UpdateVpcEndpointCommandOutput;
    };
  };
}
