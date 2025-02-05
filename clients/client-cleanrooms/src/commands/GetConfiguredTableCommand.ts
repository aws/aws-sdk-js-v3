// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConfiguredTableInput, GetConfiguredTableOutput } from "../models/models_0";
import { de_GetConfiguredTableCommand, se_GetConfiguredTableCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfiguredTableCommand}.
 */
export interface GetConfiguredTableCommandInput extends GetConfiguredTableInput {}
/**
 * @public
 *
 * The output of {@link GetConfiguredTableCommand}.
 */
export interface GetConfiguredTableCommandOutput extends GetConfiguredTableOutput, __MetadataBearer {}

/**
 * <p>Retrieves a configured table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetConfiguredTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetConfiguredTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsClient(config);
 * const input = { // GetConfiguredTableInput
 *   configuredTableIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetConfiguredTableCommand(input);
 * const response = await client.send(command);
 * // { // GetConfiguredTableOutput
 * //   configuredTable: { // ConfiguredTable
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     tableReference: { // TableReference Union: only one key present
 * //       glue: { // GlueTableReference
 * //         tableName: "STRING_VALUE", // required
 * //         databaseName: "STRING_VALUE", // required
 * //       },
 * //       snowflake: { // SnowflakeTableReference
 * //         secretArn: "STRING_VALUE", // required
 * //         accountIdentifier: "STRING_VALUE", // required
 * //         databaseName: "STRING_VALUE", // required
 * //         tableName: "STRING_VALUE", // required
 * //         schemaName: "STRING_VALUE", // required
 * //         tableSchema: { // SnowflakeTableSchema Union: only one key present
 * //           v1: [ // SnowflakeTableSchemaList
 * //             { // SnowflakeTableSchemaV1
 * //               columnName: "STRING_VALUE", // required
 * //               columnType: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       athena: { // AthenaTableReference
 * //         workGroup: "STRING_VALUE", // required
 * //         outputLocation: "STRING_VALUE",
 * //         databaseName: "STRING_VALUE", // required
 * //         tableName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     analysisRuleTypes: [ // ConfiguredTableAnalysisRuleTypeList // required
 * //       "AGGREGATION" || "LIST" || "CUSTOM",
 * //     ],
 * //     analysisMethod: "DIRECT_QUERY", // required
 * //     allowedColumns: [ // AllowedColumnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfiguredTableCommandInput - {@link GetConfiguredTableCommandInput}
 * @returns {@link GetConfiguredTableCommandOutput}
 * @see {@link GetConfiguredTableCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredTableCommandOutput} for command's `response` shape.
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
export class GetConfiguredTableCommand extends $Command
  .classBuilder<
    GetConfiguredTableCommandInput,
    GetConfiguredTableCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetConfiguredTable", {})
  .n("CleanRoomsClient", "GetConfiguredTableCommand")
  .f(void 0, void 0)
  .ser(se_GetConfiguredTableCommand)
  .de(de_GetConfiguredTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfiguredTableInput;
      output: GetConfiguredTableOutput;
    };
    sdk: {
      input: GetConfiguredTableCommandInput;
      output: GetConfiguredTableCommandOutput;
    };
  };
}
