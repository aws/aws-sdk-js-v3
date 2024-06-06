// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ListEffectiveDeploymentsRequest, ListEffectiveDeploymentsResponse } from "../models/models_0";
import { de_ListEffectiveDeploymentsCommand, se_ListEffectiveDeploymentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEffectiveDeploymentsCommand}.
 */
export interface ListEffectiveDeploymentsCommandInput extends ListEffectiveDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link ListEffectiveDeploymentsCommand}.
 */
export interface ListEffectiveDeploymentsCommandOutput extends ListEffectiveDeploymentsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListEffectiveDeploymentsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListEffectiveDeploymentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const input = { // ListEffectiveDeploymentsRequest
 *   coreDeviceThingName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEffectiveDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListEffectiveDeploymentsResponse
 * //   effectiveDeployments: [ // EffectiveDeploymentsList
 * //     { // EffectiveDeployment
 * //       deploymentId: "STRING_VALUE", // required
 * //       deploymentName: "STRING_VALUE", // required
 * //       iotJobId: "STRING_VALUE",
 * //       iotJobArn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       targetArn: "STRING_VALUE", // required
 * //       coreDeviceExecutionStatus: "IN_PROGRESS" || "QUEUED" || "FAILED" || "COMPLETED" || "TIMED_OUT" || "CANCELED" || "REJECTED" || "SUCCEEDED", // required
 * //       reason: "STRING_VALUE",
 * //       creationTimestamp: new Date("TIMESTAMP"), // required
 * //       modifiedTimestamp: new Date("TIMESTAMP"), // required
 * //       statusDetails: { // EffectiveDeploymentStatusDetails
 * //         errorStack: [ // EffectiveDeploymentErrorStack
 * //           "STRING_VALUE",
 * //         ],
 * //         errorTypes: [ // EffectiveDeploymentErrorTypeList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEffectiveDeploymentsCommandInput - {@link ListEffectiveDeploymentsCommandInput}
 * @returns {@link ListEffectiveDeploymentsCommandOutput}
 * @see {@link ListEffectiveDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListEffectiveDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 * @public
 */
export class ListEffectiveDeploymentsCommand extends $Command
  .classBuilder<
    ListEffectiveDeploymentsCommandInput,
    ListEffectiveDeploymentsCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GreengrassV2", "ListEffectiveDeployments", {})
  .n("GreengrassV2Client", "ListEffectiveDeploymentsCommand")
  .f(void 0, void 0)
  .ser(se_ListEffectiveDeploymentsCommand)
  .de(de_ListEffectiveDeploymentsCommand)
  .build() {}
