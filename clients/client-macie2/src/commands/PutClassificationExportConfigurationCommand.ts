// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type {
  PutClassificationExportConfigurationRequest,
  PutClassificationExportConfigurationResponse,
} from "../models/models_0";
import { PutClassificationExportConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutClassificationExportConfigurationCommand}.
 */
export interface PutClassificationExportConfigurationCommandInput extends PutClassificationExportConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutClassificationExportConfigurationCommand}.
 */
export interface PutClassificationExportConfigurationCommandOutput extends PutClassificationExportConfigurationResponse, __MetadataBearer {}

/**
 * <p>Adds or updates the configuration settings for storing data classification results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, PutClassificationExportConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, PutClassificationExportConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // PutClassificationExportConfigurationRequest
 *   configuration: { // ClassificationExportConfiguration
 *     s3Destination: { // S3Destination
 *       bucketName: "STRING_VALUE", // required
 *       keyPrefix: "STRING_VALUE",
 *       kmsKeyArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new PutClassificationExportConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutClassificationExportConfigurationResponse
 * //   configuration: { // ClassificationExportConfiguration
 * //     s3Destination: { // S3Destination
 * //       bucketName: "STRING_VALUE", // required
 * //       keyPrefix: "STRING_VALUE",
 * //       kmsKeyArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutClassificationExportConfigurationCommandInput - {@link PutClassificationExportConfigurationCommandInput}
 * @returns {@link PutClassificationExportConfigurationCommandOutput}
 * @see {@link PutClassificationExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutClassificationExportConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class PutClassificationExportConfigurationCommand extends $Command
  .classBuilder<
    PutClassificationExportConfigurationCommandInput,
    PutClassificationExportConfigurationCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "PutClassificationExportConfiguration", {})
  .n("Macie2Client", "PutClassificationExportConfigurationCommand")
  .sc(PutClassificationExportConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutClassificationExportConfigurationRequest;
      output: PutClassificationExportConfigurationResponse;
    };
    sdk: {
      input: PutClassificationExportConfigurationCommandInput;
      output: PutClassificationExportConfigurationCommandOutput;
    };
  };
}
