// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGroupsRequest, GetGroupsResult } from "../models/models_0";
import { GetGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGroupsCommand}.
 */
export interface GetGroupsCommandInput extends GetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupsCommand}.
 */
export interface GetGroupsCommandOutput extends GetGroupsResult, __MetadataBearer {}

/**
 * <p>Retrieves all active group details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetGroupsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetGroupsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // GetGroupsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupsResult
 * //   Groups: [ // GroupSummaryList
 * //     { // GroupSummary
 * //       GroupName: "STRING_VALUE",
 * //       GroupARN: "STRING_VALUE",
 * //       FilterExpression: "STRING_VALUE",
 * //       InsightsConfiguration: { // InsightsConfiguration
 * //         InsightsEnabled: true || false,
 * //         NotificationsEnabled: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGroupsCommandInput - {@link GetGroupsCommandInput}
 * @returns {@link GetGroupsCommandOutput}
 * @see {@link GetGroupsCommandInput} for command's `input` shape.
 * @see {@link GetGroupsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class GetGroupsCommand extends command<GetGroupsCommandInput, GetGroupsCommandOutput>(
  _ep0,
  _mw0,
  "GetGroups",
  GetGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupsRequest;
      output: GetGroupsResult;
    };
    sdk: {
      input: GetGroupsCommandInput;
      output: GetGroupsCommandOutput;
    };
  };
}
