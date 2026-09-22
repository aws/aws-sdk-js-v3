// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateViewRequest, UpdateViewResponse } from "../models/models_0";
import { UpdateView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateViewCommand}.
 */
export interface UpdateViewCommandInput extends UpdateViewRequest {}
/**
 * @public
 *
 * The output of {@link UpdateViewCommand}.
 */
export interface UpdateViewCommandOutput extends UpdateViewResponse, __MetadataBearer {}

/**
 * Updates an existing view's definition and/or description.
 *
 * Only the fields you provide are changed. Managed views cannot be
 * updated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, UpdateViewCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, UpdateViewCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // UpdateViewRequest
 *   name: "STRING_VALUE", // required
 *   definition: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateViewCommand(input);
 * const response = await client.send(command);
 * // { // UpdateViewResponse
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
 * @param UpdateViewCommandInput - {@link UpdateViewCommandInput}
 * @returns {@link UpdateViewCommandOutput}
 * @see {@link UpdateViewCommandInput} for command's `input` shape.
 * @see {@link UpdateViewCommandOutput} for command's `response` shape.
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
 * @example Update a view's definition
 * ```javascript
 * // The following example changes only the definition; the omitted description is left unchanged. Managed views cannot be updated. The response carries the view's effective configuration. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   definition: `SELECT resource['attributes']['service.name'] AS service, COUNT(*) AS error_count FROM "logs.default" WHERE status['code'] IN ('2', 'ERROR') GROUP BY service`,
 *   name: "view.service_errors"
 * };
 * const command = new UpdateViewCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:cloudwatch:us-east-1:123456789012:view/view.service_errors",
 *   createdAt: "2026-09-16T14:22:31Z",
 *   definition: `SELECT resource['attributes']['service.name'] AS service, COUNT(*) AS error_count FROM "logs.default" WHERE status['code'] IN ('2', 'ERROR') GROUP BY service`,
 *   description: "Error counts by service",
 *   name: "view.service_errors",
 *   type: "USER",
 *   updatedAt: "2026-09-17T09:11:52Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateViewCommand extends command<UpdateViewCommandInput, UpdateViewCommandOutput>(
  _ep0,
  _mw0,
  "UpdateView",
  UpdateView$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateViewRequest;
      output: UpdateViewResponse;
    };
    sdk: {
      input: UpdateViewCommandInput;
      output: UpdateViewCommandOutput;
    };
  };
}
