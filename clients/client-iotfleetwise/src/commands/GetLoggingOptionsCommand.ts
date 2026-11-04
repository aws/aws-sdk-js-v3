// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLoggingOptionsRequest, GetLoggingOptionsResponse } from "../models/models_0";
import { GetLoggingOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLoggingOptionsCommand}.
 */
export interface GetLoggingOptionsCommandInput extends GetLoggingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link GetLoggingOptionsCommand}.
 */
export interface GetLoggingOptionsCommandOutput extends GetLoggingOptionsResponse, __MetadataBearer {}

/**
 * Retrieves the logging options.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetLoggingOptionsCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetLoggingOptionsCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = {};
 * const command = new GetLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * // { // GetLoggingOptionsResponse
 * //   cloudWatchLogDelivery: { // CloudWatchLogDeliveryOptions
 * //     logType: "OFF" || "ERROR", // required
 * //     logGroupName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLoggingOptionsCommandInput - {@link GetLoggingOptionsCommandInput}
 * @returns {@link GetLoggingOptionsCommandOutput}
 * @see {@link GetLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link GetLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
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
export class GetLoggingOptionsCommand extends command<GetLoggingOptionsCommandInput, GetLoggingOptionsCommandOutput>(
  _ep0,
  _mw0,
  "GetLoggingOptions",
  GetLoggingOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetLoggingOptionsResponse;
    };
    sdk: {
      input: GetLoggingOptionsCommandInput;
      output: GetLoggingOptionsCommandOutput;
    };
  };
}
