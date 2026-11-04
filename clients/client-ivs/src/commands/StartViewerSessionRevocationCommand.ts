// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartViewerSessionRevocationRequest, StartViewerSessionRevocationResponse } from "../models/models_0";
import { StartViewerSessionRevocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartViewerSessionRevocationCommand}.
 */
export interface StartViewerSessionRevocationCommandInput extends StartViewerSessionRevocationRequest {}
/**
 * @public
 *
 * The output of {@link StartViewerSessionRevocationCommand}.
 */
export interface StartViewerSessionRevocationCommandOutput extends StartViewerSessionRevocationResponse, __MetadataBearer {}

/**
 * Starts the process of revoking the viewer session associated with a specified channel ARN and viewer ID. Optionally, you can provide a version to revoke viewer sessions less than and including that version. For instructions on associating a viewer ID with a viewer session, see [Setting Up Private Channels](https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, StartViewerSessionRevocationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, StartViewerSessionRevocationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // StartViewerSessionRevocationRequest
 *   channelArn: "STRING_VALUE", // required
 *   viewerId: "STRING_VALUE", // required
 *   viewerSessionVersionsLessThanOrEqualTo: Number("int"),
 * };
 * const command = new StartViewerSessionRevocationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartViewerSessionRevocationCommandInput - {@link StartViewerSessionRevocationCommandInput}
 * @returns {@link StartViewerSessionRevocationCommandOutput}
 * @see {@link StartViewerSessionRevocationCommandInput} for command's `input` shape.
 * @see {@link StartViewerSessionRevocationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IvsServiceException}
 *
 * Base exception class for all service exceptions from Ivs service.
 *
 * @public
 */
export class StartViewerSessionRevocationCommand extends command<StartViewerSessionRevocationCommandInput, StartViewerSessionRevocationCommandOutput>(
  _ep0,
  _mw0,
  "StartViewerSessionRevocation",
  StartViewerSessionRevocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartViewerSessionRevocationRequest;
      output: {};
    };
    sdk: {
      input: StartViewerSessionRevocationCommandInput;
      output: StartViewerSessionRevocationCommandOutput;
    };
  };
}
