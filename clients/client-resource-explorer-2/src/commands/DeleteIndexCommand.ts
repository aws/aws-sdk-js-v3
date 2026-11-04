// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIndexInput, DeleteIndexOutput } from "../models/models_0";
import { DeleteIndex$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIndexCommand}.
 */
export interface DeleteIndexCommandInput extends DeleteIndexInput {}
/**
 * @public
 *
 * The output of {@link DeleteIndexCommand}.
 */
export interface DeleteIndexCommandOutput extends DeleteIndexOutput, __MetadataBearer {}

/**
 * Deletes the specified index and turns off Amazon Web Services Resource Explorer in the specified Amazon Web Services Region. When you delete an index, Resource Explorer stops discovering and indexing resources in that Region. Resource Explorer also deletes all views in that Region. These actions occur as asynchronous background tasks. You can check to see when the actions are complete by using the GetIndex operation and checking the `Status` response value.
 *
 * > **Note:** If the index you delete is the aggregator index for the Amazon Web Services account, you must wait 24 hours before you can promote another local index to be the aggregator index for the account. Users can't perform account-wide searches using Resource Explorer until another aggregator index is configured.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, DeleteIndexCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, DeleteIndexCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // DeleteIndexInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteIndexCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIndexOutput
 * //   Arn: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DeleteIndexCommandInput - {@link DeleteIndexCommandInput}
 * @returns {@link DeleteIndexCommandOutput}
 * @see {@link DeleteIndexCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexCommandOutput} for command's `response` shape.
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
export class DeleteIndexCommand extends command<DeleteIndexCommandInput, DeleteIndexCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIndex",
  DeleteIndex$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIndexInput;
      output: DeleteIndexOutput;
    };
    sdk: {
      input: DeleteIndexCommandInput;
      output: DeleteIndexCommandOutput;
    };
  };
}
