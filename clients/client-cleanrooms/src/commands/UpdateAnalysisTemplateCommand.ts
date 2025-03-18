// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAnalysisTemplateInput,
  UpdateAnalysisTemplateOutput,
  UpdateAnalysisTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateAnalysisTemplateCommand, se_UpdateAnalysisTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAnalysisTemplateCommand}.
 */
export interface UpdateAnalysisTemplateCommandInput extends UpdateAnalysisTemplateInput {}
/**
 * @public
 *
 * The output of {@link UpdateAnalysisTemplateCommand}.
 */
export interface UpdateAnalysisTemplateCommandOutput extends UpdateAnalysisTemplateOutput, __MetadataBearer {}

/**
 * <p>Updates the analysis template metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateAnalysisTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateAnalysisTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateAnalysisTemplateInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   analysisTemplateIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateAnalysisTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAnalysisTemplateOutput
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
 * //     format: "SQL" || "PYSPARK_1_0", // required
 * //     source: { // AnalysisSource Union: only one key present
 * //       text: "STRING_VALUE",
 * //       artifacts: { // AnalysisTemplateArtifacts
 * //         entryPoint: { // AnalysisTemplateArtifact
 * //           location: { // S3Location
 * //             bucket: "STRING_VALUE", // required
 * //             key: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         additionalArtifacts: [ // AnalysisTemplateArtifactList
 * //           {
 * //             location: {
 * //               bucket: "STRING_VALUE", // required
 * //               key: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         ],
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     sourceMetadata: { // AnalysisSourceMetadata Union: only one key present
 * //       artifacts: { // AnalysisTemplateArtifactMetadata
 * //         entryPointHash: { // Hash
 * //           sha256: "STRING_VALUE",
 * //         },
 * //         additionalArtifactHashes: [ // HashList
 * //           {
 * //             sha256: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     analysisParameters: [ // AnalysisParameterList
 * //       { // AnalysisParameter
 * //         name: "STRING_VALUE", // required
 * //         type: "SMALLINT" || "INTEGER" || "BIGINT" || "DECIMAL" || "REAL" || "DOUBLE_PRECISION" || "BOOLEAN" || "CHAR" || "VARCHAR" || "DATE" || "TIMESTAMP" || "TIMESTAMPTZ" || "TIME" || "TIMETZ" || "VARBYTE" || "BINARY" || "BYTE" || "CHARACTER" || "DOUBLE" || "FLOAT" || "INT" || "LONG" || "NUMERIC" || "SHORT" || "STRING" || "TIMESTAMP_LTZ" || "TIMESTAMP_NTZ" || "TINYINT", // required
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
 * @param UpdateAnalysisTemplateCommandInput - {@link UpdateAnalysisTemplateCommandInput}
 * @returns {@link UpdateAnalysisTemplateCommandOutput}
 * @see {@link UpdateAnalysisTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateAnalysisTemplateCommandOutput} for command's `response` shape.
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
export class UpdateAnalysisTemplateCommand extends $Command
  .classBuilder<
    UpdateAnalysisTemplateCommandInput,
    UpdateAnalysisTemplateCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "UpdateAnalysisTemplate", {})
  .n("CleanRoomsClient", "UpdateAnalysisTemplateCommand")
  .f(void 0, UpdateAnalysisTemplateOutputFilterSensitiveLog)
  .ser(se_UpdateAnalysisTemplateCommand)
  .de(de_UpdateAnalysisTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAnalysisTemplateInput;
      output: UpdateAnalysisTemplateOutput;
    };
    sdk: {
      input: UpdateAnalysisTemplateCommandInput;
      output: UpdateAnalysisTemplateCommandOutput;
    };
  };
}
