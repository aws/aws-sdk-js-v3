// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { UpdateTestSetRequest, UpdateTestSetResponse } from "../models/models_1";
import { UpdateTestSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTestSetCommand}.
 */
export interface UpdateTestSetCommandInput extends UpdateTestSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTestSetCommand}.
 */
export interface UpdateTestSetCommandOutput extends UpdateTestSetResponse, __MetadataBearer {}

/**
 * <p>The action to update the test set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateTestSetCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateTestSetCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // UpdateTestSetRequest
 *   testSetId: "STRING_VALUE", // required
 *   testSetName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateTestSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTestSetResponse
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
 * @param UpdateTestSetCommandInput - {@link UpdateTestSetCommandInput}
 * @returns {@link UpdateTestSetCommandOutput}
 * @see {@link UpdateTestSetCommandInput} for command's `input` shape.
 * @see {@link UpdateTestSetCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
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
export class UpdateTestSetCommand extends $Command
  .classBuilder<
    UpdateTestSetCommandInput,
    UpdateTestSetCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "UpdateTestSet", {})
  .n("LexModelsV2Client", "UpdateTestSetCommand")
  .sc(UpdateTestSet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTestSetRequest;
      output: UpdateTestSetResponse;
    };
    sdk: {
      input: UpdateTestSetCommandInput;
      output: UpdateTestSetCommandOutput;
    };
  };
}
