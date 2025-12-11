// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type { GetFindingsFilterRequest, GetFindingsFilterResponse } from "../models/models_0";
import { GetFindingsFilter } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsFilterCommand}.
 */
export interface GetFindingsFilterCommandInput extends GetFindingsFilterRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsFilterCommand}.
 */
export interface GetFindingsFilterCommandOutput extends GetFindingsFilterResponse, __MetadataBearer {}

/**
 * <p>Retrieves the criteria and other settings for a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // GetFindingsFilterRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetFindingsFilterCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingsFilterResponse
 * //   action: "ARCHIVE" || "NOOP",
 * //   arn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   findingCriteria: { // FindingCriteria
 * //     criterion: { // Criterion
 * //       "<keys>": { // CriterionAdditionalProperties
 * //         eq: [ // __listOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //         eqExactMatch: [
 * //           "STRING_VALUE",
 * //         ],
 * //         gt: Number("long"),
 * //         gte: Number("long"),
 * //         lt: Number("long"),
 * //         lte: Number("long"),
 * //         neq: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   position: Number("int"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFindingsFilterCommandInput - {@link GetFindingsFilterCommandInput}
 * @returns {@link GetFindingsFilterCommandOutput}
 * @see {@link GetFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link GetFindingsFilterCommandOutput} for command's `response` shape.
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
export class GetFindingsFilterCommand extends $Command
  .classBuilder<
    GetFindingsFilterCommandInput,
    GetFindingsFilterCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "GetFindingsFilter", {})
  .n("Macie2Client", "GetFindingsFilterCommand")
  .sc(GetFindingsFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingsFilterRequest;
      output: GetFindingsFilterResponse;
    };
    sdk: {
      input: GetFindingsFilterCommandInput;
      output: GetFindingsFilterCommandOutput;
    };
  };
}
