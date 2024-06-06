// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDomainNameRequest, CreateDomainNameResponse } from "../models/models_0";
import { de_CreateDomainNameCommand, se_CreateDomainNameCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDomainNameCommand}.
 */
export interface CreateDomainNameCommandInput extends CreateDomainNameRequest {}
/**
 * @public
 *
 * The output of {@link CreateDomainNameCommand}.
 */
export interface CreateDomainNameCommandOutput extends CreateDomainNameResponse, __MetadataBearer {}

/**
 * <p>Creates a custom <code>DomainName</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateDomainNameCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateDomainNameCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // CreateDomainNameRequest
 *   domainName: "STRING_VALUE", // required
 *   certificateArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateDomainNameCommand(input);
 * const response = await client.send(command);
 * // { // CreateDomainNameResponse
 * //   domainNameConfig: { // DomainNameConfig
 * //     domainName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     certificateArn: "STRING_VALUE",
 * //     appsyncDomainName: "STRING_VALUE",
 * //     hostedZoneId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDomainNameCommandInput - {@link CreateDomainNameCommandInput}
 * @returns {@link CreateDomainNameCommandOutput}
 * @see {@link CreateDomainNameCommandInput} for command's `input` shape.
 * @see {@link CreateDomainNameCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the
 *          field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 * @public
 */
export class CreateDomainNameCommand extends $Command
  .classBuilder<
    CreateDomainNameCommandInput,
    CreateDomainNameCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "CreateDomainName", {})
  .n("AppSyncClient", "CreateDomainNameCommand")
  .f(void 0, void 0)
  .ser(se_CreateDomainNameCommand)
  .de(de_CreateDomainNameCommand)
  .build() {}
