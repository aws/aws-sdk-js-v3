// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutPrincipalMappingRequest } from "../models/models_0";
import { PutPrincipalMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutPrincipalMappingCommand}.
 */
export interface PutPrincipalMappingCommandInput extends PutPrincipalMappingRequest {}
/**
 * @public
 *
 * The output of {@link PutPrincipalMappingCommand}.
 */
export interface PutPrincipalMappingCommandOutput extends __MetadataBearer {}

/**
 * Maps users to their groups so that you only need to provide the user ID when you issue the query.
 *
 * You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results.
 *
 * This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see [Filtering on user context](https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html).
 *
 * If more than five `PUT` actions for a group are currently processing, a validation exception is thrown.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, PutPrincipalMappingCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, PutPrincipalMappingCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * // import type { KendraClientConfig } from "@aws-sdk/client-kendra";
 * const config = {}; // type is KendraClientConfig
 * const client = new KendraClient(config);
 * const input = { // PutPrincipalMappingRequest
 *   IndexId: "STRING_VALUE", // required
 *   DataSourceId: "STRING_VALUE",
 *   GroupId: "STRING_VALUE", // required
 *   GroupMembers: { // GroupMembers
 *     MemberGroups: [ // MemberGroups
 *       { // MemberGroup
 *         GroupId: "STRING_VALUE", // required
 *         DataSourceId: "STRING_VALUE",
 *       },
 *     ],
 *     MemberUsers: [ // MemberUsers
 *       { // MemberUser
 *         UserId: "STRING_VALUE", // required
 *       },
 *     ],
 *     S3PathforGroupMembers: { // S3Path
 *       Bucket: "STRING_VALUE", // required
 *       Key: "STRING_VALUE", // required
 *     },
 *   },
 *   OrderingId: Number("long"),
 *   RoleArn: "STRING_VALUE",
 * };
 * const command = new PutPrincipalMappingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPrincipalMappingCommandInput - {@link PutPrincipalMappingCommandInput}
 * @returns {@link PutPrincipalMappingCommandOutput}
 * @see {@link PutPrincipalMappingCommandInput} for command's `input` shape.
 * @see {@link PutPrincipalMappingCommandOutput} for command's `response` shape.
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
export class PutPrincipalMappingCommand extends command<PutPrincipalMappingCommandInput, PutPrincipalMappingCommandOutput>(
  _ep0,
  _mw0,
  "PutPrincipalMapping",
  PutPrincipalMapping$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPrincipalMappingRequest;
      output: {};
    };
    sdk: {
      input: PutPrincipalMappingCommandInput;
      output: PutPrincipalMappingCommandOutput;
    };
  };
}
