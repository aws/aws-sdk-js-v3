// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListThingRegistrationTaskReportsRequest,
  ListThingRegistrationTaskReportsResponse,
} from "../models/models_2";
import { ListThingRegistrationTaskReports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListThingRegistrationTaskReportsCommandOutput extends ListThingRegistrationTaskReportsResponse, __MetadataBearer {}

/**
 * Information about the thing registration tasks.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListThingRegistrationTaskReportsCommand extends command<ListThingRegistrationTaskReportsCommandInput, ListThingRegistrationTaskReportsCommandOutput>(
  _ep0,
  _mw0,
  "ListThingRegistrationTaskReports",
  ListThingRegistrationTaskReports$
) {
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
