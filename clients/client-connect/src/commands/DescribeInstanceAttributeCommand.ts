// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeInstanceAttributeRequest, DescribeInstanceAttributeResponse } from "../models/models_1";
import { DescribeInstanceAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceAttributeCommand}.
 */
export interface DescribeInstanceAttributeCommandInput extends DescribeInstanceAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceAttributeCommand}.
 */
export interface DescribeInstanceAttributeCommandOutput extends DescribeInstanceAttributeResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes the specified instance attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeInstanceAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeInstanceAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeInstanceAttributeRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AttributeType: "INBOUND_CALLS" || "OUTBOUND_CALLS" || "CONTACTFLOW_LOGS" || "CONTACT_LENS" || "AUTO_RESOLVE_BEST_VOICES" || "USE_CUSTOM_TTS_VOICES" || "EARLY_MEDIA" || "MULTI_PARTY_CONFERENCE" || "HIGH_VOLUME_OUTBOUND" || "ENHANCED_CONTACT_MONITORING" || "ENHANCED_CHAT_MONITORING" || "MULTI_PARTY_CHAT_CONFERENCE" || "MESSAGE_STREAMING", // required
 * };
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceAttributeResponse
 * //   Attribute: { // Attribute
 * //     AttributeType: "INBOUND_CALLS" || "OUTBOUND_CALLS" || "CONTACTFLOW_LOGS" || "CONTACT_LENS" || "AUTO_RESOLVE_BEST_VOICES" || "USE_CUSTOM_TTS_VOICES" || "EARLY_MEDIA" || "MULTI_PARTY_CONFERENCE" || "HIGH_VOLUME_OUTBOUND" || "ENHANCED_CONTACT_MONITORING" || "ENHANCED_CHAT_MONITORING" || "MULTI_PARTY_CHAT_CONFERENCE" || "MESSAGE_STREAMING",
 * //     Value: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInstanceAttributeCommandInput - {@link DescribeInstanceAttributeCommandInput}
 * @returns {@link DescribeInstanceAttributeCommandOutput}
 * @see {@link DescribeInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DescribeInstanceAttributeCommand extends $Command
  .classBuilder<
    DescribeInstanceAttributeCommandInput,
    DescribeInstanceAttributeCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeInstanceAttribute", {})
  .n("ConnectClient", "DescribeInstanceAttributeCommand")
  .sc(DescribeInstanceAttribute$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceAttributeRequest;
      output: DescribeInstanceAttributeResponse;
    };
    sdk: {
      input: DescribeInstanceAttributeCommandInput;
      output: DescribeInstanceAttributeCommandOutput;
    };
  };
}
