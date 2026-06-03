// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetWhatsAppFlowPreviewInput, GetWhatsAppFlowPreviewOutput } from "../models/models_0";
import { GetWhatsAppFlowPreview$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  SocialMessagingClientResolvedConfig,
} from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWhatsAppFlowPreviewCommand}.
 */
export interface GetWhatsAppFlowPreviewCommandInput extends GetWhatsAppFlowPreviewInput {}
/**
 * @public
 *
 * The output of {@link GetWhatsAppFlowPreviewCommand}.
 */
export interface GetWhatsAppFlowPreviewCommandOutput extends GetWhatsAppFlowPreviewOutput, __MetadataBearer {}

/**
 * <p>Generates a web preview URL for testing a WhatsApp Flow before publishing. Preview URLs expire in 30 days and can be shared with stakeholders for review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, GetWhatsAppFlowPreviewCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, GetWhatsAppFlowPreviewCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // GetWhatsAppFlowPreviewInput
 *   id: "STRING_VALUE", // required
 *   flowId: "STRING_VALUE", // required
 *   invalidate: true || false,
 * };
 * const command = new GetWhatsAppFlowPreviewCommand(input);
 * const response = await client.send(command);
 * // { // GetWhatsAppFlowPreviewOutput
 * //   flowId: "STRING_VALUE", // required
 * //   preview: { // MetaFlowPreviewInfo
 * //     previewUrl: "STRING_VALUE", // required
 * //     expiresAt: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWhatsAppFlowPreviewCommandInput - {@link GetWhatsAppFlowPreviewCommandInput}
 * @returns {@link GetWhatsAppFlowPreviewCommandOutput}
 * @see {@link GetWhatsAppFlowPreviewCommandInput} for command's `input` shape.
 * @see {@link GetWhatsAppFlowPreviewCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedByMetaException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Thrown when performing an action because a dependency would be broken.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the action are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value. </p>
 *
 * @throws {@link SocialMessagingServiceException}
 * <p>Base exception class for all service exceptions from SocialMessaging service.</p>
 *
 *
 * @public
 */
export class GetWhatsAppFlowPreviewCommand extends $Command
  .classBuilder<
    GetWhatsAppFlowPreviewCommandInput,
    GetWhatsAppFlowPreviewCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "GetWhatsAppFlowPreview", {})
  .n("SocialMessagingClient", "GetWhatsAppFlowPreviewCommand")
  .sc(GetWhatsAppFlowPreview$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWhatsAppFlowPreviewInput;
      output: GetWhatsAppFlowPreviewOutput;
    };
    sdk: {
      input: GetWhatsAppFlowPreviewCommandInput;
      output: GetWhatsAppFlowPreviewCommandOutput;
    };
  };
}
