// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListClassificationScopesRequest, ListClassificationScopesResponse } from "../models/models_1";
import { de_ListClassificationScopesCommand, se_ListClassificationScopesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClassificationScopesCommand}.
 */
export interface ListClassificationScopesCommandInput extends ListClassificationScopesRequest {}
/**
 * @public
 *
 * The output of {@link ListClassificationScopesCommand}.
 */
export interface ListClassificationScopesCommandOutput extends ListClassificationScopesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a subset of information about the classification scope for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListClassificationScopesCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListClassificationScopesCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Macie2Client(config);
 * const input = { // ListClassificationScopesRequest
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListClassificationScopesCommand(input);
 * const response = await client.send(command);
 * // { // ListClassificationScopesResponse
 * //   classificationScopes: [ // __listOfClassificationScopeSummary
 * //     { // ClassificationScopeSummary
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClassificationScopesCommandInput - {@link ListClassificationScopesCommandInput}
 * @returns {@link ListClassificationScopesCommandOutput}
 * @see {@link ListClassificationScopesCommandInput} for command's `input` shape.
 * @see {@link ListClassificationScopesCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
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
 * @public
 */
export class ListClassificationScopesCommand extends $Command
  .classBuilder<
    ListClassificationScopesCommandInput,
    ListClassificationScopesCommandOutput,
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
  .s("Macie2", "ListClassificationScopes", {})
  .n("Macie2Client", "ListClassificationScopesCommand")
  .f(void 0, void 0)
  .ser(se_ListClassificationScopesCommand)
  .de(de_ListClassificationScopesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClassificationScopesRequest;
      output: ListClassificationScopesResponse;
    };
    sdk: {
      input: ListClassificationScopesCommandInput;
      output: ListClassificationScopesCommandOutput;
    };
  };
}
