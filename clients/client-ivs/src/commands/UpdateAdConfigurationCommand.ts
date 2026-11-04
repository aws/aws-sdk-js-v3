// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAdConfigurationRequest, UpdateAdConfigurationResponse } from "../models/models_0";
import { UpdateAdConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAdConfigurationCommand}.
 */
export interface UpdateAdConfigurationCommandInput extends UpdateAdConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAdConfigurationCommand}.
 */
export interface UpdateAdConfigurationCommandOutput extends UpdateAdConfigurationResponse, __MetadataBearer {}

/**
 * Updates a specified ad configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, UpdateAdConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, UpdateAdConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // UpdateAdConfigurationRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   mediaTailorPlaybackConfigurations: [ // MediaTailorPlaybackConfigurationsList
 *     { // MediaTailorPlaybackConfiguration
 *       playbackConfigurationArn: "STRING_VALUE",
 *     },
 *   ],
 *   postRollConfiguration: { // PostRollConfiguration
 *     durationSeconds: Number("int"), // required
 *     enabled: true || false, // required
 *   },
 * };
 * const command = new UpdateAdConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAdConfigurationResponse
 * //   adConfiguration: { // AdConfiguration
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     mediaTailorPlaybackConfigurations: [ // MediaTailorPlaybackConfigurationsList // required
 * //       { // MediaTailorPlaybackConfiguration
 * //         playbackConfigurationArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     postRollConfiguration: { // PostRollConfiguration
 * //       durationSeconds: Number("int"), // required
 * //       enabled: true || false, // required
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAdConfigurationCommandInput - {@link UpdateAdConfigurationCommandInput}
 * @returns {@link UpdateAdConfigurationCommandOutput}
 * @see {@link UpdateAdConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAdConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
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
export class UpdateAdConfigurationCommand extends command<UpdateAdConfigurationCommandInput, UpdateAdConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAdConfiguration",
  UpdateAdConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAdConfigurationRequest;
      output: UpdateAdConfigurationResponse;
    };
    sdk: {
      input: UpdateAdConfigurationCommandInput;
      output: UpdateAdConfigurationCommandOutput;
    };
  };
}
