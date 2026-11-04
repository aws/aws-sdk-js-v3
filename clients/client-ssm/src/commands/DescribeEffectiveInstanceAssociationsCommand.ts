// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeEffectiveInstanceAssociationsRequest,
  DescribeEffectiveInstanceAssociationsResult,
} from "../models/models_0";
import { DescribeEffectiveInstanceAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeEffectiveInstanceAssociationsCommand}.
 */
export interface DescribeEffectiveInstanceAssociationsCommandInput extends DescribeEffectiveInstanceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEffectiveInstanceAssociationsCommand}.
 */
export interface DescribeEffectiveInstanceAssociationsCommandOutput extends DescribeEffectiveInstanceAssociationsResult, __MetadataBearer {}

/**
 * All associations for the managed nodes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeEffectiveInstanceAssociationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeEffectiveInstanceAssociationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeEffectiveInstanceAssociationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeEffectiveInstanceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEffectiveInstanceAssociationsResult
 * //   Associations: [ // InstanceAssociationList
 * //     { // InstanceAssociation
 * //       AssociationId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       Content: "STRING_VALUE",
 * //       AssociationVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEffectiveInstanceAssociationsCommandInput - {@link DescribeEffectiveInstanceAssociationsCommandInput}
 * @returns {@link DescribeEffectiveInstanceAssociationsCommandOutput}
 * @see {@link DescribeEffectiveInstanceAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectiveInstanceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *
 * The following problems can cause this exception:
 *
 * - You don't have permission to access the managed node.
 * - Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is running.
 * - SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.
 * - The managed node isn't in a valid state. Valid states are: `Running`, `Pending`, `Stopped`, and `Stopping`. Invalid states are: `Shutting-down` and `Terminated`.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The specified token isn't valid.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DescribeEffectiveInstanceAssociationsCommand extends command<DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEffectiveInstanceAssociations",
  DescribeEffectiveInstanceAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEffectiveInstanceAssociationsRequest;
      output: DescribeEffectiveInstanceAssociationsResult;
    };
    sdk: {
      input: DescribeEffectiveInstanceAssociationsCommandInput;
      output: DescribeEffectiveInstanceAssociationsCommandOutput;
    };
  };
}
