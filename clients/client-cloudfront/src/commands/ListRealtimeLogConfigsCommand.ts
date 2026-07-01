// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRealtimeLogConfigsRequest, ListRealtimeLogConfigsResult } from "../models/models_1";
import { ListRealtimeLogConfigs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRealtimeLogConfigsCommand}.
 */
export interface ListRealtimeLogConfigsCommandInput extends ListRealtimeLogConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListRealtimeLogConfigsCommand}.
 */
export interface ListRealtimeLogConfigsCommandOutput extends ListRealtimeLogConfigsResult, __MetadataBearer {}

/**
 * <p>Gets a list of real-time log configurations.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListRealtimeLogConfigsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListRealtimeLogConfigsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListRealtimeLogConfigsRequest
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListRealtimeLogConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListRealtimeLogConfigsResult
 * //   RealtimeLogConfigs: { // RealtimeLogConfigs
 * //     MaxItems: Number("int"), // required
 * //     Items: [ // RealtimeLogConfigList
 * //       { // RealtimeLogConfig
 * //         ARN: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         SamplingRate: Number("long"), // required
 * //         EndPoints: [ // EndPointList // required
 * //           { // EndPoint
 * //             StreamType: "STRING_VALUE", // required
 * //             KinesisStreamConfig: { // KinesisStreamConfig
 * //               RoleARN: "STRING_VALUE", // required
 * //               StreamARN: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         ],
 * //         Fields: [ // FieldList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     IsTruncated: true || false, // required
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListRealtimeLogConfigsCommandInput - {@link ListRealtimeLogConfigsCommandInput}
 * @returns {@link ListRealtimeLogConfigsCommandOutput}
 * @see {@link ListRealtimeLogConfigsCommandInput} for command's `input` shape.
 * @see {@link ListRealtimeLogConfigsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchRealtimeLogConfig} (client fault)
 *  <p>The real-time log configuration does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListRealtimeLogConfigsCommand extends command<ListRealtimeLogConfigsCommandInput, ListRealtimeLogConfigsCommandOutput>(
  _ep0,
  _mw0,
  "ListRealtimeLogConfigs",
  ListRealtimeLogConfigs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRealtimeLogConfigsRequest;
      output: ListRealtimeLogConfigsResult;
    };
    sdk: {
      input: ListRealtimeLogConfigsCommandInput;
      output: ListRealtimeLogConfigsCommandOutput;
    };
  };
}
