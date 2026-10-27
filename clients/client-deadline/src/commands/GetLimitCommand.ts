// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLimitRequest, GetLimitResponse } from "../models/models_0";
import { GetLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLimitCommand}.
 */
export interface GetLimitCommandInput extends GetLimitRequest {}
/**
 * @public
 *
 * The output of {@link GetLimitCommand}.
 */
export interface GetLimitCommandOutput extends GetLimitResponse, __MetadataBearer {}

/**
 * Gets information about a specific limit.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetLimitCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetLimitCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetLimitRequest
 *   farmId: "STRING_VALUE", // required
 *   limitId: "STRING_VALUE", // required
 * };
 * const command = new GetLimitCommand(input);
 * const response = await client.send(command);
 * // { // GetLimitResponse
 * //   farmId: "STRING_VALUE", // required
 * //   limitId: "STRING_VALUE", // required
 * //   currentCount: Number("int"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   displayName: "STRING_VALUE", // required
 * //   amountRequirementName: "STRING_VALUE", // required
 * //   maxCount: Number("int"), // required
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLimitCommandInput - {@link GetLimitCommandInput}
 * @returns {@link GetLimitCommandOutput}
 * @see {@link GetLimitCommandInput} for command's `input` shape.
 * @see {@link GetLimitCommandOutput} for command's `response` shape.
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
export class GetLimitCommand extends command<GetLimitCommandInput, GetLimitCommandOutput>(
  _ep0,
  _mw0,
  "GetLimit",
  GetLimit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLimitRequest;
      output: GetLimitResponse;
    };
    sdk: {
      input: GetLimitCommandInput;
      output: GetLimitCommandOutput;
    };
  };
}
