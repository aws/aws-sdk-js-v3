// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetProtectedQueryInput } from "../models/models_0";
import type { GetProtectedQueryOutput } from "../models/models_1";
import { GetProtectedQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProtectedQueryCommand}.
 */
export interface GetProtectedQueryCommandInput extends GetProtectedQueryInput {}
/**
 * @public
 *
 * The output of {@link GetProtectedQueryCommand}.
 */
export interface GetProtectedQueryCommandOutput extends GetProtectedQueryOutput, __MetadataBearer {}

/**
 * <p>Returns query processing metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetProtectedQueryCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetProtectedQueryCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetProtectedQueryInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   protectedQueryIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetProtectedQueryCommand(input);
 * const response = await client.send(command);
 * // { // GetProtectedQueryOutput
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
 * //         properties: { // WorkerComputeConfigurationProperties Union: only one key present
 * //           spark: { // SparkProperties
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProtectedQueryCommandInput - {@link GetProtectedQueryCommandInput}
 * @returns {@link GetProtectedQueryCommandOutput}
 * @see {@link GetProtectedQueryCommandInput} for command's `input` shape.
 * @see {@link GetProtectedQueryCommandOutput} for command's `response` shape.
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
export class GetProtectedQueryCommand extends $Command
  .classBuilder<
    GetProtectedQueryCommandInput,
    GetProtectedQueryCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetProtectedQuery", {})
  .n("CleanRoomsClient", "GetProtectedQueryCommand")
  .sc(GetProtectedQuery$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProtectedQueryInput;
      output: GetProtectedQueryOutput;
    };
    sdk: {
      input: GetProtectedQueryCommandInput;
      output: GetProtectedQueryCommandOutput;
    };
  };
}
