// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchGetJobEntityRequest,
  BatchGetJobEntityResponse,
  BatchGetJobEntityResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchGetJobEntityCommand, se_BatchGetJobEntityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetJobEntityCommand}.
 */
export interface BatchGetJobEntityCommandInput extends BatchGetJobEntityRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetJobEntityCommand}.
 */
export interface BatchGetJobEntityCommandOutput extends BatchGetJobEntityResponse, __MetadataBearer {}

/**
 * <p>Get batched job details for a worker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, BatchGetJobEntityCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, BatchGetJobEntityCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // BatchGetJobEntityRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   workerId: "STRING_VALUE", // required
 *   identifiers: [ // JobEntityIdentifiers // required
 *     { // JobEntityIdentifiersUnion Union: only one key present
 *       jobDetails: { // JobDetailsIdentifiers
 *         jobId: "STRING_VALUE", // required
 *       },
 *       jobAttachmentDetails: { // JobAttachmentDetailsIdentifiers
 *         jobId: "STRING_VALUE", // required
 *       },
 *       stepDetails: { // StepDetailsIdentifiers
 *         jobId: "STRING_VALUE", // required
 *         stepId: "STRING_VALUE", // required
 *       },
 *       environmentDetails: { // EnvironmentDetailsIdentifiers
 *         jobId: "STRING_VALUE", // required
 *         environmentId: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchGetJobEntityCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetJobEntityResponse
 * //   entities: [ // BatchGetJobEntityList // required
 * //     { // JobEntity Union: only one key present
 * //       jobDetails: { // JobDetailsEntity
 * //         jobId: "STRING_VALUE", // required
 * //         jobAttachmentSettings: { // JobAttachmentSettings
 * //           s3BucketName: "STRING_VALUE", // required
 * //           rootPrefix: "STRING_VALUE", // required
 * //         },
 * //         jobRunAsUser: { // JobRunAsUser
 * //           posix: { // PosixUser
 * //             user: "STRING_VALUE", // required
 * //             group: "STRING_VALUE", // required
 * //           },
 * //           windows: { // WindowsUser
 * //             user: "STRING_VALUE", // required
 * //             passwordArn: "STRING_VALUE", // required
 * //           },
 * //           runAs: "QUEUE_CONFIGURED_USER" || "WORKER_AGENT_USER", // required
 * //         },
 * //         logGroupName: "STRING_VALUE", // required
 * //         queueRoleArn: "STRING_VALUE",
 * //         parameters: { // JobParameters
 * //           "<keys>": { // JobParameter Union: only one key present
 * //             int: "STRING_VALUE",
 * //             float: "STRING_VALUE",
 * //             string: "STRING_VALUE",
 * //             path: "STRING_VALUE",
 * //           },
 * //         },
 * //         schemaVersion: "STRING_VALUE", // required
 * //         pathMappingRules: [ // PathMappingRules
 * //           { // PathMappingRule
 * //             sourcePathFormat: "windows" || "posix", // required
 * //             sourcePath: "STRING_VALUE", // required
 * //             destinationPath: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       jobAttachmentDetails: { // JobAttachmentDetailsEntity
 * //         jobId: "STRING_VALUE", // required
 * //         attachments: { // Attachments
 * //           manifests: [ // ManifestPropertiesList // required
 * //             { // ManifestProperties
 * //               fileSystemLocationName: "STRING_VALUE",
 * //               rootPath: "STRING_VALUE", // required
 * //               rootPathFormat: "windows" || "posix", // required
 * //               outputRelativeDirectories: [ // OutputRelativeDirectoriesList
 * //                 "STRING_VALUE",
 * //               ],
 * //               inputManifestPath: "STRING_VALUE",
 * //               inputManifestHash: "STRING_VALUE",
 * //             },
 * //           ],
 * //           fileSystem: "COPIED" || "VIRTUAL",
 * //         },
 * //       },
 * //       stepDetails: { // StepDetailsEntity
 * //         jobId: "STRING_VALUE", // required
 * //         stepId: "STRING_VALUE", // required
 * //         schemaVersion: "STRING_VALUE", // required
 * //         template: "DOCUMENT_VALUE", // required
 * //         dependencies: [ // DependenciesList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       environmentDetails: { // EnvironmentDetailsEntity
 * //         jobId: "STRING_VALUE", // required
 * //         environmentId: "STRING_VALUE", // required
 * //         schemaVersion: "STRING_VALUE", // required
 * //         template: "DOCUMENT_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchGetJobEntityErrors // required
 * //     { // GetJobEntityError Union: only one key present
 * //       jobDetails: { // JobDetailsError
 * //         jobId: "STRING_VALUE", // required
 * //         code: "AccessDeniedException" || "InternalServerException" || "ValidationException" || "ResourceNotFoundException" || "MaxPayloadSizeExceeded" || "ConflictException", // required
 * //         message: "STRING_VALUE", // required
 * //       },
 * //       jobAttachmentDetails: { // JobAttachmentDetailsError
 * //         jobId: "STRING_VALUE", // required
 * //         code: "AccessDeniedException" || "InternalServerException" || "ValidationException" || "ResourceNotFoundException" || "MaxPayloadSizeExceeded" || "ConflictException", // required
 * //         message: "STRING_VALUE", // required
 * //       },
 * //       stepDetails: { // StepDetailsError
 * //         jobId: "STRING_VALUE", // required
 * //         stepId: "STRING_VALUE", // required
 * //         code: "AccessDeniedException" || "InternalServerException" || "ValidationException" || "ResourceNotFoundException" || "MaxPayloadSizeExceeded" || "ConflictException", // required
 * //         message: "STRING_VALUE", // required
 * //       },
 * //       environmentDetails: { // EnvironmentDetailsError
 * //         jobId: "STRING_VALUE", // required
 * //         environmentId: "STRING_VALUE", // required
 * //         code: "AccessDeniedException" || "InternalServerException" || "ValidationException" || "ResourceNotFoundException" || "MaxPayloadSizeExceeded" || "ConflictException", // required
 * //         message: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetJobEntityCommandInput - {@link BatchGetJobEntityCommandInput}
 * @returns {@link BatchGetJobEntityCommandOutput}
 * @see {@link BatchGetJobEntityCommandInput} for command's `input` shape.
 * @see {@link BatchGetJobEntityCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class BatchGetJobEntityCommand extends $Command
  .classBuilder<
    BatchGetJobEntityCommandInput,
    BatchGetJobEntityCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "BatchGetJobEntity", {})
  .n("DeadlineClient", "BatchGetJobEntityCommand")
  .f(void 0, BatchGetJobEntityResponseFilterSensitiveLog)
  .ser(se_BatchGetJobEntityCommand)
  .de(de_BatchGetJobEntityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetJobEntityRequest;
      output: BatchGetJobEntityResponse;
    };
    sdk: {
      input: BatchGetJobEntityCommandInput;
      output: BatchGetJobEntityCommandOutput;
    };
  };
}
