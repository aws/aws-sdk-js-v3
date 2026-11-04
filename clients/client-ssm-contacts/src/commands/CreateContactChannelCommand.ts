// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateContactChannelRequest, CreateContactChannelResult } from "../models/models_0";
import { CreateContactChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateContactChannelCommand}.
 */
export interface CreateContactChannelCommandInput extends CreateContactChannelRequest {}
/**
 * @public
 *
 * The output of {@link CreateContactChannelCommand}.
 */
export interface CreateContactChannelCommandOutput extends CreateContactChannelResult, __MetadataBearer {}

/**
 * A contact channel is the method that Incident Manager uses to engage your contact.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // CreateContactChannelRequest
 *   ContactId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Type: "SMS" || "VOICE" || "EMAIL", // required
 *   DeliveryAddress: { // ContactChannelAddress
 *     SimpleAddress: "STRING_VALUE",
 *   },
 *   DeferActivation: true || false,
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new CreateContactChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateContactChannelResult
 * //   ContactChannelArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateContactChannelCommandInput - {@link CreateContactChannelCommandInput}
 * @returns {@link CreateContactChannelCommandOutput}
 * @see {@link CreateContactChannelCommandInput} for command's `input` shape.
 * @see {@link CreateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource causes an inconsistent state.
 *
 * @throws {@link DataEncryptionException} (client fault)
 *
 * The operation failed to due an encryption key error.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SSMContactsServiceException}
 *
 * Base exception class for all service exceptions from SSMContacts service.
 *
 * @public
 */
export class CreateContactChannelCommand extends command<CreateContactChannelCommandInput, CreateContactChannelCommandOutput>(
  _ep0,
  _mw0,
  "CreateContactChannel",
  CreateContactChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContactChannelRequest;
      output: CreateContactChannelResult;
    };
    sdk: {
      input: CreateContactChannelCommandInput;
      output: CreateContactChannelCommandOutput;
    };
  };
}
