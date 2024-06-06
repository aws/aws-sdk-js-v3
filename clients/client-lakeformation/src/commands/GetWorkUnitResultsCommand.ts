// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  GetWorkUnitResultsRequest,
  GetWorkUnitResultsRequestFilterSensitiveLog,
  GetWorkUnitResultsResponse,
  GetWorkUnitResultsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetWorkUnitResultsCommand, se_GetWorkUnitResultsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkUnitResultsCommand}.
 */
export interface GetWorkUnitResultsCommandInput extends GetWorkUnitResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkUnitResultsCommand}.
 */
export interface GetWorkUnitResultsCommandOutput
  extends Omit<GetWorkUnitResultsResponse, "ResultStream">,
    __MetadataBearer {
  ResultStream?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Returns the work units resulting from the query. Work units can be executed in any order and in parallel. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetWorkUnitResultsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetWorkUnitResultsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // GetWorkUnitResultsRequest
 *   QueryId: "STRING_VALUE", // required
 *   WorkUnitId: Number("long"), // required
 *   WorkUnitToken: "STRING_VALUE", // required
 * };
 * const command = new GetWorkUnitResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkUnitResultsResponse
 * //   ResultStream: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * // };
 *
 * ```
 *
 * @param GetWorkUnitResultsCommandInput - {@link GetWorkUnitResultsCommandInput}
 * @returns {@link GetWorkUnitResultsCommandOutput}
 * @see {@link GetWorkUnitResultsCommandInput} for command's `input` shape.
 * @see {@link GetWorkUnitResultsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ExpiredException} (client fault)
 *  <p>Contains details about an error where the query request expired.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Contains details about an error where the query request was throttled.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class GetWorkUnitResultsCommand extends $Command
  .classBuilder<
    GetWorkUnitResultsCommandInput,
    GetWorkUnitResultsCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "GetWorkUnitResults", {})
  .n("LakeFormationClient", "GetWorkUnitResultsCommand")
  .f(GetWorkUnitResultsRequestFilterSensitiveLog, GetWorkUnitResultsResponseFilterSensitiveLog)
  .ser(se_GetWorkUnitResultsCommand)
  .de(de_GetWorkUnitResultsCommand)
  .build() {}
