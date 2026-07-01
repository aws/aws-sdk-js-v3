// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeactivateContactChannelRequest, DeactivateContactChannelResult } from "../models/models_0";
import { DeactivateContactChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeactivateContactChannelCommand}.
 */
export interface DeactivateContactChannelCommandInput extends DeactivateContactChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateContactChannelCommand}.
 */
export interface DeactivateContactChannelCommandOutput extends DeactivateContactChannelResult, __MetadataBearer {}

/**
 * <p>To no longer receive Incident Manager engagements to a contact channel, you can deactivate
 *          the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeactivateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeactivateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // DeactivateContactChannelRequest
 *   ContactChannelId: "STRING_VALUE", // required
 * };
 * const command = new DeactivateContactChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeactivateContactChannelCommandInput - {@link DeactivateContactChannelCommandInput}
 * @returns {@link DeactivateContactChannelCommandOutput}
 * @see {@link DeactivateContactChannelCommandInput} for command's `input` shape.
 * @see {@link DeactivateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 *
 * @public
 */
export class DeactivateContactChannelCommand extends command<DeactivateContactChannelCommandInput, DeactivateContactChannelCommandOutput>(
  _ep0,
  _mw0,
  "DeactivateContactChannel",
  DeactivateContactChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateContactChannelRequest;
      output: {};
    };
    sdk: {
      input: DeactivateContactChannelCommandInput;
      output: DeactivateContactChannelCommandOutput;
    };
  };
}
