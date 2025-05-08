// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRealtimeLogConfigsRequest, ListRealtimeLogConfigsResult } from "../models/models_1";
import { de_ListRealtimeLogConfigsCommand, se_ListRealtimeLogConfigsCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class ListRealtimeLogConfigsCommand extends $Command
  .classBuilder<
    ListRealtimeLogConfigsCommandInput,
    ListRealtimeLogConfigsCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "ListRealtimeLogConfigs", {})
  .n("CloudFrontClient", "ListRealtimeLogConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListRealtimeLogConfigsCommand)
  .de(de_ListRealtimeLogConfigsCommand)
  .build() {
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
