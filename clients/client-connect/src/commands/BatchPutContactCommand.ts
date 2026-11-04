// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchPutContactRequest, BatchPutContactResponse } from "../models/models_0";
import { BatchPutContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchPutContactCommand}.
 */
export interface BatchPutContactCommandInput extends BatchPutContactRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutContactCommand}.
 */
export interface BatchPutContactCommandOutput extends BatchPutContactResponse, __MetadataBearer {}

/**
 * > **Note:** Only the Connect Customer outbound campaigns service principal is allowed to assume a role in your account and call this API.
 *
 * Allows you to create a batch of contacts in Connect Customer. The outbound campaigns capability ingests dial requests via the [PutDialRequestBatch](https://docs.aws.amazon.com/connect-outbound/latest/APIReference/API_PutDialRequestBatch.html) API. It then uses BatchPutContact to create contacts corresponding to those dial requests. If agents are available, the dial requests are dialed out, which results in a voice call. The resulting voice call uses the same contactId that was created by BatchPutContact.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchPutContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchPutContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // BatchPutContactRequest
 *   ClientToken: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   ContactDataRequestList: [ // ContactDataRequestList // required
 *     { // ContactDataRequest
 *       SystemEndpoint: { // Endpoint
 *         Type: "TELEPHONE_NUMBER" || "VOIP" || "CONTACT_FLOW" || "CONNECT_PHONENUMBER_ARN" || "EMAIL_ADDRESS",
 *         Address: "STRING_VALUE",
 *       },
 *       CustomerEndpoint: {
 *         Type: "TELEPHONE_NUMBER" || "VOIP" || "CONTACT_FLOW" || "CONNECT_PHONENUMBER_ARN" || "EMAIL_ADDRESS",
 *         Address: "STRING_VALUE",
 *       },
 *       RequestIdentifier: "STRING_VALUE",
 *       QueueId: "STRING_VALUE",
 *       Attributes: { // Attributes
 *         "<keys>": "STRING_VALUE",
 *       },
 *       Campaign: { // Campaign
 *         CampaignId: "STRING_VALUE",
 *       },
 *       OutboundStrategy: { // OutboundStrategy
 *         Type: "AGENT_FIRST", // required
 *         Config: { // OutboundStrategyConfig
 *           AgentFirst: { // AgentFirst
 *             Preview: { // Preview
 *               PostAcceptTimeoutConfig: { // PostAcceptTimeoutConfig
 *                 DurationInSeconds: Number("int"), // required
 *               },
 *               AllowedUserActions: [ // AllowedUserActions // required
 *                 "CALL" || "DISCARD",
 *               ],
 *             },
 *           },
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchPutContactCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutContactResponse
 * //   SuccessfulRequestList: [ // SuccessfulRequestList
 * //     { // SuccessfulRequest
 * //       RequestIdentifier: "STRING_VALUE",
 * //       ContactId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FailedRequestList: [ // FailedRequestList
 * //     { // FailedRequest
 * //       RequestIdentifier: "STRING_VALUE",
 * //       FailureReasonCode: "INVALID_ATTRIBUTE_KEY" || "INVALID_CUSTOMER_ENDPOINT" || "INVALID_SYSTEM_ENDPOINT" || "INVALID_QUEUE" || "INVALID_OUTBOUND_STRATEGY" || "MISSING_CAMPAIGN" || "MISSING_CUSTOMER_ENDPOINT" || "MISSING_QUEUE_ID_AND_SYSTEM_ENDPOINT" || "REQUEST_THROTTLED" || "IDEMPOTENCY_EXCEPTION" || "INTERNAL_ERROR",
 * //       FailureReasonMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutContactCommandInput - {@link BatchPutContactCommandInput}
 * @returns {@link BatchPutContactCommandOutput}
 * @see {@link BatchPutContactCommandInput} for command's `input` shape.
 * @see {@link BatchPutContactCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class BatchPutContactCommand extends command<BatchPutContactCommandInput, BatchPutContactCommandOutput>(
  _ep0,
  _mw0,
  "BatchPutContact",
  BatchPutContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutContactRequest;
      output: BatchPutContactResponse;
    };
    sdk: {
      input: BatchPutContactCommandInput;
      output: BatchPutContactCommandOutput;
    };
  };
}
