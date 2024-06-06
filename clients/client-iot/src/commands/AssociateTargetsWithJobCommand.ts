// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AssociateTargetsWithJobRequest, AssociateTargetsWithJobResponse } from "../models/models_0";
import { de_AssociateTargetsWithJobCommand, se_AssociateTargetsWithJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTargetsWithJobCommand}.
 */
export interface AssociateTargetsWithJobCommandInput extends AssociateTargetsWithJobRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTargetsWithJobCommand}.
 */
export interface AssociateTargetsWithJobCommandOutput extends AssociateTargetsWithJobResponse, __MetadataBearer {}

/**
 * <p>Associates a group with a continuous job. The following criteria must be met: </p>
 *          <ul>
 *             <li>
 *                <p>The job must have been created with the <code>targetSelection</code> field set to
 *                     "CONTINUOUS".</p>
 *             </li>
 *             <li>
 *                <p>The job status must currently be "IN_PROGRESS".</p>
 *             </li>
 *             <li>
 *                <p>The total number of targets associated with a job must not exceed 100.</p>
 *             </li>
 *          </ul>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AssociateTargetsWithJob</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AssociateTargetsWithJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AssociateTargetsWithJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // AssociateTargetsWithJobRequest
 *   targets: [ // JobTargets // required
 *     "STRING_VALUE",
 *   ],
 *   jobId: "STRING_VALUE", // required
 *   comment: "STRING_VALUE",
 *   namespaceId: "STRING_VALUE",
 * };
 * const command = new AssociateTargetsWithJobCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTargetsWithJobResponse
 * //   jobArn: "STRING_VALUE",
 * //   jobId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateTargetsWithJobCommandInput - {@link AssociateTargetsWithJobCommandInput}
 * @returns {@link AssociateTargetsWithJobCommandOutput}
 * @see {@link AssociateTargetsWithJobCommandInput} for command's `input` shape.
 * @see {@link AssociateTargetsWithJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class AssociateTargetsWithJobCommand extends $Command
  .classBuilder<
    AssociateTargetsWithJobCommandInput,
    AssociateTargetsWithJobCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "AssociateTargetsWithJob", {})
  .n("IoTClient", "AssociateTargetsWithJobCommand")
  .f(void 0, void 0)
  .ser(se_AssociateTargetsWithJobCommand)
  .de(de_AssociateTargetsWithJobCommand)
  .build() {}
