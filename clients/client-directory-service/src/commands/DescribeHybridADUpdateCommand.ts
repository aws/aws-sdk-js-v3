// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeHybridADUpdateRequest, DescribeHybridADUpdateResult } from "../models/models_0";
import { DescribeHybridADUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves information about update activities for a hybrid directory. This operation provides details about configuration changes, administrator account updates, and self-managed instance settings (IDs and DNS IPs).
 *
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
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class DescribeHybridADUpdateCommand extends command<DescribeHybridADUpdateCommandInput, DescribeHybridADUpdateCommandOutput>(
  _ep0,
  _mw0,
  "DescribeHybridADUpdate",
  DescribeHybridADUpdate$
) {
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
