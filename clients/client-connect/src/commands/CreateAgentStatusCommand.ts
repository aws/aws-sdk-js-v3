// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAgentStatusRequest, CreateAgentStatusResponse } from "../models/models_0";
import { CreateAgentStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgentStatusCommand}.
 */
export interface CreateAgentStatusCommandInput extends CreateAgentStatusRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentStatusCommand}.
 */
export interface CreateAgentStatusCommandOutput extends CreateAgentStatusResponse, __MetadataBearer {}

/**
 * Creates an agent status for the specified Connect Customer instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateAgentStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateAgentStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateAgentStatusRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   State: "ENABLED" || "DISABLED", // required
 *   DisplayOrder: Number("int"),
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAgentStatusCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentStatusResponse
 * //   AgentStatusARN: "STRING_VALUE",
 * //   AgentStatusId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAgentStatusCommandInput - {@link CreateAgentStatusCommandInput}
 * @returns {@link CreateAgentStatusCommandOutput}
 * @see {@link CreateAgentStatusCommandInput} for command's `input` shape.
 * @see {@link CreateAgentStatusCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
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
export class CreateAgentStatusCommand extends command<CreateAgentStatusCommandInput, CreateAgentStatusCommandOutput>(
  _ep0,
  _mw0,
  "CreateAgentStatus",
  CreateAgentStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentStatusRequest;
      output: CreateAgentStatusResponse;
    };
    sdk: {
      input: CreateAgentStatusCommandInput;
      output: CreateAgentStatusCommandOutput;
    };
  };
}
