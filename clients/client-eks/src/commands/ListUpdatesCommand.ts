// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUpdatesRequest, ListUpdatesResponse } from "../models/models_0";
import { ListUpdates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListUpdatesCommand}.
 */
export interface ListUpdatesCommandInput extends ListUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link ListUpdatesCommand}.
 */
export interface ListUpdatesCommandOutput extends ListUpdatesResponse, __MetadataBearer {}

/**
 * Lists the updates associated with an Amazon EKS resource in your Amazon Web Services account, in the specified Amazon Web Services Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListUpdatesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListUpdatesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // ListUpdatesRequest
 *   name: "STRING_VALUE", // required
 *   nodegroupName: "STRING_VALUE",
 *   addonName: "STRING_VALUE",
 *   capabilityName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // ListUpdatesResponse
 * //   updateIds: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUpdatesCommandInput - {@link ListUpdatesCommandInput}
 * @returns {@link ListUpdatesCommandOutput}
 * @see {@link ListUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListUpdatesCommandOutput} for command's `response` shape.
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
export class ListUpdatesCommand extends command<ListUpdatesCommandInput, ListUpdatesCommandOutput>(
  _ep0,
  _mw0,
  "ListUpdates",
  ListUpdates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUpdatesRequest;
      output: ListUpdatesResponse;
    };
    sdk: {
      input: ListUpdatesCommandInput;
      output: ListUpdatesCommandOutput;
    };
  };
}
