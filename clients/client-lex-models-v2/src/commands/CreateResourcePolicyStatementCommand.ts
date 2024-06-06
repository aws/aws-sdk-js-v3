// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateResourcePolicyStatementRequest, CreateResourcePolicyStatementResponse } from "../models/models_0";
import {
  de_CreateResourcePolicyStatementCommand,
  se_CreateResourcePolicyStatementCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResourcePolicyStatementCommand}.
 */
export interface CreateResourcePolicyStatementCommandInput extends CreateResourcePolicyStatementRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourcePolicyStatementCommand}.
 */
export interface CreateResourcePolicyStatementCommandOutput
  extends CreateResourcePolicyStatementResponse,
    __MetadataBearer {}

/**
 * <p>Adds a new resource policy statement to a bot or bot alias. If a
 *          resource policy exists, the statement is added to the current resource
 *          policy. If a policy doesn't exist, a new policy is created.</p>
 *          <p>You can't create a resource policy statement that allows
 *          cross-account access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateResourcePolicyStatementCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateResourcePolicyStatementCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateResourcePolicyStatementRequest
 *   resourceArn: "STRING_VALUE", // required
 *   statementId: "STRING_VALUE", // required
 *   effect: "Allow" || "Deny", // required
 *   principal: [ // PrincipalList // required
 *     { // Principal
 *       service: "STRING_VALUE",
 *       arn: "STRING_VALUE",
 *     },
 *   ],
 *   action: [ // OperationList // required
 *     "STRING_VALUE",
 *   ],
 *   condition: { // ConditionMap
 *     "<keys>": { // ConditionKeyValueMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   expectedRevisionId: "STRING_VALUE",
 * };
 * const command = new CreateResourcePolicyStatementCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourcePolicyStatementResponse
 * //   resourceArn: "STRING_VALUE",
 * //   revisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourcePolicyStatementCommandInput - {@link CreateResourcePolicyStatementCommandInput}
 * @returns {@link CreateResourcePolicyStatementCommandOutput}
 * @see {@link CreateResourcePolicyStatementCommandInput} for command's `input` shape.
 * @see {@link CreateResourcePolicyStatementCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 * @public
 */
export class CreateResourcePolicyStatementCommand extends $Command
  .classBuilder<
    CreateResourcePolicyStatementCommandInput,
    CreateResourcePolicyStatementCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "CreateResourcePolicyStatement", {})
  .n("LexModelsV2Client", "CreateResourcePolicyStatementCommand")
  .f(void 0, void 0)
  .ser(se_CreateResourcePolicyStatementCommand)
  .de(de_CreateResourcePolicyStatementCommand)
  .build() {}
