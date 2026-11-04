// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateServiceAccessPoliciesRequest, UpdateServiceAccessPoliciesResponse } from "../models/models_0";
import { UpdateServiceAccessPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateServiceAccessPoliciesCommandOutput extends UpdateServiceAccessPoliciesResponse, __MetadataBearer {}

/**
 * Configures the access rules that control access to the domain's document and search endpoints. For more information, see [Configuring Access for an Amazon CloudSearch Domain](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html).
 *
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
 *
 * An error occurred while processing the request.
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
export class UpdateServiceAccessPoliciesCommand extends command<UpdateServiceAccessPoliciesCommandInput, UpdateServiceAccessPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateServiceAccessPolicies",
  UpdateServiceAccessPolicies$
) {
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
