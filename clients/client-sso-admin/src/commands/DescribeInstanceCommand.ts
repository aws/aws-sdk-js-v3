// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInstanceRequest, DescribeInstanceResponse } from "../models/models_0";
import { DescribeInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeInstanceCommand}.
 */
export interface DescribeInstanceCommandInput extends DescribeInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceCommand}.
 */
export interface DescribeInstanceCommandOutput extends DescribeInstanceResponse, __MetadataBearer {}

/**
 * Returns the details of an instance of IAM Identity Center. The status can be one of the following:
 *
 * - `CREATE_IN_PROGRESS` - The instance is in the process of being created. When the instance is ready for use, DescribeInstance returns the status of `ACTIVE`. While the instance is in the `CREATE_IN_PROGRESS` state, you can call only DescribeInstance and DeleteInstance operations.
 * - `DELETE_IN_PROGRESS` - The instance is being deleted. Returns `AccessDeniedException` after the delete operation completes.
 * - `ACTIVE` - The instance is active.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeInstanceCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeInstanceCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeInstanceRequest
 *   InstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceResponse
 * //   InstanceArn: "STRING_VALUE",
 * //   IdentityStoreId: "STRING_VALUE",
 * //   IdentityStoreArn: "STRING_VALUE",
 * //   OwnerAccountId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   Status: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "ACTIVE",
 * //   StatusReason: "STRING_VALUE",
 * //   PrimaryRegion: "STRING_VALUE",
 * //   Regions: [ // RegionMetadataList
 * //     { // RegionMetadata
 * //       RegionName: "STRING_VALUE",
 * //       Status: "ACTIVE" || "ADDING" || "REMOVING",
 * //       AddedDate: new Date("TIMESTAMP"),
 * //       IsPrimaryRegion: true || false,
 * //     },
 * //   ],
 * //   EncryptionConfigurationDetails: { // EncryptionConfigurationDetails
 * //     KeyType: "AWS_OWNED_KMS_KEY" || "CUSTOMER_MANAGED_KEY",
 * //     KmsKeyArn: "STRING_VALUE",
 * //     EncryptionStatus: "UPDATING" || "ENABLED" || "UPDATE_FAILED",
 * //     EncryptionStatusReason: "STRING_VALUE",
 * //   },
 * //   PermissionSetsEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeInstanceCommandInput - {@link DescribeInstanceCommandInput}
 * @returns {@link DescribeInstanceCommandOutput}
 * @see {@link DescribeInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class DescribeInstanceCommand extends command<DescribeInstanceCommandInput, DescribeInstanceCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInstance",
  DescribeInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceRequest;
      output: DescribeInstanceResponse;
    };
    sdk: {
      input: DescribeInstanceCommandInput;
      output: DescribeInstanceCommandOutput;
    };
  };
}
