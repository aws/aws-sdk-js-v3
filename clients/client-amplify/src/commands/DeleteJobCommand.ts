// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteJobRequest, DeleteJobResult } from "../models/models_0";
import { DeleteJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteJobCommand}.
 */
export interface DeleteJobCommandInput extends DeleteJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteJobCommand}.
 */
export interface DeleteJobCommandOutput extends DeleteJobResult, __MetadataBearer {}

/**
 * Deletes a job for a branch of an Amplify app.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteJobCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteJobCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // DeleteJobRequest
 *   appId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DeleteJobCommand(input);
 * const response = await client.send(command);
 * // { // DeleteJobResult
 * //   jobSummary: { // JobSummary
 * //     jobArn: "STRING_VALUE", // required
 * //     jobId: "STRING_VALUE", // required
 * //     commitId: "STRING_VALUE", // required
 * //     commitMessage: "STRING_VALUE", // required
 * //     commitTime: new Date("TIMESTAMP"), // required
 * //     startTime: new Date("TIMESTAMP"), // required
 * //     status: "CREATED" || "PENDING" || "PROVISIONING" || "RUNNING" || "FAILED" || "SUCCEED" || "CANCELLING" || "CANCELLED", // required
 * //     endTime: new Date("TIMESTAMP"),
 * //     jobType: "RELEASE" || "RETRY" || "MANUAL" || "WEB_HOOK", // required
 * //     sourceUrl: "STRING_VALUE",
 * //     sourceUrlType: "ZIP" || "BUCKET_PREFIX",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteJobCommandInput - {@link DeleteJobCommandInput}
 * @returns {@link DeleteJobCommandOutput}
 * @see {@link DeleteJobCommandInput} for command's `input` shape.
 * @see {@link DeleteJobCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A request contains unexpected data.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * The service failed to perform an operation due to an internal issue.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A resource could not be created because service quotas were exceeded.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * An entity was not found during an operation.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * An operation failed due to a lack of access.
 *
 * @throws {@link AmplifyServiceException}
 *
 * Base exception class for all service exceptions from Amplify service.
 *
 * @public
 */
export class DeleteJobCommand extends command<DeleteJobCommandInput, DeleteJobCommandOutput>(
  _ep0,
  _mw0,
  "DeleteJob",
  DeleteJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteJobRequest;
      output: DeleteJobResult;
    };
    sdk: {
      input: DeleteJobCommandInput;
      output: DeleteJobCommandOutput;
    };
  };
}
