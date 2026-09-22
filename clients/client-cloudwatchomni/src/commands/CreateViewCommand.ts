// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateViewRequest, CreateViewResponse } from "../models/models_0";
import { CreateView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateViewCommand}.
 */
export interface CreateViewCommandInput extends CreateViewRequest {}
/**
 * @public
 *
 * The output of {@link CreateViewCommand}.
 */
export interface CreateViewCommandOutput extends CreateViewResponse, __MetadataBearer {}

/**
 * Creates a new SQL view.
 *
 * A view is a named, reusable SQL query that can be referenced from
 * telemetry queries. View names must be unique within the account and
 * region. Only USER views can be created — MANAGED views are provisioned
 * by AWS.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, CreateViewCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, CreateViewCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // CreateViewRequest
 *   name: "STRING_VALUE", // required
 *   definition: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateViewCommand(input);
 * const response = await client.send(command);
 * // { // CreateViewResponse
 * //   name: "STRING_VALUE", // required
 * //   type: "USER" || "MANAGED", // required
 * //   description: "STRING_VALUE",
 * //   definition: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateViewCommandInput - {@link CreateViewCommandInput}
 * @returns {@link CreateViewCommandOutput}
 * @see {@link CreateViewCommandInput} for command's `input` shape.
 * @see {@link CreateViewCommandOutput} for command's `response` shape.
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
 * @example Create a view
 * ```javascript
 * // The following example creates a user view that saves an error-count-by-service query. View names must begin with the view. prefix and be unique within the account and Region. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   clientToken: "3f2a9c1e-7b04-4d8a-9e15-6c2b8d0f4a73",
 *   definition: `SELECT resource['attributes']['service.name'] AS service, COUNT(*) AS error_count FROM "logs.default" WHERE severityText = 'ERROR' GROUP BY service`,
 *   description: "Error counts by service",
 *   name: "view.service_errors",
 *   tags: {
 *     Team: "observability"
 *   }
 * };
 * const command = new CreateViewCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:cloudwatch:us-east-1:123456789012:view/view.service_errors",
 *   createdAt: "2026-09-16T14:22:31Z",
 *   definition: `SELECT resource['attributes']['service.name'] AS service, COUNT(*) AS error_count FROM "logs.default" WHERE severityText = 'ERROR' GROUP BY service`,
 *   description: "Error counts by service",
 *   name: "view.service_errors",
 *   type: "USER",
 *   updatedAt: "2026-09-16T14:22:31Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateViewCommand extends command<CreateViewCommandInput, CreateViewCommandOutput>(
  _ep0,
  _mw0,
  "CreateView",
  CreateView$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateViewRequest;
      output: CreateViewResponse;
    };
    sdk: {
      input: CreateViewCommandInput;
      output: CreateViewCommandOutput;
    };
  };
}
