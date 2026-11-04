// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpgradeReviewTemplateLensReviewInput } from "../models/models_0";
import { UpgradeReviewTemplateLensReview$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpgradeReviewTemplateLensReviewCommand}.
 */
export interface UpgradeReviewTemplateLensReviewCommandInput extends UpgradeReviewTemplateLensReviewInput {}
/**
 * @public
 *
 * The output of {@link UpgradeReviewTemplateLensReviewCommand}.
 */
export interface UpgradeReviewTemplateLensReviewCommandOutput extends __MetadataBearer {}

/**
 * Upgrade the lens review of a review template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpgradeReviewTemplateLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpgradeReviewTemplateLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // UpgradeReviewTemplateLensReviewInput
 *   TemplateArn: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpgradeReviewTemplateLensReviewCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpgradeReviewTemplateLensReviewCommandInput - {@link UpgradeReviewTemplateLensReviewCommandInput}
 * @returns {@link UpgradeReviewTemplateLensReviewCommandOutput}
 * @see {@link UpgradeReviewTemplateLensReviewCommandInput} for command's `input` shape.
 * @see {@link UpgradeReviewTemplateLensReviewCommandOutput} for command's `response` shape.
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
export class UpgradeReviewTemplateLensReviewCommand extends command<UpgradeReviewTemplateLensReviewCommandInput, UpgradeReviewTemplateLensReviewCommandOutput>(
  _ep0,
  _mw0,
  "UpgradeReviewTemplateLensReview",
  UpgradeReviewTemplateLensReview$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpgradeReviewTemplateLensReviewInput;
      output: {};
    };
    sdk: {
      input: UpgradeReviewTemplateLensReviewCommandInput;
      output: UpgradeReviewTemplateLensReviewCommandOutput;
    };
  };
}
