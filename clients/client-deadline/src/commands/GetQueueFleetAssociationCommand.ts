// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetQueueFleetAssociationRequest, GetQueueFleetAssociationResponse } from "../models/models_1";
import { de_GetQueueFleetAssociationCommand, se_GetQueueFleetAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueueFleetAssociationCommand}.
 */
export interface GetQueueFleetAssociationCommandInput extends GetQueueFleetAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetQueueFleetAssociationCommand}.
 */
export interface GetQueueFleetAssociationCommandOutput extends GetQueueFleetAssociationResponse, __MetadataBearer {}

/**
 * <p>Gets a queue-fleet association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetQueueFleetAssociationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetQueueFleetAssociationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // GetQueueFleetAssociationRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 * };
 * const command = new GetQueueFleetAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetQueueFleetAssociationResponse
 * //   queueId: "STRING_VALUE", // required
 * //   fleetId: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "STOP_SCHEDULING_AND_COMPLETE_TASKS" || "STOP_SCHEDULING_AND_CANCEL_TASKS" || "STOPPED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueueFleetAssociationCommandInput - {@link GetQueueFleetAssociationCommandInput}
 * @returns {@link GetQueueFleetAssociationCommandOutput}
 * @see {@link GetQueueFleetAssociationCommandInput} for command's `input` shape.
 * @see {@link GetQueueFleetAssociationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetQueueFleetAssociationCommand extends $Command
  .classBuilder<
    GetQueueFleetAssociationCommandInput,
    GetQueueFleetAssociationCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "GetQueueFleetAssociation", {})
  .n("DeadlineClient", "GetQueueFleetAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetQueueFleetAssociationCommand)
  .de(de_GetQueueFleetAssociationCommand)
  .build() {}
