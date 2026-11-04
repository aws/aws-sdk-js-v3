// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddFlowVpcInterfacesRequest, AddFlowVpcInterfacesResponse } from "../models/models_0";
import { AddFlowVpcInterfaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddFlowVpcInterfacesCommand}.
 */
export interface AddFlowVpcInterfacesCommandInput extends AddFlowVpcInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link AddFlowVpcInterfacesCommand}.
 */
export interface AddFlowVpcInterfacesCommandOutput extends AddFlowVpcInterfacesResponse, __MetadataBearer {}

/**
 * Adds VPC interfaces to a flow.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowVpcInterfacesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowVpcInterfacesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // AddFlowVpcInterfacesRequest
 *   FlowArn: "STRING_VALUE", // required
 *   VpcInterfaces: [ // __listOfVpcInterfaceRequest // required
 *     { // VpcInterfaceRequest
 *       Name: "STRING_VALUE", // required
 *       NetworkInterfaceType: "ena" || "efa",
 *       RoleArn: "STRING_VALUE", // required
 *       SecurityGroupIds: [ // __listOfString // required
 *         "STRING_VALUE",
 *       ],
 *       SubnetId: "STRING_VALUE", // required
 *       VpcInterfaceTags: { // __mapOfString
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new AddFlowVpcInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // AddFlowVpcInterfacesResponse
 * //   FlowArn: "STRING_VALUE",
 * //   VpcInterfaces: [ // __listOfVpcInterface
 * //     { // VpcInterface
 * //       Name: "STRING_VALUE", // required
 * //       NetworkInterfaceIds: [ // __listOfString // required
 * //         "STRING_VALUE",
 * //       ],
 * //       NetworkInterfaceType: "ena" || "efa", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       SecurityGroupIds: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       SubnetId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddFlowVpcInterfacesCommandInput - {@link AddFlowVpcInterfacesCommandInput}
 * @returns {@link AddFlowVpcInterfacesCommandOutput}
 * @see {@link AddFlowVpcInterfacesCommandInput} for command's `input` shape.
 * @see {@link AddFlowVpcInterfacesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable or busy.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MediaConnectServiceException}
 *
 * Base exception class for all service exceptions from MediaConnect service.
 *
 * @public
 */
export class AddFlowVpcInterfacesCommand extends command<AddFlowVpcInterfacesCommandInput, AddFlowVpcInterfacesCommandOutput>(
  _ep0,
  _mw0,
  "AddFlowVpcInterfaces",
  AddFlowVpcInterfaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddFlowVpcInterfacesRequest;
      output: AddFlowVpcInterfacesResponse;
    };
    sdk: {
      input: AddFlowVpcInterfacesCommandInput;
      output: AddFlowVpcInterfacesCommandOutput;
    };
  };
}
