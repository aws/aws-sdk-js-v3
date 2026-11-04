// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPendingInvitationResourcesRequest, ListPendingInvitationResourcesResponse } from "../models/models_0";
import { ListPendingInvitationResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPendingInvitationResourcesCommand}.
 */
export interface ListPendingInvitationResourcesCommandInput extends ListPendingInvitationResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListPendingInvitationResourcesCommand}.
 */
export interface ListPendingInvitationResourcesCommandOutput extends ListPendingInvitationResourcesResponse, __MetadataBearer {}

/**
 * Lists the resources in a resource share that is shared with you but for which the invitation is still `PENDING`. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
 *
 * > **Note:** Always check the `NextToken` response parameter for a `null` value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The `NextToken` response parameter value is `null` *only* when there are no more results to display.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPendingInvitationResourcesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPendingInvitationResourcesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // ListPendingInvitationResourcesRequest
 *   resourceShareInvitationArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   resourceRegionScope: "ALL" || "REGIONAL" || "GLOBAL",
 * };
 * const command = new ListPendingInvitationResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListPendingInvitationResourcesResponse
 * //   resources: [ // ResourceList
 * //     { // Resource
 * //       arn: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       resourceShareArn: "STRING_VALUE",
 * //       resourceGroupArn: "STRING_VALUE",
 * //       status: "AVAILABLE" || "ZONAL_RESOURCE_INACCESSIBLE" || "LIMIT_EXCEEDED" || "UNAVAILABLE" || "PENDING",
 * //       statusMessage: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       resourceRegionScope: "REGIONAL" || "GLOBAL",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPendingInvitationResourcesCommandInput - {@link ListPendingInvitationResourcesCommandInput}
 * @returns {@link ListPendingInvitationResourcesCommandOutput}
 * @see {@link ListPendingInvitationResourcesCommandInput} for command's `input` shape.
 * @see {@link ListPendingInvitationResourcesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The operation failed because the specified value for `NextToken` isn't valid. You must specify a value you received in the `NextToken` response of a previous call to this operation.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *
 * The operation failed because a required input parameter is missing.
 *
 * @throws {@link ResourceShareInvitationAlreadyRejectedException} (client fault)
 *
 * The operation failed because the specified invitation was already rejected.
 *
 * @throws {@link ResourceShareInvitationArnNotFoundException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) for an invitation was not found.
 *
 * @throws {@link ResourceShareInvitationExpiredException} (client fault)
 *
 * The operation failed because the specified invitation is past its expiration date and time.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link RAMServiceException}
 *
 * Base exception class for all service exceptions from RAM service.
 *
 * @public
 */
export class ListPendingInvitationResourcesCommand extends command<ListPendingInvitationResourcesCommandInput, ListPendingInvitationResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListPendingInvitationResources",
  ListPendingInvitationResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPendingInvitationResourcesRequest;
      output: ListPendingInvitationResourcesResponse;
    };
    sdk: {
      input: ListPendingInvitationResourcesCommandInput;
      output: ListPendingInvitationResourcesCommandOutput;
    };
  };
}
