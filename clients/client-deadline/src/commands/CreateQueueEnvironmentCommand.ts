// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateQueueEnvironmentRequest,
  CreateQueueEnvironmentRequestFilterSensitiveLog,
  CreateQueueEnvironmentResponse,
} from "../models/models_0";
import { de_CreateQueueEnvironmentCommand, se_CreateQueueEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQueueEnvironmentCommand}.
 */
export interface CreateQueueEnvironmentCommandInput extends CreateQueueEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueueEnvironmentCommand}.
 */
export interface CreateQueueEnvironmentCommandOutput extends CreateQueueEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Creates an environment for a queue that defines how jobs in the queue run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateQueueEnvironmentCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateQueueEnvironmentCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // CreateQueueEnvironmentRequest
 *   clientToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   priority: Number("int"), // required
 *   templateType: "JSON" || "YAML", // required
 *   template: "STRING_VALUE", // required
 * };
 * const command = new CreateQueueEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateQueueEnvironmentResponse
 * //   queueEnvironmentId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateQueueEnvironmentCommandInput - {@link CreateQueueEnvironmentCommandInput}
 * @returns {@link CreateQueueEnvironmentCommandOutput}
 * @see {@link CreateQueueEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateQueueEnvironmentCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *          maximum number of service resources or operations for your Amazon Web Services account.</p>
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
export class CreateQueueEnvironmentCommand extends $Command
  .classBuilder<
    CreateQueueEnvironmentCommandInput,
    CreateQueueEnvironmentCommandOutput,
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
  .s("Deadline", "CreateQueueEnvironment", {})
  .n("DeadlineClient", "CreateQueueEnvironmentCommand")
  .f(CreateQueueEnvironmentRequestFilterSensitiveLog, void 0)
  .ser(se_CreateQueueEnvironmentCommand)
  .de(de_CreateQueueEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQueueEnvironmentRequest;
      output: CreateQueueEnvironmentResponse;
    };
    sdk: {
      input: CreateQueueEnvironmentCommandInput;
      output: CreateQueueEnvironmentCommandOutput;
    };
  };
}
