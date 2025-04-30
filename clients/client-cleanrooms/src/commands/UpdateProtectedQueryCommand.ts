// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateProtectedQueryInput,
  UpdateProtectedQueryOutput,
  UpdateProtectedQueryOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_UpdateProtectedQueryCommand, se_UpdateProtectedQueryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProtectedQueryCommand}.
 */
export interface UpdateProtectedQueryCommandInput extends UpdateProtectedQueryInput {}
/**
 * @public
 *
 * The output of {@link UpdateProtectedQueryCommand}.
 */
export interface UpdateProtectedQueryCommandOutput extends UpdateProtectedQueryOutput, __MetadataBearer {}

/**
 * <p>Updates the processing of a currently running query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateProtectedQueryCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateProtectedQueryCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateProtectedQueryInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   protectedQueryIdentifier: "STRING_VALUE", // required
 *   targetStatus: "STRING_VALUE", // required
 * };
 * const command = new UpdateProtectedQueryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProtectedQueryOutput
 * //   protectedQuery: { // ProtectedQuery
 * //     id: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     sqlParameters: { // ProtectedQuerySQLParameters
 * //       queryString: "STRING_VALUE",
 * //       analysisTemplateArn: "STRING_VALUE",
 * //       parameters: { // ParameterMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     status: "STRING_VALUE", // required
 * //     resultConfiguration: { // ProtectedQueryResultConfiguration
 * //       outputConfiguration: { // ProtectedQueryOutputConfiguration Union: only one key present
 * //         s3: { // ProtectedQueryS3OutputConfiguration
 * //           resultFormat: "STRING_VALUE", // required
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //           singleFileOutput: true || false,
 * //         },
 * //         member: { // ProtectedQueryMemberOutputConfiguration
 * //           accountId: "STRING_VALUE", // required
 * //         },
 * //         distribute: { // ProtectedQueryDistributeOutputConfiguration
 * //           locations: [ // ProtectedQueryDistributeOutputConfigurationLocations // required
 * //             { // ProtectedQueryDistributeOutputConfigurationLocation Union: only one key present
 * //               s3: {
 * //                 resultFormat: "STRING_VALUE", // required
 * //                 bucket: "STRING_VALUE", // required
 * //                 keyPrefix: "STRING_VALUE",
 * //                 singleFileOutput: true || false,
 * //               },
 * //               member: {
 * //                 accountId: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     statistics: { // ProtectedQueryStatistics
 * //       totalDurationInMillis: Number("long"),
 * //       billedResourceUtilization: { // BilledResourceUtilization
 * //         units: Number("double"), // required
 * //       },
 * //     },
 * //     result: { // ProtectedQueryResult
 * //       output: { // ProtectedQueryOutput Union: only one key present
 * //         s3: { // ProtectedQueryS3Output
 * //           location: "STRING_VALUE", // required
 * //         },
 * //         memberList: [ // ProtectedQueryMemberOutputList
 * //           { // ProtectedQuerySingleMemberOutput
 * //             accountId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         distribute: { // ProtectedQueryDistributeOutput
 * //           s3: {
 * //             location: "STRING_VALUE", // required
 * //           },
 * //           memberList: [
 * //             {
 * //               accountId: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     error: { // ProtectedQueryError
 * //       message: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //     },
 * //     differentialPrivacy: { // DifferentialPrivacyParameters
 * //       sensitivityParameters: [ // DifferentialPrivacySensitivityParametersList // required
 * //         { // DifferentialPrivacySensitivityParameters
 * //           aggregationType: "AVG" || "COUNT" || "COUNT_DISTINCT" || "SUM" || "STDDEV", // required
 * //           aggregationExpression: "STRING_VALUE", // required
 * //           userContributionLimit: Number("int"), // required
 * //           minColumnValue: Number("float"),
 * //           maxColumnValue: Number("float"),
 * //         },
 * //       ],
 * //     },
 * //     computeConfiguration: { // ComputeConfiguration Union: only one key present
 * //       worker: { // WorkerComputeConfiguration
 * //         type: "CR.1X" || "CR.4X",
 * //         number: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProtectedQueryCommandInput - {@link UpdateProtectedQueryCommandInput}
 * @returns {@link UpdateProtectedQueryCommandOutput}
 * @see {@link UpdateProtectedQueryCommandInput} for command's `input` shape.
 * @see {@link UpdateProtectedQueryCommandOutput} for command's `response` shape.
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
export class UpdateProtectedQueryCommand extends $Command
  .classBuilder<
    UpdateProtectedQueryCommandInput,
    UpdateProtectedQueryCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "UpdateProtectedQuery", {})
  .n("CleanRoomsClient", "UpdateProtectedQueryCommand")
  .f(void 0, UpdateProtectedQueryOutputFilterSensitiveLog)
  .ser(se_UpdateProtectedQueryCommand)
  .de(de_UpdateProtectedQueryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProtectedQueryInput;
      output: UpdateProtectedQueryOutput;
    };
    sdk: {
      input: UpdateProtectedQueryCommandInput;
      output: UpdateProtectedQueryCommandOutput;
    };
  };
}
