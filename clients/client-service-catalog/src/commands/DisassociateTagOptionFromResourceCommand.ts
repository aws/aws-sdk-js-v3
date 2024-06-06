// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateTagOptionFromResourceInput, DisassociateTagOptionFromResourceOutput } from "../models/models_0";
import {
  de_DisassociateTagOptionFromResourceCommand,
  se_DisassociateTagOptionFromResourceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateTagOptionFromResourceCommand}.
 */
export interface DisassociateTagOptionFromResourceCommandInput extends DisassociateTagOptionFromResourceInput {}
/**
 * @public
 *
 * The output of {@link DisassociateTagOptionFromResourceCommand}.
 */
export interface DisassociateTagOptionFromResourceCommandOutput
  extends DisassociateTagOptionFromResourceOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified TagOption from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateTagOptionFromResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateTagOptionFromResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DisassociateTagOptionFromResourceInput
 *   ResourceId: "STRING_VALUE", // required
 *   TagOptionId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateTagOptionFromResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateTagOptionFromResourceCommandInput - {@link DisassociateTagOptionFromResourceCommandInput}
 * @returns {@link DisassociateTagOptionFromResourceCommandOutput}
 * @see {@link DisassociateTagOptionFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateTagOptionFromResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *  <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Use the Amazon Web Services Management Console to perform the migration
 *          process before retrying the operation.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class DisassociateTagOptionFromResourceCommand extends $Command
  .classBuilder<
    DisassociateTagOptionFromResourceCommandInput,
    DisassociateTagOptionFromResourceCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "DisassociateTagOptionFromResource", {})
  .n("ServiceCatalogClient", "DisassociateTagOptionFromResourceCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateTagOptionFromResourceCommand)
  .de(de_DisassociateTagOptionFromResourceCommand)
  .build() {}
