// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddLayerVersionPermissionRequest, AddLayerVersionPermissionResponse } from "../models/models_0";
import { AddLayerVersionPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddLayerVersionPermissionCommand}.
 */
export interface AddLayerVersionPermissionCommandInput extends AddLayerVersionPermissionRequest {}
/**
 * @public
 *
 * The output of {@link AddLayerVersionPermissionCommand}.
 */
export interface AddLayerVersionPermissionCommandOutput extends AddLayerVersionPermissionResponse, __MetadataBearer {}

/**
 * Adds permissions to the resource-based policy of a version of an [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html). Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts.
 *
 * To revoke permission, call RemoveLayerVersionPermission with the statement ID that you specified when you added it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, AddLayerVersionPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, AddLayerVersionPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // AddLayerVersionPermissionRequest
 *   LayerName: "STRING_VALUE", // required
 *   VersionNumber: Number("long"), // required
 *   StatementId: "STRING_VALUE", // required
 *   Action: "STRING_VALUE", // required
 *   Principal: "STRING_VALUE", // required
 *   OrganizationId: "STRING_VALUE",
 *   RevisionId: "STRING_VALUE",
 * };
 * const command = new AddLayerVersionPermissionCommand(input);
 * const response = await client.send(command);
 * // { // AddLayerVersionPermissionResponse
 * //   Statement: "STRING_VALUE",
 * //   RevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddLayerVersionPermissionCommandInput - {@link AddLayerVersionPermissionCommandInput}
 * @returns {@link AddLayerVersionPermissionCommandOutput}
 * @see {@link AddLayerVersionPermissionCommandInput} for command's `input` shape.
 * @see {@link AddLayerVersionPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link PolicyLengthExceededException} (client fault)
 *
 * The permissions policy for the resource is too large. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html).
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * The RevisionId provided does not match the latest RevisionId for the Lambda function or alias.
 *
 * - **For AddPermission and RemovePermission API operations:** Call `GetPolicy` to retrieve the latest RevisionId for your resource.
 * - **For all other API operations:** Call `GetFunction` or `GetAlias` to retrieve the latest RevisionId for your resource.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource already exists, or another operation is in progress.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @example To add permissions to a layer version
 * ```javascript
 * // The following example grants permission for the account 223456789012 to use version 1 of a layer named my-layer.
 * const input = {
 *   Action: "lambda:GetLayerVersion",
 *   LayerName: "my-layer",
 *   Principal: "223456789012",
 *   StatementId: "xaccount",
 *   VersionNumber: 1
 * };
 * const command = new AddLayerVersionPermissionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   RevisionId: "35d87451-f796-4a3f-a618-95a3671b0a0c",
 *   Statement: `{"Sid":"xaccount","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::223456789012:root"},"Action":"lambda:GetLayerVersion","Resource":"arn:aws:lambda:us-east-2:123456789012:layer:my-layer:1"}`
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AddLayerVersionPermissionCommand extends command<AddLayerVersionPermissionCommandInput, AddLayerVersionPermissionCommandOutput>(
  _ep0,
  _mw0,
  "AddLayerVersionPermission",
  AddLayerVersionPermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddLayerVersionPermissionRequest;
      output: AddLayerVersionPermissionResponse;
    };
    sdk: {
      input: AddLayerVersionPermissionCommandInput;
      output: AddLayerVersionPermissionCommandOutput;
    };
  };
}
