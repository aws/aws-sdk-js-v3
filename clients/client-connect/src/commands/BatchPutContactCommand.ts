// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchPutContactRequest, BatchPutContactResponse } from "../models/models_0";
import { BatchPutContact } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>Only the Amazon Connect outbound campaigns service principal is allowed to assume a
 *     role in your account and call this API.</p>
 *          </note>
 *          <p>Allows you to create a batch of contacts in Amazon Connect. The outbound campaigns
 *    capability ingests dial requests via the <a href="https://docs.aws.amazon.com/connect-outbound/latest/APIReference/API_PutDialRequestBatch.html">PutDialRequestBatch</a> API. It then uses BatchPutContact to create contacts corresponding
 *    to those dial requests. If agents are available, the dial requests are dialed out, which results
 *    in a voice call. The resulting voice call uses the same contactId that was created by
 *    BatchPutContact. </p>
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
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class BatchPutContactCommand extends $Command
  .classBuilder<
    BatchPutContactCommandInput,
    BatchPutContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "BatchPutContact", {})
  .n("ConnectClient", "BatchPutContactCommand")
  .sc(BatchPutContact)
  .build() {
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
