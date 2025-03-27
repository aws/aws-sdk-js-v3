// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCelebrityInfoRequest, GetCelebrityInfoResponse } from "../models/models_0";
import { de_GetCelebrityInfoCommand, se_GetCelebrityInfoCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCelebrityInfoCommand}.
 */
export interface GetCelebrityInfoCommandInput extends GetCelebrityInfoRequest {}
/**
 * @public
 *
 * The output of {@link GetCelebrityInfoCommand}.
 */
export interface GetCelebrityInfoCommandOutput extends GetCelebrityInfoResponse, __MetadataBearer {}

/**
 * <p>Gets the name and additional information about a celebrity based on their Amazon Rekognition ID.
 *       The additional information is returned as an array of URLs. If there is no additional
 *       information about the celebrity, this list is empty.</p>
 *          <p>For more information, see Getting information about a celebrity in the
 *       Amazon Rekognition Developer Guide.</p>
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:GetCelebrityInfo</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetCelebrityInfoCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetCelebrityInfoCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // GetCelebrityInfoRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetCelebrityInfoCommand(input);
 * const response = await client.send(command);
 * // { // GetCelebrityInfoResponse
 * //   Urls: [ // Urls
 * //     "STRING_VALUE",
 * //   ],
 * //   Name: "STRING_VALUE",
 * //   KnownGender: { // KnownGender
 * //     Type: "Male" || "Female" || "Nonbinary" || "Unlisted",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCelebrityInfoCommandInput - {@link GetCelebrityInfoCommandInput}
 * @returns {@link GetCelebrityInfoCommandOutput}
 * @see {@link GetCelebrityInfoCommandInput} for command's `input` shape.
 * @see {@link GetCelebrityInfoCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
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
export class GetCelebrityInfoCommand extends $Command
  .classBuilder<
    GetCelebrityInfoCommandInput,
    GetCelebrityInfoCommandOutput,
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
  .s("RekognitionService", "GetCelebrityInfo", {})
  .n("RekognitionClient", "GetCelebrityInfoCommand")
  .f(void 0, void 0)
  .ser(se_GetCelebrityInfoCommand)
  .de(de_GetCelebrityInfoCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCelebrityInfoRequest;
      output: GetCelebrityInfoResponse;
    };
    sdk: {
      input: GetCelebrityInfoCommandInput;
      output: GetCelebrityInfoCommandOutput;
    };
  };
}
