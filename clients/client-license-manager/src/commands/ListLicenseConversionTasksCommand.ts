// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLicenseConversionTasksRequest, ListLicenseConversionTasksResponse } from "../models/models_0";
import { ListLicenseConversionTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the license type conversion tasks for your account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseConversionTasksCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseConversionTasksCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
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
 * //         ProductCodes: [ // ProductCodeList
 * //           { // ProductCodeListItem
 * //             ProductCodeId: "STRING_VALUE", // required
 * //             ProductCodeType: "marketplace", // required
 * //           },
 * //         ],
 * //       },
 * //       DestinationLicenseContext: {
 * //         UsageOperation: "STRING_VALUE",
 * //         ProductCodes: [
 * //           {
 * //             ProductCodeId: "STRING_VALUE", // required
 * //             ProductCodeType: "marketplace", // required
 * //           },
 * //         ],
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
 *
 * Access to resource denied.
 *
 * @throws {@link AuthorizationException} (client fault)
 *
 * The Amazon Web Services user account does not have permission to perform the action. Check the IAM policy associated with this account.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link LicenseManagerServiceException}
 *
 * Base exception class for all service exceptions from LicenseManager service.
 *
 * @public
 */
export class ListLicenseConversionTasksCommand extends command<ListLicenseConversionTasksCommandInput, ListLicenseConversionTasksCommandOutput>(
  _ep0,
  _mw0,
  "ListLicenseConversionTasks",
  ListLicenseConversionTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLicenseConversionTasksRequest;
      output: ListLicenseConversionTasksResponse;
    };
    sdk: {
      input: ListLicenseConversionTasksCommandInput;
      output: ListLicenseConversionTasksCommandOutput;
    };
  };
}
