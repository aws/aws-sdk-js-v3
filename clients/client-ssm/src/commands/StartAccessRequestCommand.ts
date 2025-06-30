// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartAccessRequestRequest, StartAccessRequestResponse } from "../models/models_2";
import { de_StartAccessRequestCommand, se_StartAccessRequestCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAccessRequestCommand}.
 */
export interface StartAccessRequestCommandInput extends StartAccessRequestRequest {}
/**
 * @public
 *
 * The output of {@link StartAccessRequestCommand}.
 */
export interface StartAccessRequestCommandOutput extends StartAccessRequestResponse, __MetadataBearer {}

/**
 * <p>Starts the workflow for just-in-time node access sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartAccessRequestCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartAccessRequestCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // StartAccessRequestRequest
 *   Reason: "STRING_VALUE", // required
 *   Targets: [ // Targets // required
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartAccessRequestCommand(input);
 * const response = await client.send(command);
 * // { // StartAccessRequestResponse
 * //   AccessRequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAccessRequestCommandInput - {@link StartAccessRequestCommandInput}
 * @returns {@link StartAccessRequestCommandOutput}
 * @see {@link StartAccessRequestCommandInput} for command's `input` shape.
 * @see {@link StartAccessRequestCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requester doesn't have permissions to perform the requested operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified parameter to be shared could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds the service quota. Service quotas, also referred to as limits, are the
 *    maximum number of service resources or operations for your Amazon Web Services account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because the service is throttling
 *    requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Verify that you entered valid contents for the command and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class StartAccessRequestCommand extends $Command
  .classBuilder<
    StartAccessRequestCommandInput,
    StartAccessRequestCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "StartAccessRequest", {})
  .n("SSMClient", "StartAccessRequestCommand")
  .f(void 0, void 0)
  .ser(se_StartAccessRequestCommand)
  .de(de_StartAccessRequestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAccessRequestRequest;
      output: StartAccessRequestResponse;
    };
    sdk: {
      input: StartAccessRequestCommandInput;
      output: StartAccessRequestCommandOutput;
    };
  };
}
