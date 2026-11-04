// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetachAndDeleteS3AccessPointRequest, DetachAndDeleteS3AccessPointResponse } from "../models/models_0";
import { DetachAndDeleteS3AccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DetachAndDeleteS3AccessPointCommand}.
 */
export interface DetachAndDeleteS3AccessPointCommandInput extends DetachAndDeleteS3AccessPointRequest {}
/**
 * @public
 *
 * The output of {@link DetachAndDeleteS3AccessPointCommand}.
 */
export interface DetachAndDeleteS3AccessPointCommandOutput extends DetachAndDeleteS3AccessPointResponse, __MetadataBearer {}

/**
 * Detaches an S3 access point from an Amazon FSx volume and deletes the S3 access point.
 *
 * The requester requires the following permission to perform this action:
 *
 * - `fsx:DetachAndDeleteS3AccessPoint`
 * - `s3:DeleteAccessPoint`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DetachAndDeleteS3AccessPointCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DetachAndDeleteS3AccessPointCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DetachAndDeleteS3AccessPointRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DetachAndDeleteS3AccessPointCommand(input);
 * const response = await client.send(command);
 * // { // DetachAndDeleteS3AccessPointResponse
 * //   Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "UPDATING" || "FAILED" || "MISCONFIGURED",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DetachAndDeleteS3AccessPointCommandInput - {@link DetachAndDeleteS3AccessPointCommandInput}
 * @returns {@link DetachAndDeleteS3AccessPointCommandOutput}
 * @see {@link DetachAndDeleteS3AccessPointCommandInput} for command's `input` shape.
 * @see {@link DetachAndDeleteS3AccessPointCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *
 * A generic error indicating a failure with a client request.
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *
 * The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * A generic error indicating a server-side failure.
 *
 * @throws {@link S3AccessPointAttachmentNotFound} (client fault)
 *
 * The access point specified was not found.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * The requested operation is not supported for this resource or API.
 *
 * @throws {@link FSxServiceException}
 *
 * Base exception class for all service exceptions from FSx service.
 *
 * @public
 */
export class DetachAndDeleteS3AccessPointCommand extends command<DetachAndDeleteS3AccessPointCommandInput, DetachAndDeleteS3AccessPointCommandOutput>(
  _ep0,
  _mw0,
  "DetachAndDeleteS3AccessPoint",
  DetachAndDeleteS3AccessPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachAndDeleteS3AccessPointRequest;
      output: DetachAndDeleteS3AccessPointResponse;
    };
    sdk: {
      input: DetachAndDeleteS3AccessPointCommandInput;
      output: DetachAndDeleteS3AccessPointCommandOutput;
    };
  };
}
