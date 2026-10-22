// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDesignationInput, UpdateDesignationOutput } from "../models/models_2";
import { UpdateDesignation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDesignationCommand}.
 */
export interface UpdateDesignationCommandInput extends UpdateDesignationInput {}
/**
 * @public
 *
 * The output of {@link UpdateDesignationCommand}.
 */
export interface UpdateDesignationCommandOutput extends UpdateDesignationOutput, __MetadataBearer {}

/**
 * Updates an existing designation. Managed designations cannot be modified.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateDesignationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateDesignationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateDesignationInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   policy: "STRING_VALUE",
 *   deletionProtection: true || false,
 * };
 * const command = new UpdateDesignationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDesignationOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   designationType: "MANAGED" || "USER_CREATED", // required
 * //   policy: "STRING_VALUE", // required
 * //   deletionProtection: true || false, // required
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateDesignationCommandInput - {@link UpdateDesignationCommandInput}
 * @returns {@link UpdateDesignationCommandOutput}
 * @see {@link UpdateDesignationCommandInput} for command's `input` shape.
 * @see {@link UpdateDesignationCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class UpdateDesignationCommand extends command<UpdateDesignationCommandInput, UpdateDesignationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDesignation",
  UpdateDesignation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDesignationInput;
      output: UpdateDesignationOutput;
    };
    sdk: {
      input: UpdateDesignationCommandInput;
      output: UpdateDesignationCommandOutput;
    };
  };
}
