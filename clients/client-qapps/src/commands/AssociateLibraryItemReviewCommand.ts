// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateLibraryItemReviewInput } from "../models/models_0";
import { de_AssociateLibraryItemReviewCommand, se_AssociateLibraryItemReviewCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateLibraryItemReviewCommand}.
 */
export interface AssociateLibraryItemReviewCommandInput extends AssociateLibraryItemReviewInput {}
/**
 * @public
 *
 * The output of {@link AssociateLibraryItemReviewCommand}.
 */
export interface AssociateLibraryItemReviewCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates a rating or review for a library item with the user submitting the request. This increments the rating count for the specified library item.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, AssociateLibraryItemReviewCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, AssociateLibraryItemReviewCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // AssociateLibraryItemReviewInput
 *   instanceId: "STRING_VALUE", // required
 *   libraryItemId: "STRING_VALUE", // required
 * };
 * const command = new AssociateLibraryItemReviewCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateLibraryItemReviewCommandInput - {@link AssociateLibraryItemReviewCommandInput}
 * @returns {@link AssociateLibraryItemReviewCommandOutput}
 * @see {@link AssociateLibraryItemReviewCommandInput} for command's `input` shape.
 * @see {@link AssociateLibraryItemReviewCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation could not be completed because it would exceed the service's quota or limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 *
 * @example Increase the rating counter by 1 for the related app for this user
 * ```javascript
 * //
 * const input = {
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   libraryItemId: "cb9ecf72-8563-450d-9db9-994f98297316"
 * };
 * const command = new AssociateLibraryItemReviewCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateLibraryItemReviewCommand extends $Command
  .classBuilder<
    AssociateLibraryItemReviewCommandInput,
    AssociateLibraryItemReviewCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "AssociateLibraryItemReview", {})
  .n("QAppsClient", "AssociateLibraryItemReviewCommand")
  .f(void 0, void 0)
  .ser(se_AssociateLibraryItemReviewCommand)
  .de(de_AssociateLibraryItemReviewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateLibraryItemReviewInput;
      output: {};
    };
    sdk: {
      input: AssociateLibraryItemReviewCommandInput;
      output: AssociateLibraryItemReviewCommandOutput;
    };
  };
}
