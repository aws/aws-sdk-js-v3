// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetJourneyRunsRequest, GetJourneyRunsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetJourneyRuns } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJourneyRunsCommand}.
 */
export interface GetJourneyRunsCommandInput extends GetJourneyRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetJourneyRunsCommand}.
 */
export interface GetJourneyRunsCommandOutput extends GetJourneyRunsResponse, __MetadataBearer {}

/**
 * <p>Provides information about the runs of a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyRunsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyRunsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetJourneyRunsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   JourneyId: "STRING_VALUE", // required
 *   PageSize: "STRING_VALUE",
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetJourneyRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetJourneyRunsResponse
 * //   JourneyRunsResponse: { // JourneyRunsResponse
 * //     Item: [ // ListOfJourneyRunResponse // required
 * //       { // JourneyRunResponse
 * //         CreationTime: "STRING_VALUE", // required
 * //         LastUpdateTime: "STRING_VALUE", // required
 * //         RunId: "STRING_VALUE", // required
 * //         Status: "SCHEDULED" || "RUNNING" || "COMPLETED" || "CANCELLED", // required
 * //       },
 * //     ],
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJourneyRunsCommandInput - {@link GetJourneyRunsCommandInput}
 * @returns {@link GetJourneyRunsCommandOutput}
 * @see {@link GetJourneyRunsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyRunsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @example To get the runs of a journey
 * ```javascript
 * // The following example gets the runs of a journey.
 * const input = {
 *   ApplicationId: "11111111112222222222333333333344",
 *   JourneyId: "aaaaaaaaaabbbbbbbbbbccccccccccdd"
 * };
 * const command = new GetJourneyRunsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   JourneyRunsResponse: {
 *     Item: [
 *       {
 *         CreationTime: "2000-01-01T00:00:00.000Z",
 *         LastUpdateTime: "2000-01-01T00:00:05.000Z",
 *         RunId: "99999999998888888888777777777766",
 *         Status: "COMPLETED"
 *       },
 *       {
 *         CreationTime: "2000-01-01T00:00:10.000Z",
 *         LastUpdateTime: "2000-01-01T00:00:10.000Z",
 *         RunId: "ffffffffffeeeeeeeeeeddddddddddcc",
 *         Status: "SCHEDULED"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetJourneyRunsCommand extends $Command
  .classBuilder<
    GetJourneyRunsCommandInput,
    GetJourneyRunsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetJourneyRuns", {})
  .n("PinpointClient", "GetJourneyRunsCommand")
  .sc(GetJourneyRuns)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJourneyRunsRequest;
      output: GetJourneyRunsResponse;
    };
    sdk: {
      input: GetJourneyRunsCommandInput;
      output: GetJourneyRunsCommandOutput;
    };
  };
}
