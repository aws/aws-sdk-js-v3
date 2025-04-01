// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  CreateDatasetRequest,
  CreateDatasetRequestFilterSensitiveLog,
  CreateDatasetResponse,
} from "../models/models_0";
import { de_CreateDatasetCommand, se_CreateDatasetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandInput extends CreateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandOutput extends CreateDatasetResponse, __MetadataBearer {}

/**
 * <p>Creates a new FinSpace Dataset.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, CreateDatasetCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, CreateDatasetCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // CreateDatasetRequest
 *   clientToken: "STRING_VALUE",
 *   datasetTitle: "STRING_VALUE", // required
 *   kind: "TABULAR" || "NON_TABULAR", // required
 *   datasetDescription: "STRING_VALUE",
 *   ownerInfo: { // DatasetOwnerInfo
 *     name: "STRING_VALUE",
 *     phoneNumber: "STRING_VALUE",
 *     email: "STRING_VALUE",
 *   },
 *   permissionGroupParams: { // PermissionGroupParams
 *     permissionGroupId: "STRING_VALUE",
 *     datasetPermissions: [ // ResourcePermissionsList
 *       { // ResourcePermission
 *         permission: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   alias: "STRING_VALUE",
 *   schemaDefinition: { // SchemaUnion
 *     tabularSchemaConfig: { // SchemaDefinition
 *       columns: [ // ColumnList
 *         { // ColumnDefinition
 *           dataType: "STRING" || "CHAR" || "INTEGER" || "TINYINT" || "SMALLINT" || "BIGINT" || "FLOAT" || "DOUBLE" || "DATE" || "DATETIME" || "BOOLEAN" || "BINARY",
 *           columnName: "STRING_VALUE",
 *           columnDescription: "STRING_VALUE",
 *         },
 *       ],
 *       primaryKeyColumns: [ // ColumnNameList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetResponse
 * //   datasetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDatasetCommandInput - {@link CreateDatasetCommandInput}
 * @returns {@link CreateDatasetCommandOutput}
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 *
 * @public
 */
export class CreateDatasetCommand extends $Command
  .classBuilder<
    CreateDatasetCommandInput,
    CreateDatasetCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroPublicAPI", "CreateDataset", {})
  .n("FinspaceDataClient", "CreateDatasetCommand")
  .f(CreateDatasetRequestFilterSensitiveLog, void 0)
  .ser(se_CreateDatasetCommand)
  .de(de_CreateDatasetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetRequest;
      output: CreateDatasetResponse;
    };
    sdk: {
      input: CreateDatasetCommandInput;
      output: CreateDatasetCommandOutput;
    };
  };
}
