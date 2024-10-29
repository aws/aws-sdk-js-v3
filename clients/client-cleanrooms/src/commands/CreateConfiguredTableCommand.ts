// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConfiguredTableInput, CreateConfiguredTableOutput } from "../models/models_0";
import { de_CreateConfiguredTableCommand, se_CreateConfiguredTableCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfiguredTableCommand}.
 */
export interface CreateConfiguredTableCommandInput extends CreateConfiguredTableInput {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredTableCommand}.
 */
export interface CreateConfiguredTableCommandOutput extends CreateConfiguredTableOutput, __MetadataBearer {}

/**
 * <p>Creates a new configured table resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateConfiguredTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateConfiguredTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateConfiguredTableInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tableReference: { // TableReference Union: only one key present
 *     glue: { // GlueTableReference
 *       tableName: "STRING_VALUE", // required
 *       databaseName: "STRING_VALUE", // required
 *     },
 *   },
 *   allowedColumns: [ // AllowedColumnList // required
 *     "STRING_VALUE",
 *   ],
 *   analysisMethod: "DIRECT_QUERY", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConfiguredTableCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredTableOutput
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
 * @param CreateConfiguredTableCommandInput - {@link CreateConfiguredTableCommandInput}
 * @returns {@link CreateConfiguredTableCommandOutput}
 * @see {@link CreateConfiguredTableCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredTableCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
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
export class CreateConfiguredTableCommand extends $Command
  .classBuilder<
    CreateConfiguredTableCommandInput,
    CreateConfiguredTableCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "CreateConfiguredTable", {})
  .n("CleanRoomsClient", "CreateConfiguredTableCommand")
  .f(void 0, void 0)
  .ser(se_CreateConfiguredTableCommand)
  .de(de_CreateConfiguredTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfiguredTableInput;
      output: CreateConfiguredTableOutput;
    };
    sdk: {
      input: CreateConfiguredTableCommandInput;
      output: CreateConfiguredTableCommandOutput;
    };
  };
}
