// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRotationOverrideRequest, DeleteRotationOverrideResult } from "../models/models_0";
import { de_DeleteRotationOverrideCommand, se_DeleteRotationOverrideCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRotationOverrideCommand}.
 */
export interface DeleteRotationOverrideCommandInput extends DeleteRotationOverrideRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRotationOverrideCommand}.
 */
export interface DeleteRotationOverrideCommandOutput extends DeleteRotationOverrideResult, __MetadataBearer {}

/**
 * <p>Deletes an existing override for an on-call rotation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeleteRotationOverrideCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeleteRotationOverrideCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // DeleteRotationOverrideRequest
 *   RotationId: "STRING_VALUE", // required
 *   RotationOverrideId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRotationOverrideCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRotationOverrideCommandInput - {@link DeleteRotationOverrideCommandInput}
 * @returns {@link DeleteRotationOverrideCommandOutput}
 * @see {@link DeleteRotationOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteRotationOverrideCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
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
 * @public
 */
export class DeleteRotationOverrideCommand extends $Command
  .classBuilder<
    DeleteRotationOverrideCommandInput,
    DeleteRotationOverrideCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "DeleteRotationOverride", {})
  .n("SSMContactsClient", "DeleteRotationOverrideCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRotationOverrideCommand)
  .de(de_DeleteRotationOverrideCommand)
  .build() {}
