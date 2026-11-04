// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGatewayInstancesRequest, ListGatewayInstancesResponse } from "../models/models_1";
import { ListGatewayInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Displays a list of instances associated with the Amazon Web Services account. This request returns a paginated result. You can use the filterArn property to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).
 *
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
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
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
export class ListGatewayInstancesCommand extends command<ListGatewayInstancesCommandInput, ListGatewayInstancesCommandOutput>(
  _ep0,
  _mw0,
  "ListGatewayInstances",
  ListGatewayInstances$
) {
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
