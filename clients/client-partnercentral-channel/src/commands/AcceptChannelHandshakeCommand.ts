// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AcceptChannelHandshakeRequest, AcceptChannelHandshakeResponse } from "../models/models_0";
import type {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { AcceptChannelHandshake } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptChannelHandshakeCommand}.
 */
export interface AcceptChannelHandshakeCommandInput extends AcceptChannelHandshakeRequest {}
/**
 * @public
 *
 * The output of {@link AcceptChannelHandshakeCommand}.
 */
export interface AcceptChannelHandshakeCommandOutput extends AcceptChannelHandshakeResponse, __MetadataBearer {}

/**
 * <p>Accepts a pending channel handshake request from another AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, AcceptChannelHandshakeCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, AcceptChannelHandshakeCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // AcceptChannelHandshakeRequest
 *   catalog: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new AcceptChannelHandshakeCommand(input);
 * const response = await client.send(command);
 * // { // AcceptChannelHandshakeResponse
 * //   channelHandshakeDetail: { // AcceptChannelHandshakeDetail
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "PENDING" || "ACCEPTED" || "REJECTED" || "CANCELED" || "EXPIRED",
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptChannelHandshakeCommandInput - {@link AcceptChannelHandshakeCommandInput}
 * @returns {@link AcceptChannelHandshakeCommandOutput}
 * @see {@link AcceptChannelHandshakeCommandInput} for command's `input` shape.
 * @see {@link AcceptChannelHandshakeCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralChannelClientResolvedConfig | config} for PartnerCentralChannelClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation due to invalid input parameters.</p>
 *
 * @throws {@link PartnerCentralChannelServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralChannel service.</p>
 *
 *
 * @example Example for AcceptChannelHandshake
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   identifier: "ch-4fj3bd2o3vb91"
 * };
 * const command = new AcceptChannelHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelHandshakeDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/channel-handshake/ch-4fj3bd2o3vb91",
 *     id: "ch-4fj3bd2o3vb91",
 *     status: "ACCEPTED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AcceptChannelHandshakeCommand extends $Command
  .classBuilder<
    AcceptChannelHandshakeCommandInput,
    AcceptChannelHandshakeCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "AcceptChannelHandshake", {})
  .n("PartnerCentralChannelClient", "AcceptChannelHandshakeCommand")
  .sc(AcceptChannelHandshake)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptChannelHandshakeRequest;
      output: AcceptChannelHandshakeResponse;
    };
    sdk: {
      input: AcceptChannelHandshakeCommandInput;
      output: AcceptChannelHandshakeCommandOutput;
    };
  };
}
