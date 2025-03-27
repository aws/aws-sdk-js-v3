// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateTableOptimizerRequest, CreateTableOptimizerResponse } from "../models/models_1";
import { de_CreateTableOptimizerCommand, se_CreateTableOptimizerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTableOptimizerCommand}.
 */
export interface CreateTableOptimizerCommandInput extends CreateTableOptimizerRequest {}
/**
 * @public
 *
 * The output of {@link CreateTableOptimizerCommand}.
 */
export interface CreateTableOptimizerCommandOutput extends CreateTableOptimizerResponse, __MetadataBearer {}

/**
 * <p>Creates a new table optimizer for a specific function. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateTableOptimizerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateTableOptimizerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateTableOptimizerRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Type: "compaction" || "retention" || "orphan_file_deletion", // required
 *   TableOptimizerConfiguration: { // TableOptimizerConfiguration
 *     roleArn: "STRING_VALUE",
 *     enabled: true || false,
 *     vpcConfiguration: { // TableOptimizerVpcConfiguration Union: only one key present
 *       glueConnectionName: "STRING_VALUE",
 *     },
 *     retentionConfiguration: { // RetentionConfiguration
 *       icebergConfiguration: { // IcebergRetentionConfiguration
 *         snapshotRetentionPeriodInDays: Number("int"),
 *         numberOfSnapshotsToRetain: Number("int"),
 *         cleanExpiredFiles: true || false,
 *       },
 *     },
 *     orphanFileDeletionConfiguration: { // OrphanFileDeletionConfiguration
 *       icebergConfiguration: { // IcebergOrphanFileDeletionConfiguration
 *         orphanFileRetentionPeriodInDays: Number("int"),
 *         location: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new CreateTableOptimizerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateTableOptimizerCommandInput - {@link CreateTableOptimizerCommandInput}
 * @returns {@link CreateTableOptimizerCommandOutput}
 * @see {@link CreateTableOptimizerCommandInput} for command's `input` shape.
 * @see {@link CreateTableOptimizerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
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
export class CreateTableOptimizerCommand extends $Command
  .classBuilder<
    CreateTableOptimizerCommandInput,
    CreateTableOptimizerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "CreateTableOptimizer", {})
  .n("GlueClient", "CreateTableOptimizerCommand")
  .f(void 0, void 0)
  .ser(se_CreateTableOptimizerCommand)
  .de(de_CreateTableOptimizerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTableOptimizerRequest;
      output: {};
    };
    sdk: {
      input: CreateTableOptimizerCommandInput;
      output: CreateTableOptimizerCommandOutput;
    };
  };
}
