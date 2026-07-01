// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateRoutingProfileQueuesRequest } from "../models/models_1";
import { DisassociateRoutingProfileQueues$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateRoutingProfileQueuesCommand}.
 */
export interface DisassociateRoutingProfileQueuesCommandInput extends DisassociateRoutingProfileQueuesRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateRoutingProfileQueuesCommand}.
 */
export interface DisassociateRoutingProfileQueuesCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates a set of queues from a routing profile.</p>
 *          <p>Up to 10 queue references can be disassociated in a single API call. More than 10 queue references results in a
 *    single call results in an InvalidParameterException.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateRoutingProfileQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateRoutingProfileQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateRoutingProfileQueuesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   QueueReferences: [ // RoutingProfileQueueReferenceList
 *     { // RoutingProfileQueueReference
 *       QueueId: "STRING_VALUE", // required
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *     },
 *   ],
 *   ManualAssignmentQueueReferences: [
 *     {
 *       QueueId: "STRING_VALUE", // required
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *     },
 *   ],
 * };
 * const command = new DisassociateRoutingProfileQueuesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateRoutingProfileQueuesCommandInput - {@link DisassociateRoutingProfileQueuesCommandInput}
 * @returns {@link DisassociateRoutingProfileQueuesCommandOutput}
 * @see {@link DisassociateRoutingProfileQueuesCommandInput} for command's `input` shape.
 * @see {@link DisassociateRoutingProfileQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DisassociateRoutingProfileQueuesCommand extends command<DisassociateRoutingProfileQueuesCommandInput, DisassociateRoutingProfileQueuesCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateRoutingProfileQueues",
  DisassociateRoutingProfileQueues$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateRoutingProfileQueuesRequest;
      output: {};
    };
    sdk: {
      input: DisassociateRoutingProfileQueuesCommandInput;
      output: DisassociateRoutingProfileQueuesCommandOutput;
    };
  };
}
