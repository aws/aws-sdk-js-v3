// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAvailabilityOptionsRequest, UpdateAvailabilityOptionsResponse } from "../models/models_0";
import { UpdateAvailabilityOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAvailabilityOptionsCommand}.
 */
export interface UpdateAvailabilityOptionsCommandInput extends UpdateAvailabilityOptionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAvailabilityOptionsCommand}.
 */
export interface UpdateAvailabilityOptionsCommandOutput extends UpdateAvailabilityOptionsResponse, __MetadataBearer {}

/**
 * Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see [Configuring Availability Options](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, UpdateAvailabilityOptionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, UpdateAvailabilityOptionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // UpdateAvailabilityOptionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   MultiAZ: true || false, // required
 * };
 * const command = new UpdateAvailabilityOptionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAvailabilityOptionsResponse
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
 * @param UpdateAvailabilityOptionsCommandInput - {@link UpdateAvailabilityOptionsCommandInput}
 * @returns {@link UpdateAvailabilityOptionsCommandOutput}
 * @see {@link UpdateAvailabilityOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateAvailabilityOptionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *
 * The request was rejected because it has invalid parameters.
 *
 * @throws {@link CloudSearchServiceException}
 *
 * Base exception class for all service exceptions from CloudSearch service.
 *
 * @public
 */
export class UpdateAvailabilityOptionsCommand extends command<UpdateAvailabilityOptionsCommandInput, UpdateAvailabilityOptionsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAvailabilityOptions",
  UpdateAvailabilityOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAvailabilityOptionsRequest;
      output: UpdateAvailabilityOptionsResponse;
    };
    sdk: {
      input: UpdateAvailabilityOptionsCommandInput;
      output: UpdateAvailabilityOptionsCommandOutput;
    };
  };
}
