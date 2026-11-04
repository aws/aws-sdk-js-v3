// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteChannelPolicyRequest, DeleteChannelPolicyResponse } from "../models/models_0";
import { DeleteChannelPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteChannelPolicyCommand}.
 */
export interface DeleteChannelPolicyCommandInput extends DeleteChannelPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChannelPolicyCommand}.
 */
export interface DeleteChannelPolicyCommandOutput extends DeleteChannelPolicyResponse, __MetadataBearer {}

/**
 * Delete a channel policy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, DeleteChannelPolicyCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, DeleteChannelPolicyCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
 * const client = new MediaPackageV2Client(config);
 * const input = { // DeleteChannelPolicyRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 * };
 * const command = new DeleteChannelPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChannelPolicyCommandInput - {@link DeleteChannelPolicyCommandInput}
 * @returns {@link DeleteChannelPolicyCommandOutput}
 * @see {@link DeleteChannelPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception if MediaPackage receives a throttling error from Secrets Manager.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting this resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates that an error from the service occurred while trying to process a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request throughput limit was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link MediaPackageV2ServiceException}
 *
 * Base exception class for all service exceptions from MediaPackageV2 service.
 *
 * @example Deleting a Channel Policy
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel"
 * };
 * const command = new DeleteChannelPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteChannelPolicyCommand extends command<DeleteChannelPolicyCommandInput, DeleteChannelPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteChannelPolicy",
  DeleteChannelPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChannelPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteChannelPolicyCommandInput;
      output: DeleteChannelPolicyCommandOutput;
    };
  };
}
