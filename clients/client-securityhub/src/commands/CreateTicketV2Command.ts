// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTicketV2Request, CreateTicketV2Response } from "../models/models_2";
import { de_CreateTicketV2Command, se_CreateTicketV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTicketV2Command}.
 */
export interface CreateTicketV2CommandInput extends CreateTicketV2Request {}
/**
 * @public
 *
 * The output of {@link CreateTicketV2Command}.
 */
export interface CreateTicketV2CommandOutput extends CreateTicketV2Response, __MetadataBearer {}

/**
 * <p>Grants permission to create a ticket in the chosen ITSM based on finding information for the provided finding metadata UID. This API is in preview release and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateTicketV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateTicketV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // CreateTicketV2Request
 *   ConnectorId: "STRING_VALUE", // required
 *   FindingMetadataUid: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateTicketV2Command(input);
 * const response = await client.send(command);
 * // { // CreateTicketV2Response
 * //   TicketId: "STRING_VALUE", // required
 * //   TicketSrcUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTicketV2CommandInput - {@link CreateTicketV2CommandInput}
 * @returns {@link CreateTicketV2CommandOutput}
 * @see {@link CreateTicketV2CommandInput} for command's `input` shape.
 * @see {@link CreateTicketV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class CreateTicketV2Command extends $Command
  .classBuilder<
    CreateTicketV2CommandInput,
    CreateTicketV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "CreateTicketV2", {})
  .n("SecurityHubClient", "CreateTicketV2Command")
  .f(void 0, void 0)
  .ser(se_CreateTicketV2Command)
  .de(de_CreateTicketV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTicketV2Request;
      output: CreateTicketV2Response;
    };
    sdk: {
      input: CreateTicketV2CommandInput;
      output: CreateTicketV2CommandOutput;
    };
  };
}
