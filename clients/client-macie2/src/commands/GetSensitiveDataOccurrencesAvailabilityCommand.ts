// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type {
  GetSensitiveDataOccurrencesAvailabilityRequest,
  GetSensitiveDataOccurrencesAvailabilityResponse,
} from "../models/models_0";
import { GetSensitiveDataOccurrencesAvailability } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSensitiveDataOccurrencesAvailabilityCommand}.
 */
export interface GetSensitiveDataOccurrencesAvailabilityCommandInput
  extends GetSensitiveDataOccurrencesAvailabilityRequest {}
/**
 * @public
 *
 * The output of {@link GetSensitiveDataOccurrencesAvailabilityCommand}.
 */
export interface GetSensitiveDataOccurrencesAvailabilityCommandOutput
  extends GetSensitiveDataOccurrencesAvailabilityResponse,
    __MetadataBearer {}

/**
 * <p>Checks whether occurrences of sensitive data can be retrieved for a finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetSensitiveDataOccurrencesAvailabilityCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetSensitiveDataOccurrencesAvailabilityCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // GetSensitiveDataOccurrencesAvailabilityRequest
 *   findingId: "STRING_VALUE", // required
 * };
 * const command = new GetSensitiveDataOccurrencesAvailabilityCommand(input);
 * const response = await client.send(command);
 * // { // GetSensitiveDataOccurrencesAvailabilityResponse
 * //   code: "AVAILABLE" || "UNAVAILABLE",
 * //   reasons: [ // __listOfUnavailabilityReasonCode
 * //     "OBJECT_EXCEEDS_SIZE_QUOTA" || "UNSUPPORTED_OBJECT_TYPE" || "UNSUPPORTED_FINDING_TYPE" || "INVALID_CLASSIFICATION_RESULT" || "OBJECT_UNAVAILABLE" || "ACCOUNT_NOT_IN_ORGANIZATION" || "MISSING_GET_MEMBER_PERMISSION" || "ROLE_TOO_PERMISSIVE" || "MEMBER_ROLE_TOO_PERMISSIVE" || "INVALID_RESULT_SIGNATURE" || "RESULT_NOT_SIGNED",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSensitiveDataOccurrencesAvailabilityCommandInput - {@link GetSensitiveDataOccurrencesAvailabilityCommandInput}
 * @returns {@link GetSensitiveDataOccurrencesAvailabilityCommandOutput}
 * @see {@link GetSensitiveDataOccurrencesAvailabilityCommandInput} for command's `input` shape.
 * @see {@link GetSensitiveDataOccurrencesAvailabilityCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class GetSensitiveDataOccurrencesAvailabilityCommand extends $Command
  .classBuilder<
    GetSensitiveDataOccurrencesAvailabilityCommandInput,
    GetSensitiveDataOccurrencesAvailabilityCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "GetSensitiveDataOccurrencesAvailability", {})
  .n("Macie2Client", "GetSensitiveDataOccurrencesAvailabilityCommand")
  .sc(GetSensitiveDataOccurrencesAvailability)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSensitiveDataOccurrencesAvailabilityRequest;
      output: GetSensitiveDataOccurrencesAvailabilityResponse;
    };
    sdk: {
      input: GetSensitiveDataOccurrencesAvailabilityCommandInput;
      output: GetSensitiveDataOccurrencesAvailabilityCommandOutput;
    };
  };
}
