// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type { CreateFindingsFilterRequest, CreateFindingsFilterResponse } from "../models/models_0";
import { CreateFindingsFilter } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFindingsFilterCommand}.
 */
export interface CreateFindingsFilterCommandInput extends CreateFindingsFilterRequest {}
/**
 * @public
 *
 * The output of {@link CreateFindingsFilterCommand}.
 */
export interface CreateFindingsFilterCommandOutput extends CreateFindingsFilterResponse, __MetadataBearer {}

/**
 * <p>Creates and defines the criteria and other settings for a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // CreateFindingsFilterRequest
 *   action: "ARCHIVE" || "NOOP", // required
 *   clientToken: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   findingCriteria: { // FindingCriteria
 *     criterion: { // Criterion
 *       "<keys>": { // CriterionAdditionalProperties
 *         eq: [ // __listOf__string
 *           "STRING_VALUE",
 *         ],
 *         eqExactMatch: [
 *           "STRING_VALUE",
 *         ],
 *         gt: Number("long"),
 *         gte: Number("long"),
 *         lt: Number("long"),
 *         lte: Number("long"),
 *         neq: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   name: "STRING_VALUE", // required
 *   position: Number("int"),
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFindingsFilterCommand(input);
 * const response = await client.send(command);
 * // { // CreateFindingsFilterResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFindingsFilterCommandInput - {@link CreateFindingsFilterCommandInput}
 * @returns {@link CreateFindingsFilterCommandOutput}
 * @see {@link CreateFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link CreateFindingsFilterCommandOutput} for command's `response` shape.
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
export class CreateFindingsFilterCommand extends $Command
  .classBuilder<
    CreateFindingsFilterCommandInput,
    CreateFindingsFilterCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "CreateFindingsFilter", {})
  .n("Macie2Client", "CreateFindingsFilterCommand")
  .sc(CreateFindingsFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFindingsFilterRequest;
      output: CreateFindingsFilterResponse;
    };
    sdk: {
      input: CreateFindingsFilterCommandInput;
      output: CreateFindingsFilterCommandOutput;
    };
  };
}
