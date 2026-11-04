// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTransformerJobRequest, GetTransformerJobResponse } from "../models/models_0";
import { GetTransformerJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTransformerJobCommand}.
 */
export interface GetTransformerJobCommandInput extends GetTransformerJobRequest {}
/**
 * @public
 *
 * The output of {@link GetTransformerJobCommand}.
 */
export interface GetTransformerJobCommandOutput extends GetTransformerJobResponse, __MetadataBearer {}

/**
 * Returns the details of the transformer run, based on the Transformer job ID.
 *
 * > **Note:** If 30 days have elapsed since your transformer job was started, the system deletes it. So, if you run `GetTransformerJob` and supply a `transformerId` and `transformerJobId` for a job that was started more than 30 days previously, you receive a 404 response.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, GetTransformerJobCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, GetTransformerJobCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * // import type { B2biClientConfig } from "@aws-sdk/client-b2bi";
 * const config = {}; // type is B2biClientConfig
 * const client = new B2biClient(config);
 * const input = { // GetTransformerJobRequest
 *   transformerJobId: "STRING_VALUE", // required
 *   transformerId: "STRING_VALUE", // required
 * };
 * const command = new GetTransformerJobCommand(input);
 * const response = await client.send(command);
 * // { // GetTransformerJobResponse
 * //   status: "running" || "succeeded" || "failed", // required
 * //   outputFiles: [ // S3LocationList
 * //     { // S3Location
 * //       bucketName: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //     },
 * //   ],
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransformerJobCommandInput - {@link GetTransformerJobCommandInput}
 * @returns {@link GetTransformerJobCommandOutput}
 * @see {@link GetTransformerJobCommandInput} for command's `input` shape.
 * @see {@link GetTransformerJobCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
 * @example Sample GetTransformerJob call
 * ```javascript
 * //
 * const input = {
 *   transformerId: "tr-974c129999f84d8c9",
 *   transformerJobId: "tj-vpYxfV7yQOqjMSYllEslLw"
 * };
 * const command = new GetTransformerJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   message: "Transformed, writing output",
 *   outputFiles: [
 *     {
 *       bucketName: "gt-edi-test",
 *       key: "output/sample-214.edi.2023-11-01T10:44:03.353Z.json"
 *     }
 *   ],
 *   status: "succeeded"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTransformerJobCommand extends command<GetTransformerJobCommandInput, GetTransformerJobCommandOutput>(
  _ep0,
  _mw0,
  "GetTransformerJob",
  GetTransformerJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransformerJobRequest;
      output: GetTransformerJobResponse;
    };
    sdk: {
      input: GetTransformerJobCommandInput;
      output: GetTransformerJobCommandOutput;
    };
  };
}
