// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAliasesRequest, ListAliasesResponse } from "../models/models_3";
import { de_ListAliasesCommand, se_ListAliasesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAliasesCommand}.
 */
export interface ListAliasesCommandInput extends ListAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListAliasesCommand}.
 */
export interface ListAliasesCommandOutput extends ListAliasesResponse, __MetadataBearer {}

/**
 * <p>Lists the aliases of a specified image or image version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAliasesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAliasesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListAliasesRequest
 *   ImageName: "STRING_VALUE", // required
 *   Alias: "STRING_VALUE",
 *   Version: Number("int"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListAliasesResponse
 * //   SageMakerImageVersionAliases: [ // SageMakerImageVersionAliases
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAliasesCommandInput - {@link ListAliasesCommandInput}
 * @returns {@link ListAliasesCommandOutput}
 * @see {@link ListAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAliasesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListAliasesCommand extends $Command
  .classBuilder<
    ListAliasesCommandInput,
    ListAliasesCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListAliases", {})
  .n("SageMakerClient", "ListAliasesCommand")
  .f(void 0, void 0)
  .ser(se_ListAliasesCommand)
  .de(de_ListAliasesCommand)
  .build() {}
