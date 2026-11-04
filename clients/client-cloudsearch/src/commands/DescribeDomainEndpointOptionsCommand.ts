// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDomainEndpointOptionsRequest, DescribeDomainEndpointOptionsResponse } from "../models/models_0";
import { DescribeDomainEndpointOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see [Configuring Domain Endpoint Options](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html) in the *Amazon CloudSearch Developer Guide*.
 *
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
 *
 * An error occurred while processing the request.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * The request was rejected because it attempted an operation which is not enabled.
 *
 * @throws {@link InternalException} (server fault)
 *
 * An internal error occurred while processing the request. If this problem persists, report an issue from the [Service Health Dashboard](http://status.aws.amazon.com/).
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because a resource limit has already been met.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because it attempted to reference a resource that does not exist.
 *
 * @throws {@link CloudSearchServiceException}
 *
 * Base exception class for all service exceptions from CloudSearch service.
 *
 * @public
 */
export class DescribeDomainEndpointOptionsCommand extends command<DescribeDomainEndpointOptionsCommandInput, DescribeDomainEndpointOptionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDomainEndpointOptions",
  DescribeDomainEndpointOptions$
) {
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
