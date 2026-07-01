// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateContactFlowNameRequest, UpdateContactFlowNameResponse } from "../models/models_3";
import { UpdateContactFlowName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateContactFlowNameCommand}.
 */
export interface UpdateContactFlowNameCommandInput extends UpdateContactFlowNameRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactFlowNameCommand}.
 */
export interface UpdateContactFlowNameCommandOutput extends UpdateContactFlowNameResponse, __MetadataBearer {}

/**
 * <p>The name of the flow.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Connect Customer
 *    Flow language</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactFlowNameRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateContactFlowNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactFlowNameCommandInput - {@link UpdateContactFlowNameCommandInput}
 * @returns {@link UpdateContactFlowNameCommandOutput}
 * @see {@link UpdateContactFlowNameCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateContactFlowNameCommand extends command<UpdateContactFlowNameCommandInput, UpdateContactFlowNameCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContactFlowName",
  UpdateContactFlowName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactFlowNameRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactFlowNameCommandInput;
      output: UpdateContactFlowNameCommandOutput;
    };
  };
}
