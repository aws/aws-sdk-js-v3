// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutProfileOutboundRequestBatchRequest, PutProfileOutboundRequestBatchResponse } from "../models/models_0";
import { PutProfileOutboundRequestBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutProfileOutboundRequestBatchCommand}.
 */
export interface PutProfileOutboundRequestBatchCommandInput extends PutProfileOutboundRequestBatchRequest {}
/**
 * @public
 *
 * The output of {@link PutProfileOutboundRequestBatchCommand}.
 */
export interface PutProfileOutboundRequestBatchCommandOutput extends PutProfileOutboundRequestBatchResponse, __MetadataBearer {}

/**
 * Takes in a list of profile outbound requests to be placed as part of an outbound campaign. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, PutProfileOutboundRequestBatchCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, PutProfileOutboundRequestBatchCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // PutProfileOutboundRequestBatchRequest
 *   id: "STRING_VALUE", // required
 *   profileOutboundRequests: [ // ProfileOutboundRequestList // required
 *     { // ProfileOutboundRequest
 *       clientToken: "STRING_VALUE", // required
 *       profileId: "STRING_VALUE", // required
 *       expirationTime: new Date("TIMESTAMP"),
 *       eventTriggerContext: { // EventTriggerContext
 *         sourceEvent: "STRING_VALUE",
 *         channelContext: { // ChannelContext
 *           webNotificationContext: { // WebNotificationContext
 *             sessionId: "STRING_VALUE",
 *             browserId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new PutProfileOutboundRequestBatchCommand(input);
 * const response = await client.send(command);
 * // { // PutProfileOutboundRequestBatchResponse
 * //   successfulRequests: [ // SuccessfulProfileOutboundRequestList
 * //     { // SuccessfulProfileOutboundRequest
 * //       clientToken: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedRequests: [ // FailedProfileOutboundRequestList
 * //     { // FailedProfileOutboundRequest
 * //       clientToken: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       failureCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutProfileOutboundRequestBatchCommandInput - {@link PutProfileOutboundRequestBatchCommandInput}
 * @returns {@link PutProfileOutboundRequestBatchCommandOutput}
 * @see {@link PutProfileOutboundRequestBatchCommandInput} for command's `input` shape.
 * @see {@link PutProfileOutboundRequestBatchCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsV2ClientResolvedConfig | config} for ConnectCampaignsV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidCampaignStateException} (client fault)
 *  The request could not be processed because of conflict in the current state of the campaign.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsV2ServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaignsV2 service.</p>
 *
 *
 * @public
 */
export class PutProfileOutboundRequestBatchCommand extends command<PutProfileOutboundRequestBatchCommandInput, PutProfileOutboundRequestBatchCommandOutput>(
  _ep0,
  _mw0,
  "PutProfileOutboundRequestBatch",
  PutProfileOutboundRequestBatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProfileOutboundRequestBatchRequest;
      output: PutProfileOutboundRequestBatchResponse;
    };
    sdk: {
      input: PutProfileOutboundRequestBatchCommandInput;
      output: PutProfileOutboundRequestBatchCommandOutput;
    };
  };
}
