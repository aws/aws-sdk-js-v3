// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeEventCategoriesMessage, DescribeEventCategoriesResponse } from "../models/models_0";
import { DescribeEventCategories$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeEventCategoriesCommand}.
 */
export interface DescribeEventCategoriesCommandInput extends DescribeEventCategoriesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEventCategoriesCommand}.
 */
export interface DescribeEventCategoriesCommandOutput extends DescribeEventCategoriesResponse, __MetadataBearer {}

/**
 * Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in [Working with Events and Notifications](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html) in the *Database Migration Service User Guide.*
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEventCategoriesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEventCategoriesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeEventCategoriesMessage
 *   SourceType: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeEventCategoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventCategoriesResponse
 * //   EventCategoryGroupList: [ // EventCategoryGroupList
 * //     { // EventCategoryGroup
 * //       SourceType: "STRING_VALUE",
 * //       EventCategories: [ // EventCategoriesList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventCategoriesCommandInput - {@link DescribeEventCategoriesCommandInput}
 * @returns {@link DescribeEventCategoriesCommandOutput}
 * @see {@link DescribeEventCategoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventCategoriesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
 *
 * @public
 */
export class DescribeEventCategoriesCommand extends command<DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEventCategories",
  DescribeEventCategories$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventCategoriesMessage;
      output: DescribeEventCategoriesResponse;
    };
    sdk: {
      input: DescribeEventCategoriesCommandInput;
      output: DescribeEventCategoriesCommandOutput;
    };
  };
}
