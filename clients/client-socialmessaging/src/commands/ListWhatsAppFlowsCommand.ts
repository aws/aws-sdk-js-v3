// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWhatsAppFlowsInput, ListWhatsAppFlowsOutput } from "../models/models_0";
import { ListWhatsAppFlows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWhatsAppFlowsCommand}.
 */
export interface ListWhatsAppFlowsCommandInput extends ListWhatsAppFlowsInput {}
/**
 * @public
 *
 * The output of {@link ListWhatsAppFlowsCommand}.
 */
export interface ListWhatsAppFlowsCommandOutput extends ListWhatsAppFlowsOutput, __MetadataBearer {}

/**
 * Lists all WhatsApp Flows for a WhatsApp Business Account. Returns summary information including Flow ID, name, status, and categories.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, ListWhatsAppFlowsCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, ListWhatsAppFlowsCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // ListWhatsAppFlowsInput
 *   id: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWhatsAppFlowsCommand(input);
 * const response = await client.send(command);
 * // { // ListWhatsAppFlowsOutput
 * //   flows: [ // MetaFlowSummaryList // required
 * //     { // MetaFlowSummary
 * //       flowId: "STRING_VALUE", // required
 * //       flowName: "STRING_VALUE", // required
 * //       flowStatus: "STRING_VALUE", // required
 * //       flowCategories: [ // MetaFlowCategoryList // required
 * //         "SIGN_UP" || "SIGN_IN" || "APPOINTMENT_BOOKING" || "LEAD_GENERATION" || "SHOPPING" || "CONTACT_US" || "CUSTOMER_SUPPORT" || "SURVEY" || "OTHER",
 * //       ],
 * //       validationErrors: [ // ValidationErrorList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWhatsAppFlowsCommandInput - {@link ListWhatsAppFlowsCommandInput}
 * @returns {@link ListWhatsAppFlowsCommandOutput}
 * @see {@link ListWhatsAppFlowsCommandInput} for command's `input` shape.
 * @see {@link ListWhatsAppFlowsCommandOutput} for command's `response` shape.
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
export class ListWhatsAppFlowsCommand extends command<ListWhatsAppFlowsCommandInput, ListWhatsAppFlowsCommandOutput>(
  _ep0,
  _mw0,
  "ListWhatsAppFlows",
  ListWhatsAppFlows$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWhatsAppFlowsInput;
      output: ListWhatsAppFlowsOutput;
    };
    sdk: {
      input: ListWhatsAppFlowsCommandInput;
      output: ListWhatsAppFlowsCommandOutput;
    };
  };
}
