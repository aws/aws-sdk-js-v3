// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { RemoveSourceServerActionRequest, RemoveSourceServerActionResponse } from "../models/models_0";
import { RemoveSourceServerAction } from "../schemas/schemas_1_Action";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveSourceServerActionCommand}.
 */
export interface RemoveSourceServerActionCommandInput extends RemoveSourceServerActionRequest {}
/**
 * @public
 *
 * The output of {@link RemoveSourceServerActionCommand}.
 */
export interface RemoveSourceServerActionCommandOutput extends RemoveSourceServerActionResponse, __MetadataBearer {}

/**
 * <p>Remove source server post migration custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, RemoveSourceServerActionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, RemoveSourceServerActionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // RemoveSourceServerActionRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   actionID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new RemoveSourceServerActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveSourceServerActionCommandInput - {@link RemoveSourceServerActionCommandInput}
 * @returns {@link RemoveSourceServerActionCommandOutput}
 * @see {@link RemoveSourceServerActionCommandInput} for command's `input` shape.
 * @see {@link RemoveSourceServerActionCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class RemoveSourceServerActionCommand extends $Command
  .classBuilder<
    RemoveSourceServerActionCommandInput,
    RemoveSourceServerActionCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "RemoveSourceServerAction", {})
  .n("MgnClient", "RemoveSourceServerActionCommand")
  .sc(RemoveSourceServerAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveSourceServerActionRequest;
      output: {};
    };
    sdk: {
      input: RemoveSourceServerActionCommandInput;
      output: RemoveSourceServerActionCommandOutput;
    };
  };
}
