// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteExportRequest, DeleteExportResponse } from "../models/models_0";
import { de_DeleteExportCommand, se_DeleteExportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteExportCommand}.
 */
export interface DeleteExportCommandInput extends DeleteExportRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExportCommand}.
 */
export interface DeleteExportCommandOutput extends DeleteExportResponse, __MetadataBearer {}

/**
 * <p>Removes a previous export and the associated files stored in an S3
 *          bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteExportRequest
 *   exportId: "STRING_VALUE", // required
 * };
 * const command = new DeleteExportCommand(input);
 * const response = await client.send(command);
 * // { // DeleteExportResponse
 * //   exportId: "STRING_VALUE",
 * //   exportStatus: "InProgress" || "Completed" || "Failed" || "Deleting",
 * // };
 *
 * ```
 *
 * @param DeleteExportCommandInput - {@link DeleteExportCommandInput}
 * @returns {@link DeleteExportCommandOutput}
 * @see {@link DeleteExportCommandInput} for command's `input` shape.
 * @see {@link DeleteExportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
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
 * @public
 */
export class DeleteExportCommand extends $Command
  .classBuilder<
    DeleteExportCommandInput,
    DeleteExportCommandOutput,
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
  .s("LexModelBuildingServiceV2", "DeleteExport", {})
  .n("LexModelsV2Client", "DeleteExportCommand")
  .f(void 0, void 0)
  .ser(se_DeleteExportCommand)
  .de(de_DeleteExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExportRequest;
      output: DeleteExportResponse;
    };
    sdk: {
      input: DeleteExportCommandInput;
      output: DeleteExportCommandOutput;
    };
  };
}
