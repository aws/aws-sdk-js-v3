// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutDialRequestBatchRequest,
  PutDialRequestBatchRequestFilterSensitiveLog,
  PutDialRequestBatchResponse,
} from "../models/models_0";
import { de_PutDialRequestBatchCommand, se_PutDialRequestBatchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDialRequestBatchCommand}.
 */
export interface PutDialRequestBatchCommandInput extends PutDialRequestBatchRequest {}
/**
 * @public
 *
 * The output of {@link PutDialRequestBatchCommand}.
 */
export interface PutDialRequestBatchCommandOutput extends PutDialRequestBatchResponse, __MetadataBearer {}

/**
 * Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, PutDialRequestBatchCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, PutDialRequestBatchCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
 * const input = { // PutDialRequestBatchRequest
 *   id: "STRING_VALUE", // required
 *   dialRequests: [ // DialRequestList // required
 *     { // DialRequest
 *       clientToken: "STRING_VALUE", // required
 *       phoneNumber: "STRING_VALUE", // required
 *       expirationTime: new Date("TIMESTAMP"), // required
 *       attributes: { // Attributes // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new PutDialRequestBatchCommand(input);
 * const response = await client.send(command);
 * // { // PutDialRequestBatchResponse
 * //   successfulRequests: [ // SuccessfulRequestList
 * //     { // SuccessfulRequest
 * //       clientToken: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedRequests: [ // FailedRequestList
 * //     { // FailedRequest
 * //       clientToken: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       failureCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutDialRequestBatchCommandInput - {@link PutDialRequestBatchCommandInput}
 * @returns {@link PutDialRequestBatchCommandOutput}
 * @see {@link PutDialRequestBatchCommandInput} for command's `input` shape.
 * @see {@link PutDialRequestBatchCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
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
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 *
 * @public
 */
export class PutDialRequestBatchCommand extends $Command
  .classBuilder<
    PutDialRequestBatchCommandInput,
    PutDialRequestBatchCommandOutput,
    ConnectCampaignsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCampaignService", "PutDialRequestBatch", {})
  .n("ConnectCampaignsClient", "PutDialRequestBatchCommand")
  .f(PutDialRequestBatchRequestFilterSensitiveLog, void 0)
  .ser(se_PutDialRequestBatchCommand)
  .de(de_PutDialRequestBatchCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDialRequestBatchRequest;
      output: PutDialRequestBatchResponse;
    };
    sdk: {
      input: PutDialRequestBatchCommandInput;
      output: PutDialRequestBatchCommandOutput;
    };
  };
}
