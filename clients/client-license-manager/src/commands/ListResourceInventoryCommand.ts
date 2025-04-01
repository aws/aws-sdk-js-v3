// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListResourceInventoryRequest, ListResourceInventoryResponse } from "../models/models_0";
import { de_ListResourceInventoryCommand, se_ListResourceInventoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceInventoryCommand}.
 */
export interface ListResourceInventoryCommandInput extends ListResourceInventoryRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceInventoryCommand}.
 */
export interface ListResourceInventoryCommandOutput extends ListResourceInventoryResponse, __MetadataBearer {}

/**
 * <p>Lists resources managed using Systems Manager inventory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListResourceInventoryCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListResourceInventoryCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // ListResourceInventoryRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // InventoryFilterList
 *     { // InventoryFilter
 *       Name: "STRING_VALUE", // required
 *       Condition: "EQUALS" || "NOT_EQUALS" || "BEGINS_WITH" || "CONTAINS", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ListResourceInventoryCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceInventoryResponse
 * //   ResourceInventoryList: [ // ResourceInventoryList
 * //     { // ResourceInventory
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "EC2_INSTANCE" || "EC2_HOST" || "EC2_AMI" || "RDS" || "SYSTEMS_MANAGER_MANAGED_INSTANCE",
 * //       ResourceArn: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //       PlatformVersion: "STRING_VALUE",
 * //       ResourceOwningAccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceInventoryCommandInput - {@link ListResourceInventoryCommandInput}
 * @returns {@link ListResourceInventoryCommandOutput}
 * @see {@link ListResourceInventoryCommandInput} for command's `input` shape.
 * @see {@link ListResourceInventoryCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>A dependency required to run the API is missing.</p>
 *
 * @throws {@link FilterLimitExceededException} (client fault)
 *  <p>The request uses too many filters or too many filter values.</p>
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
export class ListResourceInventoryCommand extends $Command
  .classBuilder<
    ListResourceInventoryCommandInput,
    ListResourceInventoryCommandOutput,
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
  .s("AWSLicenseManager", "ListResourceInventory", {})
  .n("LicenseManagerClient", "ListResourceInventoryCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceInventoryCommand)
  .de(de_ListResourceInventoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceInventoryRequest;
      output: ListResourceInventoryResponse;
    };
    sdk: {
      input: ListResourceInventoryCommandInput;
      output: ListResourceInventoryCommandOutput;
    };
  };
}
