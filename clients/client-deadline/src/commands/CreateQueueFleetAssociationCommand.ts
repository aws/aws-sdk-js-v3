// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateQueueFleetAssociationRequest, CreateQueueFleetAssociationResponse } from "../models/models_0";
import { CreateQueueFleetAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQueueFleetAssociationCommand}.
 */
export interface CreateQueueFleetAssociationCommandInput extends CreateQueueFleetAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueueFleetAssociationCommand}.
 */
export interface CreateQueueFleetAssociationCommandOutput extends CreateQueueFleetAssociationResponse, __MetadataBearer {}

/**
 * <p>Creates an association between a queue and a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateQueueFleetAssociationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateQueueFleetAssociationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // CreateQueueFleetAssociationRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 * };
 * const command = new CreateQueueFleetAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateQueueFleetAssociationCommandInput - {@link CreateQueueFleetAssociationCommandInput}
 * @returns {@link CreateQueueFleetAssociationCommandOutput}
 * @see {@link CreateQueueFleetAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateQueueFleetAssociationCommandOutput} for command's `response` shape.
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
export class CreateQueueFleetAssociationCommand extends $Command
  .classBuilder<
    CreateQueueFleetAssociationCommandInput,
    CreateQueueFleetAssociationCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "CreateQueueFleetAssociation", {})
  .n("DeadlineClient", "CreateQueueFleetAssociationCommand")
  .sc(CreateQueueFleetAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQueueFleetAssociationRequest;
      output: {};
    };
    sdk: {
      input: CreateQueueFleetAssociationCommandInput;
      output: CreateQueueFleetAssociationCommandOutput;
    };
  };
}
