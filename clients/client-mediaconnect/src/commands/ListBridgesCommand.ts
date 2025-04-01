// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { ListBridgesRequest, ListBridgesResponse } from "../models/models_0";
import { de_ListBridgesCommand, se_ListBridgesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBridgesCommand}.
 */
export interface ListBridgesCommandInput extends ListBridgesRequest {}
/**
 * @public
 *
 * The output of {@link ListBridgesCommand}.
 */
export interface ListBridgesCommandOutput extends ListBridgesResponse, __MetadataBearer {}

/**
 * <p> Displays a list of bridges that are associated with this account and an optionally
 *          specified Amazon Resource Name (ARN). This request returns a paginated result.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListBridgesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListBridgesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // ListBridgesRequest
 *   FilterArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBridgesCommand(input);
 * const response = await client.send(command);
 * // { // ListBridgesResponse
 * //   Bridges: [ // __listOfListedBridge
 * //     { // ListedBridge
 * //       BridgeArn: "STRING_VALUE", // required
 * //       BridgeState: "CREATING" || "STANDBY" || "STARTING" || "DEPLOYING" || "ACTIVE" || "STOPPING" || "DELETING" || "DELETED" || "START_FAILED" || "START_PENDING" || "STOP_FAILED" || "UPDATING", // required
 * //       BridgeType: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       PlacementArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBridgesCommandInput - {@link ListBridgesCommandInput}
 * @returns {@link ListBridgesCommandOutput}
 * @see {@link ListBridgesCommandInput} for command's `input` shape.
 * @see {@link ListBridgesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 * </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 * </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.
 * </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy.
 * </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling.
 * </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class ListBridgesCommand extends $Command
  .classBuilder<
    ListBridgesCommandInput,
    ListBridgesCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "ListBridges", {})
  .n("MediaConnectClient", "ListBridgesCommand")
  .f(void 0, void 0)
  .ser(se_ListBridgesCommand)
  .de(de_ListBridgesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBridgesRequest;
      output: ListBridgesResponse;
    };
    sdk: {
      input: ListBridgesCommandInput;
      output: ListBridgesCommandOutput;
    };
  };
}
