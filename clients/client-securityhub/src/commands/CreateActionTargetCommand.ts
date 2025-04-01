// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateActionTargetRequest, CreateActionTargetResponse } from "../models/models_2";
import { de_CreateActionTargetCommand, se_CreateActionTargetCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateActionTargetCommand}.
 */
export interface CreateActionTargetCommandInput extends CreateActionTargetRequest {}
/**
 * @public
 *
 * The output of {@link CreateActionTargetCommand}.
 */
export interface CreateActionTargetCommandOutput extends CreateActionTargetResponse, __MetadataBearer {}

/**
 * <p>Creates a custom action target in Security Hub.</p>
 *          <p>You can use custom actions on findings and insights in Security Hub to trigger target actions
 *          in Amazon CloudWatch Events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateActionTargetCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateActionTargetCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // CreateActionTargetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new CreateActionTargetCommand(input);
 * const response = await client.send(command);
 * // { // CreateActionTargetResponse
 * //   ActionTargetArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateActionTargetCommandInput - {@link CreateActionTargetCommandInput}
 * @returns {@link CreateActionTargetCommandOutput}
 * @see {@link CreateActionTargetCommandInput} for command's `input` shape.
 * @see {@link CreateActionTargetCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To create a custom action target
 * ```javascript
 * // The following example creates a custom action target in Security Hub. Custom actions on findings and insights automatically trigger actions in Amazon CloudWatch Events.
 * const input = {
 *   Description: "Action to send the finding for remediation tracking",
 *   Id: "Remediation",
 *   Name: "Send to remediation"
 * };
 * const command = new CreateActionTargetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ActionTargetArn: "arn:aws:securityhub:us-west-1:123456789012:action/custom/Remediation"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateActionTargetCommand extends $Command
  .classBuilder<
    CreateActionTargetCommandInput,
    CreateActionTargetCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "CreateActionTarget", {})
  .n("SecurityHubClient", "CreateActionTargetCommand")
  .f(void 0, void 0)
  .ser(se_CreateActionTargetCommand)
  .de(de_CreateActionTargetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateActionTargetRequest;
      output: CreateActionTargetResponse;
    };
    sdk: {
      input: CreateActionTargetCommandInput;
      output: CreateActionTargetCommandOutput;
    };
  };
}
