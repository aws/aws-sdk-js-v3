// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeApplicationProviderRequest, DescribeApplicationProviderResponse } from "../models/models_0";
import { DescribeApplicationProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeApplicationProviderCommand}.
 */
export interface DescribeApplicationProviderCommandInput extends DescribeApplicationProviderRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationProviderCommand}.
 */
export interface DescribeApplicationProviderCommandOutput extends DescribeApplicationProviderResponse, __MetadataBearer {}

/**
 * Retrieves details about a provider that can be used to connect an Amazon Web Services managed application or customer managed application to IAM Identity Center.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeApplicationProviderCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeApplicationProviderCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeApplicationProviderRequest
 *   ApplicationProviderArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeApplicationProviderCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationProviderResponse
 * //   ApplicationProviderArn: "STRING_VALUE", // required
 * //   FederationProtocol: "SAML" || "OAUTH",
 * //   DisplayData: { // DisplayData
 * //     DisplayName: "STRING_VALUE",
 * //     IconUrl: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * //   ResourceServerConfig: { // ResourceServerConfig
 * //     Scopes: { // ResourceServerScopes
 * //       "<keys>": { // ResourceServerScopeDetails
 * //         LongDescription: "STRING_VALUE",
 * //         DetailedTitle: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeApplicationProviderCommandInput - {@link DescribeApplicationProviderCommandInput}
 * @returns {@link DescribeApplicationProviderCommandOutput}
 * @see {@link DescribeApplicationProviderCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationProviderCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class DescribeApplicationProviderCommand extends command<DescribeApplicationProviderCommandInput, DescribeApplicationProviderCommandOutput>(
  _ep0,
  _mw0,
  "DescribeApplicationProvider",
  DescribeApplicationProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationProviderRequest;
      output: DescribeApplicationProviderResponse;
    };
    sdk: {
      input: DescribeApplicationProviderCommandInput;
      output: DescribeApplicationProviderCommandOutput;
    };
  };
}
