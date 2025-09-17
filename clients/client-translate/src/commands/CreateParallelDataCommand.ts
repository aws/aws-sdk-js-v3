// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateParallelDataRequest, CreateParallelDataResponse } from "../models/models_0";
import { de_CreateParallelDataCommand, se_CreateParallelDataCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateParallelDataCommand}.
 */
export interface CreateParallelDataCommandInput extends CreateParallelDataRequest {}
/**
 * @public
 *
 * The output of {@link CreateParallelDataCommand}.
 */
export interface CreateParallelDataCommandOutput extends CreateParallelDataResponse, __MetadataBearer {}

/**
 * <p>Creates a parallel data resource in Amazon Translate by importing an input file from
 *       Amazon S3. Parallel data files contain examples that show how you want segments of text to be
 *       translated. By adding parallel data, you can influence the style, tone, and word choice in
 *       your translation output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, CreateParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, CreateParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // import type { TranslateClientConfig } from "@aws-sdk/client-translate";
 * const config = {}; // type is TranslateClientConfig
 * const client = new TranslateClient(config);
 * const input = { // CreateParallelDataRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ParallelDataConfig: { // ParallelDataConfig
 *     S3Uri: "STRING_VALUE",
 *     Format: "TSV" || "CSV" || "TMX",
 *   },
 *   EncryptionKey: { // EncryptionKey
 *     Type: "KMS", // required
 *     Id: "STRING_VALUE", // required
 *   },
 *   ClientToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateParallelDataCommand(input);
 * const response = await client.send(command);
 * // { // CreateParallelDataResponse
 * //   Name: "STRING_VALUE",
 * //   Status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateParallelDataCommandInput - {@link CreateParallelDataCommandInput}
 * @returns {@link CreateParallelDataCommandOutput}
 * @see {@link CreateParallelDataCommandInput} for command's `input` shape.
 * @see {@link CreateParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is not valid. Check your request to determine why it's not
 *       valid and then retry the request. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The specified limit has been exceeded. Review your request and retry it with a quantity
 *       below the stated limit.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have added too many tags to this resource. The maximum is 50 tags.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 *
 * @public
 */
export class CreateParallelDataCommand extends $Command
  .classBuilder<
    CreateParallelDataCommandInput,
    CreateParallelDataCommandOutput,
    TranslateClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranslateClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShineFrontendService_20170701", "CreateParallelData", {})
  .n("TranslateClient", "CreateParallelDataCommand")
  .f(void 0, void 0)
  .ser(se_CreateParallelDataCommand)
  .de(de_CreateParallelDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateParallelDataRequest;
      output: CreateParallelDataResponse;
    };
    sdk: {
      input: CreateParallelDataCommandInput;
      output: CreateParallelDataCommandOutput;
    };
  };
}
