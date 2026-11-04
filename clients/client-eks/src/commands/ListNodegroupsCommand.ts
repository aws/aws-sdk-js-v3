// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNodegroupsRequest, ListNodegroupsResponse } from "../models/models_0";
import { ListNodegroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNodegroupsCommand}.
 */
export interface ListNodegroupsCommandInput extends ListNodegroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListNodegroupsCommand}.
 */
export interface ListNodegroupsCommandOutput extends ListNodegroupsResponse, __MetadataBearer {}

/**
 * Lists the managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region. Self-managed node groups aren't listed.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListNodegroupsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListNodegroupsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // ListNodegroupsRequest
 *   clusterName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNodegroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListNodegroupsResponse
 * //   nodegroups: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNodegroupsCommandInput - {@link ListNodegroupsCommandInput}
 * @returns {@link ListNodegroupsCommandOutput}
 * @see {@link ListNodegroupsCommandInput} for command's `input` shape.
 * @see {@link ListNodegroupsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. Actions can include using an action or resource on behalf of an [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found. You can view your available clusters with `ListClusters`. You can view your available managed node groups with `ListNodegroups`. Amazon EKS clusters and node groups are Amazon Web Services Region specific.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is unavailable. Back off and retry the operation.
 *
 * @throws {@link EKSServiceException}
 *
 * Base exception class for all service exceptions from EKS service.
 *
 * @public
 */
export class ListNodegroupsCommand extends command<ListNodegroupsCommandInput, ListNodegroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListNodegroups",
  ListNodegroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNodegroupsRequest;
      output: ListNodegroupsResponse;
    };
    sdk: {
      input: ListNodegroupsCommandInput;
      output: ListNodegroupsCommandOutput;
    };
  };
}
