// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeIdentityStoreRequest, DescribeIdentityStoreResponse } from "../models/models_0";
import { DescribeIdentityStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeIdentityStoreCommand}.
 */
export interface DescribeIdentityStoreCommandInput extends DescribeIdentityStoreRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIdentityStoreCommand}.
 */
export interface DescribeIdentityStoreCommandOutput extends DescribeIdentityStoreResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about the specified identity store, including its Amazon Resource Name (ARN) and network configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, DescribeIdentityStoreCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, DescribeIdentityStoreCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * // import type { IdentitystoreClientConfig } from "@aws-sdk/client-identitystore";
 * const config = {}; // type is IdentitystoreClientConfig
 * const client = new IdentitystoreClient(config);
 * const input = { // DescribeIdentityStoreRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 * };
 * const command = new DescribeIdentityStoreCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIdentityStoreResponse
 * //   IdentityStoreId: "STRING_VALUE", // required
 * //   IdentityStoreArn: "STRING_VALUE", // required
 * //   NetworkConfiguration: { // NetworkConfigurationDetails
 * //     VpceAccessRequired: true || false, // required
 * //     ApiRestrictSourceVpcs: [ // VpcIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     ApiAllowSourceIps: [ // IpCidrList
 * //       "STRING_VALUE",
 * //     ],
 * //     ScimAllowSourceIps: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeIdentityStoreCommandInput - {@link DescribeIdentityStoreCommandInput}
 * @returns {@link DescribeIdentityStoreCommandOutput}
 * @see {@link DescribeIdentityStoreCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityStoreCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link IdentitystoreServiceException}
 * <p>Base exception class for all service exceptions from Identitystore service.</p>
 *
 *
 * @public
 */
export class DescribeIdentityStoreCommand extends command<DescribeIdentityStoreCommandInput, DescribeIdentityStoreCommandOutput>(
  _ep0,
  _mw0,
  "DescribeIdentityStore",
  DescribeIdentityStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIdentityStoreRequest;
      output: DescribeIdentityStoreResponse;
    };
    sdk: {
      input: DescribeIdentityStoreCommandInput;
      output: DescribeIdentityStoreCommandOutput;
    };
  };
}
