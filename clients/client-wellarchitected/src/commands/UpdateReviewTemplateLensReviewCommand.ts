// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateReviewTemplateLensReviewInput, UpdateReviewTemplateLensReviewOutput } from "../models/models_0";
import { UpdateReviewTemplateLensReview$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateReviewTemplateLensReviewCommand}.
 */
export interface UpdateReviewTemplateLensReviewCommandInput extends UpdateReviewTemplateLensReviewInput {}
/**
 * @public
 *
 * The output of {@link UpdateReviewTemplateLensReviewCommand}.
 */
export interface UpdateReviewTemplateLensReviewCommandOutput extends UpdateReviewTemplateLensReviewOutput, __MetadataBearer {}

/**
 * Update a lens review associated with a review template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateReviewTemplateLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateReviewTemplateLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateReviewTemplateLensReviewInput
 *   TemplateArn: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   LensNotes: "STRING_VALUE",
 *   PillarNotes: { // PillarNotes
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateReviewTemplateLensReviewCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReviewTemplateLensReviewOutput
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
 * @param UpdateReviewTemplateLensReviewCommandInput - {@link UpdateReviewTemplateLensReviewCommandInput}
 * @returns {@link UpdateReviewTemplateLensReviewCommandOutput}
 * @see {@link UpdateReviewTemplateLensReviewCommandInput} for command's `input` shape.
 * @see {@link UpdateReviewTemplateLensReviewCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class UpdateReviewTemplateLensReviewCommand extends command<UpdateReviewTemplateLensReviewCommandInput, UpdateReviewTemplateLensReviewCommandOutput>(
  _ep0,
  _mw0,
  "UpdateReviewTemplateLensReview",
  UpdateReviewTemplateLensReview$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateReviewTemplateLensReviewInput;
      output: UpdateReviewTemplateLensReviewOutput;
    };
    sdk: {
      input: UpdateReviewTemplateLensReviewCommandInput;
      output: UpdateReviewTemplateLensReviewCommandOutput;
    };
  };
}
