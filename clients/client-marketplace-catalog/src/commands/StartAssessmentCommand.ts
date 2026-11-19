// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAssessmentRequest, StartAssessmentResponse } from "../models/models_0";
import { StartAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAssessmentCommand}.
 */
export interface StartAssessmentCommandInput extends StartAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link StartAssessmentCommand}.
 */
export interface StartAssessmentCommandOutput extends StartAssessmentResponse, __MetadataBearer {}

/**
 * <p>Starts an assessment of a product entity against a framework. An
 *             <i>assessment</i> is the result of evaluating an entity against the
 *             controls of a framework. You choose the controls to run and provide the input that each
 *             control needs.</p>
 *          <p>The assessment runs asynchronously. This action returns the ID of the assessment
 *             immediately. To get its status and the results of each control, use the
 *             <code>DescribeAssessment</code> action. To find assessments that you started earlier,
 *             use the <code>ListAssessments</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, StartAssessmentCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, StartAssessmentCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * // import type { MarketplaceCatalogClientConfig } from "@aws-sdk/client-marketplace-catalog";
 * const config = {}; // type is MarketplaceCatalogClientConfig
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // StartAssessmentRequest
 *   Catalog: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   FrameworkId: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 *   Controls: [ // ControlInputList
 *     { // ControlInput
 *       ControlId: "STRING_VALUE", // required
 *       Input: "DOCUMENT_VALUE",
 *     },
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // StartAssessmentResponse
 * //   AssessmentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAssessmentCommandInput - {@link StartAssessmentCommandInput}
 * @returns {@link StartAssessmentCommandOutput}
 * @see {@link StartAssessmentCommandInput} for command's `input` shape.
 * @see {@link StartAssessmentCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for MarketplaceCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *          <p>HTTP status code: 403</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>There was an internal service exception.</p>
 *          <p>HTTP status code: 500</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is currently in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *          <p>HTTP status code: 404</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The maximum number of open requests per account has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *          <p>HTTP status code: 429</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *          <p>HTTP status code: 422</p>
 *
 * @throws {@link MarketplaceCatalogServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceCatalog service.</p>
 *
 *
 * @public
 */
export class StartAssessmentCommand extends command<StartAssessmentCommandInput, StartAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "StartAssessment",
  StartAssessment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAssessmentRequest;
      output: StartAssessmentResponse;
    };
    sdk: {
      input: StartAssessmentCommandInput;
      output: StartAssessmentCommandOutput;
    };
  };
}
