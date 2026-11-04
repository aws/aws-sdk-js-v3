// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCapabilitiesRequest, ListCapabilitiesResponse } from "../models/models_0";
import { ListCapabilities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCapabilitiesCommand}.
 */
export interface ListCapabilitiesCommandInput extends ListCapabilitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListCapabilitiesCommand}.
 */
export interface ListCapabilitiesCommandOutput extends ListCapabilitiesResponse, __MetadataBearer {}

/**
 * Lists all managed capabilities in your Amazon EKS cluster. You can use this operation to get an overview of all capabilities and their current status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListCapabilitiesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListCapabilitiesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // ListCapabilitiesRequest
 *   clusterName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCapabilitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListCapabilitiesResponse
 * //   capabilities: [ // CapabilitySummaryList
 * //     { // CapabilitySummary
 * //       capabilityName: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       type: "ACK" || "KRO" || "ARGOCD",
 * //       status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "DELETING" || "DELETE_FAILED" || "ACTIVE" || "DEGRADED",
 * //       version: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCapabilitiesCommandInput - {@link ListCapabilitiesCommandInput}
 * @returns {@link ListCapabilitiesCommandOutput}
 * @see {@link ListCapabilitiesCommandInput} for command's `input` shape.
 * @see {@link ListCapabilitiesCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link EKSServiceException}
 *
 * Base exception class for all service exceptions from EKS service.
 *
 * @public
 */
export class ListCapabilitiesCommand extends command<ListCapabilitiesCommandInput, ListCapabilitiesCommandOutput>(
  _ep0,
  _mw0,
  "ListCapabilities",
  ListCapabilities$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCapabilitiesRequest;
      output: ListCapabilitiesResponse;
    };
    sdk: {
      input: ListCapabilitiesCommandInput;
      output: ListCapabilitiesCommandOutput;
    };
  };
}
