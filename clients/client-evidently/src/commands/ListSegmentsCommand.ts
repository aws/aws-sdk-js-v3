// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { ListSegmentsRequest, ListSegmentsResponse } from "../models/models_0";
import { ListSegments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSegmentsCommand}.
 */
export interface ListSegmentsCommandInput extends ListSegmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListSegmentsCommand}.
 */
export interface ListSegmentsCommandOutput extends ListSegmentsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of audience segments that you have created in your account in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, ListSegmentsCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, ListSegmentsCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // ListSegmentsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSegmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListSegmentsResponse
 * //   segments: [ // SegmentList
 * //     { // Segment
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       pattern: "STRING_VALUE", // required
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //       experimentCount: Number("long"),
 * //       launchCount: Number("long"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSegmentsCommandInput - {@link ListSegmentsCommandInput}
 * @returns {@link ListSegmentsCommandOutput}
 * @see {@link ListSegmentsCommandInput} for command's `input` shape.
 * @see {@link ListSegmentsCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 *
 * @public
 */
export class ListSegmentsCommand extends $Command
  .classBuilder<
    ListSegmentsCommandInput,
    ListSegmentsCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "ListSegments", {})
  .n("EvidentlyClient", "ListSegmentsCommand")
  .sc(ListSegments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSegmentsRequest;
      output: ListSegmentsResponse;
    };
    sdk: {
      input: ListSegmentsCommandInput;
      output: ListSegmentsCommandOutput;
    };
  };
}
