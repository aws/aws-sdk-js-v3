// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelChannelHandshakeRequest, CancelChannelHandshakeResponse } from "../models/models_0";
import {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { CancelChannelHandshake } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelChannelHandshakeCommand}.
 */
export interface CancelChannelHandshakeCommandInput extends CancelChannelHandshakeRequest {}
/**
 * @public
 *
 * The output of {@link CancelChannelHandshakeCommand}.
 */
export interface CancelChannelHandshakeCommandOutput extends CancelChannelHandshakeResponse, __MetadataBearer {}

/**
 * <p>Cancels a pending channel handshake request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, CancelChannelHandshakeCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, CancelChannelHandshakeCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // CancelChannelHandshakeRequest
 *   catalog: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new CancelChannelHandshakeCommand(input);
 * const response = await client.send(command);
 * // { // CancelChannelHandshakeResponse
 * //   channelHandshakeDetail: { // CancelChannelHandshakeDetail
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "PENDING" || "ACCEPTED" || "REJECTED" || "CANCELED" || "EXPIRED",
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelChannelHandshakeCommandInput - {@link CancelChannelHandshakeCommandInput}
 * @returns {@link CancelChannelHandshakeCommandOutput}
 * @see {@link CancelChannelHandshakeCommandInput} for command's `input` shape.
 * @see {@link CancelChannelHandshakeCommandOutput} for command's `response` shape.
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
 * @example Example for CancelChannelHandshake
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   identifier: "ch-4fj3bd2o3vb91"
 * };
 * const command = new CancelChannelHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelHandshakeDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/channel-handshake/ch-4fj3bd2o3vb91",
 *     id: "ch-4fj3bd2o3vb91",
 *     status: "CANCELED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelChannelHandshakeCommand extends $Command
  .classBuilder<
    CancelChannelHandshakeCommandInput,
    CancelChannelHandshakeCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "CancelChannelHandshake", {})
  .n("PartnerCentralChannelClient", "CancelChannelHandshakeCommand")
  .sc(CancelChannelHandshake)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelChannelHandshakeRequest;
      output: CancelChannelHandshakeResponse;
    };
    sdk: {
      input: CancelChannelHandshakeCommandInput;
      output: CancelChannelHandshakeCommandOutput;
    };
  };
}
