// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProfileShareInput, CreateProfileShareOutput } from "../models/models_0";
import { de_CreateProfileShareCommand, se_CreateProfileShareCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProfileShareCommand}.
 */
export interface CreateProfileShareCommandInput extends CreateProfileShareInput {}
/**
 * @public
 *
 * The output of {@link CreateProfileShareCommand}.
 */
export interface CreateProfileShareCommandOutput extends CreateProfileShareOutput, __MetadataBearer {}

/**
 * <p>Create a profile share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateProfileShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateProfileShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateProfileShareInput
 *   ProfileArn: "STRING_VALUE", // required
 *   SharedWith: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateProfileShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateProfileShareOutput
 * //   ShareId: "STRING_VALUE",
 * //   ProfileArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProfileShareCommandInput - {@link CreateProfileShareCommandInput}
 * @returns {@link CreateProfileShareCommandOutput}
 * @see {@link CreateProfileShareCommandInput} for command's `input` shape.
 * @see {@link CreateProfileShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class CreateProfileShareCommand extends $Command
  .classBuilder<
    CreateProfileShareCommandInput,
    CreateProfileShareCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "CreateProfileShare", {})
  .n("WellArchitectedClient", "CreateProfileShareCommand")
  .f(void 0, void 0)
  .ser(se_CreateProfileShareCommand)
  .de(de_CreateProfileShareCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProfileShareInput;
      output: CreateProfileShareOutput;
    };
    sdk: {
      input: CreateProfileShareCommandInput;
      output: CreateProfileShareCommandOutput;
    };
  };
}
