// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  CreateIntegrationTablePropertiesRequest,
  CreateIntegrationTablePropertiesResponse,
} from "../models/models_1";
import { CreateIntegrationTableProperties } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIntegrationTablePropertiesCommand}.
 */
export interface CreateIntegrationTablePropertiesCommandInput extends CreateIntegrationTablePropertiesRequest {}
/**
 * @public
 *
 * The output of {@link CreateIntegrationTablePropertiesCommand}.
 */
export interface CreateIntegrationTablePropertiesCommandOutput
  extends CreateIntegrationTablePropertiesResponse,
    __MetadataBearer {}

/**
 * <p>This API is used to provide optional override properties for the the tables that need to be replicated. These properties can include properties for filtering and partitioning for the source and target tables. To set both source and target properties the same API need to be invoked with the Glue connection ARN as <code>ResourceArn</code> with <code>SourceTableConfig</code>, and the Glue database ARN as <code>ResourceArn</code> with <code>TargetTableConfig</code> respectively.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateIntegrationTablePropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateIntegrationTablePropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateIntegrationTablePropertiesRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   SourceTableConfig: { // SourceTableConfig
 *     Fields: [ // SourceTableFieldsList
 *       "STRING_VALUE",
 *     ],
 *     FilterPredicate: "STRING_VALUE",
 *     PrimaryKey: [ // PrimaryKeyList
 *       "STRING_VALUE",
 *     ],
 *     RecordUpdateField: "STRING_VALUE",
 *   },
 *   TargetTableConfig: { // TargetTableConfig
 *     UnnestSpec: "TOPLEVEL" || "FULL" || "NOUNNEST",
 *     PartitionSpec: [ // IntegrationPartitionSpecList
 *       { // IntegrationPartition
 *         FieldName: "STRING_VALUE",
 *         FunctionSpec: "STRING_VALUE",
 *         ConversionSpec: "STRING_VALUE",
 *       },
 *     ],
 *     TargetTableName: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIntegrationTablePropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateIntegrationTablePropertiesCommandInput - {@link CreateIntegrationTablePropertiesCommandInput}
 * @returns {@link CreateIntegrationTablePropertiesCommandOutput}
 * @see {@link CreateIntegrationTablePropertiesCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationTablePropertiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateIntegrationTablePropertiesCommand extends $Command
  .classBuilder<
    CreateIntegrationTablePropertiesCommandInput,
    CreateIntegrationTablePropertiesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CreateIntegrationTableProperties", {})
  .n("GlueClient", "CreateIntegrationTablePropertiesCommand")
  .sc(CreateIntegrationTableProperties)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIntegrationTablePropertiesRequest;
      output: {};
    };
    sdk: {
      input: CreateIntegrationTablePropertiesCommandInput;
      output: CreateIntegrationTablePropertiesCommandOutput;
    };
  };
}
