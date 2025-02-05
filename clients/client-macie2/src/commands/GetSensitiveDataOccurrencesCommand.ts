// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetSensitiveDataOccurrencesRequest, GetSensitiveDataOccurrencesResponse } from "../models/models_0";
import {
  de_GetSensitiveDataOccurrencesCommand,
  se_GetSensitiveDataOccurrencesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSensitiveDataOccurrencesCommand}.
 */
export interface GetSensitiveDataOccurrencesCommandInput extends GetSensitiveDataOccurrencesRequest {}
/**
 * @public
 *
 * The output of {@link GetSensitiveDataOccurrencesCommand}.
 */
export interface GetSensitiveDataOccurrencesCommandOutput
  extends GetSensitiveDataOccurrencesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves occurrences of sensitive data reported by a finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetSensitiveDataOccurrencesCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetSensitiveDataOccurrencesCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Macie2Client(config);
 * const input = { // GetSensitiveDataOccurrencesRequest
 *   findingId: "STRING_VALUE", // required
 * };
 * const command = new GetSensitiveDataOccurrencesCommand(input);
 * const response = await client.send(command);
 * // { // GetSensitiveDataOccurrencesResponse
 * //   error: "STRING_VALUE",
 * //   sensitiveDataOccurrences: { // SensitiveDataOccurrences
 * //     "<keys>": [ // __listOfDetectedDataDetails
 * //       { // DetectedDataDetails
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   status: "SUCCESS" || "PROCESSING" || "ERROR",
 * // };
 *
 * ```
 *
 * @param GetSensitiveDataOccurrencesCommandInput - {@link GetSensitiveDataOccurrencesCommandInput}
 * @returns {@link GetSensitiveDataOccurrencesCommandOutput}
 * @see {@link GetSensitiveDataOccurrencesCommandInput} for command's `input` shape.
 * @see {@link GetSensitiveDataOccurrencesCommandOutput} for command's `response` shape.
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>Provides information about an error that occurred due to an unprocessable entity.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 * @public
 */
export class GetSensitiveDataOccurrencesCommand extends $Command
  .classBuilder<
    GetSensitiveDataOccurrencesCommandInput,
    GetSensitiveDataOccurrencesCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "GetSensitiveDataOccurrences", {})
  .n("Macie2Client", "GetSensitiveDataOccurrencesCommand")
  .f(void 0, void 0)
  .ser(se_GetSensitiveDataOccurrencesCommand)
  .de(de_GetSensitiveDataOccurrencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSensitiveDataOccurrencesRequest;
      output: GetSensitiveDataOccurrencesResponse;
    };
    sdk: {
      input: GetSensitiveDataOccurrencesCommandInput;
      output: GetSensitiveDataOccurrencesCommandOutput;
    };
  };
}
