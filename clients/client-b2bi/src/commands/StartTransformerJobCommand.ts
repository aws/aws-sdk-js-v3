// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartTransformerJobRequest, StartTransformerJobResponse } from "../models/models_0";
import { StartTransformerJob } from "../schemas/schemas_0";

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
 * <p>Runs a job, using a transformer, to parse input EDI (electronic data interchange) file into the output structures used by Amazon Web Services B2B Data Interchange.</p> <p>If you only want to transform EDI (electronic data interchange) documents, you don't need to create profiles, partnerships or capabilities. Just create and configure a transformer, and then run the <code>StartTransformerJob</code> API to process your files.</p> <note> <p>The system stores transformer jobs for 30 days. During that period, you can run <a href="https://docs.aws.amazon.com/b2bi/latest/APIReference/API_GetTransformerJob.html">GetTransformerJob</a> and supply its <code>transformerId</code> and <code>transformerJobId</code> to return details of the job.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, StartTransformerJobCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, StartTransformerJobCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * // import type { B2biClientConfig } from "@aws-sdk/client-b2bi";
 * const config = {}; // type is B2biClientConfig
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
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.</p>
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
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object. This exception can be thrown during standard EDI validation or when custom validation rules fail, such as when element length constraints are violated, invalid codes are used in code list validations, or required elements are missing based on configured element requirement rules.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 *
 * @example Sample StartTransformerJob call
 * ```javascript
 * //
 * const input = {
 *   clientToken: "foo",
 *   inputFile: {
 *     bucketName: "test-bucket",
 *     key: "input/inputFile.txt"
 *   },
 *   outputLocation: {
 *     bucketName: "test-bucket",
 *     key: "output/"
 *   },
 *   transformerId: "tr-974c129999f84d8c9"
 * };
 * const command = new StartTransformerJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   transformerJobId: "tj-vpYxfV7yQOqjMSYllEslLw"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartTransformerJobCommand extends $Command
  .classBuilder<
    StartTransformerJobCommandInput,
    StartTransformerJobCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("B2BI", "StartTransformerJob", {})
  .n("B2biClient", "StartTransformerJobCommand")
  .sc(StartTransformerJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTransformerJobRequest;
      output: StartTransformerJobResponse;
    };
    sdk: {
      input: StartTransformerJobCommandInput;
      output: StartTransformerJobCommandOutput;
    };
  };
}
