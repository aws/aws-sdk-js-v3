// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceAttributeRequest, DescribeInstanceAttributeResponse } from "../models/models_1";
import { de_DescribeInstanceAttributeCommand, se_DescribeInstanceAttributeCommand } from "../protocols/Aws_restJson1";

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
 *   AttributeType: "INBOUND_CALLS" || "OUTBOUND_CALLS" || "CONTACTFLOW_LOGS" || "CONTACT_LENS" || "AUTO_RESOLVE_BEST_VOICES" || "USE_CUSTOM_TTS_VOICES" || "EARLY_MEDIA" || "MULTI_PARTY_CONFERENCE" || "HIGH_VOLUME_OUTBOUND" || "ENHANCED_CONTACT_MONITORING" || "ENHANCED_CHAT_MONITORING" || "MULTI_PARTY_CHAT_CONFERENCE", // required
 * };
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceAttributeResponse
 * //   Attribute: { // Attribute
 * //     AttributeType: "INBOUND_CALLS" || "OUTBOUND_CALLS" || "CONTACTFLOW_LOGS" || "CONTACT_LENS" || "AUTO_RESOLVE_BEST_VOICES" || "USE_CUSTOM_TTS_VOICES" || "EARLY_MEDIA" || "MULTI_PARTY_CONFERENCE" || "HIGH_VOLUME_OUTBOUND" || "ENHANCED_CONTACT_MONITORING" || "ENHANCED_CHAT_MONITORING" || "MULTI_PARTY_CHAT_CONFERENCE",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribeInstanceAttribute", {})
  .n("ConnectClient", "DescribeInstanceAttributeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstanceAttributeCommand)
  .de(de_DescribeInstanceAttributeCommand)
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
