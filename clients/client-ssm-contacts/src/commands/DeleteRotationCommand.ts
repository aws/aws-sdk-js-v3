// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRotationRequest, DeleteRotationResult } from "../models/models_0";
import { DeleteRotation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRotationCommand}.
 */
export interface DeleteRotationCommandInput extends DeleteRotationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRotationCommand}.
 */
export interface DeleteRotationCommandOutput extends DeleteRotationResult, __MetadataBearer {}

/**
 * Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeleteRotationCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeleteRotationCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // DeleteRotationRequest
 *   RotationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRotationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRotationCommandInput - {@link DeleteRotationCommandInput}
 * @returns {@link DeleteRotationCommandOutput}
 * @see {@link DeleteRotationCommandInput} for command's `input` shape.
 * @see {@link DeleteRotationCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource that doesn't exist.
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
export class DeleteRotationCommand extends command<DeleteRotationCommandInput, DeleteRotationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRotation",
  DeleteRotation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRotationRequest;
      output: {};
    };
    sdk: {
      input: DeleteRotationCommandInput;
      output: DeleteRotationCommandOutput;
    };
  };
}
