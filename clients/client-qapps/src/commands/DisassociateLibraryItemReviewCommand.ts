// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateLibraryItemReviewInput } from "../models/models_0";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { DisassociateLibraryItemReview } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateLibraryItemReviewCommand}.
 */
export interface DisassociateLibraryItemReviewCommandInput extends DisassociateLibraryItemReviewInput {}
/**
 * @public
 *
 * The output of {@link DisassociateLibraryItemReviewCommand}.
 */
export interface DisassociateLibraryItemReviewCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes a rating or review previously submitted by the user for a library item.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, DisassociateLibraryItemReviewCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, DisassociateLibraryItemReviewCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // DisassociateLibraryItemReviewInput
 *   instanceId: "STRING_VALUE", // required
 *   libraryItemId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateLibraryItemReviewCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateLibraryItemReviewCommandInput - {@link DisassociateLibraryItemReviewCommandInput}
 * @returns {@link DisassociateLibraryItemReviewCommandOutput}
 * @see {@link DisassociateLibraryItemReviewCommandInput} for command's `input` shape.
 * @see {@link DisassociateLibraryItemReviewCommandOutput} for command's `response` shape.
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
 * @example Decrease the rating counter by 1 for the related app for this user
 * ```javascript
 * //
 * const input = {
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   libraryItemId: "cb9ecf72-8563-450d-9db9-994f98297316"
 * };
 * const command = new DisassociateLibraryItemReviewCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateLibraryItemReviewCommand extends $Command
  .classBuilder<
    DisassociateLibraryItemReviewCommandInput,
    DisassociateLibraryItemReviewCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "DisassociateLibraryItemReview", {})
  .n("QAppsClient", "DisassociateLibraryItemReviewCommand")
  .sc(DisassociateLibraryItemReview)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateLibraryItemReviewInput;
      output: {};
    };
    sdk: {
      input: DisassociateLibraryItemReviewCommandInput;
      output: DisassociateLibraryItemReviewCommandOutput;
    };
  };
}
