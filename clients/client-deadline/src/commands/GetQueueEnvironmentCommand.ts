// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetQueueEnvironmentRequest,
  GetQueueEnvironmentResponse,
  GetQueueEnvironmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetQueueEnvironmentCommand, se_GetQueueEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueueEnvironmentCommand}.
 */
export interface GetQueueEnvironmentCommandInput extends GetQueueEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link GetQueueEnvironmentCommand}.
 */
export interface GetQueueEnvironmentCommandOutput extends GetQueueEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Gets a queue environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetQueueEnvironmentCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetQueueEnvironmentCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // GetQueueEnvironmentRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   queueEnvironmentId: "STRING_VALUE", // required
 * };
 * const command = new GetQueueEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // GetQueueEnvironmentResponse
 * //   queueEnvironmentId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   priority: Number("int"), // required
 * //   templateType: "JSON" || "YAML", // required
 * //   template: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueueEnvironmentCommandInput - {@link GetQueueEnvironmentCommandInput}
 * @returns {@link GetQueueEnvironmentCommandOutput}
 * @see {@link GetQueueEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetQueueEnvironmentCommandOutput} for command's `response` shape.
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
export class GetQueueEnvironmentCommand extends $Command
  .classBuilder<
    GetQueueEnvironmentCommandInput,
    GetQueueEnvironmentCommandOutput,
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
  .s("Deadline", "GetQueueEnvironment", {})
  .n("DeadlineClient", "GetQueueEnvironmentCommand")
  .f(void 0, GetQueueEnvironmentResponseFilterSensitiveLog)
  .ser(se_GetQueueEnvironmentCommand)
  .de(de_GetQueueEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueueEnvironmentRequest;
      output: GetQueueEnvironmentResponse;
    };
    sdk: {
      input: GetQueueEnvironmentCommandInput;
      output: GetQueueEnvironmentCommandOutput;
    };
  };
}
