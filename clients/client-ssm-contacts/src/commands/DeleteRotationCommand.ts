// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRotationRequest, DeleteRotationResult } from "../models/models_0";
import { de_DeleteRotationCommand, se_DeleteRotationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRotationCommand}.
 */
export interface DeleteRotationCommandInput extends DeleteRotationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRotationCommand}.
 */
export interface DeleteRotationCommandOutput extends DeleteRotationResult, __MetadataBearer {}

/**
 * <p>Deletes a rotation from the system. If a rotation belongs to more than one on-call
 *          schedule, this operation deletes it from all of them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeleteRotationCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeleteRotationCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // DeleteRotationRequest
 *   RotationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRotationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRotationCommandInput - {@link DeleteRotationCommandInput}
 * @returns {@link DeleteRotationCommandOutput}
 * @see {@link DeleteRotationCommandInput} for command's `input` shape.
 * @see {@link DeleteRotationCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 *
 * @public
 */
export class DeleteRotationCommand extends $Command
  .classBuilder<
    DeleteRotationCommandInput,
    DeleteRotationCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "DeleteRotation", {})
  .n("SSMContactsClient", "DeleteRotationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRotationCommand)
  .de(de_DeleteRotationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRotationRequest;
      output: {};
    };
    sdk: {
      input: DeleteRotationCommandInput;
      output: DeleteRotationCommandOutput;
    };
  };
}
