// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartTransformerJobRequest, StartTransformerJobResponse } from "../models/models_0";
import { de_StartTransformerJobCommand, se_StartTransformerJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTransformerJobCommand}.
 */
export interface StartTransformerJobCommandInput extends StartTransformerJobRequest {}
/**
 * @public
 *
 * The output of {@link StartTransformerJobCommand}.
 */
export interface StartTransformerJobCommandOutput extends StartTransformerJobResponse, __MetadataBearer {}

/**
 * <p>Runs a job, using a transformer, to parse input EDI (electronic data interchange) file into the output structures used by Amazon Web Services B2BI Data Interchange.</p>
 *          <p>If you only want to transform EDI (electronic data interchange) documents, you don't need to create profiles, partnerships or capabilities. Just
 *       create and configure a transformer, and then run the <code>StartTransformerJob</code> API to process your files.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, StartTransformerJobCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, StartTransformerJobCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // StartTransformerJobRequest
 *   inputFile: { // S3Location
 *     bucketName: "STRING_VALUE",
 *     key: "STRING_VALUE",
 *   },
 *   outputLocation: {
 *     bucketName: "STRING_VALUE",
 *     key: "STRING_VALUE",
 *   },
 *   transformerId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartTransformerJobCommand(input);
 * const response = await client.send(command);
 * // { // StartTransformerJobResponse
 * //   transformerJobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartTransformerJobCommandInput - {@link StartTransformerJobCommandInput}
 * @returns {@link StartTransformerJobCommandOutput}
 * @see {@link StartTransformerJobCommandInput} for command's `input` shape.
 * @see {@link StartTransformerJobCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @public
 * @example Sample StartTransformerJob call
 * ```javascript
 * //
 * const input = {
 *   "clientToken": "foo",
 *   "inputFile": {
 *     "key": "input/inputFile.txt",
 *     "bucketName": "test-bucket"
 *   },
 *   "outputLocation": {
 *     "key": "output/",
 *     "bucketName": "test-bucket"
 *   },
 *   "transformerId": "tr-974c129999f84d8c9"
 * };
 * const command = new StartTransformerJobCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "transformerJobId": "tj-vpYxfV7yQOqjMSYllEslLw"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class StartTransformerJobCommand extends $Command
  .classBuilder<
    StartTransformerJobCommandInput,
    StartTransformerJobCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("B2BI", "StartTransformerJob", {})
  .n("B2biClient", "StartTransformerJobCommand")
  .f(void 0, void 0)
  .ser(se_StartTransformerJobCommand)
  .de(de_StartTransformerJobCommand)
  .build() {}
