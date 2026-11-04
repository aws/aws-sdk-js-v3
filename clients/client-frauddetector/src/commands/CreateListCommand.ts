// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateListRequest, CreateListResult } from "../models/models_0";
import { CreateList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateListCommand}.
 */
export interface CreateListCommandInput extends CreateListRequest {}
/**
 * @public
 *
 * The output of {@link CreateListCommand}.
 */
export interface CreateListCommandOutput extends CreateListResult, __MetadataBearer {}

/**
 * Creates a list.
 *
 * List is a set of input data for a variable in your event dataset. You use the input data in a rule that's associated with your detector. For more information, see [Lists](https://docs.aws.amazon.com/frauddetector/latest/ug/lists.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateListCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateListCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // CreateListRequest
 *   name: "STRING_VALUE", // required
 *   elements: [ // ElementsList
 *     "STRING_VALUE",
 *   ],
 *   variableType: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateListCommandInput - {@link CreateListCommandInput}
 * @returns {@link CreateListCommandOutput}
 * @see {@link CreateListCommandInput} for command's `input` shape.
 * @see {@link CreateListCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as `PutExternalModel`, that specifies a role that is not in your account.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception indicating an internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An exception indicating a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception indicating a specified value is not allowed.
 *
 * @throws {@link FraudDetectorServiceException}
 *
 * Base exception class for all service exceptions from FraudDetector service.
 *
 * @public
 */
export class CreateListCommand extends command<CreateListCommandInput, CreateListCommandOutput>(
  _ep0,
  _mw0,
  "CreateList",
  CreateList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateListRequest;
      output: {};
    };
    sdk: {
      input: CreateListCommandInput;
      output: CreateListCommandOutput;
    };
  };
}
