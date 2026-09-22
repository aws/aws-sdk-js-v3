// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetViewRequest, GetViewResponse } from "../models/models_0";
import { GetView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetViewCommand}.
 */
export interface GetViewCommandInput extends GetViewRequest {}
/**
 * @public
 *
 * The output of {@link GetViewCommand}.
 */
export interface GetViewCommandOutput extends GetViewResponse, __MetadataBearer {}

/**
 * Returns the definition and metadata of the specified view.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, GetViewCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, GetViewCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // GetViewRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetViewCommand(input);
 * const response = await client.send(command);
 * // { // GetViewResponse
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
 * @param GetViewCommandInput - {@link GetViewCommandInput}
 * @returns {@link GetViewCommandOutput}
 * @see {@link GetViewCommandInput} for command's `input` shape.
 * @see {@link GetViewCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
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
 * @example Get a view
 * ```javascript
 * // The following example returns the definition and metadata of a view. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   name: "view.service_errors"
 * };
 * const command = new GetViewCommand(input);
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
export class GetViewCommand extends command<GetViewCommandInput, GetViewCommandOutput>(
  _ep0,
  _mw0,
  "GetView",
  GetView$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetViewRequest;
      output: GetViewResponse;
    };
    sdk: {
      input: GetViewCommandInput;
      output: GetViewCommandOutput;
    };
  };
}
