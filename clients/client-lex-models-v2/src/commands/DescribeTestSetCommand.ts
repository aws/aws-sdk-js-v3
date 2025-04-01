// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeTestSetRequest, DescribeTestSetResponse } from "../models/models_1";
import { de_DescribeTestSetCommand, se_DescribeTestSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTestSetCommand}.
 */
export interface DescribeTestSetCommandInput extends DescribeTestSetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTestSetCommand}.
 */
export interface DescribeTestSetCommandOutput extends DescribeTestSetResponse, __MetadataBearer {}

/**
 * <p>Gets metadata information about the test set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeTestSetCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeTestSetCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeTestSetRequest
 *   testSetId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTestSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTestSetResponse
 * //   testSetId: "STRING_VALUE",
 * //   testSetName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   modality: "Text" || "Audio",
 * //   status: "Importing" || "PendingAnnotation" || "Deleting" || "ValidationError" || "Ready",
 * //   roleArn: "STRING_VALUE",
 * //   numTurns: Number("int"),
 * //   storageLocation: { // TestSetStorageLocation
 * //     s3BucketName: "STRING_VALUE", // required
 * //     s3Path: "STRING_VALUE", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeTestSetCommandInput - {@link DescribeTestSetCommandInput}
 * @returns {@link DescribeTestSetCommandOutput}
 * @see {@link DescribeTestSetCommandInput} for command's `input` shape.
 * @see {@link DescribeTestSetCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class DescribeTestSetCommand extends $Command
  .classBuilder<
    DescribeTestSetCommandInput,
    DescribeTestSetCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "DescribeTestSet", {})
  .n("LexModelsV2Client", "DescribeTestSetCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTestSetCommand)
  .de(de_DescribeTestSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTestSetRequest;
      output: DescribeTestSetResponse;
    };
    sdk: {
      input: DescribeTestSetCommandInput;
      output: DescribeTestSetCommandOutput;
    };
  };
}
