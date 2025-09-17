// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetApplicationDateRangeKpiRequest, GetApplicationDateRangeKpiResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetApplicationDateRangeKpiCommand, se_GetApplicationDateRangeKpiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationDateRangeKpiCommand}.
 */
export interface GetApplicationDateRangeKpiCommandInput extends GetApplicationDateRangeKpiRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationDateRangeKpiCommand}.
 */
export interface GetApplicationDateRangeKpiCommandOutput extends GetApplicationDateRangeKpiResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApplicationDateRangeKpiCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApplicationDateRangeKpiCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetApplicationDateRangeKpiRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EndTime: new Date("TIMESTAMP"),
 *   KpiName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 * };
 * const command = new GetApplicationDateRangeKpiCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationDateRangeKpiResponse
 * //   ApplicationDateRangeKpiResponse: { // ApplicationDateRangeKpiResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //     KpiName: "STRING_VALUE", // required
 * //     KpiResult: { // BaseKpiResult
 * //       Rows: [ // ListOfResultRow // required
 * //         { // ResultRow
 * //           GroupedBys: [ // ListOfResultRowValue // required
 * //             { // ResultRowValue
 * //               Key: "STRING_VALUE", // required
 * //               Type: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           Values: [ // required
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Type: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     NextToken: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationDateRangeKpiCommandInput - {@link GetApplicationDateRangeKpiCommandInput}
 * @returns {@link GetApplicationDateRangeKpiCommandOutput}
 * @see {@link GetApplicationDateRangeKpiCommandInput} for command's `input` shape.
 * @see {@link GetApplicationDateRangeKpiCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class GetApplicationDateRangeKpiCommand extends $Command
  .classBuilder<
    GetApplicationDateRangeKpiCommandInput,
    GetApplicationDateRangeKpiCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "GetApplicationDateRangeKpi", {})
  .n("PinpointClient", "GetApplicationDateRangeKpiCommand")
  .f(void 0, void 0)
  .ser(se_GetApplicationDateRangeKpiCommand)
  .de(de_GetApplicationDateRangeKpiCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationDateRangeKpiRequest;
      output: GetApplicationDateRangeKpiResponse;
    };
    sdk: {
      input: GetApplicationDateRangeKpiCommandInput;
      output: GetApplicationDateRangeKpiCommandOutput;
    };
  };
}
