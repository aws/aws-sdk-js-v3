// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOmniDashboardsInput, ListOmniDashboardsOutput } from "../models/models_0";
import { ListOmniDashboards$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOmniDashboardsCommand}.
 */
export interface ListOmniDashboardsCommandInput extends ListOmniDashboardsInput {}
/**
 * @public
 *
 * The output of {@link ListOmniDashboardsCommand}.
 */
export interface ListOmniDashboardsCommandOutput extends ListOmniDashboardsOutput, __MetadataBearer {}

/**
 * Returns the dashboards in a space, optionally filtered by name prefix.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListOmniDashboardsCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListOmniDashboardsCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListOmniDashboardsInput
 *   spaceId: "STRING_VALUE", // required
 *   namePrefix: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListOmniDashboardsCommand(input);
 * const response = await client.send(command);
 * // { // ListOmniDashboardsOutput
 * //   items: [ // OmniDashboardSummaryList // required
 * //     { // OmniDashboardSummary
 * //       dashboardId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createdBy: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOmniDashboardsCommandInput - {@link ListOmniDashboardsCommandInput}
 * @returns {@link ListOmniDashboardsCommandOutput}
 * @see {@link ListOmniDashboardsCommandInput} for command's `input` shape.
 * @see {@link ListOmniDashboardsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example List dashboards in a space
 * ```javascript
 * // The following example lists the first page of dashboards in a space and returns a nextToken to retrieve the next page. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   maxResults: 50,
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new ListOmniDashboardsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       arn: "arn:aws:cloudwatch:us-east-1:123456789012:omni-dashboard/c3d4e5f6-7a8b-4c9d-8e0f-1a2b3c4d5e6f",
 *       createdAt: "2026-09-16T14:22:31Z",
 *       createdBy: "arn:aws:iam::123456789012:role/ObservabilityAdmin",
 *       dashboardId: "c3d4e5f6-7a8b-4c9d-8e0f-1a2b3c4d5e6f",
 *       description: "Overview of service health metrics.",
 *       name: "service-health-overview",
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     },
 *     {
 *       arn: "arn:aws:cloudwatch:us-east-1:123456789012:omni-dashboard/d4e5f6a7-8b9c-4d0e-9f1a-2b3c4d5e6f70",
 *       createdAt: "2026-09-16T14:22:31Z",
 *       createdBy: "arn:aws:iam::123456789012:role/ObservabilityAdmin",
 *       dashboardId: "d4e5f6a7-8b9c-4d0e-9f1a-2b3c4d5e6f70",
 *       description: "Monthly cost breakdown by service.",
 *       name: "cost-explorer-dashboard",
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     }
 *   ],
 *   nextToken: "eyJvZmZzZXQiOjIwfQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListOmniDashboardsCommand extends command<ListOmniDashboardsCommandInput, ListOmniDashboardsCommandOutput>(
  _ep0,
  _mw0,
  "ListOmniDashboards",
  ListOmniDashboards$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOmniDashboardsInput;
      output: ListOmniDashboardsOutput;
    };
    sdk: {
      input: ListOmniDashboardsCommandInput;
      output: ListOmniDashboardsCommandOutput;
    };
  };
}
