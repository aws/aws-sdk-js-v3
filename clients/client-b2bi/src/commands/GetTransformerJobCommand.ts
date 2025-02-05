// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTransformerJobRequest, GetTransformerJobResponse } from "../models/models_0";
import { de_GetTransformerJobCommand, se_GetTransformerJobCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the details of the transformer run, based on the Transformer job ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, GetTransformerJobCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, GetTransformerJobCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @example Sample GetTransformerJob call
 * ```javascript
 * //
 * const input = {
 *   "transformerId": "tr-974c129999f84d8c9",
 *   "transformerJobId": "tj-vpYxfV7yQOqjMSYllEslLw"
 * };
 * const command = new GetTransformerJobCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "message": "Transformed, writing output",
 *   "outputFiles": [
 *     {
 *       "key": "output/sample-214.edi.2023-11-01T10:44:03.353Z.json",
 *       "bucketName": "gt-edi-test"
 *     }
 *   ],
 *   "status": "succeeded"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class GetTransformerJobCommand extends $Command
  .classBuilder<
    GetTransformerJobCommandInput,
    GetTransformerJobCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("B2BI", "GetTransformerJob", {})
  .n("B2biClient", "GetTransformerJobCommand")
  .f(void 0, void 0)
  .ser(se_GetTransformerJobCommand)
  .de(de_GetTransformerJobCommand)
  .build() {
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
