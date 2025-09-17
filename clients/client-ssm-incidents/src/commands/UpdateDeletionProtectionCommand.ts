// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDeletionProtectionInput, UpdateDeletionProtectionOutput } from "../models/models_0";
import { de_UpdateDeletionProtectionCommand, se_UpdateDeletionProtectionCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeletionProtectionCommand}.
 */
export interface UpdateDeletionProtectionCommandInput extends UpdateDeletionProtectionInput {}
/**
 * @public
 *
 * The output of {@link UpdateDeletionProtectionCommand}.
 */
export interface UpdateDeletionProtectionCommandOutput extends UpdateDeletionProtectionOutput, __MetadataBearer {}

/**
 * <p>Update deletion protection to either allow or deny deletion of the final Region in a
 *       replication set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateDeletionProtectionCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateDeletionProtectionCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // UpdateDeletionProtectionInput
 *   arn: "STRING_VALUE", // required
 *   deletionProtected: true || false, // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateDeletionProtectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDeletionProtectionCommandInput - {@link UpdateDeletionProtectionCommandInput}
 * @returns {@link UpdateDeletionProtectionCommandOutput}
 * @see {@link UpdateDeletionProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateDeletionProtectionCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 *
 * @public
 */
export class UpdateDeletionProtectionCommand extends $Command
  .classBuilder<
    UpdateDeletionProtectionCommandInput,
    UpdateDeletionProtectionCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMIncidents", "UpdateDeletionProtection", {})
  .n("SSMIncidentsClient", "UpdateDeletionProtectionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDeletionProtectionCommand)
  .de(de_UpdateDeletionProtectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeletionProtectionInput;
      output: {};
    };
    sdk: {
      input: UpdateDeletionProtectionCommandInput;
      output: UpdateDeletionProtectionCommandOutput;
    };
  };
}
