// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListNamespacesRequest, ListNamespacesResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListNamespaces } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNamespacesCommand}.
 */
export interface ListNamespacesCommandInput extends ListNamespacesRequest {}
/**
 * @public
 *
 * The output of {@link ListNamespacesCommand}.
 */
export interface ListNamespacesCommandOutput extends ListNamespacesResponse, __MetadataBearer {}

/**
 * <p>Lists the namespaces for the specified Amazon Web Services account. This operation doesn't list deleted namespaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListNamespacesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListNamespacesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListNamespacesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListNamespacesResponse
 * //   Namespaces: [ // Namespaces
 * //     { // NamespaceInfoV2
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       CapacityRegion: "STRING_VALUE",
 * //       CreationStatus: "CREATED" || "CREATING" || "DELETING" || "RETRYABLE_FAILURE" || "NON_RETRYABLE_FAILURE",
 * //       IdentityStore: "QUICKSIGHT",
 * //       NamespaceError: { // NamespaceError
 * //         Type: "PERMISSION_DENIED" || "INTERNAL_SERVICE_ERROR",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       IamIdentityCenterApplicationArn: "STRING_VALUE",
 * //       IamIdentityCenterInstanceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListNamespacesCommandInput - {@link ListNamespacesCommandInput}
 * @returns {@link ListNamespacesCommandOutput}
 * @see {@link ListNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListNamespacesCommandOutput} for command's `response` shape.
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
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListNamespacesCommand extends $Command
  .classBuilder<
    ListNamespacesCommandInput,
    ListNamespacesCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListNamespaces", {})
  .n("QuickSightClient", "ListNamespacesCommand")
  .sc(ListNamespaces)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNamespacesRequest;
      output: ListNamespacesResponse;
    };
    sdk: {
      input: ListNamespacesCommandInput;
      output: ListNamespacesCommandOutput;
    };
  };
}
