// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFargateProfilesRequest, ListFargateProfilesResponse } from "../models/models_0";
import { ListFargateProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFargateProfilesCommand}.
 */
export interface ListFargateProfilesCommandInput extends ListFargateProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListFargateProfilesCommand}.
 */
export interface ListFargateProfilesCommandOutput extends ListFargateProfilesResponse, __MetadataBearer {}

/**
 * Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListFargateProfilesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListFargateProfilesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // ListFargateProfilesRequest
 *   clusterName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFargateProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListFargateProfilesResponse
 * //   fargateProfileNames: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFargateProfilesCommandInput - {@link ListFargateProfilesCommandInput}
 * @returns {@link ListFargateProfilesCommandOutput}
 * @see {@link ListFargateProfilesCommandInput} for command's `input` shape.
 * @see {@link ListFargateProfilesCommandOutput} for command's `response` shape.
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
 * @throws {@link EKSServiceException}
 *
 * Base exception class for all service exceptions from EKS service.
 *
 * @public
 */
export class ListFargateProfilesCommand extends command<ListFargateProfilesCommandInput, ListFargateProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListFargateProfiles",
  ListFargateProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFargateProfilesRequest;
      output: ListFargateProfilesResponse;
    };
    sdk: {
      input: ListFargateProfilesCommandInput;
      output: ListFargateProfilesCommandOutput;
    };
  };
}
