// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type { GetResourceProfileRequest, GetResourceProfileResponse } from "../models/models_0";
import { GetResourceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceProfileCommand}.
 */
export interface GetResourceProfileCommandInput extends GetResourceProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceProfileCommand}.
 */
export interface GetResourceProfileCommandOutput extends GetResourceProfileResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetResourceProfileCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetResourceProfileCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // GetResourceProfileRequest
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetResourceProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceProfileResponse
 * //   profileUpdatedAt: new Date("TIMESTAMP"),
 * //   sensitivityScore: Number("int"),
 * //   sensitivityScoreOverridden: true || false,
 * //   statistics: { // ResourceStatistics
 * //     totalBytesClassified: Number("long"),
 * //     totalDetections: Number("long"),
 * //     totalDetectionsSuppressed: Number("long"),
 * //     totalItemsClassified: Number("long"),
 * //     totalItemsSensitive: Number("long"),
 * //     totalItemsSkipped: Number("long"),
 * //     totalItemsSkippedInvalidEncryption: Number("long"),
 * //     totalItemsSkippedInvalidKms: Number("long"),
 * //     totalItemsSkippedPermissionDenied: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourceProfileCommandInput - {@link GetResourceProfileCommandInput}
 * @returns {@link GetResourceProfileCommandOutput}
 * @see {@link GetResourceProfileCommandInput} for command's `input` shape.
 * @see {@link GetResourceProfileCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
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
export class GetResourceProfileCommand extends $Command
  .classBuilder<
    GetResourceProfileCommandInput,
    GetResourceProfileCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "GetResourceProfile", {})
  .n("Macie2Client", "GetResourceProfileCommand")
  .sc(GetResourceProfile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceProfileRequest;
      output: GetResourceProfileResponse;
    };
    sdk: {
      input: GetResourceProfileCommandInput;
      output: GetResourceProfileCommandOutput;
    };
  };
}
