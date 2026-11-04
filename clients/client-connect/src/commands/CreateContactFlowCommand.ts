// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateContactFlowRequest, CreateContactFlowResponse } from "../models/models_0";
import { CreateContactFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateContactFlowCommand}.
 */
export interface CreateContactFlowCommandInput extends CreateContactFlowRequest {}
/**
 * @public
 *
 * The output of {@link CreateContactFlowCommand}.
 */
export interface CreateContactFlowCommandOutput extends CreateContactFlowResponse, __MetadataBearer {}

/**
 * Creates a flow for the specified Connect Customer instance.
 *
 * You can also create and update flows using the [Connect Customer Flow language](https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateContactFlowRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Type: "CONTACT_FLOW" || "CUSTOMER_QUEUE" || "CUSTOMER_HOLD" || "CUSTOMER_WHISPER" || "AGENT_HOLD" || "AGENT_WHISPER" || "OUTBOUND_WHISPER" || "AGENT_TRANSFER" || "QUEUE_TRANSFER" || "CAMPAIGN", // required
 *   Description: "STRING_VALUE",
 *   Content: "STRING_VALUE", // required
 *   Status: "PUBLISHED" || "SAVED",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateContactFlowCommand(input);
 * const response = await client.send(command);
 * // { // CreateContactFlowResponse
 * //   ContactFlowId: "STRING_VALUE",
 * //   ContactFlowArn: "STRING_VALUE",
 * //   FlowContentSha256: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateContactFlowCommandInput - {@link CreateContactFlowCommandInput}
 * @returns {@link CreateContactFlowCommandOutput}
 * @see {@link CreateContactFlowCommandInput} for command's `input` shape.
 * @see {@link CreateContactFlowCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidContactFlowException} (client fault)
 *
 * The flow is not valid.
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
export class CreateContactFlowCommand extends command<CreateContactFlowCommandInput, CreateContactFlowCommandOutput>(
  _ep0,
  _mw0,
  "CreateContactFlow",
  CreateContactFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContactFlowRequest;
      output: CreateContactFlowResponse;
    };
    sdk: {
      input: CreateContactFlowCommandInput;
      output: CreateContactFlowCommandOutput;
    };
  };
}
