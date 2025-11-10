// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteCategoryInput } from "../models/models_0";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { BatchDeleteCategory } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteCategoryCommand}.
 */
export interface BatchDeleteCategoryCommandInput extends BatchDeleteCategoryInput {}
/**
 * @public
 *
 * The output of {@link BatchDeleteCategoryCommand}.
 */
export interface BatchDeleteCategoryCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes Categories for the Amazon Q Business application environment instance. Web experience users use Categories to tag and filter library items. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/qapps-custom-labels.html">Custom labels for Amazon Q Apps</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, BatchDeleteCategoryCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, BatchDeleteCategoryCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // BatchDeleteCategoryInput
 *   instanceId: "STRING_VALUE", // required
 *   categories: [ // DeleteCategoryInputList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteCategoryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param BatchDeleteCategoryCommandInput - {@link BatchDeleteCategoryCommandInput}
 * @returns {@link BatchDeleteCategoryCommandOutput}
 * @see {@link BatchDeleteCategoryCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteCategoryCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
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
 * @example Deletes the categories in the library
 * ```javascript
 * //
 * const input = {
 *   categories: [
 *     "9c871ed4-1c41-4065-aefe-321cd4b61cf8"
 *   ],
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f"
 * };
 * const command = new BatchDeleteCategoryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchDeleteCategoryCommand extends $Command
  .classBuilder<
    BatchDeleteCategoryCommandInput,
    BatchDeleteCategoryCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "BatchDeleteCategory", {})
  .n("QAppsClient", "BatchDeleteCategoryCommand")
  .sc(BatchDeleteCategory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteCategoryInput;
      output: {};
    };
    sdk: {
      input: BatchDeleteCategoryCommandInput;
      output: BatchDeleteCategoryCommandOutput;
    };
  };
}
