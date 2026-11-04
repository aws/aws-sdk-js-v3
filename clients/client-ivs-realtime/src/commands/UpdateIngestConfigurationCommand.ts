// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIngestConfigurationRequest, UpdateIngestConfigurationResponse } from "../models/models_0";
import { UpdateIngestConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIngestConfigurationCommand}.
 */
export interface UpdateIngestConfigurationCommandInput extends UpdateIngestConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIngestConfigurationCommand}.
 */
export interface UpdateIngestConfigurationCommandOutput extends UpdateIngestConfigurationResponse, __MetadataBearer {}

/**
 * Updates a specified IngestConfiguration. Only the stage ARN attached to the IngestConfiguration can be updated. An IngestConfiguration that is active cannot be updated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, UpdateIngestConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, UpdateIngestConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // UpdateIngestConfigurationRequest
 *   arn: "STRING_VALUE", // required
 *   stageArn: "STRING_VALUE",
 *   redundantIngest: true || false,
 * };
 * const command = new UpdateIngestConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIngestConfigurationResponse
 * //   accessControlAllowOrigin: "STRING_VALUE",
 * //   accessControlExposeHeaders: "STRING_VALUE",
 * //   cacheControl: "STRING_VALUE",
 * //   contentSecurityPolicy: "STRING_VALUE",
 * //   strictTransportSecurity: "STRING_VALUE",
 * //   xContentTypeOptions: "STRING_VALUE",
 * //   xFrameOptions: "STRING_VALUE",
 * //   ingestConfiguration: { // IngestConfiguration
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     ingestProtocol: "RTMP" || "RTMPS", // required
 * //     streamKey: "STRING_VALUE", // required
 * //     stageArn: "STRING_VALUE", // required
 * //     participantId: "STRING_VALUE", // required
 * //     state: "STRING_VALUE", // required
 * //     userId: "STRING_VALUE",
 * //     redundantIngest: true || false,
 * //     redundantIngestCredentials: [ // RedundantIngestCredentials
 * //       { // RedundantIngestCredential
 * //         participantId: "STRING_VALUE",
 * //         streamKey: "STRING_VALUE",
 * //       },
 * //     ],
 * //     attributes: { // ParticipantAttributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIngestConfigurationCommandInput - {@link UpdateIngestConfigurationCommandInput}
 * @returns {@link UpdateIngestConfigurationCommandOutput}
 * @see {@link UpdateIngestConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateIngestConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IVSRealTimeServiceException}
 *
 * Base exception class for all service exceptions from IVSRealTime service.
 *
 * @public
 */
export class UpdateIngestConfigurationCommand extends command<UpdateIngestConfigurationCommandInput, UpdateIngestConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIngestConfiguration",
  UpdateIngestConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIngestConfigurationRequest;
      output: UpdateIngestConfigurationResponse;
    };
    sdk: {
      input: UpdateIngestConfigurationCommandInput;
      output: UpdateIngestConfigurationCommandOutput;
    };
  };
}
