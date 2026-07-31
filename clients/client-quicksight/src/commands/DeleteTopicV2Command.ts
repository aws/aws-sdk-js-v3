// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTopicV2Request, DeleteTopicV2Response } from "../models/models_3";
import { DeleteTopicV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTopicV2Command}.
 */
export interface DeleteTopicV2CommandInput extends DeleteTopicV2Request {}
/**
 * @public
 *
 * The output of {@link DeleteTopicV2Command}.
 */
export interface DeleteTopicV2CommandOutput extends DeleteTopicV2Response, __MetadataBearer {}

/**
 * <p>Deletes a Q topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteTopicV2Command } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteTopicV2Command } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteTopicV2Request
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTopicV2Command(input);
 * const response = await client.send(command);
 * // { // DeleteTopicV2Response
 * //   Arn: "STRING_VALUE",
 * //   TopicId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteTopicV2CommandInput - {@link DeleteTopicV2CommandInput}
 * @returns {@link DeleteTopicV2CommandOutput}
 * @see {@link DeleteTopicV2CommandInput} for command's `input` shape.
 * @see {@link DeleteTopicV2CommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteTopicV2Command extends command<DeleteTopicV2CommandInput, DeleteTopicV2CommandOutput>(
  _ep0,
  _mw0,
  "DeleteTopicV2",
  DeleteTopicV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTopicV2Request;
      output: DeleteTopicV2Response;
    };
    sdk: {
      input: DeleteTopicV2CommandInput;
      output: DeleteTopicV2CommandOutput;
    };
  };
}
