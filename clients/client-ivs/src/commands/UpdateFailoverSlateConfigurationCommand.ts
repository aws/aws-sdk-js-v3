// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateFailoverSlateConfigurationRequest,
  UpdateFailoverSlateConfigurationResponse,
} from "../models/models_0";
import { UpdateFailoverSlateConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFailoverSlateConfigurationCommand}.
 */
export interface UpdateFailoverSlateConfigurationCommandInput extends UpdateFailoverSlateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFailoverSlateConfigurationCommand}.
 */
export interface UpdateFailoverSlateConfigurationCommandOutput extends UpdateFailoverSlateConfigurationResponse, __MetadataBearer {}

/**
 * Updates a specified failover slate configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, UpdateFailoverSlateConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, UpdateFailoverSlateConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // UpdateFailoverSlateConfigurationRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   activationThresholdSeconds: Number("int"),
 *   minSlateDisplaySeconds: Number("int"),
 *   maxSlateDisplaySeconds: Number("int"),
 * };
 * const command = new UpdateFailoverSlateConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFailoverSlateConfigurationResponse
 * //   failoverSlateConfiguration: { // FailoverSlateConfiguration
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     activationThresholdSeconds: Number("int"),
 * //     minSlateDisplaySeconds: Number("int"),
 * //     maxSlateDisplaySeconds: Number("int"),
 * //     state: "STRING_VALUE", // required
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFailoverSlateConfigurationCommandInput - {@link UpdateFailoverSlateConfigurationCommandInput}
 * @returns {@link UpdateFailoverSlateConfigurationCommandOutput}
 * @see {@link UpdateFailoverSlateConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateFailoverSlateConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateFailoverSlateConfigurationCommand extends command<UpdateFailoverSlateConfigurationCommandInput, UpdateFailoverSlateConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFailoverSlateConfiguration",
  UpdateFailoverSlateConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFailoverSlateConfigurationRequest;
      output: UpdateFailoverSlateConfigurationResponse;
    };
    sdk: {
      input: UpdateFailoverSlateConfigurationCommandInput;
      output: UpdateFailoverSlateConfigurationCommandOutput;
    };
  };
}
