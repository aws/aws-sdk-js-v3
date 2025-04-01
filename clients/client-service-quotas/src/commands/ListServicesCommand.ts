// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListServicesRequest, ListServicesResponse } from "../models/models_0";
import { de_ListServicesCommand, se_ListServicesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServicesCommand}.
 */
export interface ListServicesCommandInput extends ListServicesRequest {}
/**
 * @public
 *
 * The output of {@link ListServicesCommand}.
 */
export interface ListServicesCommandOutput extends ListServicesResponse, __MetadataBearer {}

/**
 * <p>Lists the names and codes for the Amazon Web Services integrated with Service Quotas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServicesCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServicesCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const input = { // ListServicesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Services: [ // ServiceInfoListDefinition
 * //     { // ServiceInfo
 * //       ServiceCode: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServicesCommandInput - {@link ListServicesCommandInput}
 * @returns {@link ListServicesCommandOutput}
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Something went wrong.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Due to throttling, the request was denied. Slow down the rate of request calls, or
 *             request an increase for this quota.</p>
 *
 * @throws {@link ServiceQuotasServiceException}
 * <p>Base exception class for all service exceptions from ServiceQuotas service.</p>
 *
 *
 * @public
 */
export class ListServicesCommand extends $Command
  .classBuilder<
    ListServicesCommandInput,
    ListServicesCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ServiceQuotasV20190624", "ListServices", {})
  .n("ServiceQuotasClient", "ListServicesCommand")
  .f(void 0, void 0)
  .ser(se_ListServicesCommand)
  .de(de_ListServicesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicesRequest;
      output: ListServicesResponse;
    };
    sdk: {
      input: ListServicesCommandInput;
      output: ListServicesCommandOutput;
    };
  };
}
