// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBrokerRequest, DeleteBrokerResponse } from "../models/models_0";
import { DeleteBroker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBrokerCommand}.
 */
export interface DeleteBrokerCommandInput extends DeleteBrokerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBrokerCommand}.
 */
export interface DeleteBrokerCommandOutput extends DeleteBrokerResponse, __MetadataBearer {}

/**
 * <p>Deletes a broker. Note: This API is asynchronous.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DeleteBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DeleteBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // DeleteBrokerRequest
 *   BrokerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBrokerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBrokerResponse
 * //   BrokerId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBrokerCommandInput - {@link DeleteBrokerCommandInput}
 * @returns {@link DeleteBrokerCommandOutput}
 * @see {@link DeleteBrokerCommandInput} for command's `input` shape.
 * @see {@link DeleteBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 *
 * @public
 */
export class DeleteBrokerCommand extends command<DeleteBrokerCommandInput, DeleteBrokerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBroker",
  DeleteBroker$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBrokerRequest;
      output: DeleteBrokerResponse;
    };
    sdk: {
      input: DeleteBrokerCommandInput;
      output: DeleteBrokerCommandOutput;
    };
  };
}
