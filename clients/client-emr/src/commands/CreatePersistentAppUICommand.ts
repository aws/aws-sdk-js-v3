// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePersistentAppUIInput, CreatePersistentAppUIOutput } from "../models/models_0";
import { de_CreatePersistentAppUICommand, se_CreatePersistentAppUICommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePersistentAppUICommand}.
 */
export interface CreatePersistentAppUICommandInput extends CreatePersistentAppUIInput {}
/**
 * @public
 *
 * The output of {@link CreatePersistentAppUICommand}.
 */
export interface CreatePersistentAppUICommandOutput extends CreatePersistentAppUIOutput, __MetadataBearer {}

/**
 * <p>Creates a persistent application user interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreatePersistentAppUICommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreatePersistentAppUICommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // CreatePersistentAppUIInput
 *   TargetResourceArn: "STRING_VALUE", // required
 *   EMRContainersConfig: { // EMRContainersConfig
 *     JobRunId: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   XReferer: "STRING_VALUE",
 *   ProfilerType: "SHS" || "TEZUI" || "YTS",
 * };
 * const command = new CreatePersistentAppUICommand(input);
 * const response = await client.send(command);
 * // { // CreatePersistentAppUIOutput
 * //   PersistentAppUIId: "STRING_VALUE",
 * //   RuntimeRoleEnabledCluster: true || false,
 * // };
 *
 * ```
 *
 * @param CreatePersistentAppUICommandInput - {@link CreatePersistentAppUICommandInput}
 * @returns {@link CreatePersistentAppUICommandOutput}
 * @see {@link CreatePersistentAppUICommandInput} for command's `input` shape.
 * @see {@link CreatePersistentAppUICommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class CreatePersistentAppUICommand extends $Command
  .classBuilder<
    CreatePersistentAppUICommandInput,
    CreatePersistentAppUICommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "CreatePersistentAppUI", {})
  .n("EMRClient", "CreatePersistentAppUICommand")
  .f(void 0, void 0)
  .ser(se_CreatePersistentAppUICommand)
  .de(de_CreatePersistentAppUICommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePersistentAppUIInput;
      output: CreatePersistentAppUIOutput;
    };
    sdk: {
      input: CreatePersistentAppUICommandInput;
      output: CreatePersistentAppUICommandOutput;
    };
  };
}
