// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateScheduledQueryRequest } from "../models/models_0";
import { de_UpdateScheduledQueryCommand, se_UpdateScheduledQueryCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScheduledQueryCommand}.
 */
export interface UpdateScheduledQueryCommandInput extends UpdateScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScheduledQueryCommand}.
 */
export interface UpdateScheduledQueryCommandOutput extends __MetadataBearer {}

/**
 * <p>Update a scheduled query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, UpdateScheduledQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, UpdateScheduledQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const input = { // UpdateScheduledQueryRequest
 *   ScheduledQueryArn: "STRING_VALUE", // required
 *   State: "ENABLED" || "DISABLED", // required
 * };
 * const command = new UpdateScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateScheduledQueryCommandInput - {@link UpdateScheduledQueryCommandInput}
 * @returns {@link UpdateScheduledQueryCommandOutput}
 * @see {@link UpdateScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             The service was unable to fully process this request because of an internal
 *             server error. </p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 * @public
 */
export class UpdateScheduledQueryCommand extends $Command
  .classBuilder<
    UpdateScheduledQueryCommandInput,
    UpdateScheduledQueryCommandOutput,
    TimestreamQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TimestreamQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, { clientStack: cs, isDiscoveredEndpointRequired: true, options: o }),
    ];
  })
  .s("Timestream_20181101", "UpdateScheduledQuery", {})
  .n("TimestreamQueryClient", "UpdateScheduledQueryCommand")
  .f(void 0, void 0)
  .ser(se_UpdateScheduledQueryCommand)
  .de(de_UpdateScheduledQueryCommand)
  .build() {}
