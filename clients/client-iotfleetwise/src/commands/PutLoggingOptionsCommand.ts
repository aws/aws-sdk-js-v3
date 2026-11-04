// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutLoggingOptionsRequest, PutLoggingOptionsResponse } from "../models/models_0";
import { PutLoggingOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutLoggingOptionsCommand}.
 */
export interface PutLoggingOptionsCommandInput extends PutLoggingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutLoggingOptionsCommand}.
 */
export interface PutLoggingOptionsCommandOutput extends PutLoggingOptionsResponse, __MetadataBearer {}

/**
 * Creates or updates the logging option.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, PutLoggingOptionsCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, PutLoggingOptionsCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // PutLoggingOptionsRequest
 *   cloudWatchLogDelivery: { // CloudWatchLogDeliveryOptions
 *     logType: "OFF" || "ERROR", // required
 *     logGroupName: "STRING_VALUE",
 *   },
 * };
 * const command = new PutLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutLoggingOptionsCommandInput - {@link PutLoggingOptionsCommandInput}
 * @returns {@link PutLoggingOptionsCommandOutput}
 * @see {@link PutLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class PutLoggingOptionsCommand extends command<PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput>(
  _ep0,
  _mw0,
  "PutLoggingOptions",
  PutLoggingOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLoggingOptionsRequest;
      output: {};
    };
    sdk: {
      input: PutLoggingOptionsCommandInput;
      output: PutLoggingOptionsCommandOutput;
    };
  };
}
