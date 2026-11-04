// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRumEventsRequest, PutRumEventsResponse } from "../models/models_0";
import { PutRumEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code snippet that RUM generates for you to add to your application includes `PutRumEvents` operations to send this data to RUM.
 *
 * Each `PutRumEvents` operation can send a batch of events from one user session.
 *
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service exception.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the arguments for the request is not valid.
 *
 * @throws {@link RUMServiceException}
 *
 * Base exception class for all service exceptions from RUM service.
 *
 * @public
 */
export class PutRumEventsCommand extends command<PutRumEventsCommandInput, PutRumEventsCommandOutput>(
  _ep0,
  _mw0,
  "PutRumEvents",
  PutRumEvents$
) {
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
