// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCanaryRequest, DeleteCanaryResponse } from "../models/models_0";
import { DeleteCanary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCanaryCommand}.
 */
export interface DeleteCanaryCommandInput extends DeleteCanaryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCanaryCommand}.
 */
export interface DeleteCanaryCommandOutput extends DeleteCanaryResponse, __MetadataBearer {}

/**
 * Permanently deletes the specified canary.
 *
 * If the canary's `ProvisionedResourceCleanup` field is set to `AUTOMATIC` or you specify `DeleteLambda` in this operation as `true`, CloudWatch Synthetics also deletes the Lambda functions and layers that are used by the canary.
 *
 * Other resources used and created by the canary are not automatically deleted. After you delete a canary, you should also delete the following:
 *
 * - The CloudWatch alarms created for this canary. These alarms have a name of `Synthetics-Alarm-first-198-characters-of-canary-name-canaryId-alarm number`
 * - Amazon S3 objects and buckets, such as the canary's artifact location.
 * - IAM roles created for the canary. If they were created in the console, these roles have the name `role/service-role/CloudWatchSyntheticsRole-First-21-Characters-of-CanaryName`
 * - CloudWatch Logs log groups created for the canary. These logs groups have the name `/aws/lambda/cwsyn-First-21-Characters-of-CanaryName`
 *
 * Before you delete a canary, you might want to use `GetCanary` to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DeleteCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DeleteCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // DeleteCanaryRequest
 *   Name: "STRING_VALUE", // required
 *   DeleteLambda: true || false,
 * };
 * const command = new DeleteCanaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCanaryCommandInput - {@link DeleteCanaryCommandInput}
 * @returns {@link DeleteCanaryCommandOutput}
 * @see {@link DeleteCanaryCommandInput} for command's `input` shape.
 * @see {@link DeleteCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflicting operation is already in progress.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unknown internal error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One of the specified resources was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter could not be validated.
 *
 * @throws {@link SyntheticsServiceException}
 *
 * Base exception class for all service exceptions from Synthetics service.
 *
 * @public
 */
export class DeleteCanaryCommand extends command<DeleteCanaryCommandInput, DeleteCanaryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCanary",
  DeleteCanary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCanaryRequest;
      output: {};
    };
    sdk: {
      input: DeleteCanaryCommandInput;
      output: DeleteCanaryCommandOutput;
    };
  };
}
