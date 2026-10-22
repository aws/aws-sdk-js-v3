// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListReplicationFindingsRequest, ListReplicationFindingsResponse } from "../models/models_2";
import { ListReplicationFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListReplicationFindingsCommand}.
 */
export interface ListReplicationFindingsCommandInput extends ListReplicationFindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListReplicationFindingsCommand}.
 */
export interface ListReplicationFindingsCommandOutput extends ListReplicationFindingsResponse, __MetadataBearer {}

/**
 * <p>Lists replication findings for resources of a specified resource type in a specified
 *    Connect Customer instance. A replication finding describes a single resource whose replication
 *    to one or more Regions is incomplete or has encountered an error. Results are returned in pages.
 *    This operation is available only for instances that are set up for Global Resiliency.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListReplicationFindingsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListReplicationFindingsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListReplicationFindingsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListReplicationFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListReplicationFindingsResponse
 * //   ReplicationFindingsList: [ // ReplicationFindingsList // required
 * //     { // ReplicationFinding
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE",
 * //       Operation: "STRING_VALUE",
 * //       ReferenceCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ApproximateDriftedResourceCounts: [ // ApproximateDriftedResourceCounts
 * //     { // ApproximateDriftedResourceCount
 * //       Region: "STRING_VALUE", // required
 * //       Count: Number("long"), // required
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ResourceReplicationStatuses: [ // ResourceReplicationStatuses
 * //     { // ResourceReplicationStatus
 * //       Region: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReplicationFindingsCommandInput - {@link ListReplicationFindingsCommandInput}
 * @returns {@link ListReplicationFindingsCommandOutput}
 * @see {@link ListReplicationFindingsCommandInput} for command's `input` shape.
 * @see {@link ListReplicationFindingsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
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
export class ListReplicationFindingsCommand extends command<ListReplicationFindingsCommandInput, ListReplicationFindingsCommandOutput>(
  _ep0,
  _mw0,
  "ListReplicationFindings",
  ListReplicationFindings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReplicationFindingsRequest;
      output: ListReplicationFindingsResponse;
    };
    sdk: {
      input: ListReplicationFindingsCommandInput;
      output: ListReplicationFindingsCommandOutput;
    };
  };
}
