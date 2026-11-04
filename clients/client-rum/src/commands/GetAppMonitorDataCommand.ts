// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAppMonitorDataRequest, GetAppMonitorDataResponse } from "../models/models_0";
import { GetAppMonitorData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAppMonitorDataCommand}.
 */
export interface GetAppMonitorDataCommandInput extends GetAppMonitorDataRequest {}
/**
 * @public
 *
 * The output of {@link GetAppMonitorDataCommand}.
 */
export interface GetAppMonitorDataCommandOutput extends GetAppMonitorDataResponse, __MetadataBearer {}

/**
 * Retrieves the raw performance events that RUM has collected from your web application, so that you can do your own processing or analysis of this data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, GetAppMonitorDataCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, GetAppMonitorDataCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // GetAppMonitorDataRequest
 *   Name: "STRING_VALUE", // required
 *   TimeRange: { // TimeRange
 *     After: Number("long"), // required
 *     Before: Number("long"),
 *   },
 *   Filters: [ // QueryFilters
 *     { // QueryFilter
 *       Name: "STRING_VALUE",
 *       Values: [ // QueryFilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetAppMonitorDataCommand(input);
 * const response = await client.send(command);
 * // { // GetAppMonitorDataResponse
 * //   Events: [ // EventDataList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAppMonitorDataCommandInput - {@link GetAppMonitorDataCommandInput}
 * @returns {@link GetAppMonitorDataCommandOutput}
 * @see {@link GetAppMonitorDataCommandInput} for command's `input` shape.
 * @see {@link GetAppMonitorDataCommandOutput} for command's `response` shape.
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
export class GetAppMonitorDataCommand extends command<GetAppMonitorDataCommandInput, GetAppMonitorDataCommandOutput>(
  _ep0,
  _mw0,
  "GetAppMonitorData",
  GetAppMonitorData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppMonitorDataRequest;
      output: GetAppMonitorDataResponse;
    };
    sdk: {
      input: GetAppMonitorDataCommandInput;
      output: GetAppMonitorDataCommandOutput;
    };
  };
}
