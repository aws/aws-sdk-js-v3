// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeMetadataModelMessage, DescribeMetadataModelResponse } from "../models/models_0";
import { DescribeMetadataModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelCommand}.
 */
export interface DescribeMetadataModelCommandInput extends DescribeMetadataModelMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelCommand}.
 */
export interface DescribeMetadataModelCommandOutput extends DescribeMetadataModelResponse, __MetadataBearer {}

/**
 * Gets detailed information about the specified metadata model, including its definition and corresponding converted objects in the target database if applicable.
 *
 * **Required permissions:** `dms:DescribeMetadataModel`. For more information, see [Actions, resources, and condition keys for Database Migration Service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelMessage
 *   SelectionRules: "STRING_VALUE", // required
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   Origin: "SOURCE" || "TARGET", // required
 * };
 * const command = new DescribeMetadataModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelResponse
 * //   MetadataModelName: "STRING_VALUE",
 * //   MetadataModelType: "STRING_VALUE",
 * //   TargetMetadataModels: [ // MetadataModelReferenceList
 * //     { // MetadataModelReference
 * //       MetadataModelName: "STRING_VALUE",
 * //       SelectionRules: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Definition: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMetadataModelCommandInput - {@link DescribeMetadataModelCommandInput}
 * @returns {@link DescribeMetadataModelCommandOutput}
 * @see {@link DescribeMetadataModelCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *
 * DMS was denied access to the endpoint. Check that the role is correctly configured.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
 *
 * @example Retrieve a source table metadata model
 * ```javascript
 * // The following example retrieves detailed information about the ExampleTable table in the ExampleSchema schema from the source metadata tree, including its SQL definition and references to the corresponding converted metadata models in the target database.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   Origin: "SOURCE",
 *   SelectionRules: `{"rules": [{"rule-type": "selection", "rule-id": "1", "rule-name": "1", "object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema", "table-name": "ExampleTable"}, "rule-action": "explicit"}]}`
 * };
 * const command = new DescribeMetadataModelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Definition: "CREATE TABLE ExampleTable (ExampleColumn INTEGER NOT NULL);",
 *   MetadataModelName: "ExampleTable",
 *   MetadataModelType: "table",
 *   TargetMetadataModels: [
 *     {
 *       MetadataModelName: "exampletable",
 *       SelectionRules: `{"rules": [{"rule-type": "selection", "rule-id": "1", "rule-name": "1", "object-locator": {"server-name": "example-target-server.us-east-1.rds.amazonaws.com", "schema-name": "exampleschema", "table-name": "exampletable"}, "rule-action": "explicit"}]}`
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeMetadataModelCommand extends command<DescribeMetadataModelCommandInput, DescribeMetadataModelCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMetadataModel",
  DescribeMetadataModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetadataModelMessage;
      output: DescribeMetadataModelResponse;
    };
    sdk: {
      input: DescribeMetadataModelCommandInput;
      output: DescribeMetadataModelCommandOutput;
    };
  };
}
