// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSinkInput, CreateSinkOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { de_CreateSinkCommand, se_CreateSinkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSinkCommand}.
 */
export interface CreateSinkCommandInput extends CreateSinkInput {}
/**
 * @public
 *
 * The output of {@link CreateSinkCommand}.
 */
export interface CreateSinkCommandOutput extends CreateSinkOutput, __MetadataBearer {}

/**
 * <p>Use this to create a <i>sink</i> in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data.</p> <p>After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each account can contain one sink per Region. If you delete a sink, you can then create a new one in that Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, CreateSinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, CreateSinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const input = { // CreateSinkInput
 *   Name: "STRING_VALUE", // required
 *   Tags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSinkCommand(input);
 * const response = await client.send(command);
 * // { // CreateSinkOutput
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Tags: { // TagMapOutput
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSinkCommandInput - {@link CreateSinkCommandInput}
 * @returns {@link CreateSinkCommandOutput}
 * @see {@link CreateSinkCommandInput} for command's `input` shape.
 * @see {@link CreateSinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 *
 * @public
 */
export class CreateSinkCommand extends $Command
  .classBuilder<
    CreateSinkCommandInput,
    CreateSinkCommandOutput,
    OAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("oamservice", "CreateSink", {})
  .n("OAMClient", "CreateSinkCommand")
  .f(void 0, void 0)
  .ser(se_CreateSinkCommand)
  .de(de_CreateSinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSinkInput;
      output: CreateSinkOutput;
    };
    sdk: {
      input: CreateSinkCommandInput;
      output: CreateSinkCommandOutput;
    };
  };
}
