// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetWhatsAppFlowInput, GetWhatsAppFlowOutput } from "../models/models_0";
import { GetWhatsAppFlow$ } from "../schemas/schemas_0";
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
 * The input for {@link GetWhatsAppFlowCommand}.
 */
export interface GetWhatsAppFlowCommandInput extends GetWhatsAppFlowInput {}
/**
 * @public
 *
 * The output of {@link GetWhatsAppFlowCommand}.
 */
export interface GetWhatsAppFlowCommandOutput extends GetWhatsAppFlowOutput, __MetadataBearer {}

/**
 * <p>Retrieves the metadata and status of a WhatsApp Flow, including validation errors, preview information, and health status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, GetWhatsAppFlowCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, GetWhatsAppFlowCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // GetWhatsAppFlowInput
 *   id: "STRING_VALUE", // required
 *   flowId: "STRING_VALUE", // required
 * };
 * const command = new GetWhatsAppFlowCommand(input);
 * const response = await client.send(command);
 * // { // GetWhatsAppFlowOutput
 * //   flowId: "STRING_VALUE", // required
 * //   flowName: "STRING_VALUE", // required
 * //   flowStatus: "STRING_VALUE", // required
 * //   categories: [ // MetaFlowCategoryList
 * //     "SIGN_UP" || "SIGN_IN" || "APPOINTMENT_BOOKING" || "LEAD_GENERATION" || "SHOPPING" || "CONTACT_US" || "CUSTOMER_SUPPORT" || "SURVEY" || "OTHER",
 * //   ],
 * //   validationErrors: [ // ValidationErrorList
 * //     "STRING_VALUE",
 * //   ],
 * //   jsonVersion: "STRING_VALUE",
 * //   dataApiVersion: "STRING_VALUE",
 * //   endpointUri: "STRING_VALUE",
 * //   preview: { // MetaFlowPreviewInfo
 * //     previewUrl: "STRING_VALUE", // required
 * //     expiresAt: "STRING_VALUE", // required
 * //   },
 * //   whatsAppBusinessAccount: { // MetaFlowWhatsAppBusinessAccountInfo
 * //     id: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     currency: "STRING_VALUE",
 * //     timezoneId: "STRING_VALUE",
 * //     messageTemplateNamespace: "STRING_VALUE",
 * //   },
 * //   application: { // MetaFlowApplicationInfo
 * //     link: "STRING_VALUE",
 * //     name: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //   },
 * //   healthStatus: { // MetaFlowHealthStatus
 * //     canSendMessage: "STRING_VALUE", // required
 * //     entities: [ // MetaFlowHealthEntityList
 * //       { // MetaFlowHealthEntity
 * //         entityType: "STRING_VALUE", // required
 * //         id: "STRING_VALUE", // required
 * //         canSendMessage: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWhatsAppFlowCommandInput - {@link GetWhatsAppFlowCommandInput}
 * @returns {@link GetWhatsAppFlowCommandOutput}
 * @see {@link GetWhatsAppFlowCommandInput} for command's `input` shape.
 * @see {@link GetWhatsAppFlowCommandOutput} for command's `response` shape.
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
export class GetWhatsAppFlowCommand extends $Command
  .classBuilder<
    GetWhatsAppFlowCommandInput,
    GetWhatsAppFlowCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "GetWhatsAppFlow", {})
  .n("SocialMessagingClient", "GetWhatsAppFlowCommand")
  .sc(GetWhatsAppFlow$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWhatsAppFlowInput;
      output: GetWhatsAppFlowOutput;
    };
    sdk: {
      input: GetWhatsAppFlowCommandInput;
      output: GetWhatsAppFlowCommandOutput;
    };
  };
}
