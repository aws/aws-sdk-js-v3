// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTemplateAliasRequest, CreateTemplateAliasResponse } from "../models/models_2";
import { de_CreateTemplateAliasCommand, se_CreateTemplateAliasCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTemplateAliasCommand}.
 */
export interface CreateTemplateAliasCommandInput extends CreateTemplateAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateTemplateAliasCommand}.
 */
export interface CreateTemplateAliasCommandOutput extends CreateTemplateAliasResponse, __MetadataBearer {}

/**
 * <p>Creates a template alias for a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // CreateTemplateAliasRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 *   AliasName: "STRING_VALUE", // required
 *   TemplateVersionNumber: Number("long"), // required
 * };
 * const command = new CreateTemplateAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateTemplateAliasResponse
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
 * @param CreateTemplateAliasCommandInput - {@link CreateTemplateAliasCommandInput}
 * @returns {@link CreateTemplateAliasCommandOutput}
 * @see {@link CreateTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class CreateTemplateAliasCommand extends $Command
  .classBuilder<
    CreateTemplateAliasCommandInput,
    CreateTemplateAliasCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "CreateTemplateAlias", {})
  .n("QuickSightClient", "CreateTemplateAliasCommand")
  .f(void 0, void 0)
  .ser(se_CreateTemplateAliasCommand)
  .de(de_CreateTemplateAliasCommand)
  .build() {}
