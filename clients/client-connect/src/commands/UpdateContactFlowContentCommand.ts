// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateContactFlowContentRequest, UpdateContactFlowContentResponse } from "../models/models_3";
import { UpdateContactFlowContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateContactFlowContentCommand}.
 */
export interface UpdateContactFlowContentCommandInput extends UpdateContactFlowContentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactFlowContentCommand}.
 */
export interface UpdateContactFlowContentCommandOutput extends UpdateContactFlowContentResponse, __MetadataBearer {}

/**
 * Updates the specified flow.
 *
 * You can also create and update flows using the [Connect Customer Flow language](https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html).
 *
 * Use the `$SAVED` alias in the request to describe the `SAVED` content of a Flow. For example, `arn:aws:.../contact-flow/\{id\}:$SAVED`. After a flow is published, `$SAVED` needs to be supplied to view saved content that has not been published.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowContentCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowContentCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactFlowContentRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   Content: "STRING_VALUE", // required
 * };
 * const command = new UpdateContactFlowContentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactFlowContentCommandInput - {@link UpdateContactFlowContentCommandInput}
 * @returns {@link UpdateContactFlowContentCommandOutput}
 * @see {@link UpdateContactFlowContentCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowContentCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
export class UpdateContactFlowContentCommand extends command<UpdateContactFlowContentCommandInput, UpdateContactFlowContentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContactFlowContent",
  UpdateContactFlowContent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactFlowContentRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactFlowContentCommandInput;
      output: UpdateContactFlowContentCommandOutput;
    };
  };
}
