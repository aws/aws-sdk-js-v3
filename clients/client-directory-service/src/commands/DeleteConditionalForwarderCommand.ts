// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConditionalForwarderRequest, DeleteConditionalForwarderResult } from "../models/models_0";
import { DeleteConditionalForwarder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConditionalForwarderCommand}.
 */
export interface DeleteConditionalForwarderCommandInput extends DeleteConditionalForwarderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConditionalForwarderCommand}.
 */
export interface DeleteConditionalForwarderCommandOutput extends DeleteConditionalForwarderResult, __MetadataBearer {}

/**
 * Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteConditionalForwarderCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteConditionalForwarderCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DeleteConditionalForwarderRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   RemoteDomainName: "STRING_VALUE", // required
 * };
 * const command = new DeleteConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConditionalForwarderCommandInput - {@link DeleteConditionalForwarderCommandInput}
 * @returns {@link DeleteConditionalForwarderCommandOutput}
 * @see {@link DeleteConditionalForwarderCommandInput} for command's `input` shape.
 * @see {@link DeleteConditionalForwarderCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @example To delete a conditional forwarder
 * ```javascript
 * // The following example deletes a conditional forwarder.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   RemoteDomainName: "sales.example.com"
 * };
 * const command = new DeleteConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteConditionalForwarderCommand extends command<DeleteConditionalForwarderCommandInput, DeleteConditionalForwarderCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConditionalForwarder",
  DeleteConditionalForwarder$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConditionalForwarderRequest;
      output: {};
    };
    sdk: {
      input: DeleteConditionalForwarderCommandInput;
      output: DeleteConditionalForwarderCommandOutput;
    };
  };
}
