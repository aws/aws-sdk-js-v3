// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { CreateGatewayRequest, CreateGatewayResponse } from "../models/models_0";
import { de_CreateGatewayCommand, se_CreateGatewayCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGatewayCommand}.
 */
export interface CreateGatewayCommandInput extends CreateGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateGatewayCommand}.
 */
export interface CreateGatewayCommandOutput extends CreateGatewayResponse, __MetadataBearer {}

/**
 * <p> Creates a new gateway. The request must include at least one network (up to four).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, CreateGatewayCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, CreateGatewayCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // CreateGatewayRequest
 *   EgressCidrBlocks: [ // __listOfString // required
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE", // required
 *   Networks: [ // __listOfGatewayNetwork // required
 *     { // GatewayNetwork
 *       CidrBlock: "STRING_VALUE", // required
 *       Name: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateGatewayResponse
 * //   Gateway: { // Gateway
 * //     EgressCidrBlocks: [ // __listOfString // required
 * //       "STRING_VALUE",
 * //     ],
 * //     GatewayArn: "STRING_VALUE", // required
 * //     GatewayMessages: [ // __listOfMessageDetail
 * //       { // MessageDetail
 * //         Code: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //         ResourceName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     GatewayState: "CREATING" || "ACTIVE" || "UPDATING" || "ERROR" || "DELETING" || "DELETED",
 * //     Name: "STRING_VALUE", // required
 * //     Networks: [ // __listOfGatewayNetwork // required
 * //       { // GatewayNetwork
 * //         CidrBlock: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGatewayCommandInput - {@link CreateGatewayCommandInput}
 * @returns {@link CreateGatewayCommandOutput}
 * @see {@link CreateGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayCommandOutput} for command's `response` shape.
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
 * @throws {@link CreateGateway420Exception} (client fault)
 *  <p>Exception raised by Elemental MediaConnect when creating the gateway. See the error message for the operation for more information on the cause of this exception.
 *    </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
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
 * @public
 */
export class CreateGatewayCommand extends $Command
  .classBuilder<
    CreateGatewayCommandInput,
    CreateGatewayCommandOutput,
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
  .s("MediaConnect", "CreateGateway", {})
  .n("MediaConnectClient", "CreateGatewayCommand")
  .f(void 0, void 0)
  .ser(se_CreateGatewayCommand)
  .de(de_CreateGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGatewayRequest;
      output: CreateGatewayResponse;
    };
    sdk: {
      input: CreateGatewayCommandInput;
      output: CreateGatewayCommandOutput;
    };
  };
}
