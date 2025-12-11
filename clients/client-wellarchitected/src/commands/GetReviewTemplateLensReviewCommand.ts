// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetReviewTemplateLensReviewInput, GetReviewTemplateLensReviewOutput } from "../models/models_0";
import { GetReviewTemplateLensReview } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig,
} from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReviewTemplateLensReviewCommand}.
 */
export interface GetReviewTemplateLensReviewCommandInput extends GetReviewTemplateLensReviewInput {}
/**
 * @public
 *
 * The output of {@link GetReviewTemplateLensReviewCommand}.
 */
export interface GetReviewTemplateLensReviewCommandOutput extends GetReviewTemplateLensReviewOutput, __MetadataBearer {}

/**
 * <p>Get a lens review associated with a review template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetReviewTemplateLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetReviewTemplateLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetReviewTemplateLensReviewInput
 *   TemplateArn: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 * };
 * const command = new GetReviewTemplateLensReviewCommand(input);
 * const response = await client.send(command);
 * // { // GetReviewTemplateLensReviewOutput
 * //   TemplateArn: "STRING_VALUE",
 * //   LensReview: { // ReviewTemplateLensReview
 * //     LensAlias: "STRING_VALUE",
 * //     LensArn: "STRING_VALUE",
 * //     LensVersion: "STRING_VALUE",
 * //     LensName: "STRING_VALUE",
 * //     LensStatus: "CURRENT" || "NOT_CURRENT" || "DEPRECATED" || "DELETED" || "UNSHARED",
 * //     PillarReviewSummaries: [ // ReviewTemplatePillarReviewSummaries
 * //       { // ReviewTemplatePillarReviewSummary
 * //         PillarId: "STRING_VALUE",
 * //         PillarName: "STRING_VALUE",
 * //         Notes: "STRING_VALUE",
 * //         QuestionCounts: { // QuestionCounts
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //     ],
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     Notes: "STRING_VALUE",
 * //     QuestionCounts: {
 * //       "<keys>": Number("int"),
 * //     },
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetReviewTemplateLensReviewCommandInput - {@link GetReviewTemplateLensReviewCommandInput}
 * @returns {@link GetReviewTemplateLensReviewCommandOutput}
 * @see {@link GetReviewTemplateLensReviewCommandInput} for command's `input` shape.
 * @see {@link GetReviewTemplateLensReviewCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class GetReviewTemplateLensReviewCommand extends $Command
  .classBuilder<
    GetReviewTemplateLensReviewCommandInput,
    GetReviewTemplateLensReviewCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "GetReviewTemplateLensReview", {})
  .n("WellArchitectedClient", "GetReviewTemplateLensReviewCommand")
  .sc(GetReviewTemplateLensReview)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReviewTemplateLensReviewInput;
      output: GetReviewTemplateLensReviewOutput;
    };
    sdk: {
      input: GetReviewTemplateLensReviewCommandInput;
      output: GetReviewTemplateLensReviewCommandOutput;
    };
  };
}
