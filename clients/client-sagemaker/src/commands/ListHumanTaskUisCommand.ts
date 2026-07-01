// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListHumanTaskUisRequest, ListHumanTaskUisResponse } from "../models/models_3";
import { ListHumanTaskUis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListHumanTaskUisCommand}.
 */
export interface ListHumanTaskUisCommandInput extends ListHumanTaskUisRequest {}
/**
 * @public
 *
 * The output of {@link ListHumanTaskUisCommand}.
 */
export interface ListHumanTaskUisCommandOutput extends ListHumanTaskUisResponse, __MetadataBearer {}

/**
 * <p>Returns information about the human task user interfaces in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHumanTaskUisCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHumanTaskUisCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListHumanTaskUisRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListHumanTaskUisCommand(input);
 * const response = await client.send(command);
 * // { // ListHumanTaskUisResponse
 * //   HumanTaskUiSummaries: [ // HumanTaskUiSummaries // required
 * //     { // HumanTaskUiSummary
 * //       HumanTaskUiName: "STRING_VALUE", // required
 * //       HumanTaskUiArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHumanTaskUisCommandInput - {@link ListHumanTaskUisCommandInput}
 * @returns {@link ListHumanTaskUisCommandOutput}
 * @see {@link ListHumanTaskUisCommandInput} for command's `input` shape.
 * @see {@link ListHumanTaskUisCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListHumanTaskUisCommand extends command<ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput>(
  _ep0,
  _mw0,
  "ListHumanTaskUis",
  ListHumanTaskUis$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHumanTaskUisRequest;
      output: ListHumanTaskUisResponse;
    };
    sdk: {
      input: ListHumanTaskUisCommandInput;
      output: ListHumanTaskUisCommandOutput;
    };
  };
}
