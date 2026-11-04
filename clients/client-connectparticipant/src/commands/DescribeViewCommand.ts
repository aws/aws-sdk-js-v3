// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeViewRequest, DescribeViewResponse } from "../models/models_0";
import { DescribeView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeViewCommand}.
 */
export interface DescribeViewCommandInput extends DescribeViewRequest {}
/**
 * @public
 *
 * The output of {@link DescribeViewCommand}.
 */
export interface DescribeViewCommandOutput extends DescribeViewResponse, __MetadataBearer {}

/**
 * Retrieves the view for the specified view token.
 *
 * For security recommendations, see [Connect Customer Chat security best practices](https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, DescribeViewCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, DescribeViewCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * // import type { ConnectParticipantClientConfig } from "@aws-sdk/client-connectparticipant";
 * const config = {}; // type is ConnectParticipantClientConfig
 * const client = new ConnectParticipantClient(config);
 * const input = { // DescribeViewRequest
 *   ViewToken: "STRING_VALUE", // required
 *   ConnectionToken: "STRING_VALUE", // required
 * };
 * const command = new DescribeViewCommand(input);
 * const response = await client.send(command);
 * // { // DescribeViewResponse
 * //   View: { // View
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: Number("int"),
 * //     Content: { // ViewContent
 * //       InputSchema: "STRING_VALUE",
 * //       Template: "STRING_VALUE",
 * //       Actions: [ // ViewActions
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeViewCommandInput - {@link DescribeViewCommandInput}
 * @returns {@link DescribeViewCommandOutput}
 * @see {@link DescribeViewCommandInput} for command's `input` shape.
 * @see {@link DescribeViewCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for ConnectParticipantClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Amazon Connect service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Amazon Connect.
 *
 * @throws {@link ConnectParticipantServiceException}
 *
 * Base exception class for all service exceptions from ConnectParticipant service.
 *
 * @public
 */
export class DescribeViewCommand extends command<DescribeViewCommandInput, DescribeViewCommandOutput>(
  _ep0,
  _mw0,
  "DescribeView",
  DescribeView$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeViewRequest;
      output: DescribeViewResponse;
    };
    sdk: {
      input: DescribeViewCommandInput;
      output: DescribeViewCommandOutput;
    };
  };
}
