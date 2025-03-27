// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListStreamProcessorsRequest, ListStreamProcessorsResponse } from "../models/models_0";
import { de_ListStreamProcessorsCommand, se_ListStreamProcessorsCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStreamProcessorsCommand}.
 */
export interface ListStreamProcessorsCommandInput extends ListStreamProcessorsRequest {}
/**
 * @public
 *
 * The output of {@link ListStreamProcessorsCommand}.
 */
export interface ListStreamProcessorsCommandOutput extends ListStreamProcessorsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of stream processors that you have created with <a>CreateStreamProcessor</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListStreamProcessorsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListStreamProcessorsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // ListStreamProcessorsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListStreamProcessorsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamProcessorsResponse
 * //   NextToken: "STRING_VALUE",
 * //   StreamProcessors: [ // StreamProcessorList
 * //     { // StreamProcessor
 * //       Name: "STRING_VALUE",
 * //       Status: "STOPPED" || "STARTING" || "RUNNING" || "FAILED" || "STOPPING" || "UPDATING",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListStreamProcessorsCommandInput - {@link ListStreamProcessorsCommandInput}
 * @returns {@link ListStreamProcessorsCommandOutput}
 * @see {@link ListStreamProcessorsCommandInput} for command's `input` shape.
 * @see {@link ListStreamProcessorsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 *
 * @public
 */
export class ListStreamProcessorsCommand extends $Command
  .classBuilder<
    ListStreamProcessorsCommandInput,
    ListStreamProcessorsCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "ListStreamProcessors", {})
  .n("RekognitionClient", "ListStreamProcessorsCommand")
  .f(void 0, void 0)
  .ser(se_ListStreamProcessorsCommand)
  .de(de_ListStreamProcessorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamProcessorsRequest;
      output: ListStreamProcessorsResponse;
    };
    sdk: {
      input: ListStreamProcessorsCommandInput;
      output: ListStreamProcessorsCommandOutput;
    };
  };
}
