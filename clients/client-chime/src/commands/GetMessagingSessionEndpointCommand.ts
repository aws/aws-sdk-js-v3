// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMessagingSessionEndpointRequest, GetMessagingSessionEndpointResponse } from "../models/models_0";
import {
  de_GetMessagingSessionEndpointCommand,
  se_GetMessagingSessionEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMessagingSessionEndpointCommand}.
 */
export interface GetMessagingSessionEndpointCommandInput extends GetMessagingSessionEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetMessagingSessionEndpointCommand}.
 */
export interface GetMessagingSessionEndpointCommandOutput
  extends GetMessagingSessionEndpointResponse,
    __MetadataBearer {}

/**
 * <p>The details of the endpoint for the messaging session.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetMessagingSessionEndpoint.html">GetMessagingSessionEndpoint</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by GetMessagingSessionEndpoint in the Amazon Chime SDK Messaging Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetMessagingSessionEndpointCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetMessagingSessionEndpointCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeClient(config);
 * const input = {};
 * const command = new GetMessagingSessionEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetMessagingSessionEndpointResponse
 * //   Endpoint: { // MessagingSessionEndpoint
 * //     Url: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMessagingSessionEndpointCommandInput - {@link GetMessagingSessionEndpointCommandInput}
 * @returns {@link GetMessagingSessionEndpointCommandOutput}
 * @see {@link GetMessagingSessionEndpointCommandInput} for command's `input` shape.
 * @see {@link GetMessagingSessionEndpointCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class GetMessagingSessionEndpointCommand extends $Command
  .classBuilder<
    GetMessagingSessionEndpointCommandInput,
    GetMessagingSessionEndpointCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "GetMessagingSessionEndpoint", {})
  .n("ChimeClient", "GetMessagingSessionEndpointCommand")
  .f(void 0, void 0)
  .ser(se_GetMessagingSessionEndpointCommand)
  .de(de_GetMessagingSessionEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetMessagingSessionEndpointResponse;
    };
    sdk: {
      input: GetMessagingSessionEndpointCommandInput;
      output: GetMessagingSessionEndpointCommandOutput;
    };
  };
}
