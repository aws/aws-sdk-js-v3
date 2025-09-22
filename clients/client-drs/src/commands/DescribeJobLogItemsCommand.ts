// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeJobLogItemsRequest, DescribeJobLogItemsResponse } from "../models/models_0";
import { DescribeJobLogItems } from "../schemas/schemas_1_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobLogItemsCommand}.
 */
export interface DescribeJobLogItemsCommandInput extends DescribeJobLogItemsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobLogItemsCommand}.
 */
export interface DescribeJobLogItemsCommandOutput extends DescribeJobLogItemsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a detailed Job log with pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeJobLogItemsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeJobLogItemsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DescribeJobLogItemsRequest
 *   jobID: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeJobLogItemsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobLogItemsResponse
 * //   items: [ // JobLogs
 * //     { // JobLog
 * //       logDateTime: "STRING_VALUE",
 * //       event: "STRING_VALUE",
 * //       eventData: { // JobLogEventData
 * //         sourceServerID: "STRING_VALUE",
 * //         conversionServerID: "STRING_VALUE",
 * //         targetInstanceID: "STRING_VALUE",
 * //         rawError: "STRING_VALUE",
 * //         conversionProperties: { // ConversionProperties
 * //           volumeToConversionMap: { // VolumeToConversionMap
 * //             "<keys>": { // ConversionMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           rootVolumeName: "STRING_VALUE",
 * //           forceUefi: true || false,
 * //           dataTimestamp: "STRING_VALUE",
 * //           volumeToVolumeSize: { // VolumeToSizeMap
 * //             "<keys>": Number("long"),
 * //           },
 * //           volumeToProductCodes: { // VolumeToProductCodes
 * //             "<keys>": [ // ProductCodes
 * //               { // ProductCode
 * //                 productCodeId: "STRING_VALUE",
 * //                 productCodeMode: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         eventResourceData: { // EventResourceData Union: only one key present
 * //           sourceNetworkData: { // SourceNetworkData
 * //             sourceNetworkID: "STRING_VALUE",
 * //             sourceVpc: "STRING_VALUE",
 * //             targetVpc: "STRING_VALUE",
 * //             stackName: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeJobLogItemsCommandInput - {@link DescribeJobLogItemsCommandInput}
 * @returns {@link DescribeJobLogItemsCommandOutput}
 * @see {@link DescribeJobLogItemsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobLogItemsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class DescribeJobLogItemsCommand extends $Command
  .classBuilder<
    DescribeJobLogItemsCommandInput,
    DescribeJobLogItemsCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "DescribeJobLogItems", {})
  .n("DrsClient", "DescribeJobLogItemsCommand")
  .sc(DescribeJobLogItems)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobLogItemsRequest;
      output: DescribeJobLogItemsResponse;
    };
    sdk: {
      input: DescribeJobLogItemsCommandInput;
      output: DescribeJobLogItemsCommandOutput;
    };
  };
}
