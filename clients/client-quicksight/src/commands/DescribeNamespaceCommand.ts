// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeNamespaceRequest, DescribeNamespaceResponse } from "../models/models_4";
import { DescribeNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeNamespaceCommand}.
 */
export interface DescribeNamespaceCommandInput extends DescribeNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNamespaceCommand}.
 */
export interface DescribeNamespaceCommandOutput extends DescribeNamespaceResponse, __MetadataBearer {}

/**
 * Describes the current namespace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeNamespaceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeNamespaceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeNamespaceRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DescribeNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNamespaceResponse
 * //   Namespace: { // NamespaceInfoV2
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     CapacityRegion: "STRING_VALUE",
 * //     CreationStatus: "CREATED" || "CREATING" || "DELETING" || "RETRYABLE_FAILURE" || "NON_RETRYABLE_FAILURE",
 * //     IdentityStore: "QUICKSIGHT",
 * //     NamespaceError: { // NamespaceError
 * //       Type: "PERMISSION_DENIED" || "INTERNAL_SERVICE_ERROR",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     IamIdentityCenterApplicationArn: "STRING_VALUE",
 * //     IamIdentityCenterInstanceArn: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeNamespaceCommandInput - {@link DescribeNamespaceCommandInput}
 * @returns {@link DescribeNamespaceCommandOutput}
 * @see {@link DescribeNamespaceCommandInput} for command's `input` shape.
 * @see {@link DescribeNamespaceCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *
 * This resource is currently unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DescribeNamespaceCommand extends command<DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "DescribeNamespace",
  DescribeNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNamespaceRequest;
      output: DescribeNamespaceResponse;
    };
    sdk: {
      input: DescribeNamespaceCommandInput;
      output: DescribeNamespaceCommandOutput;
    };
  };
}
