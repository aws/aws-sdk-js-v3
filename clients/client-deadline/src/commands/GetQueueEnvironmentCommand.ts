// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetQueueEnvironmentRequest, GetQueueEnvironmentResponse } from "../models/models_0";
import { GetQueueEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets a queue environment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetQueueEnvironmentCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetQueueEnvironmentCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
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
 *  You don't have permission to perform the action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class GetQueueEnvironmentCommand extends command<GetQueueEnvironmentCommandInput, GetQueueEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "GetQueueEnvironment",
  GetQueueEnvironment$
) {
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
