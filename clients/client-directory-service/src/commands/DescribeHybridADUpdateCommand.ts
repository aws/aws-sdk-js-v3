// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHybridADUpdateRequest, DescribeHybridADUpdateResult } from "../models/models_0";
import { de_DescribeHybridADUpdateCommand, se_DescribeHybridADUpdateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHybridADUpdateCommand}.
 */
export interface DescribeHybridADUpdateCommandInput extends DescribeHybridADUpdateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHybridADUpdateCommand}.
 */
export interface DescribeHybridADUpdateCommandOutput extends DescribeHybridADUpdateResult, __MetadataBearer {}

/**
 * <p>Retrieves information about update activities for a hybrid directory. This operation
 *             provides details about configuration changes, administrator account updates, and
 *             self-managed instance settings (IDs and DNS IPs).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeHybridADUpdateCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeHybridADUpdateCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeHybridADUpdateRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   UpdateType: "SelfManagedInstances" || "HybridAdministratorAccount",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeHybridADUpdateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHybridADUpdateResult
 * //   UpdateActivities: { // HybridUpdateActivities
 * //     SelfManagedInstances: [ // HybridUpdateInfoEntries
 * //       { // HybridUpdateInfoEntry
 * //         Status: "Updated" || "Updating" || "UpdateFailed",
 * //         StatusReason: "STRING_VALUE",
 * //         InitiatedBy: "STRING_VALUE",
 * //         NewValue: { // HybridUpdateValue
 * //           InstanceIds: [ // AssessmentInstanceIds
 * //             "STRING_VALUE",
 * //           ],
 * //           DnsIps: [ // CustomerDnsIps
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         PreviousValue: {
 * //           InstanceIds: [
 * //             "STRING_VALUE",
 * //           ],
 * //           DnsIps: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         StartTime: new Date("TIMESTAMP"),
 * //         LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //         AssessmentId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     HybridAdministratorAccount: [
 * //       {
 * //         Status: "Updated" || "Updating" || "UpdateFailed",
 * //         StatusReason: "STRING_VALUE",
 * //         InitiatedBy: "STRING_VALUE",
 * //         NewValue: {
 * //           InstanceIds: [
 * //             "STRING_VALUE",
 * //           ],
 * //           DnsIps: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         PreviousValue: {
 * //           InstanceIds: [
 * //             "STRING_VALUE",
 * //           ],
 * //           DnsIps: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         StartTime: new Date("TIMESTAMP"),
 * //         LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //         AssessmentId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeHybridADUpdateCommandInput - {@link DescribeHybridADUpdateCommandInput}
 * @returns {@link DescribeHybridADUpdateCommandOutput}
 * @see {@link DescribeHybridADUpdateCommandInput} for command's `input` shape.
 * @see {@link DescribeHybridADUpdateCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
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
export class DescribeHybridADUpdateCommand extends $Command
  .classBuilder<
    DescribeHybridADUpdateCommandInput,
    DescribeHybridADUpdateCommandOutput,
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
  .s("DirectoryService_20150416", "DescribeHybridADUpdate", {})
  .n("DirectoryServiceClient", "DescribeHybridADUpdateCommand")
  .f(void 0, void 0)
  .ser(se_DescribeHybridADUpdateCommand)
  .de(de_DescribeHybridADUpdateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHybridADUpdateRequest;
      output: DescribeHybridADUpdateResult;
    };
    sdk: {
      input: DescribeHybridADUpdateCommandInput;
      output: DescribeHybridADUpdateCommandOutput;
    };
  };
}
