// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeMetadataModelChildrenMessage, DescribeMetadataModelChildrenResponse } from "../models/models_0";
import { DescribeMetadataModelChildren$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelChildrenCommand}.
 */
export interface DescribeMetadataModelChildrenCommandInput extends DescribeMetadataModelChildrenMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelChildrenCommand}.
 */
export interface DescribeMetadataModelChildrenCommandOutput extends DescribeMetadataModelChildrenResponse, __MetadataBearer {}

/**
 * <p>Gets a list of child metadata models for the specified metadata model in the database hierarchy.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:DescribeMetadataModelChildren</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelChildrenCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelChildrenCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelChildrenMessage
 *   SelectionRules: "STRING_VALUE", // required
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   Origin: "SOURCE" || "TARGET", // required
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeMetadataModelChildrenCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelChildrenResponse
 * //   Marker: "STRING_VALUE",
 * //   MetadataModelChildren: [ // MetadataModelReferenceList
 * //     { // MetadataModelReference
 * //       MetadataModelName: "STRING_VALUE",
 * //       SelectionRules: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMetadataModelChildrenCommandInput - {@link DescribeMetadataModelChildrenCommandInput}
 * @returns {@link DescribeMetadataModelChildrenCommandOutput}
 * @see {@link DescribeMetadataModelChildrenCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelChildrenCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Retrieve children of a schema
 * ```javascript
 * // The following example retrieves the child metadata models of the ExampleSchema schema from the source metadata tree.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   Origin: "SOURCE",
 *   SelectionRules: `{"rules": [{"rule-type": "selection", "rule-id": "1", "rule-name": "1", "object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema"}, "rule-action": "explicit"}]}`
 * };
 * const command = new DescribeMetadataModelChildrenCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MetadataModelChildren: [
 *     {
 *       MetadataModelName: "Tables",
 *       SelectionRules: `{"rules": [{"rule-type": "selection", "rule-id": "1", "rule-name": "1", "object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema", "category-name": "Tables"}, "rule-action": "explicit"}]}`
 *     },
 *     {
 *       MetadataModelName: "Views",
 *       SelectionRules: `{"rules": [{"rule-type": "selection", "rule-id": "2", "rule-name": "2", "object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema", "category-name": "Views"}, "rule-action": "explicit"}]}`
 *     },
 *     {
 *       MetadataModelName: "Functions",
 *       SelectionRules: `{"rules": [{"rule-type": "selection", "rule-id": "3", "rule-name": "3", "object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema", "category-name": "Functions"}, "rule-action": "explicit"}]}`
 *     },
 *     {
 *       MetadataModelName: "Sequences",
 *       SelectionRules: `{"rules": [{"rule-type": "selection", "rule-id": "4", "rule-name": "4", "object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema", "category-name": "Sequences"}, "rule-action": "explicit"}]}`
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeMetadataModelChildrenCommand extends command<DescribeMetadataModelChildrenCommandInput, DescribeMetadataModelChildrenCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMetadataModelChildren",
  DescribeMetadataModelChildren$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetadataModelChildrenMessage;
      output: DescribeMetadataModelChildrenResponse;
    };
    sdk: {
      input: DescribeMetadataModelChildrenCommandInput;
      output: DescribeMetadataModelChildrenCommandOutput;
    };
  };
}
