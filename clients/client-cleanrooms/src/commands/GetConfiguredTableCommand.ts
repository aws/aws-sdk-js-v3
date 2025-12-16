// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetConfiguredTableInput, GetConfiguredTableOutput } from "../models/models_0";
import { GetConfiguredTable$ } from "../schemas/schemas_0";

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
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
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
 * //         region: "us-west-1" || "us-west-2" || "us-east-1" || "us-east-2" || "af-south-1" || "ap-east-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-5" || "ap-southeast-4" || "ap-southeast-7" || "ap-south-1" || "ap-northeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ca-central-1" || "ca-west-1" || "eu-south-1" || "eu-west-3" || "eu-south-2" || "eu-central-2" || "eu-central-1" || "eu-north-1" || "eu-west-1" || "eu-west-2" || "me-south-1" || "me-central-1" || "il-central-1" || "sa-east-1" || "mx-central-1" || "ap-east-2",
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
 * //         region: "us-west-1" || "us-west-2" || "us-east-1" || "us-east-2" || "af-south-1" || "ap-east-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-5" || "ap-southeast-4" || "ap-southeast-7" || "ap-south-1" || "ap-northeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ca-central-1" || "ca-west-1" || "eu-south-1" || "eu-west-3" || "eu-south-2" || "eu-central-2" || "eu-central-1" || "eu-north-1" || "eu-west-1" || "eu-west-2" || "me-south-1" || "me-central-1" || "il-central-1" || "sa-east-1" || "mx-central-1" || "ap-east-2",
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
 * //     analysisMethod: "DIRECT_QUERY" || "DIRECT_JOB" || "MULTIPLE", // required
 * //     allowedColumns: [ // AllowedColumnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     selectedAnalysisMethods: [ // SelectedAnalysisMethods
 * //       "DIRECT_QUERY" || "DIRECT_JOB",
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetConfiguredTable", {})
  .n("CleanRoomsClient", "GetConfiguredTableCommand")
  .sc(GetConfiguredTable$)
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
