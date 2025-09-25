// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { ListGatewayInstancesRequest, ListGatewayInstancesResponse } from "../models/models_0";
import { ListGatewayInstances } from "../schemas/schemas_1_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGatewayInstancesCommand}.
 */
export interface ListGatewayInstancesCommandInput extends ListGatewayInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListGatewayInstancesCommand}.
 */
export interface ListGatewayInstancesCommandOutput extends ListGatewayInstancesResponse, __MetadataBearer {}

/**
 * <p> Displays a list of instances associated with the Amazon Web Services account. This request returns a paginated result. You can use the filterArn property to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListGatewayInstancesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListGatewayInstancesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // ListGatewayInstancesRequest
 *   FilterArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGatewayInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewayInstancesResponse
 * //   Instances: [ // __listOfListedGatewayInstance
 * //     { // ListedGatewayInstance
 * //       GatewayArn: "STRING_VALUE", // required
 * //       GatewayInstanceArn: "STRING_VALUE", // required
 * //       InstanceId: "STRING_VALUE", // required
 * //       InstanceState: "REGISTERING" || "ACTIVE" || "DEREGISTERING" || "DEREGISTERED" || "REGISTRATION_ERROR" || "DEREGISTRATION_ERROR",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewayInstancesCommandInput - {@link ListGatewayInstancesCommandInput}
 * @returns {@link ListGatewayInstancesCommandOutput}
 * @see {@link ListGatewayInstancesCommandInput} for command's `input` shape.
 * @see {@link ListGatewayInstancesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class ListGatewayInstancesCommand extends $Command
  .classBuilder<
    ListGatewayInstancesCommandInput,
    ListGatewayInstancesCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "ListGatewayInstances", {})
  .n("MediaConnectClient", "ListGatewayInstancesCommand")
  .sc(ListGatewayInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGatewayInstancesRequest;
      output: ListGatewayInstancesResponse;
    };
    sdk: {
      input: ListGatewayInstancesCommandInput;
      output: ListGatewayInstancesCommandOutput;
    };
  };
}
