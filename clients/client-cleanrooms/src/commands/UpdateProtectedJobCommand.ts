// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateProtectedJobInput, UpdateProtectedJobOutput } from "../models/models_1";
import { de_UpdateProtectedJobCommand, se_UpdateProtectedJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the processing of a currently running job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateProtectedJobCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateProtectedJobCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
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
 * //       analysisTemplateArn: "STRING_VALUE",
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
 * @public
 */
export class UpdateProtectedJobCommand extends $Command
  .classBuilder<
    UpdateProtectedJobCommandInput,
    UpdateProtectedJobCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "UpdateProtectedJob", {})
  .n("CleanRoomsClient", "UpdateProtectedJobCommand")
  .f(void 0, void 0)
  .ser(se_UpdateProtectedJobCommand)
  .de(de_UpdateProtectedJobCommand)
  .build() {
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
