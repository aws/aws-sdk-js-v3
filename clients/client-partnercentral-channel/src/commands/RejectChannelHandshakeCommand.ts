// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RejectChannelHandshakeRequest, RejectChannelHandshakeResponse } from "../models/models_0";
import {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { RejectChannelHandshake } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectChannelHandshakeCommand}.
 */
export interface RejectChannelHandshakeCommandInput extends RejectChannelHandshakeRequest {}
/**
 * @public
 *
 * The output of {@link RejectChannelHandshakeCommand}.
 */
export interface RejectChannelHandshakeCommandOutput extends RejectChannelHandshakeResponse, __MetadataBearer {}

/**
 * <p>Rejects a pending channel handshake request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, RejectChannelHandshakeCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, RejectChannelHandshakeCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // RejectChannelHandshakeRequest
 *   catalog: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new RejectChannelHandshakeCommand(input);
 * const response = await client.send(command);
 * // { // RejectChannelHandshakeResponse
 * //   channelHandshakeDetail: { // RejectChannelHandshakeDetail
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "PENDING" || "ACCEPTED" || "REJECTED" || "CANCELED" || "EXPIRED",
 * //   },
 * // };
 *
 * ```
 *
 * @param RejectChannelHandshakeCommandInput - {@link RejectChannelHandshakeCommandInput}
 * @returns {@link RejectChannelHandshakeCommandOutput}
 * @see {@link RejectChannelHandshakeCommandInput} for command's `input` shape.
 * @see {@link RejectChannelHandshakeCommandOutput} for command's `response` shape.
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
 * @example Example for RejectChannelHandshake
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   identifier: "ch-4fj3bd2o3vb91"
 * };
 * const command = new RejectChannelHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelHandshakeDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/channel-handshake/ch-4fj3bd2o3vb91",
 *     id: "ch-4fj3bd2o3vb91",
 *     status: "REJECTED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RejectChannelHandshakeCommand extends $Command
  .classBuilder<
    RejectChannelHandshakeCommandInput,
    RejectChannelHandshakeCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "RejectChannelHandshake", {})
  .n("PartnerCentralChannelClient", "RejectChannelHandshakeCommand")
  .sc(RejectChannelHandshake)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectChannelHandshakeRequest;
      output: RejectChannelHandshakeResponse;
    };
    sdk: {
      input: RejectChannelHandshakeCommandInput;
      output: RejectChannelHandshakeCommandOutput;
    };
  };
}
