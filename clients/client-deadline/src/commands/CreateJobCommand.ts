// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateJobRequest, CreateJobRequestFilterSensitiveLog, CreateJobResponse } from "../models/models_0";
import { de_CreateJobCommand, se_CreateJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateJobCommand}.
 */
export interface CreateJobCommandInput extends CreateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobCommand}.
 */
export interface CreateJobCommandOutput extends CreateJobResponse, __MetadataBearer {}

/**
 * <p>Creates a job. A job is a render submission submitted by a user. It contains specific
 *          job properties outlined as steps and tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateJobCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateJobCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // CreateJobRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   template: "STRING_VALUE", // required
 *   templateType: "JSON" || "YAML", // required
 *   priority: Number("int"), // required
 *   parameters: { // JobParameters
 *     "<keys>": { // JobParameter Union: only one key present
 *       int: "STRING_VALUE",
 *       float: "STRING_VALUE",
 *       string: "STRING_VALUE",
 *       path: "STRING_VALUE",
 *     },
 *   },
 *   attachments: { // Attachments
 *     manifests: [ // ManifestPropertiesList // required
 *       { // ManifestProperties
 *         fileSystemLocationName: "STRING_VALUE",
 *         rootPath: "STRING_VALUE", // required
 *         rootPathFormat: "windows" || "posix", // required
 *         outputRelativeDirectories: [ // OutputRelativeDirectoriesList
 *           "STRING_VALUE",
 *         ],
 *         inputManifestPath: "STRING_VALUE",
 *         inputManifestHash: "STRING_VALUE",
 *       },
 *     ],
 *     fileSystem: "COPIED" || "VIRTUAL",
 *   },
 *   storageProfileId: "STRING_VALUE",
 *   targetTaskRunStatus: "READY" || "SUSPENDED",
 *   maxFailedTasksCount: Number("int"),
 *   maxRetriesPerTask: Number("int"),
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobResponse
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateJobCommandInput - {@link CreateJobCommandInput}
 * @returns {@link CreateJobCommandOutput}
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *          maximum number of service resources or operations for your Amazon Web Services account.</p>
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
 * @public
 */
export class CreateJobCommand extends $Command
  .classBuilder<
    CreateJobCommandInput,
    CreateJobCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "CreateJob", {})
  .n("DeadlineClient", "CreateJobCommand")
  .f(CreateJobRequestFilterSensitiveLog, void 0)
  .ser(se_CreateJobCommand)
  .de(de_CreateJobCommand)
  .build() {}
