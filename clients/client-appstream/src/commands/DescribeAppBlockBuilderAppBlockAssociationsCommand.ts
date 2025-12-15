// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeAppBlockBuilderAppBlockAssociationsRequest,
  DescribeAppBlockBuilderAppBlockAssociationsResult,
} from "../models/models_0";
import { DescribeAppBlockBuilderAppBlockAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppBlockBuilderAppBlockAssociationsCommand}.
 */
export interface DescribeAppBlockBuilderAppBlockAssociationsCommandInput
  extends DescribeAppBlockBuilderAppBlockAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppBlockBuilderAppBlockAssociationsCommand}.
 */
export interface DescribeAppBlockBuilderAppBlockAssociationsCommandOutput
  extends DescribeAppBlockBuilderAppBlockAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more app block builder associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeAppBlockBuilderAppBlockAssociationsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeAppBlockBuilderAppBlockAssociationsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeAppBlockBuilderAppBlockAssociationsRequest
 *   AppBlockArn: "STRING_VALUE",
 *   AppBlockBuilderName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAppBlockBuilderAppBlockAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppBlockBuilderAppBlockAssociationsResult
 * //   AppBlockBuilderAppBlockAssociations: [ // AppBlockBuilderAppBlockAssociationsList
 * //     { // AppBlockBuilderAppBlockAssociation
 * //       AppBlockArn: "STRING_VALUE", // required
 * //       AppBlockBuilderName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAppBlockBuilderAppBlockAssociationsCommandInput - {@link DescribeAppBlockBuilderAppBlockAssociationsCommandInput}
 * @returns {@link DescribeAppBlockBuilderAppBlockAssociationsCommandOutput}
 * @see {@link DescribeAppBlockBuilderAppBlockAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeAppBlockBuilderAppBlockAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DescribeAppBlockBuilderAppBlockAssociationsCommand extends $Command
  .classBuilder<
    DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
    DescribeAppBlockBuilderAppBlockAssociationsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DescribeAppBlockBuilderAppBlockAssociations", {})
  .n("AppStreamClient", "DescribeAppBlockBuilderAppBlockAssociationsCommand")
  .sc(DescribeAppBlockBuilderAppBlockAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppBlockBuilderAppBlockAssociationsRequest;
      output: DescribeAppBlockBuilderAppBlockAssociationsResult;
    };
    sdk: {
      input: DescribeAppBlockBuilderAppBlockAssociationsCommandInput;
      output: DescribeAppBlockBuilderAppBlockAssociationsCommandOutput;
    };
  };
}
