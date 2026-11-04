// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProtectedJobInput, UpdateProtectedJobOutput } from "../models/models_1";
import { UpdateProtectedJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProtectedJobCommand}.
 */
export interface UpdateProtectedJobCommandInput extends UpdateProtectedJobInput {}
/**
 * @public
 *
 * The output of {@link UpdateProtectedJobCommand}.
 */
export interface UpdateProtectedJobCommandOutput extends UpdateProtectedJobOutput, __MetadataBearer {}

/**
 * Updates the processing of a currently running job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateProtectedJobCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateProtectedJobCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateProtectedJobInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   protectedJobIdentifier: "STRING_VALUE", // required
 *   targetStatus: "CANCELLED", // required
 * };
 * const command = new UpdateProtectedJobCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProtectedJobOutput
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
 * @param UpdateProtectedJobCommandInput - {@link UpdateProtectedJobCommandInput}
 * @returns {@link UpdateProtectedJobCommandOutput}
 * @see {@link UpdateProtectedJobCommandInput} for command's `input` shape.
 * @see {@link UpdateProtectedJobCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
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
export class UpdateProtectedJobCommand extends command<UpdateProtectedJobCommandInput, UpdateProtectedJobCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProtectedJob",
  UpdateProtectedJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProtectedJobInput;
      output: UpdateProtectedJobOutput;
    };
    sdk: {
      input: UpdateProtectedJobCommandInput;
      output: UpdateProtectedJobCommandOutput;
    };
  };
}
