// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetKeyGroupConfigRequest } from "../models/models_0";
import type { GetKeyGroupConfigResult } from "../models/models_1";
import { GetKeyGroupConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetKeyGroupConfigCommand}.
 */
export interface GetKeyGroupConfigCommandInput extends GetKeyGroupConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetKeyGroupConfigCommand}.
 */
export interface GetKeyGroupConfigCommandOutput extends GetKeyGroupConfigResult, __MetadataBearer {}

/**
 * <p>Gets a key group configuration.</p> <p>To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetKeyGroupConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetKeyGroupConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetKeyGroupConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetKeyGroupConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetKeyGroupConfigResult
 * //   KeyGroupConfig: { // KeyGroupConfig
 * //     Name: "STRING_VALUE", // required
 * //     Items: [ // PublicKeyIdList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Comment: "STRING_VALUE",
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetKeyGroupConfigCommandInput - {@link GetKeyGroupConfigCommandInput}
 * @returns {@link GetKeyGroupConfigCommandOutput}
 * @see {@link GetKeyGroupConfigCommandInput} for command's `input` shape.
 * @see {@link GetKeyGroupConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link NoSuchResource} (client fault)
 *  <p>A resource that was specified is not valid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetKeyGroupConfigCommand extends command<GetKeyGroupConfigCommandInput, GetKeyGroupConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetKeyGroupConfig",
  GetKeyGroupConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKeyGroupConfigRequest;
      output: GetKeyGroupConfigResult;
    };
    sdk: {
      input: GetKeyGroupConfigCommandInput;
      output: GetKeyGroupConfigCommandOutput;
    };
  };
}
