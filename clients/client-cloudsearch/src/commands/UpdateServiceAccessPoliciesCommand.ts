// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateServiceAccessPoliciesRequest, UpdateServiceAccessPoliciesResponse } from "../models/models_0";
import { UpdateServiceAccessPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceAccessPoliciesCommand}.
 */
export interface UpdateServiceAccessPoliciesCommandInput extends UpdateServiceAccessPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceAccessPoliciesCommand}.
 */
export interface UpdateServiceAccessPoliciesCommandOutput
  extends UpdateServiceAccessPoliciesResponse,
    __MetadataBearer {}

/**
 * <p>Configures the access rules that control access to the domain's document and search endpoints.
 *       For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">
 *         Configuring Access for an Amazon CloudSearch Domain</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, UpdateServiceAccessPoliciesCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, UpdateServiceAccessPoliciesCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // UpdateServiceAccessPoliciesRequest
 *   DomainName: "STRING_VALUE", // required
 *   AccessPolicies: "STRING_VALUE", // required
 * };
 * const command = new UpdateServiceAccessPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceAccessPoliciesResponse
 * //   AccessPolicies: { // AccessPoliciesStatus
 * //     Options: "STRING_VALUE", // required
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServiceAccessPoliciesCommandInput - {@link UpdateServiceAccessPoliciesCommandInput}
 * @returns {@link UpdateServiceAccessPoliciesCommandOutput}
 * @see {@link UpdateServiceAccessPoliciesCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceAccessPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The request was rejected because it specified an invalid type definition.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a resource limit has already been met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was rejected because it has invalid parameters.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 *
 * @public
 */
export class UpdateServiceAccessPoliciesCommand extends $Command
  .classBuilder<
    UpdateServiceAccessPoliciesCommandInput,
    UpdateServiceAccessPoliciesCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("A9SearchCloudConfigService2013", "UpdateServiceAccessPolicies", {})
  .n("CloudSearchClient", "UpdateServiceAccessPoliciesCommand")
  .sc(UpdateServiceAccessPolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceAccessPoliciesRequest;
      output: UpdateServiceAccessPoliciesResponse;
    };
    sdk: {
      input: UpdateServiceAccessPoliciesCommandInput;
      output: UpdateServiceAccessPoliciesCommandOutput;
    };
  };
}
