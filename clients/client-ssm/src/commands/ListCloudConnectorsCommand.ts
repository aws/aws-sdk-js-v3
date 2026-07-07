// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCloudConnectorsRequest, ListCloudConnectorsResult } from "../models/models_1";
import { ListCloudConnectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCloudConnectorsCommand}.
 */
export interface ListCloudConnectorsCommandInput extends ListCloudConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListCloudConnectorsCommand}.
 */
export interface ListCloudConnectorsCommandOutput extends ListCloudConnectorsResult, __MetadataBearer {}

/**
 * <p>Returns a list of cloud connectors in the current Amazon Web Services account and Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListCloudConnectorsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListCloudConnectorsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListCloudConnectorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // CloudConnectorFilterList
 *     { // CloudConnectorFilter
 *       FilterKey: "SubscriptionId" || "TenantId",
 *       FilterValues: [ // CloudConnectorFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListCloudConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListCloudConnectorsResult
 * //   CloudConnectors: [ // CloudConnectorSummaryList
 * //     { // CloudConnectorSummary
 * //       CloudConnectorId: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCloudConnectorsCommandInput - {@link ListCloudConnectorsCommandInput}
 * @returns {@link ListCloudConnectorsCommandOutput}
 * @see {@link ListCloudConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListCloudConnectorsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ListCloudConnectorsCommand extends command<ListCloudConnectorsCommandInput, ListCloudConnectorsCommandOutput>(
  _ep0,
  _mw0,
  "ListCloudConnectors",
  ListCloudConnectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCloudConnectorsRequest;
      output: ListCloudConnectorsResult;
    };
    sdk: {
      input: ListCloudConnectorsCommandInput;
      output: ListCloudConnectorsCommandOutput;
    };
  };
}
