// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWhatsAppFlowPreviewInput, GetWhatsAppFlowPreviewOutput } from "../models/models_0";
import { GetWhatsAppFlowPreview$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Generates a web preview URL for testing a WhatsApp Flow before publishing. Preview URLs expire in 30 days and can be shared with stakeholders for review.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link DependencyException} (server fault)
 *
 * Thrown when performing an action because a dependency would be broken.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the action are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found.
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request contains an invalid parameter value.
 *
 * @throws {@link SocialMessagingServiceException}
 *
 * Base exception class for all service exceptions from SocialMessaging service.
 *
 * @public
 */
export class GetWhatsAppFlowPreviewCommand extends command<GetWhatsAppFlowPreviewCommandInput, GetWhatsAppFlowPreviewCommandOutput>(
  _ep0,
  _mw0,
  "GetWhatsAppFlowPreview",
  GetWhatsAppFlowPreview$
) {
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
