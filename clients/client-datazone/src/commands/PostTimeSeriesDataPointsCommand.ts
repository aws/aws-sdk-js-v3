// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PostTimeSeriesDataPointsInput, PostTimeSeriesDataPointsOutput } from "../models/models_2";
import { PostTimeSeriesDataPoints } from "../schemas/schemas_3_Data";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PostTimeSeriesDataPointsCommand}.
 */
export interface PostTimeSeriesDataPointsCommandInput extends PostTimeSeriesDataPointsInput {}
/**
 * @public
 *
 * The output of {@link PostTimeSeriesDataPointsCommand}.
 */
export interface PostTimeSeriesDataPointsCommandOutput extends PostTimeSeriesDataPointsOutput, __MetadataBearer {}

/**
 * <p>Posts time series data points to Amazon DataZone for the specified asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, PostTimeSeriesDataPointsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, PostTimeSeriesDataPointsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // PostTimeSeriesDataPointsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   entityType: "ASSET" || "LISTING", // required
 *   forms: [ // TimeSeriesDataPointFormInputList // required
 *     { // TimeSeriesDataPointFormInput
 *       formName: "STRING_VALUE", // required
 *       typeIdentifier: "STRING_VALUE", // required
 *       typeRevision: "STRING_VALUE",
 *       timestamp: new Date("TIMESTAMP"), // required
 *       content: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PostTimeSeriesDataPointsCommand(input);
 * const response = await client.send(command);
 * // { // PostTimeSeriesDataPointsOutput
 * //   domainId: "STRING_VALUE",
 * //   entityId: "STRING_VALUE",
 * //   entityType: "ASSET" || "LISTING",
 * //   forms: [ // TimeSeriesDataPointFormOutputList
 * //     { // TimeSeriesDataPointFormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeIdentifier: "STRING_VALUE", // required
 * //       typeRevision: "STRING_VALUE",
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       content: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PostTimeSeriesDataPointsCommandInput - {@link PostTimeSeriesDataPointsCommandInput}
 * @returns {@link PostTimeSeriesDataPointsCommandOutput}
 * @see {@link PostTimeSeriesDataPointsCommandInput} for command's `input` shape.
 * @see {@link PostTimeSeriesDataPointsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class PostTimeSeriesDataPointsCommand extends $Command
  .classBuilder<
    PostTimeSeriesDataPointsCommandInput,
    PostTimeSeriesDataPointsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "PostTimeSeriesDataPoints", {})
  .n("DataZoneClient", "PostTimeSeriesDataPointsCommand")
  .sc(PostTimeSeriesDataPoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PostTimeSeriesDataPointsInput;
      output: PostTimeSeriesDataPointsOutput;
    };
    sdk: {
      input: PostTimeSeriesDataPointsCommandInput;
      output: PostTimeSeriesDataPointsCommandOutput;
    };
  };
}
