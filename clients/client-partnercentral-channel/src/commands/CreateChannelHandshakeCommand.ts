// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateChannelHandshakeRequest, CreateChannelHandshakeResponse } from "../models/models_0";
import {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { CreateChannelHandshake } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChannelHandshakeCommand}.
 */
export interface CreateChannelHandshakeCommandInput extends CreateChannelHandshakeRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelHandshakeCommand}.
 */
export interface CreateChannelHandshakeCommandOutput extends CreateChannelHandshakeResponse, __MetadataBearer {}

/**
 * <p>Creates a new channel handshake request to establish a partnership with another AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, CreateChannelHandshakeCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, CreateChannelHandshakeCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // CreateChannelHandshakeRequest
 *   handshakeType: "START_SERVICE_PERIOD" || "REVOKE_SERVICE_PERIOD" || "PROGRAM_MANAGEMENT_ACCOUNT", // required
 *   catalog: "STRING_VALUE", // required
 *   associatedResourceIdentifier: "STRING_VALUE", // required
 *   payload: { // ChannelHandshakePayload Union: only one key present
 *     startServicePeriodPayload: { // StartServicePeriodPayload
 *       programManagementAccountIdentifier: "STRING_VALUE", // required
 *       note: "STRING_VALUE",
 *       servicePeriodType: "MINIMUM_NOTICE_PERIOD" || "FIXED_COMMITMENT_PERIOD", // required
 *       minimumNoticeDays: "STRING_VALUE",
 *       endDate: new Date("TIMESTAMP"),
 *     },
 *     revokeServicePeriodPayload: { // RevokeServicePeriodPayload
 *       programManagementAccountIdentifier: "STRING_VALUE", // required
 *       note: "STRING_VALUE",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateChannelHandshakeCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelHandshakeResponse
 * //   channelHandshakeDetail: { // CreateChannelHandshakeDetail
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateChannelHandshakeCommandInput - {@link CreateChannelHandshakeCommandInput}
 * @returns {@link CreateChannelHandshakeCommandOutput}
 * @see {@link CreateChannelHandshakeCommandInput} for command's `input` shape.
 * @see {@link CreateChannelHandshakeCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralChannelClientResolvedConfig | config} for PartnerCentralChannelClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation due to invalid input parameters.</p>
 *
 * @throws {@link PartnerCentralChannelServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralChannel service.</p>
 *
 *
 * @example Example for CreateChannelHandshake - START_SERVICE_PERIOD with Minimum Notice Period
 * ```javascript
 * //
 * const input = {
 *   associatedResourceIdentifier: "rs-abc123def456g",
 *   catalog: "AWS",
 *   clientToken: "clientToken",
 *   handshakeType: "START_SERVICE_PERIOD",
 *   payload: {
 *     startServicePeriodPayload: {
 *       minimumNoticeDays: "14",
 *       note: "Optional Note",
 *       programManagementAccountIdentifier: "pma-abcdef123456g",
 *       servicePeriodType: "MINIMUM_NOTICE_PERIOD"
 *     }
 *   }
 * };
 * const command = new CreateChannelHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelHandshakeDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/channel-handshake/ch-4fj3bd2o3vb91",
 *     id: "ch-4fj3bd2o3vb91"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Example for CreateChannelHandshake - START_SERVICE_PERIOD with Fixed Commitment Period
 * ```javascript
 * //
 * const input = {
 *   associatedResourceIdentifier: "rs-abc123def456g",
 *   catalog: "AWS",
 *   clientToken: "clientToken",
 *   handshakeType: "START_SERVICE_PERIOD",
 *   payload: {
 *     startServicePeriodPayload: {
 *       endDate: "2026-07-01T00:00:00Z",
 *       note: "Optional Note",
 *       programManagementAccountIdentifier: "pma-abcdef123456g",
 *       servicePeriodType: "FIXED_COMMITMENT_PERIOD"
 *     }
 *   }
 * };
 * const command = new CreateChannelHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelHandshakeDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/channel-handshake/ch-4fj3bd2o3vb91",
 *     id: "ch-4fj3bd2o3vb91"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Example for CreateChannelHandshake - REVOKE_SERVICE_PERIOD
 * ```javascript
 * //
 * const input = {
 *   associatedResourceIdentifier: "rs-abc123def456g",
 *   catalog: "AWS",
 *   clientToken: "clientToken",
 *   handshakeType: "REVOKE_SERVICE_PERIOD",
 *   payload: {
 *     revokeServicePeriodPayload: {
 *       note: "Optional Note",
 *       programManagementAccountIdentifier: "pma-abcdef123456g"
 *     }
 *   }
 * };
 * const command = new CreateChannelHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelHandshakeDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/channel-handshake/ch-4fj3bd2o3vb91",
 *     id: "ch-4fj3bd2o3vb91"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Example for CreateChannelHandshake - PROGRAM_MANAGEMENT_ACCOUNT
 * ```javascript
 * //
 * const input = {
 *   associatedResourceIdentifier: "pma-123abc456def7",
 *   catalog: "AWS",
 *   clientToken: "clientToken",
 *   handshakeType: "PROGRAM_MANAGEMENT_ACCOUNT"
 * };
 * const command = new CreateChannelHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelHandshakeDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/channel-handshake/ch-4fj3bd2o3vb91",
 *     id: "ch-4fj3bd2o3vb91"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateChannelHandshakeCommand extends $Command
  .classBuilder<
    CreateChannelHandshakeCommandInput,
    CreateChannelHandshakeCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "CreateChannelHandshake", {})
  .n("PartnerCentralChannelClient", "CreateChannelHandshakeCommand")
  .sc(CreateChannelHandshake)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelHandshakeRequest;
      output: CreateChannelHandshakeResponse;
    };
    sdk: {
      input: CreateChannelHandshakeCommandInput;
      output: CreateChannelHandshakeCommandOutput;
    };
  };
}
