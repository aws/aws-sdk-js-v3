// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUploadStatusRequest, GetUploadStatusResponse } from "../models/models_0";
import { GetUploadStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUploadStatusCommand}.
 */
export interface GetUploadStatusCommandInput extends GetUploadStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetUploadStatusCommand}.
 */
export interface GetUploadStatusCommandOutput extends GetUploadStatusResponse, __MetadataBearer {}

/**
 * <p>Gets the status of the specified upload.</p>
 *
 * @deprecated since: 2022-08-30.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetUploadStatusCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetUploadStatusCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // GetUploadStatusRequest
 *   uploadId: "STRING_VALUE", // required
 * };
 * const command = new GetUploadStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetUploadStatusResponse
 * //   uploadId: "STRING_VALUE", // required
 * //   uploadStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //   namespaceArn: "STRING_VALUE",
 * //   namespaceName: "STRING_VALUE",
 * //   namespaceVersion: Number("long"),
 * //   failureReason: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   createdDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetUploadStatusCommandInput - {@link GetUploadStatusCommandInput}
 * @returns {@link GetUploadStatusCommandOutput}
 * @see {@link GetUploadStatusCommandInput} for command's `input` shape.
 * @see {@link GetUploadStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class GetUploadStatusCommand extends command<GetUploadStatusCommandInput, GetUploadStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetUploadStatus",
  GetUploadStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUploadStatusRequest;
      output: GetUploadStatusResponse;
    };
    sdk: {
      input: GetUploadStatusCommandInput;
      output: GetUploadStatusCommandOutput;
    };
  };
}
