// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePolicyVersionRequest } from "../models/models_0";
import { DeletePolicyVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePolicyVersionCommand}.
 */
export interface DeletePolicyVersionCommandInput extends DeletePolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyVersionCommand}.
 */
export interface DeletePolicyVersionCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this action. To delete the default version of a policy, use DeletePolicy. To find out which version of a policy is marked as the default version, use ListPolicyVersions.
 *
 * Requires permission to access the [DeletePolicyVersion](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeletePolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeletePolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeletePolicyVersionRequest
 *   policyName: "STRING_VALUE", // required
 *   policyVersionId: "STRING_VALUE", // required
 * };
 * const command = new DeletePolicyVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyVersionCommandInput - {@link DeletePolicyVersionCommandInput}
 * @returns {@link DeletePolicyVersionCommandOutput}
 * @see {@link DeletePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link DeleteConflictException} (client fault)
 *
 * You can't delete the resource because it is attached to one or more resources.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DeletePolicyVersionCommand extends command<DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeletePolicyVersion",
  DeletePolicyVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePolicyVersionRequest;
      output: {};
    };
    sdk: {
      input: DeletePolicyVersionCommandInput;
      output: DeletePolicyVersionCommandOutput;
    };
  };
}
