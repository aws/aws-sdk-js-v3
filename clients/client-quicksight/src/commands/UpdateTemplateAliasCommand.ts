// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTemplateAliasRequest, UpdateTemplateAliasResponse } from "../models/models_5";
import { de_UpdateTemplateAliasCommand, se_UpdateTemplateAliasCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTemplateAliasCommand}.
 */
export interface UpdateTemplateAliasCommandInput extends UpdateTemplateAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTemplateAliasCommand}.
 */
export interface UpdateTemplateAliasCommandOutput extends UpdateTemplateAliasResponse, __MetadataBearer {}

/**
 * <p>Updates the template alias of a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateTemplateAliasRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 *   AliasName: "STRING_VALUE", // required
 *   TemplateVersionNumber: Number("long"), // required
 * };
 * const command = new UpdateTemplateAliasCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTemplateAliasResponse
 * //   TemplateAlias: { // TemplateAlias
 * //     AliasName: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     TemplateVersionNumber: Number("long"),
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateTemplateAliasCommandInput - {@link UpdateTemplateAliasCommandInput}
 * @returns {@link UpdateTemplateAliasCommandOutput}
 * @see {@link UpdateTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateTemplateAliasCommand extends $Command
  .classBuilder<
    UpdateTemplateAliasCommandInput,
    UpdateTemplateAliasCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "UpdateTemplateAlias", {})
  .n("QuickSightClient", "UpdateTemplateAliasCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTemplateAliasCommand)
  .de(de_UpdateTemplateAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTemplateAliasRequest;
      output: UpdateTemplateAliasResponse;
    };
    sdk: {
      input: UpdateTemplateAliasCommandInput;
      output: UpdateTemplateAliasCommandOutput;
    };
  };
}
