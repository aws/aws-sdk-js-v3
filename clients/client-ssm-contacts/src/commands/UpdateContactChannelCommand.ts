// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateContactChannelRequest, UpdateContactChannelResult } from "../models/models_0";
import { UpdateContactChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateContactChannelCommand}.
 */
export interface UpdateContactChannelCommandInput extends UpdateContactChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactChannelCommand}.
 */
export interface UpdateContactChannelCommandOutput extends UpdateContactChannelResult, __MetadataBearer {}

/**
 * <p>Updates a contact's contact channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, UpdateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, UpdateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // UpdateContactChannelRequest
 *   ContactChannelId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   DeliveryAddress: { // ContactChannelAddress
 *     SimpleAddress: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateContactChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactChannelCommandInput - {@link UpdateContactChannelCommandInput}
 * @returns {@link UpdateContactChannelCommandOutput}
 * @see {@link UpdateContactChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
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
export class UpdateContactChannelCommand extends command<UpdateContactChannelCommandInput, UpdateContactChannelCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContactChannel",
  UpdateContactChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactChannelRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactChannelCommandInput;
      output: UpdateContactChannelCommandOutput;
    };
  };
}
