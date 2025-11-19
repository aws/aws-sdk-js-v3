// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListChannelHandshakesRequest, ListChannelHandshakesResponse } from "../models/models_0";
import {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { ListChannelHandshakes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelHandshakesCommand}.
 */
export interface ListChannelHandshakesCommandInput extends ListChannelHandshakesRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelHandshakesCommand}.
 */
export interface ListChannelHandshakesCommandOutput extends ListChannelHandshakesResponse, __MetadataBearer {}

/**
 * <p>Lists channel handshakes based on specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, ListChannelHandshakesCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, ListChannelHandshakesCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // ListChannelHandshakesRequest
 *   handshakeType: "START_SERVICE_PERIOD" || "REVOKE_SERVICE_PERIOD" || "PROGRAM_MANAGEMENT_ACCOUNT", // required
 *   catalog: "STRING_VALUE", // required
 *   participantType: "SENDER" || "RECEIVER", // required
 *   maxResults: Number("int"),
 *   statuses: [ // HandshakeStatusList
 *     "PENDING" || "ACCEPTED" || "REJECTED" || "CANCELED" || "EXPIRED",
 *   ],
 *   associatedResourceIdentifiers: [ // AssociatedResourceIdentifierList
 *     "STRING_VALUE",
 *   ],
 *   handshakeTypeFilters: { // ListChannelHandshakesTypeFilters Union: only one key present
 *     startServicePeriodTypeFilters: { // StartServicePeriodTypeFilters
 *       servicePeriodTypes: [ // ServicePeriodTypeList
 *         "MINIMUM_NOTICE_PERIOD" || "FIXED_COMMITMENT_PERIOD",
 *       ],
 *     },
 *     revokeServicePeriodTypeFilters: { // RevokeServicePeriodTypeFilters
 *       servicePeriodTypes: [
 *         "MINIMUM_NOTICE_PERIOD" || "FIXED_COMMITMENT_PERIOD",
 *       ],
 *     },
 *     programManagementAccountTypeFilters: { // ProgramManagementAccountTypeFilters
 *       programs: [ // ProgramList
 *         "SOLUTION_PROVIDER" || "DISTRIBUTION" || "DISTRIBUTION_SELLER",
 *       ],
 *     },
 *   },
 *   handshakeTypeSort: { // ListChannelHandshakesTypeSort Union: only one key present
 *     startServicePeriodTypeSort: { // StartServicePeriodTypeSort
 *       sortOrder: "Ascending" || "Descending", // required
 *       sortBy: "UpdatedAt", // required
 *     },
 *     revokeServicePeriodTypeSort: { // RevokeServicePeriodTypeSort
 *       sortOrder: "Ascending" || "Descending", // required
 *       sortBy: "UpdatedAt", // required
 *     },
 *     programManagementAccountTypeSort: { // ProgramManagementAccountTypeSort
 *       sortOrder: "Ascending" || "Descending", // required
 *       sortBy: "UpdatedAt", // required
 *     },
 *   },
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelHandshakesCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelHandshakesResponse
 * //   items: [ // ChannelHandshakeSummaries
 * //     { // ChannelHandshakeSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       catalog: "STRING_VALUE",
 * //       handshakeType: "START_SERVICE_PERIOD" || "REVOKE_SERVICE_PERIOD" || "PROGRAM_MANAGEMENT_ACCOUNT",
 * //       ownerAccountId: "STRING_VALUE",
 * //       senderAccountId: "STRING_VALUE",
 * //       senderDisplayName: "STRING_VALUE",
 * //       receiverAccountId: "STRING_VALUE",
 * //       associatedResourceId: "STRING_VALUE",
 * //       detail: { // HandshakeDetail Union: only one key present
 * //         startServicePeriodHandshakeDetail: { // StartServicePeriodHandshakeDetail
 * //           note: "STRING_VALUE",
 * //           servicePeriodType: "MINIMUM_NOTICE_PERIOD" || "FIXED_COMMITMENT_PERIOD",
 * //           minimumNoticeDays: "STRING_VALUE",
 * //           startDate: new Date("TIMESTAMP"),
 * //           endDate: new Date("TIMESTAMP"),
 * //         },
 * //         revokeServicePeriodHandshakeDetail: { // RevokeServicePeriodHandshakeDetail
 * //           note: "STRING_VALUE",
 * //           servicePeriodType: "MINIMUM_NOTICE_PERIOD" || "FIXED_COMMITMENT_PERIOD",
 * //           minimumNoticeDays: "STRING_VALUE",
 * //           startDate: new Date("TIMESTAMP"),
 * //           endDate: new Date("TIMESTAMP"),
 * //         },
 * //         programManagementAccountHandshakeDetail: { // ProgramManagementAccountHandshakeDetail
 * //           program: "SOLUTION_PROVIDER" || "DISTRIBUTION" || "DISTRIBUTION_SELLER",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       status: "PENDING" || "ACCEPTED" || "REJECTED" || "CANCELED" || "EXPIRED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelHandshakesCommandInput - {@link ListChannelHandshakesCommandInput}
 * @returns {@link ListChannelHandshakesCommandOutput}
 * @see {@link ListChannelHandshakesCommandInput} for command's `input` shape.
 * @see {@link ListChannelHandshakesCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralChannelClientResolvedConfig | config} for PartnerCentralChannelClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
 * @example Example for ListChannelHandshakes - START_SERVICE_PERIOD
 * ```javascript
 * //
 * const input = {
 *   associatedResourceIdentifiers: [
 *     "rs-123abc456def7"
 *   ],
 *   catalog: "AWS",
 *   handshakeType: "START_SERVICE_PERIOD",
 *   handshakeTypeFilters: {
 *     startServicePeriodTypeFilters: {
 *       servicePeriodTypes: [
 *         "FIXED_COMMITMENT_PERIOD"
 *       ]
 *     }
 *   },
 *   handshakeTypeSort: {
 *     startServicePeriodTypeSort: {
 *       sortBy: "UpdatedAt",
 *       sortOrder: "Descending"
 *     }
 *   },
 *   participantType: "SENDER",
 *   statuses: [
 *     "ACCEPTED"
 *   ]
 * };
 * const command = new ListChannelHandshakesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       arn: "arn:aws:partnercentral:us-east-1:111122223333:catalog/AWS/channel-handshake/ch-4fj3bd2o3vb91",
 *       associatedResourceId: "rs-u8ic702rtfew1",
 *       catalog: "AWS",
 *       createdAt: "2025-04-29T16:18:16.000Z",
 *       detail: {
 *         startServicePeriodHandshakeDetail: {
 *           minimumNoticeDays: "14",
 *           note: "Optional_Note",
 *           servicePeriodType: "MINIMUM_NOTICE_PERIOD"
 *         }
 *       },
 *       handshakeType: "START_SERVICE_PERIOD",
 *       id: "ch-4fj3bd2o3vb91",
 *       ownerAccountId: "111122223333",
 *       receiverAccountId: "333322221111",
 *       senderAccountId: "111122224444",
 *       status: "PENDING",
 *       updatedAt: "2025-05-02T16:18:16.000Z"
 *     },
 *     {
 *       arn: "arn:aws:partnercentral:us-east-1:111122223333:catalog/AWS/channel-handshake/ch-4fj3bd2o3vb92",
 *       associatedResourceId: "rs-u8ic702rtfew1",
 *       catalog: "AWS",
 *       createdAt: "2025-02-28T16:18:16.000Z",
 *       detail: {
 *         startServicePeriodHandshakeDetail: {
 *           endDate: "2027-03-31T00:00:00.000Z",
 *           note: "Optional_Note",
 *           servicePeriodType: "FIXED_COMMITMENT_PERIOD",
 *           startDate: "2025-02-02T00:00:00.000Z"
 *         }
 *       },
 *       handshakeType: "START_SERVICE_PERIOD",
 *       id: "ch-4fj3bd2o3vb92",
 *       ownerAccountId: "111122223333",
 *       receiverAccountId: "333322221111",
 *       senderAccountId: "111122224444",
 *       status: "PENDING",
 *       updatedAt: "2025-03-02T16:18:16.000Z"
 *     }
 *   ],
 *   nextToken: "nextToken"
 * }
 * *\/
 * ```
 *
 * @example Example for ListChannelHandshakes - REVOKE_SERVICE_PERIOD
 * ```javascript
 * //
 * const input = {
 *   associatedResourceIdentifiers: [
 *     "rs-123abc456def7"
 *   ],
 *   catalog: "AWS",
 *   handshakeType: "REVOKE_SERVICE_PERIOD",
 *   handshakeTypeFilters: {
 *     revokeServicePeriodTypeFilters: {
 *       servicePeriodTypes: [
 *         "MINIMUM_NOTICE_PERIOD"
 *       ]
 *     }
 *   },
 *   handshakeTypeSort: {
 *     revokeServicePeriodTypeSort: {
 *       sortBy: "UpdatedAt",
 *       sortOrder: "Descending"
 *     }
 *   },
 *   participantType: "SENDER",
 *   statuses: [
 *     "ACCEPTED"
 *   ]
 * };
 * const command = new ListChannelHandshakesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       arn: "arn:aws:partnercentral:us-east-1:111122223333:catalog/AWS/channel-handshake/ch-4fj3bd2o3vb91",
 *       associatedResourceId: "rs-u8ic702rtfew1",
 *       catalog: "AWS",
 *       createdAt: "2025-04-29T16:18:16.000Z",
 *       detail: {
 *         revokeServicePeriodHandshakeDetail: {
 *           minimumNoticeDays: "14",
 *           note: "Optional_Note",
 *           servicePeriodType: "MINIMUM_NOTICE_PERIOD"
 *         }
 *       },
 *       handshakeType: "REVOKE_SERVICE_PERIOD",
 *       id: "ch-4fj3bd2o3vb91",
 *       ownerAccountId: "111122223333",
 *       receiverAccountId: "333322221111",
 *       senderAccountId: "111122224444",
 *       status: "PENDING",
 *       updatedAt: "2025-05-02T16:18:16.000Z"
 *     }
 *   ],
 *   nextToken: "nextToken"
 * }
 * *\/
 * ```
 *
 * @example Example for ListChannelHandshakes - PROGRAM_MANAGEMENT_ACCOUNT
 * ```javascript
 * //
 * const input = {
 *   associatedResourceIdentifiers: [
 *     "pma-123abc456def7"
 *   ],
 *   catalog: "AWS",
 *   handshakeType: "PROGRAM_MANAGEMENT_ACCOUNT",
 *   handshakeTypeFilters: {
 *     programManagementAccountTypeFilters: {
 *       programs: [
 *         "SOLUTION_PROVIDER"
 *       ]
 *     }
 *   },
 *   handshakeTypeSort: {
 *     programManagementAccountTypeSort: {
 *       sortBy: "UpdatedAt",
 *       sortOrder: "Descending"
 *     }
 *   },
 *   maxResults: 20,
 *   nextToken: "nextToken",
 *   participantType: "SENDER",
 *   statuses: [
 *     "ACCEPTED"
 *   ]
 * };
 * const command = new ListChannelHandshakesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       arn: "arn:aws:partnercentral:us-east-1:111122223333:catalog/AWS/channel-handshake/ch-4fj3bd2o3vb91",
 *       associatedResourceId: "pma-u8ic702rtfew1",
 *       catalog: "AWS",
 *       createdAt: "2025-02-28T16:18:16.000Z",
 *       detail: {
 *         programManagementAccountHandshakeDetail: {
 *           program: "SOLUTION_PROVIDER"
 *         }
 *       },
 *       handshakeType: "PROGRAM_MANAGEMENT_ACCOUNT",
 *       id: "ch-4fj3bd2o3vb91",
 *       ownerAccountId: "111122223333",
 *       receiverAccountId: "333322221111",
 *       senderAccountId: "111122223333",
 *       status: "PENDING",
 *       updatedAt: "2025-03-02T16:18:16.000Z"
 *     }
 *   ],
 *   nextToken: "nextToken"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListChannelHandshakesCommand extends $Command
  .classBuilder<
    ListChannelHandshakesCommandInput,
    ListChannelHandshakesCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "ListChannelHandshakes", {})
  .n("PartnerCentralChannelClient", "ListChannelHandshakesCommand")
  .sc(ListChannelHandshakes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelHandshakesRequest;
      output: ListChannelHandshakesResponse;
    };
    sdk: {
      input: ListChannelHandshakesCommandInput;
      output: ListChannelHandshakesCommandOutput;
    };
  };
}
