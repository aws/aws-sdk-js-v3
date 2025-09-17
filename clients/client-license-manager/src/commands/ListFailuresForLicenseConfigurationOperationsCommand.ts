// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  ListFailuresForLicenseConfigurationOperationsRequest,
  ListFailuresForLicenseConfigurationOperationsResponse,
} from "../models/models_0";
import {
  de_ListFailuresForLicenseConfigurationOperationsCommand,
  se_ListFailuresForLicenseConfigurationOperationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFailuresForLicenseConfigurationOperationsCommand}.
 */
export interface ListFailuresForLicenseConfigurationOperationsCommandInput
  extends ListFailuresForLicenseConfigurationOperationsRequest {}
/**
 * @public
 *
 * The output of {@link ListFailuresForLicenseConfigurationOperationsCommand}.
 */
export interface ListFailuresForLicenseConfigurationOperationsCommandOutput
  extends ListFailuresForLicenseConfigurationOperationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the license configuration operations that failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListFailuresForLicenseConfigurationOperationsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListFailuresForLicenseConfigurationOperationsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ListFailuresForLicenseConfigurationOperationsRequest
 *   LicenseConfigurationArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFailuresForLicenseConfigurationOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListFailuresForLicenseConfigurationOperationsResponse
 * //   LicenseOperationFailureList: [ // LicenseOperationFailureList
 * //     { // LicenseOperationFailure
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "EC2_INSTANCE" || "EC2_HOST" || "EC2_AMI" || "RDS" || "SYSTEMS_MANAGER_MANAGED_INSTANCE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       FailureTime: new Date("TIMESTAMP"),
 * //       OperationName: "STRING_VALUE",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       OperationRequestedBy: "STRING_VALUE",
 * //       MetadataList: [ // MetadataList
 * //         { // Metadata
 * //           Name: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFailuresForLicenseConfigurationOperationsCommandInput - {@link ListFailuresForLicenseConfigurationOperationsCommandInput}
 * @returns {@link ListFailuresForLicenseConfigurationOperationsCommandOutput}
 * @see {@link ListFailuresForLicenseConfigurationOperationsCommandInput} for command's `input` shape.
 * @see {@link ListFailuresForLicenseConfigurationOperationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListFailuresForLicenseConfigurationOperationsCommand extends $Command
  .classBuilder<
    ListFailuresForLicenseConfigurationOperationsCommandInput,
    ListFailuresForLicenseConfigurationOperationsCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "ListFailuresForLicenseConfigurationOperations", {})
  .n("LicenseManagerClient", "ListFailuresForLicenseConfigurationOperationsCommand")
  .f(void 0, void 0)
  .ser(se_ListFailuresForLicenseConfigurationOperationsCommand)
  .de(de_ListFailuresForLicenseConfigurationOperationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFailuresForLicenseConfigurationOperationsRequest;
      output: ListFailuresForLicenseConfigurationOperationsResponse;
    };
    sdk: {
      input: ListFailuresForLicenseConfigurationOperationsCommandInput;
      output: ListFailuresForLicenseConfigurationOperationsCommandOutput;
    };
  };
}
