// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateParallelDataRequest, UpdateParallelDataResponse } from "../models/models_0";
import { UpdateParallelData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateParallelDataCommand}.
 */
export interface UpdateParallelDataCommandInput extends UpdateParallelDataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateParallelDataCommand}.
 */
export interface UpdateParallelDataCommandOutput extends UpdateParallelDataResponse, __MetadataBearer {}

/**
 * <p>Updates a previously created parallel data resource by importing a new input file from
 *       Amazon S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, UpdateParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, UpdateParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // import type { TranslateClientConfig } from "@aws-sdk/client-translate";
 * const config = {}; // type is TranslateClientConfig
 * const client = new TranslateClient(config);
 * const input = { // UpdateParallelDataRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ParallelDataConfig: { // ParallelDataConfig
 *     S3Uri: "STRING_VALUE",
 *     Format: "TSV" || "CSV" || "TMX",
 *   },
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateParallelDataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateParallelDataResponse
 * //   Name: "STRING_VALUE",
 * //   Status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //   LatestUpdateAttemptStatus: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //   LatestUpdateAttemptAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateParallelDataCommandInput - {@link UpdateParallelDataCommandInput}
 * @returns {@link UpdateParallelDataCommandOutput}
 * @see {@link UpdateParallelDataCommandInput} for command's `input` shape.
 * @see {@link UpdateParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is not valid. Check your request to determine why it's not
 *       valid and then retry the request. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The specified limit has been exceeded. Review your request and retry it with a quantity
 *       below the stated limit.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 *
 * @public
 */
export class UpdateParallelDataCommand extends command<UpdateParallelDataCommandInput, UpdateParallelDataCommandOutput>(
  _ep0,
  _mw0,
  "UpdateParallelData",
  UpdateParallelData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateParallelDataRequest;
      output: UpdateParallelDataResponse;
    };
    sdk: {
      input: UpdateParallelDataCommandInput;
      output: UpdateParallelDataCommandOutput;
    };
  };
}
