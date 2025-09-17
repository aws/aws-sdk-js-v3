// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReplicationSetInput, DeleteReplicationSetOutput } from "../models/models_0";
import { de_DeleteReplicationSetCommand, se_DeleteReplicationSetCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReplicationSetCommand}.
 */
export interface DeleteReplicationSetCommandInput extends DeleteReplicationSetInput {}
/**
 * @public
 *
 * The output of {@link DeleteReplicationSetCommand}.
 */
export interface DeleteReplicationSetCommandOutput extends DeleteReplicationSetOutput, __MetadataBearer {}

/**
 * <p>Deletes all Regions in your replication set. Deleting the replication set deletes all
 *       Incident Manager data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // DeleteReplicationSetInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteReplicationSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReplicationSetCommandInput - {@link DeleteReplicationSetCommandInput}
 * @returns {@link DeleteReplicationSetCommandOutput}
 * @see {@link DeleteReplicationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationSetCommandOutput} for command's `response` shape.
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
export class DeleteReplicationSetCommand extends $Command
  .classBuilder<
    DeleteReplicationSetCommandInput,
    DeleteReplicationSetCommandOutput,
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
  .s("SSMIncidents", "DeleteReplicationSet", {})
  .n("SSMIncidentsClient", "DeleteReplicationSetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReplicationSetCommand)
  .de(de_DeleteReplicationSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicationSetInput;
      output: {};
    };
    sdk: {
      input: DeleteReplicationSetCommandInput;
      output: DeleteReplicationSetCommandOutput;
    };
  };
}
