// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetQueueLimitAssociationRequest, GetQueueLimitAssociationResponse } from "../models/models_1";
import { de_GetQueueLimitAssociationCommand, se_GetQueueLimitAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueueLimitAssociationCommand}.
 */
export interface GetQueueLimitAssociationCommandInput extends GetQueueLimitAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetQueueLimitAssociationCommand}.
 */
export interface GetQueueLimitAssociationCommandOutput extends GetQueueLimitAssociationResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specific association between a queue and a limit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetQueueLimitAssociationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetQueueLimitAssociationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // GetQueueLimitAssociationRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   limitId: "STRING_VALUE", // required
 * };
 * const command = new GetQueueLimitAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetQueueLimitAssociationResponse
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   queueId: "STRING_VALUE", // required
 * //   limitId: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "STOP_LIMIT_USAGE_AND_COMPLETE_TASKS" || "STOP_LIMIT_USAGE_AND_CANCEL_TASKS" || "STOPPED", // required
 * // };
 *
 * ```
 *
 * @param GetQueueLimitAssociationCommandInput - {@link GetQueueLimitAssociationCommandInput}
 * @returns {@link GetQueueLimitAssociationCommandOutput}
 * @see {@link GetQueueLimitAssociationCommandInput} for command's `input` shape.
 * @see {@link GetQueueLimitAssociationCommandOutput} for command's `response` shape.
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
export class GetQueueLimitAssociationCommand extends $Command
  .classBuilder<
    GetQueueLimitAssociationCommandInput,
    GetQueueLimitAssociationCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "GetQueueLimitAssociation", {})
  .n("DeadlineClient", "GetQueueLimitAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetQueueLimitAssociationCommand)
  .de(de_GetQueueLimitAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueueLimitAssociationRequest;
      output: GetQueueLimitAssociationResponse;
    };
    sdk: {
      input: GetQueueLimitAssociationCommandInput;
      output: GetQueueLimitAssociationCommandOutput;
    };
  };
}
