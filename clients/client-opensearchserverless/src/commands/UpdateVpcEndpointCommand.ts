// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateVpcEndpointRequest, UpdateVpcEndpointResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_UpdateVpcEndpointCommand, se_UpdateVpcEndpointCommand } from "../protocols/Aws_json1_0";

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
 * <p>Updates an OpenSearch Serverless-managed interface endpoint. For more information, see
 *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, UpdateVpcEndpointCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, UpdateVpcEndpointCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // UpdateVpcEndpointRequest
 *   id: "STRING_VALUE", // required
 *   addSubnetIds: [ // SubnetIds
 *     "STRING_VALUE",
 *   ],
 *   removeSubnetIds: [
 *     "STRING_VALUE",
 *   ],
 *   addSecurityGroupIds: [ // SecurityGroupIds
 *     "STRING_VALUE",
 *   ],
 *   removeSecurityGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateVpcEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVpcEndpointResponse
 * //   UpdateVpcEndpointDetail: { // UpdateVpcEndpointDetail
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     subnetIds: [ // SubnetIds
 * //       "STRING_VALUE",
 * //     ],
 * //     securityGroupIds: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     lastModifiedDate: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVpcEndpointCommandInput - {@link UpdateVpcEndpointCommandInput}
 * @returns {@link UpdateVpcEndpointCommandOutput}
 * @see {@link UpdateVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists
 *             or is being created. When deleting a resource, thrown when the resource is not in
 *             the ACTIVE or FAILED state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 * @public
 */
export class UpdateVpcEndpointCommand extends $Command
  .classBuilder<
    UpdateVpcEndpointCommandInput,
    UpdateVpcEndpointCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpenSearchServerless", "UpdateVpcEndpoint", {})
  .n("OpenSearchServerlessClient", "UpdateVpcEndpointCommand")
  .f(void 0, void 0)
  .ser(se_UpdateVpcEndpointCommand)
  .de(de_UpdateVpcEndpointCommand)
  .build() {}
