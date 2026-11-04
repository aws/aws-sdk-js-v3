// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeFolderResolvedPermissionsRequest,
  DescribeFolderResolvedPermissionsResponse,
} from "../models/models_4";
import { DescribeFolderResolvedPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeFolderResolvedPermissionsCommand}.
 */
export interface DescribeFolderResolvedPermissionsCommandInput extends DescribeFolderResolvedPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFolderResolvedPermissionsCommand}.
 */
export interface DescribeFolderResolvedPermissionsCommandOutput extends DescribeFolderResolvedPermissionsResponse, __MetadataBearer {}

/**
 * Describes the folder resolved permissions. Permissions consists of both folder direct permissions and the inherited permissions from the ancestor folders.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeFolderResolvedPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeFolderResolvedPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeFolderResolvedPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   FolderId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFolderResolvedPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFolderResolvedPermissionsResponse
 * //   Status: Number("int"),
 * //   FolderId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Permissions: [ // ResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFolderResolvedPermissionsCommandInput - {@link DescribeFolderResolvedPermissionsCommandInput}
 * @returns {@link DescribeFolderResolvedPermissionsCommandOutput}
 * @see {@link DescribeFolderResolvedPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeFolderResolvedPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value isn't valid.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DescribeFolderResolvedPermissionsCommand extends command<DescribeFolderResolvedPermissionsCommandInput, DescribeFolderResolvedPermissionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFolderResolvedPermissions",
  DescribeFolderResolvedPermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFolderResolvedPermissionsRequest;
      output: DescribeFolderResolvedPermissionsResponse;
    };
    sdk: {
      input: DescribeFolderResolvedPermissionsCommandInput;
      output: DescribeFolderResolvedPermissionsCommandOutput;
    };
  };
}
