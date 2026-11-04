// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDomainEndpointOptionsRequest, UpdateDomainEndpointOptionsResponse } from "../models/models_0";
import { UpdateDomainEndpointOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDomainEndpointOptionsCommand}.
 */
export interface UpdateDomainEndpointOptionsCommandInput extends UpdateDomainEndpointOptionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainEndpointOptionsCommand}.
 */
export interface UpdateDomainEndpointOptionsCommandOutput extends UpdateDomainEndpointOptionsResponse, __MetadataBearer {}

/**
 * Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see [Configuring Domain Endpoint Options](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, UpdateDomainEndpointOptionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, UpdateDomainEndpointOptionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
 * const client = new CloudSearchClient(config);
 * const input = { // UpdateDomainEndpointOptionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   DomainEndpointOptions: { // DomainEndpointOptions
 *     EnforceHTTPS: true || false,
 *     TLSSecurityPolicy: "Policy-Min-TLS-1-0-2019-07" || "Policy-Min-TLS-1-2-2019-07",
 *   },
 * };
 * const command = new UpdateDomainEndpointOptionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainEndpointOptionsResponse
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
 * @param UpdateDomainEndpointOptionsCommandInput - {@link UpdateDomainEndpointOptionsCommandInput}
 * @returns {@link UpdateDomainEndpointOptionsCommandOutput}
 * @see {@link UpdateDomainEndpointOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainEndpointOptionsCommandOutput} for command's `response` shape.
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
export class UpdateDomainEndpointOptionsCommand extends command<UpdateDomainEndpointOptionsCommandInput, UpdateDomainEndpointOptionsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDomainEndpointOptions",
  UpdateDomainEndpointOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainEndpointOptionsRequest;
      output: UpdateDomainEndpointOptionsResponse;
    };
    sdk: {
      input: UpdateDomainEndpointOptionsCommandInput;
      output: UpdateDomainEndpointOptionsCommandOutput;
    };
  };
}
