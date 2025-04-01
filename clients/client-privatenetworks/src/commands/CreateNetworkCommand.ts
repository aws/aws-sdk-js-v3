// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateNetworkRequest,
  CreateNetworkRequestFilterSensitiveLog,
  CreateNetworkResponse,
  CreateNetworkResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_CreateNetworkCommand, se_CreateNetworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkCommand}.
 */
export interface CreateNetworkCommandInput extends CreateNetworkRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkCommand}.
 */
export interface CreateNetworkCommandOutput extends CreateNetworkResponse, __MetadataBearer {}

/**
 * <p>Creates a network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, CreateNetworkCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, CreateNetworkCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // CreateNetworkRequest
 *   networkName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateNetworkCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkResponse
 * //   network: { // Network
 * //     networkArn: "STRING_VALUE", // required
 * //     networkName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNetworkCommandInput - {@link CreateNetworkCommandInput}
 * @returns {@link CreateNetworkCommandOutput}
 * @see {@link CreateNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 *
 * @public
 */
export class CreateNetworkCommand extends $Command
  .classBuilder<
    CreateNetworkCommandInput,
    CreateNetworkCommandOutput,
    PrivateNetworksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PrivateNetworksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("E5GNetworkControllerLambda", "CreateNetwork", {})
  .n("PrivateNetworksClient", "CreateNetworkCommand")
  .f(CreateNetworkRequestFilterSensitiveLog, CreateNetworkResponseFilterSensitiveLog)
  .ser(se_CreateNetworkCommand)
  .de(de_CreateNetworkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkRequest;
      output: CreateNetworkResponse;
    };
    sdk: {
      input: CreateNetworkCommandInput;
      output: CreateNetworkCommandOutput;
    };
  };
}
