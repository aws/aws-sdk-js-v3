// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAvailabilityOptionsRequest, DescribeAvailabilityOptionsResponse } from "../models/models_0";
import { DescribeAvailabilityOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the `Deployed` option to `true` to show the active configuration and exclude pending changes. For more information, see [Configuring Availability Options](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html) in the *Amazon CloudSearch Developer Guide*.
 *
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
 * @throws {@link InvalidTypeException} (client fault)
 *
 * The request was rejected because it specified an invalid type definition.
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
export class DescribeAvailabilityOptionsCommand extends command<DescribeAvailabilityOptionsCommandInput, DescribeAvailabilityOptionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAvailabilityOptions",
  DescribeAvailabilityOptions$
) {
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
