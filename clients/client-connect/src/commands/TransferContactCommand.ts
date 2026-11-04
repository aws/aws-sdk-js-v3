// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TransferContactRequest, TransferContactResponse } from "../models/models_3";
import { TransferContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TransferContactCommand}.
 */
export interface TransferContactCommandInput extends TransferContactRequest {}
/**
 * @public
 *
 * The output of {@link TransferContactCommand}.
 */
export interface TransferContactCommandOutput extends TransferContactResponse, __MetadataBearer {}

/**
 * Transfers `TASK` or `EMAIL` contacts from one agent or queue to another agent or queue at any point after a contact is created. You can transfer a contact to another queue by providing the flow which orchestrates the contact to the destination queue. This gives you more control over contact handling and helps you adhere to the service level agreement (SLA) guaranteed to your customers.
 *
 * Note the following requirements:
 *
 * - Transfer is only supported for `TASK` and `EMAIL` contacts.
 * - Do not use both `QueueId` and `UserId` in the same call.
 * - The following flow types are supported: Inbound flow, Transfer to agent flow, and Transfer to queue flow.
 * - The `TransferContact` API can be called only on active contacts.
 * - A contact cannot be transferred more than 11 times.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, TransferContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, TransferContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // TransferContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE",
 *   UserId: "STRING_VALUE",
 *   ContactFlowId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new TransferContactCommand(input);
 * const response = await client.send(command);
 * // { // TransferContactResponse
 * //   ContactId: "STRING_VALUE",
 * //   ContactArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TransferContactCommandInput - {@link TransferContactCommandInput}
 * @returns {@link TransferContactCommandOutput}
 * @see {@link TransferContactCommandInput} for command's `input` shape.
 * @see {@link TransferContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link IdempotencyException} (client fault)
 *
 * An entity with the same name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class TransferContactCommand extends command<TransferContactCommandInput, TransferContactCommandOutput>(
  _ep0,
  _mw0,
  "TransferContact",
  TransferContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TransferContactRequest;
      output: TransferContactResponse;
    };
    sdk: {
      input: TransferContactCommandInput;
      output: TransferContactCommandOutput;
    };
  };
}
