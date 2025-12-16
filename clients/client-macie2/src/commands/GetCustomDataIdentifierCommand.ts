// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type { GetCustomDataIdentifierRequest, GetCustomDataIdentifierResponse } from "../models/models_0";
import { GetCustomDataIdentifier$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCustomDataIdentifierCommand}.
 */
export interface GetCustomDataIdentifierCommandInput extends GetCustomDataIdentifierRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomDataIdentifierCommand}.
 */
export interface GetCustomDataIdentifierCommandOutput extends GetCustomDataIdentifierResponse, __MetadataBearer {}

/**
 * <p>Retrieves the criteria and other settings for a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // GetCustomDataIdentifierRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomDataIdentifierResponse
 * //   arn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   deleted: true || false,
 * //   description: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   ignoreWords: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   keywords: [
 * //     "STRING_VALUE",
 * //   ],
 * //   maximumMatchDistance: Number("int"),
 * //   name: "STRING_VALUE",
 * //   regex: "STRING_VALUE",
 * //   severityLevels: [ // SeverityLevelList
 * //     { // SeverityLevel
 * //       occurrencesThreshold: Number("long"), // required
 * //       severity: "LOW" || "MEDIUM" || "HIGH", // required
 * //     },
 * //   ],
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCustomDataIdentifierCommandInput - {@link GetCustomDataIdentifierCommandInput}
 * @returns {@link GetCustomDataIdentifierCommandOutput}
 * @see {@link GetCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link GetCustomDataIdentifierCommandOutput} for command's `response` shape.
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
export class GetCustomDataIdentifierCommand extends $Command
  .classBuilder<
    GetCustomDataIdentifierCommandInput,
    GetCustomDataIdentifierCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "GetCustomDataIdentifier", {})
  .n("Macie2Client", "GetCustomDataIdentifierCommand")
  .sc(GetCustomDataIdentifier$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomDataIdentifierRequest;
      output: GetCustomDataIdentifierResponse;
    };
    sdk: {
      input: GetCustomDataIdentifierCommandInput;
      output: GetCustomDataIdentifierCommandOutput;
    };
  };
}
