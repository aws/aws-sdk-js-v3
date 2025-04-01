// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchUpdateCategoryInput } from "../models/models_0";
import { de_BatchUpdateCategoryCommand, se_BatchUpdateCategoryCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateCategoryCommand}.
 */
export interface BatchUpdateCategoryCommandInput extends BatchUpdateCategoryInput {}
/**
 * @public
 *
 * The output of {@link BatchUpdateCategoryCommand}.
 */
export interface BatchUpdateCategoryCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates Categories for the Amazon Q Business application environment instance. Web experience users use
 *       Categories to tag and filter library items. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/qapps-custom-labels.html">Custom
 *         labels for Amazon Q Apps</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, BatchUpdateCategoryCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, BatchUpdateCategoryCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // BatchUpdateCategoryInput
 *   instanceId: "STRING_VALUE", // required
 *   categories: [ // CategoryListInput // required
 *     { // CategoryInput
 *       id: "STRING_VALUE", // required
 *       title: "STRING_VALUE", // required
 *       color: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateCategoryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param BatchUpdateCategoryCommandInput - {@link BatchUpdateCategoryCommandInput}
 * @returns {@link BatchUpdateCategoryCommandOutput}
 * @see {@link BatchUpdateCategoryCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateCategoryCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation could not be completed due to a conflict with the current state of
 *       the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at
 *       once. Wait a bit and try again later.</p>
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
 * @example Updates the categories in the library
 * ```javascript
 * //
 * const input = {
 *   categories: [
 *     {
 *       id: "549abfe0-f5c4-45a2-bb9b-c05987a49c6d",
 *       title: "HR Management"
 *     },
 *     {
 *       id: "18cbebaa-196a-4aa5-a840-88d548e07f8f",
 *       title: "Sales"
 *     }
 *   ],
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f"
 * };
 * const command = new BatchUpdateCategoryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchUpdateCategoryCommand extends $Command
  .classBuilder<
    BatchUpdateCategoryCommandInput,
    BatchUpdateCategoryCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "BatchUpdateCategory", {})
  .n("QAppsClient", "BatchUpdateCategoryCommand")
  .f(void 0, void 0)
  .ser(se_BatchUpdateCategoryCommand)
  .de(de_BatchUpdateCategoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateCategoryInput;
      output: {};
    };
    sdk: {
      input: BatchUpdateCategoryCommandInput;
      output: BatchUpdateCategoryCommandOutput;
    };
  };
}
