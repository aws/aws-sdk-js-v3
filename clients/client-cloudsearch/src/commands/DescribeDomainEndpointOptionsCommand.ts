// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDomainEndpointOptionsRequest, DescribeDomainEndpointOptionsResponse } from "../models/models_0";
import { DescribeDomainEndpointOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainEndpointOptionsCommand}.
 */
export interface DescribeDomainEndpointOptionsCommandInput extends DescribeDomainEndpointOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainEndpointOptionsCommand}.
 */
export interface DescribeDomainEndpointOptionsCommandOutput extends DescribeDomainEndpointOptionsResponse, __MetadataBearer {}

/**
 * <p>Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeDomainEndpointOptionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeDomainEndpointOptionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeDomainEndpointOptionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   Deployed: true || false,
 * };
 * const command = new DescribeDomainEndpointOptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainEndpointOptionsResponse
 * //   DomainEndpointOptions: { // DomainEndpointOptionsStatus
 * //     Options: { // DomainEndpointOptions
 * //       EnforceHTTPS: true || false,
 * //       TLSSecurityPolicy: "Policy-Min-TLS-1-0-2019-07" || "Policy-Min-TLS-1-2-2019-07",
 * //     },
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
 * @param DescribeDomainEndpointOptionsCommandInput - {@link DescribeDomainEndpointOptionsCommandInput}
 * @returns {@link DescribeDomainEndpointOptionsCommandOutput}
 * @see {@link DescribeDomainEndpointOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainEndpointOptionsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>The request was rejected because it attempted an operation which is not enabled.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a resource limit has already been met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 *
 * @public
 */
export class DescribeDomainEndpointOptionsCommand extends $Command
  .classBuilder<
    DescribeDomainEndpointOptionsCommandInput,
    DescribeDomainEndpointOptionsCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("A9SearchCloudConfigService2013", "DescribeDomainEndpointOptions", {})
  .n("CloudSearchClient", "DescribeDomainEndpointOptionsCommand")
  .sc(DescribeDomainEndpointOptions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDomainEndpointOptionsRequest;
      output: DescribeDomainEndpointOptionsResponse;
    };
    sdk: {
      input: DescribeDomainEndpointOptionsCommandInput;
      output: DescribeDomainEndpointOptionsCommandOutput;
    };
  };
}
