// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteExtractionDefinitionRequest, DeleteExtractionDefinitionResponse } from "../models/models_1";
import { DeleteExtractionDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteExtractionDefinitionCommand}.
 */
export interface DeleteExtractionDefinitionCommandInput extends DeleteExtractionDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExtractionDefinitionCommand}.
 */
export interface DeleteExtractionDefinitionCommandOutput extends DeleteExtractionDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deletes an extraction definition from the specified Connect Customer instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteExtractionDefinitionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteExtractionDefinitionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteExtractionDefinitionRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ExtractionDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteExtractionDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteExtractionDefinitionCommandInput - {@link DeleteExtractionDefinitionCommandInput}
 * @returns {@link DeleteExtractionDefinitionCommandOutput}
 * @see {@link DeleteExtractionDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteExtractionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
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
export class DeleteExtractionDefinitionCommand extends command<DeleteExtractionDefinitionCommandInput, DeleteExtractionDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteExtractionDefinition",
  DeleteExtractionDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExtractionDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteExtractionDefinitionCommandInput;
      output: DeleteExtractionDefinitionCommandOutput;
    };
  };
}
