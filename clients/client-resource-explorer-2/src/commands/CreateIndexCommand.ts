// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIndexInput, CreateIndexOutput } from "../models/models_0";
import { CreateIndex$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIndexCommand}.
 */
export interface CreateIndexCommandInput extends CreateIndexInput {}
/**
 * @public
 *
 * The output of {@link CreateIndexCommand}.
 */
export interface CreateIndexCommandOutput extends CreateIndexOutput, __MetadataBearer {}

/**
 * Turns on Amazon Web Services Resource Explorer in the Amazon Web Services Region in which you called this operation by creating an index. Resource Explorer begins discovering the resources in this Region and stores the details about the resources in the index so that they can be queried by using the Search operation. You can create only one index in a Region.
 *
 * > **Note:** This operation creates only a *local* index. To promote the local index in one Amazon Web Services Region into the aggregator index for the Amazon Web Services account, use the UpdateIndexType operation. For more information, see [Turning on cross-Region search by creating an aggregator index](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html) in the *Amazon Web Services Resource Explorer User Guide*.
 *
 * For more details about what happens when you turn on Resource Explorer in an Amazon Web Services Region, see [Turn on Resource Explorer to index your resources in an Amazon Web Services Region](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-service-activate.html) in the *Amazon Web Services Resource Explorer User Guide*.
 *
 * If this is the first Amazon Web Services Region in which you've created an index for Resource Explorer, then this operation also [creates a service-linked role](https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html) in your Amazon Web Services account that allows Resource Explorer to enumerate your resources to populate the index.
 *
 * - **Action**: `resource-explorer-2:CreateIndex`
 *
 *   **Resource**: The ARN of the index (as it will exist after the operation completes) in the Amazon Web Services Region and account in which you're trying to create the index. Use the wildcard character (`*`) at the end of the string to match the eventual UUID. For example, the following `Resource` element restricts the role or user to creating an index in only the `us-east-2` Region of the specified account.
 *
 *   `"Resource": "arn:aws:resource-explorer-2:us-west-2:<account-id>:index/*"`
 *
 *   Alternatively, you can use `"Resource": "*"` to allow the role or user to create an index in any Region.
 * - **Action**: `iam:CreateServiceLinkedRole`
 *
 *   **Resource**: No specific resource (*).
 *
 *   This permission is required only the first time you create an index to turn on Resource Explorer in the account. Resource Explorer uses this to create the [service-linked role needed to index the resources in your account](https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html). Resource Explorer uses the same service-linked role for all additional indexes you create afterwards.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, CreateIndexCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, CreateIndexCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // CreateIndexInput
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIndexCommand(input);
 * const response = await client.send(command);
 * // { // CreateIndexOutput
 * //   Arn: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateIndexCommandInput - {@link CreateIndexCommandInput}
 * @returns {@link CreateIndexCommandOutput}
 * @see {@link CreateIndexCommandInput} for command's `input` shape.
 * @see {@link CreateIndexCommandOutput} for command's `response` shape.
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
export class CreateIndexCommand extends command<CreateIndexCommandInput, CreateIndexCommandOutput>(
  _ep0,
  _mw0,
  "CreateIndex",
  CreateIndex$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIndexInput;
      output: CreateIndexOutput;
    };
    sdk: {
      input: CreateIndexCommandInput;
      output: CreateIndexCommandOutput;
    };
  };
}
