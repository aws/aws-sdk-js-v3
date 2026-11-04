// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetServiceViewInput, GetServiceViewOutput } from "../models/models_0";
import { GetServiceView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetServiceViewCommand}.
 */
export interface GetServiceViewCommandInput extends GetServiceViewInput {}
/**
 * @public
 *
 * The output of {@link GetServiceViewCommand}.
 */
export interface GetServiceViewCommandOutput extends GetServiceViewOutput, __MetadataBearer {}

/**
 * Retrieves details about a specific Resource Explorer service view. This operation returns the configuration and properties of the specified view.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, GetServiceViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, GetServiceViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // GetServiceViewInput
 *   ServiceViewArn: "STRING_VALUE", // required
 * };
 * const command = new GetServiceViewCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceViewOutput
 * //   View: { // ServiceView
 * //     ServiceViewArn: "STRING_VALUE", // required
 * //     ServiceViewName: "STRING_VALUE",
 * //     Filters: { // SearchFilter
 * //       FilterString: "STRING_VALUE", // required
 * //     },
 * //     IncludedProperties: [ // IncludedPropertyList
 * //       { // IncludedProperty
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     StreamingAccessForService: "STRING_VALUE",
 * //     ScopeType: "STRING_VALUE",
 * //     ServiceLinkedRecorder: { // ServiceLinkedRecorderInfo
 * //       ServicePrincipal: "STRING_VALUE",
 * //       RecorderName: "STRING_VALUE",
 * //       RecorderType: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceViewCommandInput - {@link GetServiceViewCommandInput}
 * @returns {@link GetServiceViewCommandOutput}
 * @see {@link GetServiceViewCommandInput} for command's `input` shape.
 * @see {@link GetServiceViewCommandOutput} for command's `response` shape.
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
export class GetServiceViewCommand extends command<GetServiceViewCommandInput, GetServiceViewCommandOutput>(
  _ep0,
  _mw0,
  "GetServiceView",
  GetServiceView$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceViewInput;
      output: GetServiceViewOutput;
    };
    sdk: {
      input: GetServiceViewCommandInput;
      output: GetServiceViewCommandOutput;
    };
  };
}
