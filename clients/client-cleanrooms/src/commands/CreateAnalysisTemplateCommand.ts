// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAnalysisTemplateInput,
  CreateAnalysisTemplateInputFilterSensitiveLog,
  CreateAnalysisTemplateOutput,
  CreateAnalysisTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAnalysisTemplateCommand, se_CreateAnalysisTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAnalysisTemplateCommand}.
 */
export interface CreateAnalysisTemplateCommandInput extends CreateAnalysisTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreateAnalysisTemplateCommand}.
 */
export interface CreateAnalysisTemplateCommandOutput extends CreateAnalysisTemplateOutput, __MetadataBearer {}

/**
 * <p>Creates a new analysis template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateAnalysisTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateAnalysisTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateAnalysisTemplateInput
 *   description: "STRING_VALUE",
 *   membershipIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   format: "STRING_VALUE", // required
 *   source: { // AnalysisSource Union: only one key present
 *     text: "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   analysisParameters: [ // AnalysisParameterList
 *     { // AnalysisParameter
 *       name: "STRING_VALUE", // required
 *       type: "SMALLINT" || "INTEGER" || "BIGINT" || "DECIMAL" || "REAL" || "DOUBLE_PRECISION" || "BOOLEAN" || "CHAR" || "VARCHAR" || "DATE" || "TIMESTAMP" || "TIMESTAMPTZ" || "TIME" || "TIMETZ" || "VARBYTE", // required
 *       defaultValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateAnalysisTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnalysisTemplateOutput
 * //   analysisTemplate: { // AnalysisTemplate
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     name: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     schema: { // AnalysisSchema
 * //       referencedTables: [ // QueryTables
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     format: "STRING_VALUE", // required
 * //     source: { // AnalysisSource Union: only one key present
 * //       text: "STRING_VALUE",
 * //     },
 * //     analysisParameters: [ // AnalysisParameterList
 * //       { // AnalysisParameter
 * //         name: "STRING_VALUE", // required
 * //         type: "SMALLINT" || "INTEGER" || "BIGINT" || "DECIMAL" || "REAL" || "DOUBLE_PRECISION" || "BOOLEAN" || "CHAR" || "VARCHAR" || "DATE" || "TIMESTAMP" || "TIMESTAMPTZ" || "TIME" || "TIMETZ" || "VARBYTE", // required
 * //         defaultValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     validations: [ // AnalysisTemplateValidationStatusDetailList
 * //       { // AnalysisTemplateValidationStatusDetail
 * //         type: "DIFFERENTIAL_PRIVACY", // required
 * //         status: "VALID" || "INVALID" || "UNABLE_TO_VALIDATE", // required
 * //         reasons: [ // AnalysisTemplateValidationStatusReasonList
 * //           { // AnalysisTemplateValidationStatusReason
 * //             message: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAnalysisTemplateCommandInput - {@link CreateAnalysisTemplateCommandInput}
 * @returns {@link CreateAnalysisTemplateCommandOutput}
 * @see {@link CreateAnalysisTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateAnalysisTemplateCommandOutput} for command's `response` shape.
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
export class CreateAnalysisTemplateCommand extends $Command
  .classBuilder<
    CreateAnalysisTemplateCommandInput,
    CreateAnalysisTemplateCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "CreateAnalysisTemplate", {})
  .n("CleanRoomsClient", "CreateAnalysisTemplateCommand")
  .f(CreateAnalysisTemplateInputFilterSensitiveLog, CreateAnalysisTemplateOutputFilterSensitiveLog)
  .ser(se_CreateAnalysisTemplateCommand)
  .de(de_CreateAnalysisTemplateCommand)
  .build() {}
