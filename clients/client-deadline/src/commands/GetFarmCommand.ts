// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFarmRequest, GetFarmResponse } from "../models/models_0";
import { GetFarm } from "../schemas/schemas_0";

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
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "GetFarm", {})
  .n("DeadlineClient", "GetFarmCommand")
  .sc(GetFarm)
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
