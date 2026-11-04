// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartProtectedJobInput, StartProtectedJobOutput } from "../models/models_1";
import { StartProtectedJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a protected job that is started by Clean Rooms.
 *
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
 *     parameters: { // JobParameterMap
 *       "<keys>": "STRING_VALUE",
 *     },
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
 *       properties: { // WorkerComputeConfigurationProperties Union: only one key present
 *         spark: { // SparkProperties
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   jobComputePayerAccountId: "STRING_VALUE",
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
 * //       parameters: { // JobParameterMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
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
 * //         properties: { // WorkerComputeConfigurationProperties Union: only one key present
 * //           spark: { // SparkProperties
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //     jobComputePayerAccountId: "STRING_VALUE",
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
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request denied because service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class StartProtectedJobCommand extends command<StartProtectedJobCommandInput, StartProtectedJobCommandOutput>(
  _ep0,
  _mw0,
  "StartProtectedJob",
  StartProtectedJob$
) {
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
