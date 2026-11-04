// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetManagedViewInput, GetManagedViewOutput } from "../models/models_0";
import { GetManagedView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetManagedViewCommand}.
 */
export interface GetManagedViewCommandInput extends GetManagedViewInput {}
/**
 * @public
 *
 * The output of {@link GetManagedViewCommand}.
 */
export interface GetManagedViewCommandOutput extends GetManagedViewOutput, __MetadataBearer {}

/**
 * Retrieves details of the specified [Amazon Web Services-managed view](https://docs.aws.amazon.com/resource-explorer/latest/userguide/aws-managed-views.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, GetManagedViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, GetManagedViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // GetManagedViewInput
 *   ManagedViewArn: "STRING_VALUE", // required
 * };
 * const command = new GetManagedViewCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedViewOutput
 * //   ManagedView: { // ManagedView
 * //     ManagedViewArn: "STRING_VALUE",
 * //     ManagedViewName: "STRING_VALUE",
 * //     TrustedService: "STRING_VALUE",
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     Owner: "STRING_VALUE",
 * //     Scope: "STRING_VALUE",
 * //     IncludedProperties: [ // IncludedPropertyList
 * //       { // IncludedProperty
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Filters: { // SearchFilter
 * //       FilterString: "STRING_VALUE", // required
 * //     },
 * //     ResourcePolicy: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetManagedViewCommandInput - {@link GetManagedViewCommandInput}
 * @returns {@link GetManagedViewCommandOutput}
 * @see {@link GetManagedViewCommandInput} for command's `input` shape.
 * @see {@link GetManagedViewCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The credentials that you used to call this operation don't have the minimum required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed because of internal service error. Try your request again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You specified a resource that doesn't exist. Check the ID or ARN that you used to identity the resource, and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request failed because you exceeded a rate limit for this operation. For more information, see [Quotas for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html).
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The principal making the request isn't permitted to perform the operation.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You provided an invalid value for one of the operation's parameters. Check the syntax for the operation, and try again.
 *
 * @throws {@link ResourceExplorer2ServiceException}
 *
 * Base exception class for all service exceptions from ResourceExplorer2 service.
 *
 * @public
 */
export class GetManagedViewCommand extends command<GetManagedViewCommandInput, GetManagedViewCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedView",
  GetManagedView$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedViewInput;
      output: GetManagedViewOutput;
    };
    sdk: {
      input: GetManagedViewCommandInput;
      output: GetManagedViewCommandOutput;
    };
  };
}
