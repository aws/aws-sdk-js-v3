// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAppInstanceStreamingConfigurationsRequest,
  GetAppInstanceStreamingConfigurationsResponse,
  GetAppInstanceStreamingConfigurationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetAppInstanceStreamingConfigurationsCommand,
  se_GetAppInstanceStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAppInstanceStreamingConfigurationsCommand}.
 */
export interface GetAppInstanceStreamingConfigurationsCommandInput
  extends GetAppInstanceStreamingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link GetAppInstanceStreamingConfigurationsCommand}.
 */
export interface GetAppInstanceStreamingConfigurationsCommandOutput
  extends GetAppInstanceStreamingConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets the streaming settings for an <code>AppInstance</code>.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_GetMessagingStreamingConfigurations.html">GetMessagingStreamingConfigurations</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by GetAppInstanceStreamingConfigurations in the Amazon Chime SDK Messaging Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetAppInstanceStreamingConfigurationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetAppInstanceStreamingConfigurationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeClient(config);
 * const input = { // GetAppInstanceStreamingConfigurationsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new GetAppInstanceStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // GetAppInstanceStreamingConfigurationsResponse
 * //   AppInstanceStreamingConfigurations: [ // AppInstanceStreamingConfigurationList
 * //     { // AppInstanceStreamingConfiguration
 * //       AppInstanceDataType: "Channel" || "ChannelMessage", // required
 * //       ResourceArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAppInstanceStreamingConfigurationsCommandInput - {@link GetAppInstanceStreamingConfigurationsCommandInput}
 * @returns {@link GetAppInstanceStreamingConfigurationsCommandOutput}
 * @see {@link GetAppInstanceStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetAppInstanceStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
export class GetAppInstanceStreamingConfigurationsCommand extends $Command
  .classBuilder<
    GetAppInstanceStreamingConfigurationsCommandInput,
    GetAppInstanceStreamingConfigurationsCommandOutput,
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
  .s("UCBuzzConsoleService", "GetAppInstanceStreamingConfigurations", {})
  .n("ChimeClient", "GetAppInstanceStreamingConfigurationsCommand")
  .f(void 0, GetAppInstanceStreamingConfigurationsResponseFilterSensitiveLog)
  .ser(se_GetAppInstanceStreamingConfigurationsCommand)
  .de(de_GetAppInstanceStreamingConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppInstanceStreamingConfigurationsRequest;
      output: GetAppInstanceStreamingConfigurationsResponse;
    };
    sdk: {
      input: GetAppInstanceStreamingConfigurationsCommandInput;
      output: GetAppInstanceStreamingConfigurationsCommandOutput;
    };
  };
}
