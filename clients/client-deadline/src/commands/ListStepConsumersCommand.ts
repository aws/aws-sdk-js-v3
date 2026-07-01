// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStepConsumersRequest } from "../models/models_0";
import type { ListStepConsumersResponse } from "../models/models_1";
import { ListStepConsumers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListStepConsumersCommand}.
 */
export interface ListStepConsumersCommandInput extends ListStepConsumersRequest {}
/**
 * @public
 *
 * The output of {@link ListStepConsumersCommand}.
 */
export interface ListStepConsumersCommandOutput extends ListStepConsumersResponse, __MetadataBearer {}

/**
 * <p>Lists step consumers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListStepConsumersCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListStepConsumersCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListStepConsumersRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   stepId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStepConsumersCommand(input);
 * const response = await client.send(command);
 * // { // ListStepConsumersResponse
 * //   consumers: [ // StepConsumers // required
 * //     { // StepConsumer
 * //       stepId: "STRING_VALUE", // required
 * //       status: "RESOLVED" || "UNRESOLVED", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStepConsumersCommandInput - {@link ListStepConsumersCommandInput}
 * @returns {@link ListStepConsumersCommandOutput}
 * @see {@link ListStepConsumersCommandInput} for command's `input` shape.
 * @see {@link ListStepConsumersCommandOutput} for command's `response` shape.
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
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListStepConsumersCommand extends command<ListStepConsumersCommandInput, ListStepConsumersCommandOutput>(
  _ep0,
  _mw0,
  "ListStepConsumers",
  ListStepConsumers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStepConsumersRequest;
      output: ListStepConsumersResponse;
    };
    sdk: {
      input: ListStepConsumersCommandInput;
      output: ListStepConsumersCommandOutput;
    };
  };
}
