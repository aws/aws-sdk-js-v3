// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDesignationInput, CreateDesignationOutput } from "../models/models_0";
import { CreateDesignation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDesignationCommand}.
 */
export interface CreateDesignationCommandInput extends CreateDesignationInput {}
/**
 * @public
 *
 * The output of {@link CreateDesignationCommand}.
 */
export interface CreateDesignationCommandOutput extends CreateDesignationOutput, __MetadataBearer {}

/**
 * Creates a new user-defined designation with a Cedar permit policy.
 * The designation defines a named role that can be assigned to project members.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateDesignationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateDesignationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateDesignationInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   policy: "STRING_VALUE", // required
 *   deletionProtection: true || false,
 * };
 * const command = new CreateDesignationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDesignationOutput
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
 * @param CreateDesignationCommandInput - {@link CreateDesignationCommandInput}
 * @returns {@link CreateDesignationCommandOutput}
 * @see {@link CreateDesignationCommandInput} for command's `input` shape.
 * @see {@link CreateDesignationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
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
export class CreateDesignationCommand extends command<CreateDesignationCommandInput, CreateDesignationCommandOutput>(
  _ep0,
  _mw0,
  "CreateDesignation",
  CreateDesignation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDesignationInput;
      output: CreateDesignationOutput;
    };
    sdk: {
      input: CreateDesignationCommandInput;
      output: CreateDesignationCommandOutput;
    };
  };
}
