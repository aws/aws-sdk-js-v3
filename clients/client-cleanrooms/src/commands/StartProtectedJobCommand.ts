// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartProtectedJobInput, StartProtectedJobOutput } from "../models/models_1";
import { StartProtectedJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartProtectedJobCommand}.
 */
export interface StartProtectedJobCommandInput extends StartProtectedJobInput {}
/**
 * @public
 *
 * The output of {@link StartProtectedJobCommand}.
 */
export interface StartProtectedJobCommandOutput extends StartProtectedJobOutput, __MetadataBearer {}

/**
 * <p>Creates a protected job that is started by Clean Rooms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, StartProtectedJobCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, StartProtectedJobCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // StartProtectedJobInput
 *   type: "PYSPARK", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   jobParameters: { // ProtectedJobParameters
 *     analysisTemplateArn: "STRING_VALUE", // required
 *   },
 *   resultConfiguration: { // ProtectedJobResultConfigurationInput
 *     outputConfiguration: { // ProtectedJobOutputConfigurationInput Union: only one key present
 *       member: { // ProtectedJobMemberOutputConfigurationInput
 *         accountId: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   computeConfiguration: { // ProtectedJobComputeConfiguration Union: only one key present
 *     worker: { // ProtectedJobWorkerComputeConfiguration
 *       type: "CR.1X" || "CR.4X", // required
 *       number: Number("int"), // required
 *     },
 *   },
 * };
 * const command = new StartProtectedJobCommand(input);
 * const response = await client.send(command);
 * // { // StartProtectedJobOutput
 * //   protectedJob: { // ProtectedJob
 * //     id: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     jobParameters: { // ProtectedJobParameters
 * //       analysisTemplateArn: "STRING_VALUE", // required
 * //     },
 * //     status: "SUBMITTED" || "STARTED" || "CANCELLED" || "CANCELLING" || "FAILED" || "SUCCESS", // required
 * //     resultConfiguration: { // ProtectedJobResultConfigurationOutput
 * //       outputConfiguration: { // ProtectedJobOutputConfigurationOutput Union: only one key present
 * //         s3: { // ProtectedJobS3OutputConfigurationOutput
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //         },
 * //         member: { // ProtectedJobMemberOutputConfigurationOutput
 * //           accountId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     statistics: { // ProtectedJobStatistics
 * //       totalDurationInMillis: Number("long"),
 * //       billedResourceUtilization: { // BilledJobResourceUtilization
 * //         units: Number("double"), // required
 * //       },
 * //     },
 * //     result: { // ProtectedJobResult
 * //       output: { // ProtectedJobOutput Union: only one key present
 * //         s3: { // ProtectedJobS3Output
 * //           location: "STRING_VALUE", // required
 * //         },
 * //         memberList: [ // ProtectedJobMemberOutputList
 * //           { // ProtectedJobSingleMemberOutput
 * //             accountId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     error: { // ProtectedJobError
 * //       message: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //     },
 * //     computeConfiguration: { // ProtectedJobComputeConfiguration Union: only one key present
 * //       worker: { // ProtectedJobWorkerComputeConfiguration
 * //         type: "CR.1X" || "CR.4X", // required
 * //         number: Number("int"), // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartProtectedJobCommandInput - {@link StartProtectedJobCommandInput}
 * @returns {@link StartProtectedJobCommandOutput}
 * @see {@link StartProtectedJobCommandInput} for command's `input` shape.
 * @see {@link StartProtectedJobCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class StartProtectedJobCommand extends $Command
  .classBuilder<
    StartProtectedJobCommandInput,
    StartProtectedJobCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "StartProtectedJob", {})
  .n("CleanRoomsClient", "StartProtectedJobCommand")
  .sc(StartProtectedJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartProtectedJobInput;
      output: StartProtectedJobOutput;
    };
    sdk: {
      input: StartProtectedJobCommandInput;
      output: StartProtectedJobCommandOutput;
    };
  };
}
