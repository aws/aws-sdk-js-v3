// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWhatsAppDatasetInput, CreateWhatsAppDatasetOutput } from "../models/models_0";
import { CreateWhatsAppDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWhatsAppDatasetCommand}.
 */
export interface CreateWhatsAppDatasetCommandInput extends CreateWhatsAppDatasetInput {}
/**
 * @public
 *
 * The output of {@link CreateWhatsAppDatasetCommand}.
 */
export interface CreateWhatsAppDatasetCommandOutput extends CreateWhatsAppDatasetOutput, __MetadataBearer {}

/**
 * <p>Creates a Meta Conversions API dataset for a WhatsApp Business Account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, CreateWhatsAppDatasetCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, CreateWhatsAppDatasetCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // CreateWhatsAppDatasetInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new CreateWhatsAppDatasetCommand(input);
 * const response = await client.send(command);
 * // { // CreateWhatsAppDatasetOutput
 * //   datasetId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWhatsAppDatasetCommandInput - {@link CreateWhatsAppDatasetCommandInput}
 * @returns {@link CreateWhatsAppDatasetCommandOutput}
 * @see {@link CreateWhatsAppDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateWhatsAppDatasetCommandOutput} for command's `response` shape.
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
export class CreateWhatsAppDatasetCommand extends command<CreateWhatsAppDatasetCommandInput, CreateWhatsAppDatasetCommandOutput>(
  _ep0,
  _mw0,
  "CreateWhatsAppDataset",
  CreateWhatsAppDataset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWhatsAppDatasetInput;
      output: CreateWhatsAppDatasetOutput;
    };
    sdk: {
      input: CreateWhatsAppDatasetCommandInput;
      output: CreateWhatsAppDatasetCommandOutput;
    };
  };
}
