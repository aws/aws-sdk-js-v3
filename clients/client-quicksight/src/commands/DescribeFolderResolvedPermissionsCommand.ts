// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeFolderResolvedPermissionsRequest,
  DescribeFolderResolvedPermissionsResponse,
} from "../models/models_3";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeFolderResolvedPermissions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeFolderResolvedPermissionsCommandOutput
  extends DescribeFolderResolvedPermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Describes the folder resolved permissions. Permissions consists of both folder direct permissions and the inherited permissions from the ancestor folders.</p>
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
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeFolderResolvedPermissionsCommand extends $Command
  .classBuilder<
    DescribeFolderResolvedPermissionsCommandInput,
    DescribeFolderResolvedPermissionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeFolderResolvedPermissions", {})
  .n("QuickSightClient", "DescribeFolderResolvedPermissionsCommand")
  .sc(DescribeFolderResolvedPermissions)
  .build() {
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
