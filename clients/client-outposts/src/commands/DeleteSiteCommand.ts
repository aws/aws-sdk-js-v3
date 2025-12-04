// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSiteInput, DeleteSiteOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { DeleteSite } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSiteCommand}.
 */
export interface DeleteSiteCommandInput extends DeleteSiteInput {}
/**
 * @public
 *
 * The output of {@link DeleteSiteCommand}.
 */
export interface DeleteSiteCommandOutput extends DeleteSiteOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, DeleteSiteCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, DeleteSiteCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // DeleteSiteInput
 *   SiteId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSiteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSiteCommandInput - {@link DeleteSiteCommandInput}
 * @returns {@link DeleteSiteCommandOutput}
 * @see {@link DeleteSiteCommandInput} for command's `input` shape.
 * @see {@link DeleteSiteCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class DeleteSiteCommand extends $Command
  .classBuilder<
    DeleteSiteCommandInput,
    DeleteSiteCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "DeleteSite", {})
  .n("OutpostsClient", "DeleteSiteCommand")
  .sc(DeleteSite)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSiteInput;
      output: {};
    };
    sdk: {
      input: DeleteSiteCommandInput;
      output: DeleteSiteCommandOutput;
    };
  };
}
