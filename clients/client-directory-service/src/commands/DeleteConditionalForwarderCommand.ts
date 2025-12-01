// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteConditionalForwarderRequest, DeleteConditionalForwarderResult } from "../models/models_0";
import { DeleteConditionalForwarder } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a conditional forwarder that has been set up for your Amazon Web Services
 *       directory.</p>
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
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
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
export class DeleteConditionalForwarderCommand extends $Command
  .classBuilder<
    DeleteConditionalForwarderCommandInput,
    DeleteConditionalForwarderCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DeleteConditionalForwarder", {})
  .n("DirectoryServiceClient", "DeleteConditionalForwarderCommand")
  .sc(DeleteConditionalForwarder)
  .build() {
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
