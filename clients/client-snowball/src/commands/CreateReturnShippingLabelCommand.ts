// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateReturnShippingLabelRequest, CreateReturnShippingLabelResult } from "../models/models_0";
import { CreateReturnShippingLabel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateReturnShippingLabelCommand}.
 */
export interface CreateReturnShippingLabelCommandInput extends CreateReturnShippingLabelRequest {}
/**
 * @public
 *
 * The output of {@link CreateReturnShippingLabelCommand}.
 */
export interface CreateReturnShippingLabelCommandOutput extends CreateReturnShippingLabelResult, __MetadataBearer {}

/**
 * Creates a shipping label that will be used to return the Snow device to Amazon Web Services.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateReturnShippingLabelCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateReturnShippingLabelCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // CreateReturnShippingLabelRequest
 *   JobId: "STRING_VALUE", // required
 *   ShippingOption: "SECOND_DAY" || "NEXT_DAY" || "EXPRESS" || "STANDARD",
 * };
 * const command = new CreateReturnShippingLabelCommand(input);
 * const response = await client.send(command);
 * // { // CreateReturnShippingLabelResult
 * //   Status: "InProgress" || "TimedOut" || "Succeeded" || "Failed",
 * // };
 *
 * ```
 *
 * @param CreateReturnShippingLabelCommandInput - {@link CreateReturnShippingLabelCommandInput}
 * @returns {@link CreateReturnShippingLabelCommandOutput}
 * @see {@link CreateReturnShippingLabelCommandInput} for command's `input` shape.
 * @see {@link CreateReturnShippingLabelCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You get this exception when you call `CreateReturnShippingLabel` more than once when other requests are not completed.
 *
 * @throws {@link InvalidInputCombinationException} (client fault)
 *
 * Job or cluster creation failed. One or more inputs were invalid. Confirm that the CreateClusterRequest$SnowballType value supports your CreateJobRequest$JobType, and try again.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *
 * The action can't be performed because the job's current state doesn't allow that action to be performed.
 *
 * @throws {@link InvalidResourceException} (client fault)
 *
 * The specified resource can't be found. Check the information you provided in your last request, and try again.
 *
 * @throws {@link ReturnShippingLabelAlreadyExistsException} (client fault)
 *
 * You get this exception if you call `CreateReturnShippingLabel` and a valid return shipping label already exists. In this case, use `DescribeReturnShippingLabel` to get the URL.
 *
 * @throws {@link SnowballServiceException}
 *
 * Base exception class for all service exceptions from Snowball service.
 *
 * @public
 */
export class CreateReturnShippingLabelCommand extends command<CreateReturnShippingLabelCommandInput, CreateReturnShippingLabelCommandOutput>(
  _ep0,
  _mw0,
  "CreateReturnShippingLabel",
  CreateReturnShippingLabel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReturnShippingLabelRequest;
      output: CreateReturnShippingLabelResult;
    };
    sdk: {
      input: CreateReturnShippingLabelCommandInput;
      output: CreateReturnShippingLabelCommandOutput;
    };
  };
}
