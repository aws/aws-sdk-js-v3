// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDocumentPermissionRequest, DescribeDocumentPermissionResponse } from "../models/models_0";
import { DescribeDocumentPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDocumentPermissionCommand}.
 */
export interface DescribeDocumentPermissionCommandInput extends DescribeDocumentPermissionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDocumentPermissionCommand}.
 */
export interface DescribeDocumentPermissionCommandOutput extends DescribeDocumentPermissionResponse, __MetadataBearer {}

/**
 * Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (*All*).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeDocumentPermissionRequest
 *   Name: "STRING_VALUE", // required
 *   PermissionType: "Share", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDocumentPermissionResponse
 * //   AccountIds: [ // AccountIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   AccountSharingInfoList: [ // AccountSharingInfoList
 * //     { // AccountSharingInfo
 * //       AccountId: "STRING_VALUE",
 * //       SharedDocumentVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDocumentPermissionCommandInput - {@link DescribeDocumentPermissionCommandInput}
 * @returns {@link DescribeDocumentPermissionCommandOutput}
 * @see {@link DescribeDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidDocument} (client fault)
 *
 * The specified SSM document doesn't exist.
 *
 * @throws {@link InvalidDocumentOperation} (client fault)
 *
 * You attempted to delete a document while it is still shared. You must stop sharing the document before you can delete it.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The specified token isn't valid.
 *
 * @throws {@link InvalidPermissionType} (client fault)
 *
 * The permission type isn't supported. *Share* is the only supported permission type.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DescribeDocumentPermissionCommand extends command<DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDocumentPermission",
  DescribeDocumentPermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDocumentPermissionRequest;
      output: DescribeDocumentPermissionResponse;
    };
    sdk: {
      input: DescribeDocumentPermissionCommandInput;
      output: DescribeDocumentPermissionCommandOutput;
    };
  };
}
