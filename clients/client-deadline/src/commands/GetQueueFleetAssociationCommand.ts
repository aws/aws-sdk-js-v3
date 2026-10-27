// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetQueueFleetAssociationRequest, GetQueueFleetAssociationResponse } from "../models/models_1";
import { GetQueueFleetAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQueueFleetAssociationCommand}.
 */
export interface GetQueueFleetAssociationCommandInput extends GetQueueFleetAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetQueueFleetAssociationCommand}.
 */
export interface GetQueueFleetAssociationCommandOutput extends GetQueueFleetAssociationResponse, __MetadataBearer {}

/**
 * Gets a queue-fleet association.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetQueueFleetAssociationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetQueueFleetAssociationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetQueueFleetAssociationRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 * };
 * const command = new GetQueueFleetAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetQueueFleetAssociationResponse
 * //   queueId: "STRING_VALUE", // required
 * //   fleetId: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "STOP_SCHEDULING_AND_COMPLETE_TASKS" || "STOP_SCHEDULING_AND_CANCEL_TASKS" || "STOPPED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueueFleetAssociationCommandInput - {@link GetQueueFleetAssociationCommandInput}
 * @returns {@link GetQueueFleetAssociationCommandOutput}
 * @see {@link GetQueueFleetAssociationCommandInput} for command's `input` shape.
 * @see {@link GetQueueFleetAssociationCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
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
export class GetQueueFleetAssociationCommand extends command<GetQueueFleetAssociationCommandInput, GetQueueFleetAssociationCommandOutput>(
  _ep0,
  _mw0,
  "GetQueueFleetAssociation",
  GetQueueFleetAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueueFleetAssociationRequest;
      output: GetQueueFleetAssociationResponse;
    };
    sdk: {
      input: GetQueueFleetAssociationCommandInput;
      output: GetQueueFleetAssociationCommandOutput;
    };
  };
}
