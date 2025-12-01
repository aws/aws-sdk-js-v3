// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteTimelineEventInput, DeleteTimelineEventOutput } from "../models/models_0";
import { DeleteTimelineEvent } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

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
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMIncidents", "DeleteTimelineEvent", {})
  .n("SSMIncidentsClient", "DeleteTimelineEventCommand")
  .sc(DeleteTimelineEvent)
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
