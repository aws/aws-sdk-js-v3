// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTransformerJobRequest, StartTransformerJobResponse } from "../models/models_0";
import { StartTransformerJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Runs a job, using a transformer, to parse input EDI (electronic data interchange) file into the output structures used by Amazon Web Services B2B Data Interchange.
 *
 * If you only want to transform EDI (electronic data interchange) documents, you don't need to create profiles, partnerships or capabilities. Just create and configure a transformer, and then run the `StartTransformerJob` API to process your files.
 *
 * > **Note:** The system stores transformer jobs for 30 days. During that period, you can run [GetTransformerJob](https://docs.aws.amazon.com/b2bi/latest/APIReference/API_GetTransformerJob.html) and supply its `transformerId` and `transformerJobId` to return details of the job.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Occurs when a B2BI object cannot be validated against a request from another object. This exception can be thrown during standard EDI validation or when custom validation rules fail, such as when element length constraints are violated, invalid codes are used in code list validations, or required elements are missing based on configured element requirement rules.
 *
 * @throws {@link B2biServiceException}
 *
 * Base exception class for all service exceptions from B2bi service.
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
export class StartTransformerJobCommand extends command<StartTransformerJobCommandInput, StartTransformerJobCommandOutput>(
  _ep0,
  _mw0,
  "StartTransformerJob",
  StartTransformerJob$
) {
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
