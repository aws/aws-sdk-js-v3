// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeTemplateAliasRequest, DescribeTemplateAliasResponse } from "../models/models_3";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeTemplateAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTemplateAliasCommand}.
 */
export interface DescribeTemplateAliasCommandInput extends DescribeTemplateAliasRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTemplateAliasCommand}.
 */
export interface DescribeTemplateAliasCommandOutput extends DescribeTemplateAliasResponse, __MetadataBearer {}

/**
 * <p>Describes the template alias for a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeTemplateAliasRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 *   AliasName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTemplateAliasCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTemplateAliasResponse
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
 * @param DescribeTemplateAliasCommandInput - {@link DescribeTemplateAliasCommandInput}
 * @returns {@link DescribeTemplateAliasCommandOutput}
 * @see {@link DescribeTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
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
export class DescribeTemplateAliasCommand extends $Command
  .classBuilder<
    DescribeTemplateAliasCommandInput,
    DescribeTemplateAliasCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeTemplateAlias", {})
  .n("QuickSightClient", "DescribeTemplateAliasCommand")
  .sc(DescribeTemplateAlias$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTemplateAliasRequest;
      output: DescribeTemplateAliasResponse;
    };
    sdk: {
      input: DescribeTemplateAliasCommandInput;
      output: DescribeTemplateAliasCommandOutput;
    };
  };
}
