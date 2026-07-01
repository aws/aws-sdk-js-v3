// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDiscovererRequest, DescribeDiscovererResponse } from "../models/models_0";
import { DescribeDiscoverer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDiscovererCommand}.
 */
export interface DescribeDiscovererCommandInput extends DescribeDiscovererRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDiscovererCommand}.
 */
export interface DescribeDiscovererCommandOutput extends DescribeDiscovererResponse, __MetadataBearer {}

/**
 * <p>Describes the discoverer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DescribeDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DescribeDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // DescribeDiscovererRequest
 *   DiscovererId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDiscovererCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDiscovererResponse
 * //   Description: "STRING_VALUE",
 * //   DiscovererArn: "STRING_VALUE",
 * //   DiscovererId: "STRING_VALUE",
 * //   SourceArn: "STRING_VALUE",
 * //   State: "STARTED" || "STOPPED",
 * //   CrossAccount: true || false,
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDiscovererCommandInput - {@link DescribeDiscovererCommandInput}
 * @returns {@link DescribeDiscovererCommandOutput}
 * @see {@link DescribeDiscovererCommandInput} for command's `input` shape.
 * @see {@link DescribeDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 *
 * @public
 */
export class DescribeDiscovererCommand extends command<DescribeDiscovererCommandInput, DescribeDiscovererCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDiscoverer",
  DescribeDiscoverer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDiscovererRequest;
      output: DescribeDiscovererResponse;
    };
    sdk: {
      input: DescribeDiscovererCommandInput;
      output: DescribeDiscovererCommandOutput;
    };
  };
}
