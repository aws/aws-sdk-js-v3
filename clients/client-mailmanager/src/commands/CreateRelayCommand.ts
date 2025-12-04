// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { CreateRelayRequest, CreateRelayResponse } from "../models/models_0";
import { CreateRelay } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRelayCommand}.
 */
export interface CreateRelayCommandInput extends CreateRelayRequest {}
/**
 * @public
 *
 * The output of {@link CreateRelayCommand}.
 */
export interface CreateRelayCommandOutput extends CreateRelayResponse, __MetadataBearer {}

/**
 * <p>Creates a relay resource which can be used in rules to relay incoming emails to defined relay destinations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, CreateRelayCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, CreateRelayCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // CreateRelayRequest
 *   ClientToken: "STRING_VALUE",
 *   RelayName: "STRING_VALUE", // required
 *   ServerName: "STRING_VALUE", // required
 *   ServerPort: Number("int"), // required
 *   Authentication: { // RelayAuthentication Union: only one key present
 *     SecretArn: "STRING_VALUE",
 *     NoAuthentication: {},
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRelayCommand(input);
 * const response = await client.send(command);
 * // { // CreateRelayResponse
 * //   RelayId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRelayCommandInput - {@link CreateRelayCommandInput}
 * @returns {@link CreateRelayCommandOutput}
 * @see {@link CreateRelayCommandInput} for command's `input` shape.
 * @see {@link CreateRelayCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when an operation exceeds a predefined service quota or limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class CreateRelayCommand extends $Command
  .classBuilder<
    CreateRelayCommandInput,
    CreateRelayCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "CreateRelay", {})
  .n("MailManagerClient", "CreateRelayCommand")
  .sc(CreateRelay)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRelayRequest;
      output: CreateRelayResponse;
    };
    sdk: {
      input: CreateRelayCommandInput;
      output: CreateRelayCommandOutput;
    };
  };
}
