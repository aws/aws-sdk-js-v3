// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTemplateAliasRequest, DeleteTemplateAliasResponse } from "../models/models_4";
import { de_DeleteTemplateAliasCommand, se_DeleteTemplateAliasCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTemplateAliasCommand}.
 */
export interface DeleteTemplateAliasCommandInput extends DeleteTemplateAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTemplateAliasCommand}.
 */
export interface DeleteTemplateAliasCommandOutput extends DeleteTemplateAliasResponse, __MetadataBearer {}

/**
 * <p>Deletes the item that the specified template alias points to. If you provide a specific
 * 			alias, you delete the version of the template that the alias points to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteTemplateAliasRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 *   AliasName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTemplateAliasCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTemplateAliasResponse
 * //   Status: Number("int"),
 * //   TemplateId: "STRING_VALUE",
 * //   AliasName: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTemplateAliasCommandInput - {@link DeleteTemplateAliasCommandInput}
 * @returns {@link DeleteTemplateAliasCommandOutput}
 * @see {@link DeleteTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateAliasCommandOutput} for command's `response` shape.
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
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteTemplateAliasCommand extends $Command
  .classBuilder<
    DeleteTemplateAliasCommandInput,
    DeleteTemplateAliasCommandOutput,
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
  .s("QuickSight_20180401", "DeleteTemplateAlias", {})
  .n("QuickSightClient", "DeleteTemplateAliasCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTemplateAliasCommand)
  .de(de_DeleteTemplateAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTemplateAliasRequest;
      output: DeleteTemplateAliasResponse;
    };
    sdk: {
      input: DeleteTemplateAliasCommandInput;
      output: DeleteTemplateAliasCommandOutput;
    };
  };
}
