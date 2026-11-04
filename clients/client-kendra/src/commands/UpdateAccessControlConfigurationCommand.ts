// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateAccessControlConfigurationRequest,
  UpdateAccessControlConfigurationResponse,
} from "../models/models_0";
import { UpdateAccessControlConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccessControlConfigurationCommand}.
 */
export interface UpdateAccessControlConfigurationCommandInput extends UpdateAccessControlConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessControlConfigurationCommand}.
 */
export interface UpdateAccessControlConfigurationCommandOutput extends UpdateAccessControlConfigurationResponse, __MetadataBearer {}

/**
 * Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
 *
 * You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change.
 *
 * You call the [BatchPutDocument](https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html) API to apply the updated access control configuration, with the `AccessControlConfigurationId` included in the [Document](https://docs.aws.amazon.com/kendra/latest/dg/API_Document.html) object. If you use an S3 bucket as a data source, you synchronize your data source to apply the `AccessControlConfigurationId` in the `.metadata.json` file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the `BatchPutDocument` API.
 *
 * > **Important:** You can't configure access control using `CreateAccessControlConfiguration` for an Amazon Kendra Gen AI Enterprise Edition index. Amazon Kendra will return a `ValidationException` error for a `Gen_AI_ENTERPRISE_EDITION` index.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateAccessControlConfigurationCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateAccessControlConfigurationCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * // import type { KendraClientConfig } from "@aws-sdk/client-kendra";
 * const config = {}; // type is KendraClientConfig
 * const client = new KendraClient(config);
 * const input = { // UpdateAccessControlConfigurationRequest
 *   IndexId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   AccessControlList: [ // PrincipalList
 *     { // Principal
 *       Name: "STRING_VALUE", // required
 *       Type: "USER" || "GROUP", // required
 *       Access: "ALLOW" || "DENY", // required
 *       DataSourceId: "STRING_VALUE",
 *     },
 *   ],
 *   HierarchicalAccessControlList: [ // HierarchicalPrincipalList
 *     { // HierarchicalPrincipal
 *       PrincipalList: [ // required
 *         {
 *           Name: "STRING_VALUE", // required
 *           Type: "USER" || "GROUP", // required
 *           Access: "ALLOW" || "DENY", // required
 *           DataSourceId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateAccessControlConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccessControlConfigurationCommandInput - {@link UpdateAccessControlConfigurationCommandInput}
 * @returns {@link UpdateAccessControlConfigurationCommandOutput}
 * @see {@link UpdateAccessControlConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessControlConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Please ensure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred with the request. Please fix any inconsistences with your resources and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Kendra service. Please wait a few minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you want to use doesn’t exist. Please check you have provided the correct resource and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the set limits for your Amazon Kendra service. Please see [Quotas](https://docs.aws.amazon.com/kendra/latest/dg/quotas.html) for more information, or contact [Support](http://aws.amazon.com/contact-us/) to inquire about an increase of limits.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Please reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints set by the Amazon Kendra service. Please provide the correct input and try again.
 *
 * @throws {@link KendraServiceException}
 *
 * Base exception class for all service exceptions from Kendra service.
 *
 * @public
 */
export class UpdateAccessControlConfigurationCommand extends command<UpdateAccessControlConfigurationCommandInput, UpdateAccessControlConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccessControlConfiguration",
  UpdateAccessControlConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessControlConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateAccessControlConfigurationCommandInput;
      output: UpdateAccessControlConfigurationCommandOutput;
    };
  };
}
