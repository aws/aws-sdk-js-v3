// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSourceNetworkRequest, CreateSourceNetworkResponse } from "../models/models_0";
import { CreateSourceNetwork } from "../schemas/schemas_8_Source";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSourceNetworkCommand}.
 */
export interface CreateSourceNetworkCommandInput extends CreateSourceNetworkRequest {}
/**
 * @public
 *
 * The output of {@link CreateSourceNetworkCommand}.
 */
export interface CreateSourceNetworkCommandOutput extends CreateSourceNetworkResponse, __MetadataBearer {}

/**
 * <p>Create a new Source Network resource for a provided VPC ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, CreateSourceNetworkCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, CreateSourceNetworkCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // CreateSourceNetworkRequest
 *   vpcID: "STRING_VALUE", // required
 *   originAccountID: "STRING_VALUE", // required
 *   originRegion: "STRING_VALUE", // required
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSourceNetworkCommand(input);
 * const response = await client.send(command);
 * // { // CreateSourceNetworkResponse
 * //   sourceNetworkID: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSourceNetworkCommandInput - {@link CreateSourceNetworkCommandInput}
 * @returns {@link CreateSourceNetworkCommandOutput}
 * @see {@link CreateSourceNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateSourceNetworkCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class CreateSourceNetworkCommand extends $Command
  .classBuilder<
    CreateSourceNetworkCommandInput,
    CreateSourceNetworkCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "CreateSourceNetwork", {})
  .n("DrsClient", "CreateSourceNetworkCommand")
  .sc(CreateSourceNetwork)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSourceNetworkRequest;
      output: CreateSourceNetworkResponse;
    };
    sdk: {
      input: CreateSourceNetworkCommandInput;
      output: CreateSourceNetworkCommandOutput;
    };
  };
}
