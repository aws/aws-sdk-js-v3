// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingRegistrationTaskReportsRequest, ListThingRegistrationTaskReportsResponse } from "../models/models_2";
import { ListThingRegistrationTaskReports } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThingRegistrationTaskReportsCommand}.
 */
export interface ListThingRegistrationTaskReportsCommandInput extends ListThingRegistrationTaskReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListThingRegistrationTaskReportsCommand}.
 */
export interface ListThingRegistrationTaskReportsCommandOutput
  extends ListThingRegistrationTaskReportsResponse,
    __MetadataBearer {}

/**
 * <p>Information about the thing registration tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingRegistrationTaskReportsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingRegistrationTaskReportsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListThingRegistrationTaskReportsRequest
 *   taskId: "STRING_VALUE", // required
 *   reportType: "ERRORS" || "RESULTS", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListThingRegistrationTaskReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListThingRegistrationTaskReportsResponse
 * //   resourceLinks: [ // S3FileUrlList
 * //     "STRING_VALUE",
 * //   ],
 * //   reportType: "ERRORS" || "RESULTS",
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingRegistrationTaskReportsCommandInput - {@link ListThingRegistrationTaskReportsCommandInput}
 * @returns {@link ListThingRegistrationTaskReportsCommandOutput}
 * @see {@link ListThingRegistrationTaskReportsCommandInput} for command's `input` shape.
 * @see {@link ListThingRegistrationTaskReportsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListThingRegistrationTaskReportsCommand extends $Command
  .classBuilder<
    ListThingRegistrationTaskReportsCommandInput,
    ListThingRegistrationTaskReportsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListThingRegistrationTaskReports", {})
  .n("IoTClient", "ListThingRegistrationTaskReportsCommand")
  .sc(ListThingRegistrationTaskReports)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingRegistrationTaskReportsRequest;
      output: ListThingRegistrationTaskReportsResponse;
    };
    sdk: {
      input: ListThingRegistrationTaskReportsCommandInput;
      output: ListThingRegistrationTaskReportsCommandOutput;
    };
  };
}
