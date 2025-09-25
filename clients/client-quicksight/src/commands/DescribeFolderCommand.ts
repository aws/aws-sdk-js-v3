// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFolderRequest, DescribeFolderResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeFolder } from "../schemas/schemas_48_Folder";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFolderCommand}.
 */
export interface DescribeFolderCommandInput extends DescribeFolderRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFolderCommand}.
 */
export interface DescribeFolderCommandOutput extends DescribeFolderResponse, __MetadataBearer {}

/**
 * <p>Describes a folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeFolderCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeFolderCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeFolderRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   FolderId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFolderCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFolderResponse
 * //   Status: Number("int"),
 * //   Folder: { // Folder
 * //     FolderId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     FolderType: "SHARED" || "RESTRICTED",
 * //     FolderPath: [ // Path
 * //       "STRING_VALUE",
 * //     ],
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     SharingModel: "ACCOUNT" || "NAMESPACE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFolderCommandInput - {@link DescribeFolderCommandInput}
 * @returns {@link DescribeFolderCommandOutput}
 * @see {@link DescribeFolderCommandInput} for command's `input` shape.
 * @see {@link DescribeFolderCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
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
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeFolderCommand extends $Command
  .classBuilder<
    DescribeFolderCommandInput,
    DescribeFolderCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeFolder", {})
  .n("QuickSightClient", "DescribeFolderCommand")
  .sc(DescribeFolder)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFolderRequest;
      output: DescribeFolderResponse;
    };
    sdk: {
      input: DescribeFolderCommandInput;
      output: DescribeFolderCommandOutput;
    };
  };
}
