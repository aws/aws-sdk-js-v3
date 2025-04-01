// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuthorizersRequest, ListAuthorizersResponse } from "../models/models_1";
import { de_ListAuthorizersCommand, se_ListAuthorizersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAuthorizersCommand}.
 */
export interface ListAuthorizersCommandInput extends ListAuthorizersRequest {}
/**
 * @public
 *
 * The output of {@link ListAuthorizersCommand}.
 */
export interface ListAuthorizersCommandOutput extends ListAuthorizersResponse, __MetadataBearer {}

/**
 * <p>Lists the authorizers registered in your account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuthorizers</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuthorizersCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuthorizersCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListAuthorizersRequest
 *   pageSize: Number("int"),
 *   marker: "STRING_VALUE",
 *   ascendingOrder: true || false,
 *   status: "ACTIVE" || "INACTIVE",
 * };
 * const command = new ListAuthorizersCommand(input);
 * const response = await client.send(command);
 * // { // ListAuthorizersResponse
 * //   authorizers: [ // Authorizers
 * //     { // AuthorizerSummary
 * //       authorizerName: "STRING_VALUE",
 * //       authorizerArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAuthorizersCommandInput - {@link ListAuthorizersCommandInput}
 * @returns {@link ListAuthorizersCommandOutput}
 * @see {@link ListAuthorizersCommandInput} for command's `input` shape.
 * @see {@link ListAuthorizersCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListAuthorizersCommand extends $Command
  .classBuilder<
    ListAuthorizersCommandInput,
    ListAuthorizersCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListAuthorizers", {})
  .n("IoTClient", "ListAuthorizersCommand")
  .f(void 0, void 0)
  .ser(se_ListAuthorizersCommand)
  .de(de_ListAuthorizersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAuthorizersRequest;
      output: ListAuthorizersResponse;
    };
    sdk: {
      input: ListAuthorizersCommandInput;
      output: ListAuthorizersCommandOutput;
    };
  };
}
