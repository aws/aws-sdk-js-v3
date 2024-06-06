// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAppMonitorDataRequest, GetAppMonitorDataResponse } from "../models/models_0";
import { de_GetAppMonitorDataCommand, se_GetAppMonitorDataCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the raw performance events that RUM has collected from your web application,
 *          so that you can do your own processing or analysis of this data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, GetAppMonitorDataCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, GetAppMonitorDataCommand } = require("@aws-sdk/client-rum"); // CommonJS import
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
 * @public
 */
export class GetAppMonitorDataCommand extends $Command
  .classBuilder<
    GetAppMonitorDataCommandInput,
    GetAppMonitorDataCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RUM", "GetAppMonitorData", {})
  .n("RUMClient", "GetAppMonitorDataCommand")
  .f(void 0, void 0)
  .ser(se_GetAppMonitorDataCommand)
  .de(de_GetAppMonitorDataCommand)
  .build() {}
