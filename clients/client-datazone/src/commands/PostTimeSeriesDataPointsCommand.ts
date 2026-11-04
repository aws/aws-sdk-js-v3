// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PostTimeSeriesDataPointsInput, PostTimeSeriesDataPointsOutput } from "../models/models_2";
import { PostTimeSeriesDataPoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Posts time series data points to Amazon DataZone for the specified asset.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class PostTimeSeriesDataPointsCommand extends command<PostTimeSeriesDataPointsCommandInput, PostTimeSeriesDataPointsCommandOutput>(
  _ep0,
  _mw0,
  "PostTimeSeriesDataPoints",
  PostTimeSeriesDataPoints$
) {
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
