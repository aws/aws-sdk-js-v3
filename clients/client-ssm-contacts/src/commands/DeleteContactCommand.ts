// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContactRequest, DeleteContactResult } from "../models/models_0";
import { DeleteContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContactCommand}.
 */
export interface DeleteContactCommandInput extends DeleteContactRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactCommand}.
 */
export interface DeleteContactCommandOutput extends DeleteContactResult, __MetadataBearer {}

/**
 * <p>To remove a contact from Incident Manager, you can delete the contact. However, deleting a
 *          contact does not remove it from escalation plans and related response plans. Deleting an
 *          escalation plan also does not remove it from all related response plans. To modify an
 *          escalation plan, we recommend using the <a>UpdateContact</a> action to specify a
 *          different existing contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeleteContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeleteContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // DeleteContactRequest
 *   ContactId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactCommandInput - {@link DeleteContactCommandInput}
 * @returns {@link DeleteContactCommandOutput}
 * @see {@link DeleteContactCommandInput} for command's `input` shape.
 * @see {@link DeleteContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
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
export class DeleteContactCommand extends command<DeleteContactCommandInput, DeleteContactCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContact",
  DeleteContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContactRequest;
      output: {};
    };
    sdk: {
      input: DeleteContactCommandInput;
      output: DeleteContactCommandOutput;
    };
  };
}
