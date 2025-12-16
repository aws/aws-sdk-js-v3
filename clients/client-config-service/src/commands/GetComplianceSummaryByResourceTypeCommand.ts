// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetComplianceSummaryByResourceTypeRequest,
  GetComplianceSummaryByResourceTypeResponse,
} from "../models/models_0";
import { GetComplianceSummaryByResourceType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComplianceSummaryByResourceTypeCommand}.
 */
export interface GetComplianceSummaryByResourceTypeCommandInput extends GetComplianceSummaryByResourceTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetComplianceSummaryByResourceTypeCommand}.
 */
export interface GetComplianceSummaryByResourceTypeCommandOutput
  extends GetComplianceSummaryByResourceTypeResponse,
    __MetadataBearer {}

/**
 * <p>Returns the number of resources that are compliant and the
 * 			number that are noncompliant. You can specify one or more resource
 * 			types to get these numbers for each resource type. The maximum
 * 			number returned is 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceSummaryByResourceTypeCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceSummaryByResourceTypeCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // GetComplianceSummaryByResourceTypeRequest
 *   ResourceTypes: [ // ResourceTypes
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetComplianceSummaryByResourceTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetComplianceSummaryByResourceTypeResponse
 * //   ComplianceSummariesByResourceType: [ // ComplianceSummariesByResourceType
 * //     { // ComplianceSummaryByResourceType
 * //       ResourceType: "STRING_VALUE",
 * //       ComplianceSummary: { // ComplianceSummary
 * //         CompliantResourceCount: { // ComplianceContributorCount
 * //           CappedCount: Number("int"),
 * //           CapExceeded: true || false,
 * //         },
 * //         NonCompliantResourceCount: {
 * //           CappedCount: Number("int"),
 * //           CapExceeded: true || false,
 * //         },
 * //         ComplianceSummaryTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetComplianceSummaryByResourceTypeCommandInput - {@link GetComplianceSummaryByResourceTypeCommandInput}
 * @returns {@link GetComplianceSummaryByResourceTypeCommandOutput}
 * @see {@link GetComplianceSummaryByResourceTypeCommandInput} for command's `input` shape.
 * @see {@link GetComplianceSummaryByResourceTypeCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class GetComplianceSummaryByResourceTypeCommand extends $Command
  .classBuilder<
    GetComplianceSummaryByResourceTypeCommandInput,
    GetComplianceSummaryByResourceTypeCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "GetComplianceSummaryByResourceType", {})
  .n("ConfigServiceClient", "GetComplianceSummaryByResourceTypeCommand")
  .sc(GetComplianceSummaryByResourceType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComplianceSummaryByResourceTypeRequest;
      output: GetComplianceSummaryByResourceTypeResponse;
    };
    sdk: {
      input: GetComplianceSummaryByResourceTypeCommandInput;
      output: GetComplianceSummaryByResourceTypeCommandOutput;
    };
  };
}
