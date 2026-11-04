// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRealtimeLogConfigRequest, UpdateRealtimeLogConfigResult } from "../models/models_1";
import { UpdateRealtimeLogConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRealtimeLogConfigCommand}.
 */
export interface UpdateRealtimeLogConfigCommandInput extends UpdateRealtimeLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRealtimeLogConfigCommand}.
 */
export interface UpdateRealtimeLogConfigCommandOutput extends UpdateRealtimeLogConfigResult, __MetadataBearer {}

/**
 * Updates a real-time log configuration.
 *
 * When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration:
 *
 * 1. Call `GetRealtimeLogConfig` to get the current real-time log configuration.
 * 2. Locally modify the parameters in the real-time log configuration that you want to update.
 * 3. Call this API (`UpdateRealtimeLogConfig`) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't.
 *
 * You cannot update a real-time log configuration's `Name` or `ARN`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateRealtimeLogConfigRequest
 *   EndPoints: [ // EndPointList
 *     { // EndPoint
 *       StreamType: "STRING_VALUE", // required
 *       KinesisStreamConfig: { // KinesisStreamConfig
 *         RoleARN: "STRING_VALUE", // required
 *         StreamARN: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   Fields: [ // FieldList
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE",
 *   ARN: "STRING_VALUE",
 *   SamplingRate: Number("long"),
 * };
 * const command = new UpdateRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRealtimeLogConfigResult
 * //   RealtimeLogConfig: { // RealtimeLogConfig
 * //     ARN: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     SamplingRate: Number("long"), // required
 * //     EndPoints: [ // EndPointList // required
 * //       { // EndPoint
 * //         StreamType: "STRING_VALUE", // required
 * //         KinesisStreamConfig: { // KinesisStreamConfig
 * //           RoleARN: "STRING_VALUE", // required
 * //           StreamARN: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     ],
 * //     Fields: [ // FieldList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRealtimeLogConfigCommandInput - {@link UpdateRealtimeLogConfigCommandInput}
 * @returns {@link UpdateRealtimeLogConfigCommandOutput}
 * @see {@link UpdateRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link NoSuchRealtimeLogConfig} (client fault)
 *
 * The real-time log configuration does not exist.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class UpdateRealtimeLogConfigCommand extends command<UpdateRealtimeLogConfigCommandInput, UpdateRealtimeLogConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRealtimeLogConfig",
  UpdateRealtimeLogConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRealtimeLogConfigRequest;
      output: UpdateRealtimeLogConfigResult;
    };
    sdk: {
      input: UpdateRealtimeLogConfigCommandInput;
      output: UpdateRealtimeLogConfigCommandOutput;
    };
  };
}
