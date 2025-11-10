// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFarmRequest, CreateFarmResponse } from "../models/models_0";
import { CreateFarm } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFarmCommand}.
 */
export interface CreateFarmCommandInput extends CreateFarmRequest {}
/**
 * @public
 *
 * The output of {@link CreateFarmCommand}.
 */
export interface CreateFarmCommandOutput extends CreateFarmResponse, __MetadataBearer {}

/**
 * <p>Creates a farm to allow space for queues and fleets. Farms are the space where the
 *          components of your renders gather and are pieced together in the cloud. Farms contain
 *          budgets and allow you to enforce permissions. Deadline Cloud farms are a useful container for
 *          large projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateFarmCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateFarmCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // CreateFarmRequest
 *   clientToken: "STRING_VALUE",
 *   displayName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   kmsKeyArn: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFarmCommand(input);
 * const response = await client.send(command);
 * // { // CreateFarmResponse
 * //   farmId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateFarmCommandInput - {@link CreateFarmCommandInput}
 * @returns {@link CreateFarmCommandOutput}
 * @see {@link CreateFarmCommandInput} for command's `input` shape.
 * @see {@link CreateFarmCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *          maximum number of service resources or operations for your Amazon Web Services account.</p>
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
export class CreateFarmCommand extends $Command
  .classBuilder<
    CreateFarmCommandInput,
    CreateFarmCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "CreateFarm", {})
  .n("DeadlineClient", "CreateFarmCommand")
  .sc(CreateFarm)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFarmRequest;
      output: CreateFarmResponse;
    };
    sdk: {
      input: CreateFarmCommandInput;
      output: CreateFarmCommandOutput;
    };
  };
}
