// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutRumEventsRequest, PutRumEventsResponse } from "../models/models_0";
import { de_PutRumEventsCommand, se_PutRumEventsCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRumEventsCommand}.
 */
export interface PutRumEventsCommandInput extends PutRumEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutRumEventsCommand}.
 */
export interface PutRumEventsCommandOutput extends PutRumEventsResponse, __MetadataBearer {}

/**
 * <p>Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code
 *       snippet that RUM generates for you to add to your application includes <code>PutRumEvents</code> operations to
 *       send this data to RUM.</p>
 *          <p>Each <code>PutRumEvents</code> operation can send a batch of events from one user session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, PutRumEventsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, PutRumEventsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // PutRumEventsRequest
 *   Id: "STRING_VALUE", // required
 *   BatchId: "STRING_VALUE", // required
 *   AppMonitorDetails: { // AppMonitorDetails
 *     name: "STRING_VALUE",
 *     id: "STRING_VALUE",
 *     version: "STRING_VALUE",
 *   },
 *   UserDetails: { // UserDetails
 *     userId: "STRING_VALUE",
 *     sessionId: "STRING_VALUE",
 *   },
 *   RumEvents: [ // RumEventList // required
 *     { // RumEvent
 *       id: "STRING_VALUE", // required
 *       timestamp: new Date("TIMESTAMP"), // required
 *       type: "STRING_VALUE", // required
 *       metadata: "STRING_VALUE",
 *       details: "STRING_VALUE", // required
 *     },
 *   ],
 *   Alias: "STRING_VALUE",
 * };
 * const command = new PutRumEventsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRumEventsCommandInput - {@link PutRumEventsCommandInput}
 * @returns {@link PutRumEventsCommandOutput}
 * @see {@link PutRumEventsCommandInput} for command's `input` shape.
 * @see {@link PutRumEventsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 *
 * @public
 */
export class PutRumEventsCommand extends $Command
  .classBuilder<
    PutRumEventsCommandInput,
    PutRumEventsCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RUM", "PutRumEvents", {})
  .n("RUMClient", "PutRumEventsCommand")
  .f(void 0, void 0)
  .ser(se_PutRumEventsCommand)
  .de(de_PutRumEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRumEventsRequest;
      output: {};
    };
    sdk: {
      input: PutRumEventsCommandInput;
      output: PutRumEventsCommandOutput;
    };
  };
}
