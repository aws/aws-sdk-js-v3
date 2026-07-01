// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEnvironmentRequest, UpdateEnvironmentResponse } from "../models/models_0";
import { UpdateEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandOutput extends UpdateEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration details for a specific runtime environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, UpdateEnvironmentCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, UpdateEnvironmentCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // UpdateEnvironmentRequest
 *   environmentId: "STRING_VALUE", // required
 *   desiredCapacity: Number("int"),
 *   instanceType: "STRING_VALUE",
 *   engineVersion: "STRING_VALUE",
 *   preferredMaintenanceWindow: "STRING_VALUE",
 *   applyDuringMaintenanceWindow: true || false,
 *   forceUpdate: true || false,
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentResponse
 * //   environmentId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentCommandInput - {@link UpdateEnvironmentCommandInput}
 * @returns {@link UpdateEnvironmentCommandOutput}
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>One or more quotas for Amazon Web Services Mainframe Modernization exceeds the limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class UpdateEnvironmentCommand extends command<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEnvironment",
  UpdateEnvironment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentRequest;
      output: UpdateEnvironmentResponse;
    };
    sdk: {
      input: UpdateEnvironmentCommandInput;
      output: UpdateEnvironmentCommandOutput;
    };
  };
}
