// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListLicenseConversionTasksRequest, ListLicenseConversionTasksResponse } from "../models/models_0";
import { de_ListLicenseConversionTasksCommand, se_ListLicenseConversionTasksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLicenseConversionTasksCommand}.
 */
export interface ListLicenseConversionTasksCommandInput extends ListLicenseConversionTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListLicenseConversionTasksCommand}.
 */
export interface ListLicenseConversionTasksCommandOutput extends ListLicenseConversionTasksResponse, __MetadataBearer {}

/**
 * <p>Lists the license type conversion tasks for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseConversionTasksCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseConversionTasksCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // ListLicenseConversionTasksRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListLicenseConversionTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListLicenseConversionTasksResponse
 * //   LicenseConversionTasks: [ // LicenseConversionTasks
 * //     { // LicenseConversionTask
 * //       LicenseConversionTaskId: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       SourceLicenseContext: { // LicenseConversionContext
 * //         UsageOperation: "STRING_VALUE",
 * //       },
 * //       DestinationLicenseContext: {
 * //         UsageOperation: "STRING_VALUE",
 * //       },
 * //       Status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       LicenseConversionTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLicenseConversionTasksCommandInput - {@link ListLicenseConversionTasksCommandInput}
 * @returns {@link ListLicenseConversionTasksCommandOutput}
 * @see {@link ListLicenseConversionTasksCommandInput} for command's `input` shape.
 * @see {@link ListLicenseConversionTasksCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 * @public
 */
export class ListLicenseConversionTasksCommand extends $Command
  .classBuilder<
    ListLicenseConversionTasksCommandInput,
    ListLicenseConversionTasksCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "ListLicenseConversionTasks", {})
  .n("LicenseManagerClient", "ListLicenseConversionTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListLicenseConversionTasksCommand)
  .de(de_ListLicenseConversionTasksCommand)
  .build() {}
