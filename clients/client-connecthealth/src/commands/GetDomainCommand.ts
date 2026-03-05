// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectHealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectHealthClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDomainInput, GetDomainOutput } from "../models/models_0";
import { GetDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainCommand}.
 */
export interface GetDomainCommandInput extends GetDomainInput {}
/**
 * @public
 *
 * The output of {@link GetDomainCommand}.
 */
export interface GetDomainCommandOutput extends GetDomainOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a Domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, GetDomainCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, GetDomainCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // GetDomainInput
 *   domainId: "STRING_VALUE", // required
 * };
 * const command = new GetDomainCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainOutput
 * //   domainId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   kmsKeyArn: "STRING_VALUE",
 * //   encryptionContext: { // EncryptionContext
 * //     encryptionType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * //   status: "ACTIVE" || "DELETING" || "DELETED", // required
 * //   webAppUrl: "STRING_VALUE",
 * //   webAppConfiguration: { // WebAppConfiguration
 * //     ehrRole: "STRING_VALUE", // required
 * //     idcApplicationId: "STRING_VALUE", // required
 * //     idcRegion: "STRING_VALUE", // required
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainCommandInput - {@link GetDomainCommandInput}
 * @returns {@link GetDomainCommandOutput}
 * @see {@link GetDomainCommandInput} for command's `input` shape.
 * @see {@link GetDomainCommandOutput} for command's `response` shape.
 * @see {@link ConnectHealthClientResolvedConfig | config} for ConnectHealthClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error is thrown when the requested resource is not found.</p>
 *
 * @throws {@link ConnectHealthServiceException}
 * <p>Base exception class for all service exceptions from ConnectHealth service.</p>
 *
 *
 * @public
 */
export class GetDomainCommand extends $Command
  .classBuilder<
    GetDomainCommandInput,
    GetDomainCommandOutput,
    ConnectHealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectHealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ConnectHealth", "GetDomain", {})
  .n("ConnectHealthClient", "GetDomainCommand")
  .sc(GetDomain$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainInput;
      output: GetDomainOutput;
    };
    sdk: {
      input: GetDomainCommandInput;
      output: GetDomainCommandOutput;
    };
  };
}
