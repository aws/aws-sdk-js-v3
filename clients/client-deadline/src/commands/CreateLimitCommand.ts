// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLimitRequest, CreateLimitRequestFilterSensitiveLog, CreateLimitResponse } from "../models/models_0";
import { de_CreateLimitCommand, se_CreateLimitCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLimitCommand}.
 */
export interface CreateLimitCommandInput extends CreateLimitRequest {}
/**
 * @public
 *
 * The output of {@link CreateLimitCommand}.
 */
export interface CreateLimitCommandOutput extends CreateLimitResponse, __MetadataBearer {}

/**
 * <p>Creates a limit that manages the distribution of shared resources, such as floating
 *          licenses. A limit can throttle work assignments, help manage workloads, and track current
 *          usage. Before you use a limit, you must associate the limit with one or more queues. </p>
 *          <p>You must add the <code>amountRequirementName</code> to a step in a job template to
 *          declare the limit requirement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateLimitCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateLimitCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // CreateLimitRequest
 *   clientToken: "STRING_VALUE",
 *   displayName: "STRING_VALUE", // required
 *   amountRequirementName: "STRING_VALUE", // required
 *   maxCount: Number("int"), // required
 *   farmId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateLimitCommand(input);
 * const response = await client.send(command);
 * // { // CreateLimitResponse
 * //   limitId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateLimitCommandInput - {@link CreateLimitCommandInput}
 * @returns {@link CreateLimitCommandOutput}
 * @see {@link CreateLimitCommandInput} for command's `input` shape.
 * @see {@link CreateLimitCommandOutput} for command's `response` shape.
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
export class CreateLimitCommand extends $Command
  .classBuilder<
    CreateLimitCommandInput,
    CreateLimitCommandOutput,
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
  .s("Deadline", "CreateLimit", {})
  .n("DeadlineClient", "CreateLimitCommand")
  .f(CreateLimitRequestFilterSensitiveLog, void 0)
  .ser(se_CreateLimitCommand)
  .de(de_CreateLimitCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLimitRequest;
      output: CreateLimitResponse;
    };
    sdk: {
      input: CreateLimitCommandInput;
      output: CreateLimitCommandOutput;
    };
  };
}
