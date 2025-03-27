// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConditionalForwarderRequest, CreateConditionalForwarderResult } from "../models/models_0";
import { de_CreateConditionalForwarderCommand, se_CreateConditionalForwarderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConditionalForwarderCommand}.
 */
export interface CreateConditionalForwarderCommandInput extends CreateConditionalForwarderRequest {}
/**
 * @public
 *
 * The output of {@link CreateConditionalForwarderCommand}.
 */
export interface CreateConditionalForwarderCommandOutput extends CreateConditionalForwarderResult, __MetadataBearer {}

/**
 * <p>Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional
 *       forwarders are required in order to set up a trust relationship with another domain. The
 *       conditional forwarder points to the trusted domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateConditionalForwarderCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateConditionalForwarderCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // CreateConditionalForwarderRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   RemoteDomainName: "STRING_VALUE", // required
 *   DnsIpAddrs: [ // DnsIpAddrs // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateConditionalForwarderCommandInput - {@link CreateConditionalForwarderCommandInput}
 * @returns {@link CreateConditionalForwarderCommandOutput}
 * @see {@link CreateConditionalForwarderCommandInput} for command's `input` shape.
 * @see {@link CreateConditionalForwarderCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The specified entity already exists.</p>
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
 * @public
 */
export class CreateConditionalForwarderCommand extends $Command
  .classBuilder<
    CreateConditionalForwarderCommandInput,
    CreateConditionalForwarderCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "CreateConditionalForwarder", {})
  .n("DirectoryServiceClient", "CreateConditionalForwarderCommand")
  .f(void 0, void 0)
  .ser(se_CreateConditionalForwarderCommand)
  .de(de_CreateConditionalForwarderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConditionalForwarderRequest;
      output: {};
    };
    sdk: {
      input: CreateConditionalForwarderCommandInput;
      output: CreateConditionalForwarderCommandOutput;
    };
  };
}
