// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteQueueFleetAssociationRequest, DeleteQueueFleetAssociationResponse } from "../models/models_0";
import { DeleteQueueFleetAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteQueueFleetAssociationCommand}.
 */
export interface DeleteQueueFleetAssociationCommandInput extends DeleteQueueFleetAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueueFleetAssociationCommand}.
 */
export interface DeleteQueueFleetAssociationCommandOutput extends DeleteQueueFleetAssociationResponse, __MetadataBearer {}

/**
 * Deletes a queue-fleet association.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteQueueFleetAssociationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteQueueFleetAssociationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteQueueFleetAssociationRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteQueueFleetAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQueueFleetAssociationCommandInput - {@link DeleteQueueFleetAssociationCommandInput}
 * @returns {@link DeleteQueueFleetAssociationCommandOutput}
 * @see {@link DeleteQueueFleetAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteQueueFleetAssociationCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class DeleteQueueFleetAssociationCommand extends command<DeleteQueueFleetAssociationCommandInput, DeleteQueueFleetAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteQueueFleetAssociation",
  DeleteQueueFleetAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueueFleetAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteQueueFleetAssociationCommandInput;
      output: DeleteQueueFleetAssociationCommandOutput;
    };
  };
}
