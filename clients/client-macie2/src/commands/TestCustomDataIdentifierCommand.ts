// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { TestCustomDataIdentifierRequest, TestCustomDataIdentifierResponse } from "../models/models_1";
import { de_TestCustomDataIdentifierCommand, se_TestCustomDataIdentifierCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestCustomDataIdentifierCommand}.
 */
export interface TestCustomDataIdentifierCommandInput extends TestCustomDataIdentifierRequest {}
/**
 * @public
 *
 * The output of {@link TestCustomDataIdentifierCommand}.
 */
export interface TestCustomDataIdentifierCommandOutput extends TestCustomDataIdentifierResponse, __MetadataBearer {}

/**
 * <p>Tests criteria for a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, TestCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, TestCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // TestCustomDataIdentifierRequest
 *   ignoreWords: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   keywords: [
 *     "STRING_VALUE",
 *   ],
 *   maximumMatchDistance: Number("int"),
 *   regex: "STRING_VALUE", // required
 *   sampleText: "STRING_VALUE", // required
 * };
 * const command = new TestCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * // { // TestCustomDataIdentifierResponse
 * //   matchCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param TestCustomDataIdentifierCommandInput - {@link TestCustomDataIdentifierCommandInput}
 * @returns {@link TestCustomDataIdentifierCommandOutput}
 * @see {@link TestCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link TestCustomDataIdentifierCommandOutput} for command's `response` shape.
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
export class TestCustomDataIdentifierCommand extends $Command
  .classBuilder<
    TestCustomDataIdentifierCommandInput,
    TestCustomDataIdentifierCommandOutput,
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
  .s("Macie2", "TestCustomDataIdentifier", {})
  .n("Macie2Client", "TestCustomDataIdentifierCommand")
  .f(void 0, void 0)
  .ser(se_TestCustomDataIdentifierCommand)
  .de(de_TestCustomDataIdentifierCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestCustomDataIdentifierRequest;
      output: TestCustomDataIdentifierResponse;
    };
    sdk: {
      input: TestCustomDataIdentifierCommandInput;
      output: TestCustomDataIdentifierCommandOutput;
    };
  };
}
