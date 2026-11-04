// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountLevelServiceConfigurationOutput } from "../models/models_0";
import { GetAccountLevelServiceConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccountLevelServiceConfigurationCommand}.
 */
export interface GetAccountLevelServiceConfigurationCommandInput {}
/**
 * @public
 *
 * The output of {@link GetAccountLevelServiceConfigurationCommand}.
 */
export interface GetAccountLevelServiceConfigurationCommandOutput extends GetAccountLevelServiceConfigurationOutput, __MetadataBearer {}

/**
 * Retrieves the status of your account's Amazon Web Services service access, and validates the service linked role required to access the multi-account search feature. Only the management account can invoke this API call.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, GetAccountLevelServiceConfigurationCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, GetAccountLevelServiceConfigurationCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = {};
 * const command = new GetAccountLevelServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountLevelServiceConfigurationOutput
 * //   OrgConfiguration: { // OrgConfiguration
 * //     AWSServiceAccessStatus: "STRING_VALUE", // required
 * //     ServiceLinkedRole: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountLevelServiceConfigurationCommandInput - {@link GetAccountLevelServiceConfigurationCommandInput}
 * @returns {@link GetAccountLevelServiceConfigurationCommandOutput}
 * @see {@link GetAccountLevelServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAccountLevelServiceConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceExplorer2ServiceException}
 *
 * Base exception class for all service exceptions from ResourceExplorer2 service.
 *
 * @public
 */
export class GetAccountLevelServiceConfigurationCommand extends command<GetAccountLevelServiceConfigurationCommandInput, GetAccountLevelServiceConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountLevelServiceConfiguration",
  GetAccountLevelServiceConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountLevelServiceConfigurationOutput;
    };
    sdk: {
      input: GetAccountLevelServiceConfigurationCommandInput;
      output: GetAccountLevelServiceConfigurationCommandOutput;
    };
  };
}
