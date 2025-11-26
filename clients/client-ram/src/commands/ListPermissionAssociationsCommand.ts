// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPermissionAssociationsRequest, ListPermissionAssociationsResponse } from "../models/models_0";
import type { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { ListPermissionAssociations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists information about the managed permission and its associations to any resource shares that use
 *             this managed permission. This lets you see which resource shares use which versions of the specified
 *             managed permission.</p>
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
 *   associationStatus: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED",
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
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class ListPermissionAssociationsCommand extends $Command
  .classBuilder<
    ListPermissionAssociationsCommandInput,
    ListPermissionAssociationsCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonResourceSharing", "ListPermissionAssociations", {})
  .n("RAMClient", "ListPermissionAssociationsCommand")
  .sc(ListPermissionAssociations)
  .build() {
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
