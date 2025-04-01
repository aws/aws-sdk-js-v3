// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTimelineEventInput, DeleteTimelineEventOutput } from "../models/models_0";
import { de_DeleteTimelineEventCommand, se_DeleteTimelineEventCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTimelineEventCommand}.
 */
export interface DeleteTimelineEventCommandInput extends DeleteTimelineEventInput {}
/**
 * @public
 *
 * The output of {@link DeleteTimelineEventCommand}.
 */
export interface DeleteTimelineEventCommandOutput extends DeleteTimelineEventOutput, __MetadataBearer {}

/**
 * <p>Deletes a timeline event from an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = { // DeleteTimelineEventInput
 *   incidentRecordArn: "STRING_VALUE", // required
 *   eventId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTimelineEventCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTimelineEventCommandInput - {@link DeleteTimelineEventCommandInput}
 * @returns {@link DeleteTimelineEventCommandOutput}
 * @see {@link DeleteTimelineEventCommandInput} for command's `input` shape.
 * @see {@link DeleteTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
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
export class DeleteTimelineEventCommand extends $Command
  .classBuilder<
    DeleteTimelineEventCommandInput,
    DeleteTimelineEventCommandOutput,
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
  .s("SSMIncidents", "DeleteTimelineEvent", {})
  .n("SSMIncidentsClient", "DeleteTimelineEventCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTimelineEventCommand)
  .de(de_DeleteTimelineEventCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTimelineEventInput;
      output: {};
    };
    sdk: {
      input: DeleteTimelineEventCommandInput;
      output: DeleteTimelineEventCommandOutput;
    };
  };
}
