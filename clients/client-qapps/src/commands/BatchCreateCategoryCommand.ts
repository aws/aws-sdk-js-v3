// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchCreateCategoryInput } from "../models/models_0";
import { BatchCreateCategory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchCreateCategoryCommand}.
 */
export interface BatchCreateCategoryCommandInput extends BatchCreateCategoryInput {}
/**
 * @public
 *
 * The output of {@link BatchCreateCategoryCommand}.
 */
export interface BatchCreateCategoryCommandOutput extends __MetadataBearer {}

/**
 * Creates Categories for the Amazon Q Business application environment instance. Web experience users use Categories to tag and filter library items. For more information, see [Custom labels for Amazon Q Apps](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/qapps-custom-labels.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, BatchCreateCategoryCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, BatchCreateCategoryCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // BatchCreateCategoryInput
 *   instanceId: "STRING_VALUE", // required
 *   categories: [ // BatchCreateCategoryInputCategoryList // required
 *     { // BatchCreateCategoryInputCategory
 *       id: "STRING_VALUE",
 *       title: "STRING_VALUE", // required
 *       color: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchCreateCategoryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param BatchCreateCategoryCommandInput - {@link BatchCreateCategoryCommandInput}
 * @returns {@link BatchCreateCategoryCommandOutput}
 * @see {@link BatchCreateCategoryCommandInput} for command's `input` shape.
 * @see {@link BatchCreateCategoryCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The client is not authorized to perform the requested operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client is not authenticated or authorized to perform the requested operation.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by the service.
 *
 * @throws {@link QAppsServiceException}
 *
 * Base exception class for all service exceptions from QApps service.
 *
 * @example Creates the categories for the library
 * ```javascript
 * //
 * const input = {
 *   categories: [
 *     {
 *       id: "549abfe0-f5c4-45a2-bb9b-c05987a49c6d",
 *       title: "HR"
 *     },
 *     {
 *       id: "18cbebaa-196a-4aa5-a840-88d548e07f8f",
 *       title: "Marketing"
 *     }
 *   ],
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f"
 * };
 * const command = new BatchCreateCategoryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchCreateCategoryCommand extends command<BatchCreateCategoryCommandInput, BatchCreateCategoryCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreateCategory",
  BatchCreateCategory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateCategoryInput;
      output: {};
    };
    sdk: {
      input: BatchCreateCategoryCommandInput;
      output: BatchCreateCategoryCommandOutput;
    };
  };
}
