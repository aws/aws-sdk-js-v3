// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePromptRequest, UpdatePromptResponse } from "../models/models_4";
import { UpdatePrompt$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePromptCommand}.
 */
export interface UpdatePromptCommandInput extends UpdatePromptRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePromptCommand}.
 */
export interface UpdatePromptCommandOutput extends UpdatePromptResponse, __MetadataBearer {}

/**
 * Updates a prompt.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdatePromptCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdatePromptCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdatePromptRequest
 *   InstanceId: "STRING_VALUE", // required
 *   PromptId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   S3Uri: "STRING_VALUE",
 * };
 * const command = new UpdatePromptCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePromptResponse
 * //   PromptARN: "STRING_VALUE",
 * //   PromptId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePromptCommandInput - {@link UpdatePromptCommandInput}
 * @returns {@link UpdatePromptCommandOutput}
 * @see {@link UpdatePromptCommandInput} for command's `input` shape.
 * @see {@link UpdatePromptCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdatePromptCommand extends command<UpdatePromptCommandInput, UpdatePromptCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePrompt",
  UpdatePrompt$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePromptRequest;
      output: UpdatePromptResponse;
    };
    sdk: {
      input: UpdatePromptCommandInput;
      output: UpdatePromptCommandOutput;
    };
  };
}
