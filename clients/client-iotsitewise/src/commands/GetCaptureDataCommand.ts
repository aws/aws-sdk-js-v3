// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCaptureDataRequest, GetCaptureDataResponse } from "../models/models_1";
import { GetCaptureData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCaptureDataCommand}.
 */
export interface GetCaptureDataCommandInput extends GetCaptureDataRequest {}
/**
 * @public
 *
 * The output of {@link GetCaptureDataCommand}.
 */
export interface GetCaptureDataCommandOutput extends GetCaptureDataResponse, __MetadataBearer {}

/**
 * Retrieves video data for a specific time range.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, GetCaptureDataCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, GetCaptureDataCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // GetCaptureDataRequest
 *   workspaceName: "STRING_VALUE", // required
 *   startTime: { // TimeInNanos
 *     timeInSeconds: Number("long"), // required
 *     offsetInNanos: Number("int"),
 *   },
 *   endTime: {
 *     timeInSeconds: Number("long"), // required
 *     offsetInNanos: Number("int"),
 *   },
 *   timeSeriesId: "STRING_VALUE",
 *   propertyAlias: "STRING_VALUE",
 *   formatSettings: { // FormatSettings
 *     framesPerSecond: Number("int"),
 *     widthInPixels: Number("int"),
 *     heightInPixels: Number("int"),
 *   },
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetCaptureDataCommand(input);
 * const response = await client.send(command);
 * // { // GetCaptureDataResponse
 * //   data: new Uint8Array(), // required
 * //   startTime: { // TimeInNanos
 * //     timeInSeconds: Number("long"), // required
 * //     offsetInNanos: Number("int"),
 * //   },
 * //   endTime: {
 * //     timeInSeconds: Number("long"), // required
 * //     offsetInNanos: Number("int"),
 * //   },
 * //   dataType: "VIDEO-MP4", // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCaptureDataCommandInput - {@link GetCaptureDataCommandInput}
 * @returns {@link GetCaptureDataCommandOutput}
 * @see {@link GetCaptureDataCommandInput} for command's `input` shape.
 * @see {@link GetCaptureDataCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class GetCaptureDataCommand extends command<GetCaptureDataCommandInput, GetCaptureDataCommandOutput>(
  _ep0,
  _mw0,
  "GetCaptureData",
  GetCaptureData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCaptureDataRequest;
      output: GetCaptureDataResponse;
    };
    sdk: {
      input: GetCaptureDataCommandInput;
      output: GetCaptureDataCommandOutput;
    };
  };
}
