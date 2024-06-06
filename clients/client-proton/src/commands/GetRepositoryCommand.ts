// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRepositoryInput, GetRepositoryOutput } from "../models/models_0";
import { de_GetRepositoryCommand, se_GetRepositoryCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRepositoryCommand}.
 */
export interface GetRepositoryCommandInput extends GetRepositoryInput {}
/**
 * @public
 *
 * The output of {@link GetRepositoryCommand}.
 */
export interface GetRepositoryCommandOutput extends GetRepositoryOutput, __MetadataBearer {}

/**
 * <p>Get detail data for a linked repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetRepositoryCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetRepositoryCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // GetRepositoryInput
 *   provider: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositoryOutput
 * //   repository: { // Repository
 * //     arn: "STRING_VALUE", // required
 * //     provider: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     connectionArn: "STRING_VALUE", // required
 * //     encryptionKey: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRepositoryCommandInput - {@link GetRepositoryCommandInput}
 * @returns {@link GetRepositoryCommandOutput}
 * @see {@link GetRepositoryCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 * @public
 */
export class GetRepositoryCommand extends $Command
  .classBuilder<
    GetRepositoryCommandInput,
    GetRepositoryCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "GetRepository", {})
  .n("ProtonClient", "GetRepositoryCommand")
  .f(void 0, void 0)
  .ser(se_GetRepositoryCommand)
  .de(de_GetRepositoryCommand)
  .build() {}
