// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAvailabilityOptionsRequest, DescribeAvailabilityOptionsResponse } from "../models/models_0";
import { DescribeAvailabilityOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAvailabilityOptionsCommand}.
 */
export interface DescribeAvailabilityOptionsCommandInput extends DescribeAvailabilityOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAvailabilityOptionsCommand}.
 */
export interface DescribeAvailabilityOptionsCommandOutput extends DescribeAvailabilityOptionsResponse, __MetadataBearer {}

/**
 * <p>Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeAvailabilityOptionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeAvailabilityOptionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeAvailabilityOptionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   Deployed: true || false,
 * };
 * const command = new DescribeAvailabilityOptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAvailabilityOptionsResponse
 * //   AvailabilityOptions: { // AvailabilityOptionsStatus
 * //     Options: true || false, // required
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
 * @param DescribeAvailabilityOptionsCommandInput - {@link DescribeAvailabilityOptionsCommandInput}
 * @returns {@link DescribeAvailabilityOptionsCommandOutput}
 * @see {@link DescribeAvailabilityOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityOptionsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The request was rejected because it specified an invalid type definition.</p>
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
export class DescribeAvailabilityOptionsCommand extends $Command
  .classBuilder<
    DescribeAvailabilityOptionsCommandInput,
    DescribeAvailabilityOptionsCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("A9SearchCloudConfigService2013", "DescribeAvailabilityOptions", {})
  .n("CloudSearchClient", "DescribeAvailabilityOptionsCommand")
  .sc(DescribeAvailabilityOptions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAvailabilityOptionsRequest;
      output: DescribeAvailabilityOptionsResponse;
    };
    sdk: {
      input: DescribeAvailabilityOptionsCommandInput;
      output: DescribeAvailabilityOptionsCommandOutput;
    };
  };
}
