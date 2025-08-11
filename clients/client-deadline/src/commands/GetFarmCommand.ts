// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFarmRequest, GetFarmResponse, GetFarmResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetFarmCommand, se_GetFarmCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFarmCommand}.
 */
export interface GetFarmCommandInput extends GetFarmRequest {}
/**
 * @public
 *
 * The output of {@link GetFarmCommand}.
 */
export interface GetFarmCommandOutput extends GetFarmResponse, __MetadataBearer {}

/**
 * <p>Get a farm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetFarmCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetFarmCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // GetFarmRequest
 *   farmId: "STRING_VALUE", // required
 * };
 * const command = new GetFarmCommand(input);
 * const response = await client.send(command);
 * // { // GetFarmResponse
 * //   farmId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   kmsKeyArn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFarmCommandInput - {@link GetFarmCommandInput}
 * @returns {@link GetFarmCommandOutput}
 * @see {@link GetFarmCommandInput} for command's `input` shape.
 * @see {@link GetFarmCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class GetFarmCommand extends $Command
  .classBuilder<
    GetFarmCommandInput,
    GetFarmCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "GetFarm", {})
  .n("DeadlineClient", "GetFarmCommand")
  .f(void 0, GetFarmResponseFilterSensitiveLog)
  .ser(se_GetFarmCommand)
  .de(de_GetFarmCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFarmRequest;
      output: GetFarmResponse;
    };
    sdk: {
      input: GetFarmCommandInput;
      output: GetFarmCommandOutput;
    };
  };
}
