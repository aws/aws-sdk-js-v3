// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateOmniDashboardInput, UpdateOmniDashboardOutput } from "../models/models_0";
import { UpdateOmniDashboard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateOmniDashboardCommand}.
 */
export interface UpdateOmniDashboardCommandInput extends UpdateOmniDashboardInput {}
/**
 * @public
 *
 * The output of {@link UpdateOmniDashboardCommand}.
 */
export interface UpdateOmniDashboardCommandOutput extends UpdateOmniDashboardOutput, __MetadataBearer {}

/**
 * Updates an existing dashboard within a space.
 *
 * Only the provided fields are changed; omitted fields are left unchanged.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, UpdateOmniDashboardCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, UpdateOmniDashboardCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // UpdateOmniDashboardInput
 *   spaceId: "STRING_VALUE", // required
 *   dashboardId: "STRING_VALUE", // required
 *   body: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateOmniDashboardCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOmniDashboardOutput
 * //   omniDashboard: { // OmniDashboard
 * //     dashboardId: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     body: "STRING_VALUE", // required
 * //     createdBy: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateOmniDashboardCommandInput - {@link UpdateOmniDashboardCommandInput}
 * @returns {@link UpdateOmniDashboardCommandOutput}
 * @see {@link UpdateOmniDashboardCommandInput} for command's `input` shape.
 * @see {@link UpdateOmniDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The operation could not be completed because of a conflict with the current
 * state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  A service quota was exceeded.
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
 * @example Update a dashboard body
 * ```javascript
 * // The following example updates only the body of a dashboard; the name and description are left unchanged. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   body: `{"widgets":[{"type":"metric","x":0,"y":0,"width":24,"height":6,"properties":{"metrics":[["AWS/Lambda","Errors","FunctionName","OrderProcessor"],["AWS/Lambda","Throttles","FunctionName","OrderProcessor"]],"region":"us-east-1","title":"Lambda Errors and Throttles"}}]}`,
 *   dashboardId: "c3d4e5f6-7a8b-4c9d-8e0f-1a2b3c4d5e6f",
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new UpdateOmniDashboardCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   omniDashboard: {
 *     arn: "arn:aws:cloudwatch:us-east-1:123456789012:omni-dashboard/c3d4e5f6-7a8b-4c9d-8e0f-1a2b3c4d5e6f",
 *     body: `{"widgets":[{"type":"metric","x":0,"y":0,"width":24,"height":6,"properties":{"metrics":[["AWS/Lambda","Errors","FunctionName","OrderProcessor"],["AWS/Lambda","Throttles","FunctionName","OrderProcessor"]],"region":"us-east-1","title":"Lambda Errors and Throttles"}}]}`,
 *     createdAt: "2026-09-16T14:22:31Z",
 *     createdBy: "arn:aws:iam::123456789012:role/ObservabilityAdmin",
 *     dashboardId: "c3d4e5f6-7a8b-4c9d-8e0f-1a2b3c4d5e6f",
 *     description: "Overview of service health metrics.",
 *     name: "service-health-overview",
 *     tags: {
 *       Team: "observability"
 *     },
 *     updatedAt: "2026-09-17T09:11:52Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateOmniDashboardCommand extends command<UpdateOmniDashboardCommandInput, UpdateOmniDashboardCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOmniDashboard",
  UpdateOmniDashboard$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOmniDashboardInput;
      output: UpdateOmniDashboardOutput;
    };
    sdk: {
      input: UpdateOmniDashboardCommandInput;
      output: UpdateOmniDashboardCommandOutput;
    };
  };
}
