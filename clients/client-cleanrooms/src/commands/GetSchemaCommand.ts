// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSchemaInput, GetSchemaOutput } from "../models/models_0";
import { de_GetSchemaCommand, se_GetSchemaCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaCommand}.
 */
export interface GetSchemaCommandInput extends GetSchemaInput {}
/**
 * @public
 *
 * The output of {@link GetSchemaCommand}.
 */
export interface GetSchemaCommandOutput extends GetSchemaOutput, __MetadataBearer {}

/**
 * <p>Retrieves the schema for a relation within a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetSchemaCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetSchemaCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // GetSchemaInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetSchemaCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaOutput
 * //   schema: { // Schema
 * //     columns: [ // ColumnList // required
 * //       { // Column
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     partitionKeys: [ // required
 * //       {
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     analysisRuleTypes: [ // AnalysisRuleTypeList // required
 * //       "AGGREGATION" || "LIST" || "CUSTOM",
 * //     ],
 * //     analysisMethod: "STRING_VALUE",
 * //     creatorAccountId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     type: "TABLE", // required
 * //     schemaStatusDetails: [ // SchemaStatusDetailList // required
 * //       { // SchemaStatusDetail
 * //         status: "READY" || "NOT_READY", // required
 * //         reasons: [ // SchemaStatusReasonList
 * //           { // SchemaStatusReason
 * //             code: "ANALYSIS_RULE_MISSING" || "ANALYSIS_TEMPLATES_NOT_CONFIGURED" || "ANALYSIS_PROVIDERS_NOT_CONFIGURED" || "DIFFERENTIAL_PRIVACY_POLICY_NOT_CONFIGURED", // required
 * //             message: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         analysisRuleType: "AGGREGATION" || "LIST" || "CUSTOM",
 * //         configurations: [ // SchemaConfigurationList
 * //           "DIFFERENTIAL_PRIVACY",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSchemaCommandInput - {@link GetSchemaCommandInput}
 * @returns {@link GetSchemaCommandOutput}
 * @see {@link GetSchemaCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCommandOutput} for command's `response` shape.
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
export class GetSchemaCommand extends $Command
  .classBuilder<
    GetSchemaCommandInput,
    GetSchemaCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "GetSchema", {})
  .n("CleanRoomsClient", "GetSchemaCommand")
  .f(void 0, void 0)
  .ser(se_GetSchemaCommand)
  .de(de_GetSchemaCommand)
  .build() {}
