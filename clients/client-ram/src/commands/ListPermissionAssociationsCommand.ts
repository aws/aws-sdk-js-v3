// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPermissionAssociationsRequest, ListPermissionAssociationsResponse } from "../models/models_0";
import { ListPermissionAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPermissionAssociationsCommand}.
 */
export interface ListPermissionAssociationsCommandInput extends ListPermissionAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionAssociationsCommand}.
 */
export interface ListPermissionAssociationsCommandOutput extends ListPermissionAssociationsResponse, __MetadataBearer {}

/**
 * Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission.
 *
 * > **Note:** Always check the `NextToken` response parameter for a `null` value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The `NextToken` response parameter value is `null` *only* when there are no more results to display.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPermissionAssociationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPermissionAssociationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // ListPermissionAssociationsRequest
 *   permissionArn: "STRING_VALUE",
 *   permissionVersion: Number("int"),
 *   associationStatus: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED" || "SUSPENDED" || "SUSPENDING" || "RESTORING",
 *   resourceType: "STRING_VALUE",
 *   featureSet: "CREATED_FROM_POLICY" || "PROMOTING_TO_STANDARD" || "STANDARD",
 *   defaultVersion: true || false,
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPermissionAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionAssociationsResponse
 * //   permissions: [ // AssociatedPermissionList
 * //     { // AssociatedPermission
 * //       arn: "STRING_VALUE",
 * //       permissionVersion: "STRING_VALUE",
 * //       defaultVersion: true || false,
 * //       resourceType: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       featureSet: "CREATED_FROM_POLICY" || "PROMOTING_TO_STANDARD" || "STANDARD",
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       resourceShareArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPermissionAssociationsCommandInput - {@link ListPermissionAssociationsCommandInput}
 * @returns {@link ListPermissionAssociationsCommandOutput}
 * @see {@link ListPermissionAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionAssociationsCommandOutput} for command's `response` shape.
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
export class ListPermissionAssociationsCommand extends command<ListPermissionAssociationsCommandInput, ListPermissionAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListPermissionAssociations",
  ListPermissionAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPermissionAssociationsRequest;
      output: ListPermissionAssociationsResponse;
    };
    sdk: {
      input: ListPermissionAssociationsCommandInput;
      output: ListPermissionAssociationsCommandOutput;
    };
  };
}
