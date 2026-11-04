// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutResourcePolicyRequest, PutResourcePolicyResponse } from "../models/models_0";
import { PutResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandInput extends PutResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyResponse, __MetadataBearer {}

/**
 * Creates or updates an CloudHSM resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your CloudHSM resources. The following resources support CloudHSM resource policies:
 *
 * - Backup - The resource policy allows you to describe the backup and restore a cluster from the backup in another Amazon Web Services account.
 *
 * In order to share a backup, it must be in a 'READY' state and you must own it.
 *
 * > **Important:** While you can share a backup using the CloudHSM PutResourcePolicy operation, we recommend using Resource Access Manager (RAM) instead. Using RAM provides multiple benefits as it creates the policy for you, allows multiple resources to be shared at one time, and increases the discoverability of shared resources. If you use PutResourcePolicy and want consumers to be able to describe the backups you share with them, you must promote the backup to a standard RAM Resource Share using the RAM PromoteResourceShareCreatedFromPolicy API operation. For more information, see [Working with shared backups](https://docs.aws.amazon.com/cloudhsm/latest/userguide/sharing.html) in the CloudHSM User Guide
 *
 * **Cross-account use:** No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, PutResourcePolicyCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, PutResourcePolicyCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * // import type { CloudHSMV2ClientConfig } from "@aws-sdk/client-cloudhsm-v2";
 * const config = {}; // type is CloudHSMV2ClientConfig
 * const client = new CloudHSMV2Client(config);
 * const input = { // PutResourcePolicyRequest
 *   ResourceArn: "STRING_VALUE",
 *   Policy: "STRING_VALUE",
 * };
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResourcePolicyResponse
 * //   ResourceArn: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutResourcePolicyCommandInput - {@link PutResourcePolicyCommandInput}
 * @returns {@link PutResourcePolicyCommandOutput}
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 * @throws {@link CloudHsmAccessDeniedException} (client fault)
 *
 * The request was rejected because the requester does not have permission to perform the requested operation.
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *
 * The request was rejected because of an CloudHSM internal failure. The request can be retried.
 *
 * @throws {@link CloudHsmInvalidRequestException} (client fault)
 *
 * The request was rejected because it is not a valid request.
 *
 * @throws {@link CloudHsmResourceNotFoundException} (client fault)
 *
 * The request was rejected because it refers to a resource that cannot be found.
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *
 * The request was rejected because an error occurred.
 *
 * @throws {@link CloudHSMV2ServiceException}
 *
 * Base exception class for all service exceptions from CloudHSMV2 service.
 *
 * @public
 */
export class PutResourcePolicyCommand extends command<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutResourcePolicy",
  PutResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourcePolicyRequest;
      output: PutResourcePolicyResponse;
    };
    sdk: {
      input: PutResourcePolicyCommandInput;
      output: PutResourcePolicyCommandOutput;
    };
  };
}
