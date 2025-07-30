// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartADAssessmentRequest, StartADAssessmentResult } from "../models/models_0";
import { de_StartADAssessmentCommand, se_StartADAssessmentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartADAssessmentCommand}.
 */
export interface StartADAssessmentCommandInput extends StartADAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link StartADAssessmentCommand}.
 */
export interface StartADAssessmentCommandOutput extends StartADAssessmentResult, __MetadataBearer {}

/**
 * <p>Initiates a directory assessment to validate your self-managed AD environment for
 *             hybrid domain join. The assessment checks compatibility and connectivity of the
 *             self-managed AD environment.</p>
 *          <p>A directory assessment is automatically created when you create a hybrid directory.
 *             There are two types of assessments: <code>CUSTOMER</code> and <code>SYSTEM</code>. Your
 *             Amazon Web Services account has a limit of 100 <code>CUSTOMER</code> directory assessments.</p>
 *          <p>The assessment process typically takes 30 minutes or more to complete. The assessment
 *             process is asynchronous and you can monitor it with
 *             <code>DescribeADAssessment</code>.</p>
 *          <p>The <code>InstanceIds</code> must have a one-to-one correspondence with
 *                 <code>CustomerDnsIps</code>, meaning that if the IP address for instance i-10243410
 *             is 10.24.34.100 and the IP address for instance i-10243420 is 10.24.34.200, then the
 *             input arrays must maintain the same order relationship, either [10.24.34.100,
 *             10.24.34.200] paired with [i-10243410, i-10243420] or [10.24.34.200, 10.24.34.100]
 *             paired with [i-10243420, i-10243410].</p>
 *          <p>Note: You must provide exactly one <code>DirectoryId</code> or
 *                 <code>AssessmentConfiguration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, StartADAssessmentCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, StartADAssessmentCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // StartADAssessmentRequest
 *   AssessmentConfiguration: { // AssessmentConfiguration
 *     CustomerDnsIps: [ // CustomerDnsIps // required
 *       "STRING_VALUE",
 *     ],
 *     DnsName: "STRING_VALUE", // required
 *     VpcSettings: { // DirectoryVpcSettings
 *       VpcId: "STRING_VALUE", // required
 *       SubnetIds: [ // SubnetIds // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     InstanceIds: [ // AssessmentInstanceIds // required
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   DirectoryId: "STRING_VALUE",
 * };
 * const command = new StartADAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // StartADAssessmentResult
 * //   AssessmentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartADAssessmentCommandInput - {@link StartADAssessmentCommandInput}
 * @returns {@link StartADAssessmentCommandOutput}
 * @see {@link StartADAssessmentCommandInput} for command's `input` shape.
 * @see {@link StartADAssessmentCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ADAssessmentLimitExceededException} (client fault)
 *  <p>A directory assessment is automatically created when you create a hybrid directory.
 *             There are two types of assessments: <code>CUSTOMER</code> and <code>SYSTEM</code>. Your
 *             Amazon Web Services account has a limit of 100 <code>CUSTOMER</code> directory assessments.</p>
 *          <p>If you attempt to create a hybrid directory; and you already have 100
 *                 <code>CUSTOMER</code> directory assessments;, you will encounter an error. Delete
 *             assessments to free up capacity before trying again.</p>
 *          <p>You can request an increase to your <code>CUSTOMER</code> directory assessment quota
 *             by contacting customer support or delete existing CUSTOMER directory assessments; to
 *             free up capacity.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class StartADAssessmentCommand extends $Command
  .classBuilder<
    StartADAssessmentCommandInput,
    StartADAssessmentCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "StartADAssessment", {})
  .n("DirectoryServiceClient", "StartADAssessmentCommand")
  .f(void 0, void 0)
  .ser(se_StartADAssessmentCommand)
  .de(de_StartADAssessmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartADAssessmentRequest;
      output: StartADAssessmentResult;
    };
    sdk: {
      input: StartADAssessmentCommandInput;
      output: StartADAssessmentCommandOutput;
    };
  };
}
