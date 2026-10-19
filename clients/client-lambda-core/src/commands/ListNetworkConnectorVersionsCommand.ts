// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNetworkConnectorVersionsRequest, ListNetworkConnectorVersionsResponse } from "../models/models_0";
import { ListNetworkConnectorVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNetworkConnectorVersionsCommand}.
 */
export interface ListNetworkConnectorVersionsCommandInput extends ListNetworkConnectorVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkConnectorVersionsCommand}.
 */
export interface ListNetworkConnectorVersionsCommandOutput extends ListNetworkConnectorVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of the versions of a network connector. Each configuration update creates a new immutable version; this operation lists those versions for the connector you specify. You can optionally filter results by version state. Use the <code>Marker</code> parameter from a previous response to retrieve the next page of results.</p> <p>Each item in the response includes the version-qualified ARN, version number, current state, and last modified timestamp for that version. To retrieve the current (latest) configuration of the connector, use <code>GetNetworkConnector</code>; to inspect a specific version, call <code>GetNetworkConnector</code> with a version-qualified identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, ListNetworkConnectorVersionsCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, ListNetworkConnectorVersionsCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // ListNetworkConnectorVersionsRequest
 *   Identifier: "STRING_VALUE", // required
 *   State: "PENDING" || "ACTIVE" || "INACTIVE" || "FAILED" || "DELETING" || "DELETE_FAILED",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListNetworkConnectorVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkConnectorVersionsResponse
 * //   NetworkConnectorVersions: [ // NetworkConnectorVersionsList // required
 * //     { // NetworkConnectorVersionSummary
 * //       Arn: "STRING_VALUE", // required
 * //       VersionArn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Version: Number("long"), // required
 * //       State: "PENDING" || "ACTIVE" || "INACTIVE" || "FAILED" || "DELETING" || "DELETE_FAILED", // required
 * //       StateReason: "STRING_VALUE",
 * //       StateReasonCode: "DisallowedByVpcEncryptionControl" || "Ec2RequestLimitExceeded" || "InsufficientRolePermissions" || "InternalError" || "InvalidSecurityGroup" || "InvalidSubnet" || "SecurityGroupsPerInterfaceLimitExceeded" || "SubnetOutOfIPAddresses",
 * //       LastModified: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkConnectorVersionsCommandInput - {@link ListNetworkConnectorVersionsCommandInput}
 * @returns {@link ListNetworkConnectorVersionsCommandOutput}
 * @see {@link ListNetworkConnectorVersionsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkConnectorVersionsCommandOutput} for command's `response` shape.
 * @see {@link LambdaCoreClientResolvedConfig | config} for LambdaCoreClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified network connector does not exist. Verify the identifier (ID, name, or ARN) and Region.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal service error occurred. Retry the request with exponential backoff.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was throttled due to exceeding the allowed request rate. Retry the request after a brief wait using exponential backoff.</p>
 *
 * @throws {@link LambdaCoreServiceException}
 * <p>Base exception class for all service exceptions from LambdaCore service.</p>
 *
 *
 * @public
 */
export class ListNetworkConnectorVersionsCommand extends command<ListNetworkConnectorVersionsCommandInput, ListNetworkConnectorVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListNetworkConnectorVersions",
  ListNetworkConnectorVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkConnectorVersionsRequest;
      output: ListNetworkConnectorVersionsResponse;
    };
    sdk: {
      input: ListNetworkConnectorVersionsCommandInput;
      output: ListNetworkConnectorVersionsCommandOutput;
    };
  };
}
