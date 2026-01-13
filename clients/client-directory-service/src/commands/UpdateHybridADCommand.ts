// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateHybridADRequest, UpdateHybridADResult } from "../models/models_0";
import { UpdateHybridAD$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateHybridADCommand}.
 */
export interface UpdateHybridADCommandInput extends UpdateHybridADRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHybridADCommand}.
 */
export interface UpdateHybridADCommandOutput extends UpdateHybridADResult, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing hybrid directory. You can recover hybrid
 *             directory administrator account or modify self-managed instance settings.</p>
 *          <p>Updates are applied asynchronously. Use <a>DescribeHybridADUpdate</a> to
 *             monitor the progress of configuration changes.</p>
 *          <p>The <code>InstanceIds</code> must have a one-to-one correspondence with
 *                 <code>CustomerDnsIps</code>, meaning that if the IP address for instance i-10243410
 *             is 10.24.34.100 and the IP address for instance i-10243420 is 10.24.34.200, then the
 *             input arrays must maintain the same order relationship, either [10.24.34.100,
 *             10.24.34.200] paired with [i-10243410, i-10243420] or [10.24.34.200, 10.24.34.100]
 *             paired with [i-10243420, i-10243410].</p>
 *          <note>
 *             <p>You must provide at least one update to <a>UpdateHybridADRequest$HybridAdministratorAccountUpdate</a> or <a>UpdateHybridADRequest$SelfManagedInstancesSettings</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateHybridADCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateHybridADCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateHybridADRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   HybridAdministratorAccountUpdate: { // HybridAdministratorAccountUpdate
 *     SecretArn: "STRING_VALUE", // required
 *   },
 *   SelfManagedInstancesSettings: { // HybridCustomerInstancesSettings
 *     CustomerDnsIps: [ // CustomerDnsIps // required
 *       "STRING_VALUE",
 *     ],
 *     InstanceIds: [ // AssessmentInstanceIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateHybridADCommand(input);
 * const response = await client.send(command);
 * // { // UpdateHybridADResult
 * //   DirectoryId: "STRING_VALUE",
 * //   AssessmentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateHybridADCommandInput - {@link UpdateHybridADCommandInput}
 * @returns {@link UpdateHybridADCommandOutput}
 * @see {@link UpdateHybridADCommandInput} for command's `input` shape.
 * @see {@link UpdateHybridADCommandOutput} for command's `response` shape.
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
export class UpdateHybridADCommand extends $Command
  .classBuilder<
    UpdateHybridADCommandInput,
    UpdateHybridADCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "UpdateHybridAD", {})
  .n("DirectoryServiceClient", "UpdateHybridADCommand")
  .sc(UpdateHybridAD$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHybridADRequest;
      output: UpdateHybridADResult;
    };
    sdk: {
      input: UpdateHybridADCommandInput;
      output: UpdateHybridADCommandOutput;
    };
  };
}
