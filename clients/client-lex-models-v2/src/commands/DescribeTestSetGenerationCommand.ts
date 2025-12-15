// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { DescribeTestSetGenerationRequest, DescribeTestSetGenerationResponse } from "../models/models_0";
import { DescribeTestSetGeneration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTestSetGenerationCommand}.
 */
export interface DescribeTestSetGenerationCommandInput extends DescribeTestSetGenerationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTestSetGenerationCommand}.
 */
export interface DescribeTestSetGenerationCommandOutput extends DescribeTestSetGenerationResponse, __MetadataBearer {}

/**
 * <p>Gets metadata information about the test set generation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeTestSetGenerationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeTestSetGenerationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeTestSetGenerationRequest
 *   testSetGenerationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTestSetGenerationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTestSetGenerationResponse
 * //   testSetGenerationId: "STRING_VALUE",
 * //   testSetGenerationStatus: "Generating" || "Ready" || "Failed" || "Pending",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   testSetId: "STRING_VALUE",
 * //   testSetName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   storageLocation: { // TestSetStorageLocation
 * //     s3BucketName: "STRING_VALUE", // required
 * //     s3Path: "STRING_VALUE", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * //   generationDataSource: { // TestSetGenerationDataSource
 * //     conversationLogsDataSource: { // ConversationLogsDataSource
 * //       botId: "STRING_VALUE", // required
 * //       botAliasId: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //       filter: { // ConversationLogsDataSourceFilterBy
 * //         startTime: new Date("TIMESTAMP"), // required
 * //         endTime: new Date("TIMESTAMP"), // required
 * //         inputMode: "Speech" || "Text", // required
 * //       },
 * //     },
 * //   },
 * //   roleArn: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeTestSetGenerationCommandInput - {@link DescribeTestSetGenerationCommandInput}
 * @returns {@link DescribeTestSetGenerationCommandOutput}
 * @see {@link DescribeTestSetGenerationCommandInput} for command's `input` shape.
 * @see {@link DescribeTestSetGenerationCommandOutput} for command's `response` shape.
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
export class DescribeTestSetGenerationCommand extends $Command
  .classBuilder<
    DescribeTestSetGenerationCommandInput,
    DescribeTestSetGenerationCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DescribeTestSetGeneration", {})
  .n("LexModelsV2Client", "DescribeTestSetGenerationCommand")
  .sc(DescribeTestSetGeneration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTestSetGenerationRequest;
      output: DescribeTestSetGenerationResponse;
    };
    sdk: {
      input: DescribeTestSetGenerationCommandInput;
      output: DescribeTestSetGenerationCommandOutput;
    };
  };
}
