// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetSchemaInput, BatchGetSchemaOutput } from "../models/models_0";
import { de_BatchGetSchemaCommand, se_BatchGetSchemaCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetSchemaCommand}.
 */
export interface BatchGetSchemaCommandInput extends BatchGetSchemaInput {}
/**
 * @public
 *
 * The output of {@link BatchGetSchemaCommand}.
 */
export interface BatchGetSchemaCommandOutput extends BatchGetSchemaOutput, __MetadataBearer {}

/**
 * <p>Retrieves multiple schemas by their identifiers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, BatchGetSchemaCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, BatchGetSchemaCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // BatchGetSchemaInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   names: [ // TableAliasList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetSchemaCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSchemaOutput
 * //   schemas: [ // SchemaList // required
 * //     { // Schema
 * //       columns: [ // ColumnList // required
 * //         { // Column
 * //           name: "STRING_VALUE", // required
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       partitionKeys: [ // required
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       analysisRuleTypes: [ // AnalysisRuleTypeList // required
 * //         "AGGREGATION" || "LIST" || "CUSTOM",
 * //       ],
 * //       analysisMethod: "STRING_VALUE",
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       type: "TABLE", // required
 * //       schemaStatusDetails: [ // SchemaStatusDetailList // required
 * //         { // SchemaStatusDetail
 * //           status: "READY" || "NOT_READY", // required
 * //           reasons: [ // SchemaStatusReasonList
 * //             { // SchemaStatusReason
 * //               code: "ANALYSIS_RULE_MISSING" || "ANALYSIS_TEMPLATES_NOT_CONFIGURED" || "ANALYSIS_PROVIDERS_NOT_CONFIGURED" || "DIFFERENTIAL_PRIVACY_POLICY_NOT_CONFIGURED", // required
 * //               message: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           analysisRuleType: "AGGREGATION" || "LIST" || "CUSTOM",
 * //           configurations: [ // SchemaConfigurationList
 * //             "DIFFERENTIAL_PRIVACY",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   errors: [ // BatchGetSchemaErrorList // required
 * //     { // BatchGetSchemaError
 * //       name: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSchemaCommandInput - {@link BatchGetSchemaCommandInput}
 * @returns {@link BatchGetSchemaCommandOutput}
 * @see {@link BatchGetSchemaCommandInput} for command's `input` shape.
 * @see {@link BatchGetSchemaCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 * @public
 */
export class BatchGetSchemaCommand extends $Command
  .classBuilder<
    BatchGetSchemaCommandInput,
    BatchGetSchemaCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "BatchGetSchema", {})
  .n("CleanRoomsClient", "BatchGetSchemaCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetSchemaCommand)
  .de(de_BatchGetSchemaCommand)
  .build() {}
