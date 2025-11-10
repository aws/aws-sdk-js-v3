// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateConditionalForwarderRequest, UpdateConditionalForwarderResult } from "../models/models_0";
import { UpdateConditionalForwarder } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConditionalForwarderCommand}.
 */
export interface UpdateConditionalForwarderCommandInput extends UpdateConditionalForwarderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConditionalForwarderCommand}.
 */
export interface UpdateConditionalForwarderCommandOutput extends UpdateConditionalForwarderResult, __MetadataBearer {}

/**
 * <p>Updates a conditional forwarder that has been set up for your Amazon Web Services
 *       directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateConditionalForwarderCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateConditionalForwarderCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateConditionalForwarderRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   RemoteDomainName: "STRING_VALUE", // required
 *   DnsIpAddrs: [ // DnsIpAddrs
 *     "STRING_VALUE",
 *   ],
 *   DnsIpv6Addrs: [ // DnsIpv6Addrs
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConditionalForwarderCommandInput - {@link UpdateConditionalForwarderCommandInput}
 * @returns {@link UpdateConditionalForwarderCommandOutput}
 * @see {@link UpdateConditionalForwarderCommandInput} for command's `input` shape.
 * @see {@link UpdateConditionalForwarderCommandOutput} for command's `response` shape.
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
 * @example To update a conditional forwarder
 * ```javascript
 * // The following example updates a conditional forwarder for a specified directory.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   DnsIpAddrs: [
 *     "172.168.101.11"
 *   ],
 *   RemoteDomainName: "sales.example.com"
 * };
 * const command = new UpdateConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateConditionalForwarderCommand extends $Command
  .classBuilder<
    UpdateConditionalForwarderCommandInput,
    UpdateConditionalForwarderCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "UpdateConditionalForwarder", {})
  .n("DirectoryServiceClient", "UpdateConditionalForwarderCommand")
  .sc(UpdateConditionalForwarder)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConditionalForwarderRequest;
      output: {};
    };
    sdk: {
      input: UpdateConditionalForwarderCommandInput;
      output: UpdateConditionalForwarderCommandOutput;
    };
  };
}
