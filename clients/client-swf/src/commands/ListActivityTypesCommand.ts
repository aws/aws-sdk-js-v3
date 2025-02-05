// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ActivityTypeInfos, ListActivityTypesInput } from "../models/models_0";
import { de_ListActivityTypesCommand, se_ListActivityTypesCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListActivityTypesCommand}.
 */
export interface ListActivityTypesCommandInput extends ListActivityTypesInput {}
/**
 * @public
 *
 * The output of {@link ListActivityTypesCommand}.
 */
export interface ListActivityTypesCommandOutput extends ActivityTypeInfos, __MetadataBearer {}

/**
 * <p>Returns information about all activities registered in the specified domain that match
 *       the specified name and registration status. The result includes information like creation
 *       date, current status of the activity, etc. The results may be split into multiple pages. To
 *       retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned
 *       by the initial call.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, ListActivityTypesCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, ListActivityTypesCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SWFClient(config);
 * const input = { // ListActivityTypesInput
 *   domain: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   registrationStatus: "REGISTERED" || "DEPRECATED", // required
 *   nextPageToken: "STRING_VALUE",
 *   maximumPageSize: Number("int"),
 *   reverseOrder: true || false,
 * };
 * const command = new ListActivityTypesCommand(input);
 * const response = await client.send(command);
 * // { // ActivityTypeInfos
 * //   typeInfos: [ // ActivityTypeInfoList // required
 * //     { // ActivityTypeInfo
 * //       activityType: { // ActivityType
 * //         name: "STRING_VALUE", // required
 * //         version: "STRING_VALUE", // required
 * //       },
 * //       status: "REGISTERED" || "DEPRECATED", // required
 * //       description: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"), // required
 * //       deprecationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListActivityTypesCommandInput - {@link ListActivityTypesCommandInput}
 * @returns {@link ListActivityTypesCommandOutput}
 * @see {@link ListActivityTypesCommandInput} for command's `input` shape.
 * @see {@link ListActivityTypesCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *  <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 *
 * @throws {@link SWFServiceException}
 * <p>Base exception class for all service exceptions from SWF service.</p>
 *
 * @public
 */
export class ListActivityTypesCommand extends $Command
  .classBuilder<
    ListActivityTypesCommandInput,
    ListActivityTypesCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleWorkflowService", "ListActivityTypes", {})
  .n("SWFClient", "ListActivityTypesCommand")
  .f(void 0, void 0)
  .ser(se_ListActivityTypesCommand)
  .de(de_ListActivityTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListActivityTypesInput;
      output: ActivityTypeInfos;
    };
    sdk: {
      input: ListActivityTypesCommandInput;
      output: ListActivityTypesCommandOutput;
    };
  };
}
