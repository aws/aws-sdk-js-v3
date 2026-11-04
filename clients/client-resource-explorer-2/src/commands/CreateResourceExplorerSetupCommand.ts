// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateResourceExplorerSetupInput, CreateResourceExplorerSetupOutput } from "../models/models_0";
import { CreateResourceExplorerSetup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateResourceExplorerSetupCommand}.
 */
export interface CreateResourceExplorerSetupCommandInput extends CreateResourceExplorerSetupInput {}
/**
 * @public
 *
 * The output of {@link CreateResourceExplorerSetupCommand}.
 */
export interface CreateResourceExplorerSetupCommandOutput extends CreateResourceExplorerSetupOutput, __MetadataBearer {}

/**
 * Creates a Resource Explorer setup configuration across multiple Amazon Web Services Regions. This operation sets up indexes and views in the specified Regions. This operation can also be used to set an aggregator Region for cross-Region resource search.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, CreateResourceExplorerSetupCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, CreateResourceExplorerSetupCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // CreateResourceExplorerSetupInput
 *   RegionList: [ // RegionList // required
 *     "STRING_VALUE",
 *   ],
 *   AggregatorRegions: [
 *     "STRING_VALUE",
 *   ],
 *   ViewName: "STRING_VALUE", // required
 * };
 * const command = new CreateResourceExplorerSetupCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceExplorerSetupOutput
 * //   TaskId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateResourceExplorerSetupCommandInput - {@link CreateResourceExplorerSetupCommandInput}
 * @returns {@link CreateResourceExplorerSetupCommandOutput}
 * @see {@link CreateResourceExplorerSetupCommandInput} for command's `input` shape.
 * @see {@link CreateResourceExplorerSetupCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The credentials that you used to call this operation don't have the minimum required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * If you attempted to create a view, then the request failed because either you specified parameters that didn’t match the original request, or you attempted to create a view with a name that already exists in this Amazon Web Services Region.
 *
 * If you attempted to create an index, then the request failed because either you specified parameters that didn't match the original request, or an index already exists in the current Amazon Web Services Region.
 *
 * If you attempted to update an index type to `AGGREGATOR`, then the request failed because you already have an `AGGREGATOR` index in a different Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed because of internal service error. Try your request again later.
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
export class CreateResourceExplorerSetupCommand extends command<CreateResourceExplorerSetupCommandInput, CreateResourceExplorerSetupCommandOutput>(
  _ep0,
  _mw0,
  "CreateResourceExplorerSetup",
  CreateResourceExplorerSetup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceExplorerSetupInput;
      output: CreateResourceExplorerSetupOutput;
    };
    sdk: {
      input: CreateResourceExplorerSetupCommandInput;
      output: CreateResourceExplorerSetupCommandOutput;
    };
  };
}
