// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssumeQueueRoleForReadRequest, AssumeQueueRoleForReadResponse } from "../models/models_0";
import { AssumeQueueRoleForRead$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssumeQueueRoleForReadCommand}.
 */
export interface AssumeQueueRoleForReadCommandInput extends AssumeQueueRoleForReadRequest {}
/**
 * @public
 *
 * The output of {@link AssumeQueueRoleForReadCommand}.
 */
export interface AssumeQueueRoleForReadCommandOutput extends AssumeQueueRoleForReadResponse, __MetadataBearer {}

/**
 * <p>Gets Amazon Web Services credentials from the queue role. The IAM permissions of the credentials are
 *          scoped down to have read-only access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, AssumeQueueRoleForReadCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, AssumeQueueRoleForReadCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // AssumeQueueRoleForReadRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 * };
 * const command = new AssumeQueueRoleForReadCommand(input);
 * const response = await client.send(command);
 * // { // AssumeQueueRoleForReadResponse
 * //   credentials: { // AwsCredentials
 * //     accessKeyId: "STRING_VALUE", // required
 * //     secretAccessKey: "STRING_VALUE", // required
 * //     sessionToken: "STRING_VALUE", // required
 * //     expiration: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssumeQueueRoleForReadCommandInput - {@link AssumeQueueRoleForReadCommandInput}
 * @returns {@link AssumeQueueRoleForReadCommandOutput}
 * @see {@link AssumeQueueRoleForReadCommandInput} for command's `input` shape.
 * @see {@link AssumeQueueRoleForReadCommandOutput} for command's `response` shape.
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
export class AssumeQueueRoleForReadCommand extends $Command
  .classBuilder<
    AssumeQueueRoleForReadCommandInput,
    AssumeQueueRoleForReadCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "AssumeQueueRoleForRead", {})
  .n("DeadlineClient", "AssumeQueueRoleForReadCommand")
  .sc(AssumeQueueRoleForRead$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeQueueRoleForReadRequest;
      output: AssumeQueueRoleForReadResponse;
    };
    sdk: {
      input: AssumeQueueRoleForReadCommandInput;
      output: AssumeQueueRoleForReadCommandOutput;
    };
  };
}
