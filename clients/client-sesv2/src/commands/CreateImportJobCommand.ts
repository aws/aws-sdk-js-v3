// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateImportJobRequest, CreateImportJobResponse } from "../models/models_0";
import { de_CreateImportJobCommand, se_CreateImportJobCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateImportJobCommand}.
 */
export interface CreateImportJobCommandInput extends CreateImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateImportJobCommand}.
 */
export interface CreateImportJobCommandOutput extends CreateImportJobResponse, __MetadataBearer {}

/**
 * <p>Creates an import job for a data destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateImportJobCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateImportJobCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // CreateImportJobRequest
 *   ImportDestination: { // ImportDestination
 *     SuppressionListDestination: { // SuppressionListDestination
 *       SuppressionListImportAction: "DELETE" || "PUT", // required
 *     },
 *     ContactListDestination: { // ContactListDestination
 *       ContactListName: "STRING_VALUE", // required
 *       ContactListImportAction: "DELETE" || "PUT", // required
 *     },
 *   },
 *   ImportDataSource: { // ImportDataSource
 *     S3Url: "STRING_VALUE", // required
 *     DataFormat: "CSV" || "JSON", // required
 *   },
 * };
 * const command = new CreateImportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateImportJobResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateImportJobCommandInput - {@link CreateImportJobCommandInput}
 * @returns {@link CreateImportJobCommandOutput}
 * @see {@link CreateImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateImportJobCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class CreateImportJobCommand extends $Command
  .classBuilder<
    CreateImportJobCommandInput,
    CreateImportJobCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "CreateImportJob", {})
  .n("SESv2Client", "CreateImportJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateImportJobCommand)
  .de(de_CreateImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImportJobRequest;
      output: CreateImportJobResponse;
    };
    sdk: {
      input: CreateImportJobCommandInput;
      output: CreateImportJobCommandOutput;
    };
  };
}
