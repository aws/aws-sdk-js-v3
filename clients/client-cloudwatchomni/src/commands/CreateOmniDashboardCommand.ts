// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOmniDashboardInput, CreateOmniDashboardOutput } from "../models/models_0";
import { CreateOmniDashboard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOmniDashboardCommand}.
 */
export interface CreateOmniDashboardCommandInput extends CreateOmniDashboardInput {}
/**
 * @public
 *
 * The output of {@link CreateOmniDashboardCommand}.
 */
export interface CreateOmniDashboardCommandOutput extends CreateOmniDashboardOutput, __MetadataBearer {}

/**
 * Creates a new dashboard within a space.
 *
 * Use GetOmniDashboard and ListOmniDashboards to retrieve dashboards,
 * UpdateOmniDashboard to modify one, and DeleteOmniDashboard to remove it.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, CreateOmniDashboardCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, CreateOmniDashboardCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // CreateOmniDashboardInput
 *   spaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   body: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateOmniDashboardCommand(input);
 * const response = await client.send(command);
 * // { // CreateOmniDashboardOutput
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
 * @param CreateOmniDashboardCommandInput - {@link CreateOmniDashboardCommandInput}
 * @returns {@link CreateOmniDashboardCommandOutput}
 * @see {@link CreateOmniDashboardCommandInput} for command's `input` shape.
 * @see {@link CreateOmniDashboardCommandOutput} for command's `response` shape.
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
 * @example Create a dashboard
 * ```javascript
 * // The following example creates a dashboard in a space from a JSON dashboard definition. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   body: `{"widgets":[{"type":"metric","x":0,"y":0,"width":12,"height":6,"properties":{"metrics":[["AWS/Lambda","Errors","FunctionName","OrderProcessor"]],"region":"us-east-1","title":"Lambda Errors"}}]}`,
 *   clientToken: "3f2a9c1e-7b04-4d8a-9e15-6c2b8d0f4a73",
 *   description: "Overview of service health metrics.",
 *   name: "service-health-overview",
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *   tags: {
 *     Team: "observability"
 *   }
 * };
 * const command = new CreateOmniDashboardCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   omniDashboard: {
 *     arn: "arn:aws:cloudwatch:us-east-1:123456789012:omni-dashboard/c3d4e5f6-7a8b-4c9d-8e0f-1a2b3c4d5e6f",
 *     body: `{"widgets":[{"type":"metric","x":0,"y":0,"width":12,"height":6,"properties":{"metrics":[["AWS/Lambda","Errors","FunctionName","OrderProcessor"]],"region":"us-east-1","title":"Lambda Errors"}}]}`,
 *     createdAt: "2026-09-16T14:22:31Z",
 *     createdBy: "arn:aws:iam::123456789012:role/ObservabilityAdmin",
 *     dashboardId: "c3d4e5f6-7a8b-4c9d-8e0f-1a2b3c4d5e6f",
 *     description: "Overview of service health metrics.",
 *     name: "service-health-overview",
 *     tags: {
 *       Team: "observability"
 *     },
 *     updatedAt: "2026-09-16T14:22:31Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateOmniDashboardCommand extends command<CreateOmniDashboardCommandInput, CreateOmniDashboardCommandOutput>(
  _ep0,
  _mw0,
  "CreateOmniDashboard",
  CreateOmniDashboard$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOmniDashboardInput;
      output: CreateOmniDashboardOutput;
    };
    sdk: {
      input: CreateOmniDashboardCommandInput;
      output: CreateOmniDashboardCommandOutput;
    };
  };
}
