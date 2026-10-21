// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDesignationInput, GetDesignationOutput } from "../models/models_1";
import { GetDesignation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDesignationCommand}.
 */
export interface GetDesignationCommandInput extends GetDesignationInput {}
/**
 * @public
 *
 * The output of {@link GetDesignationCommand}.
 */
export interface GetDesignationCommandOutput extends GetDesignationOutput, __MetadataBearer {}

/**
 * Gets the details of a designation, including its Cedar policy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetDesignationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetDesignationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetDesignationInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDesignationCommand(input);
 * const response = await client.send(command);
 * // { // GetDesignationOutput
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
 * @param GetDesignationCommandInput - {@link GetDesignationCommandInput}
 * @returns {@link GetDesignationCommandOutput}
 * @see {@link GetDesignationCommandInput} for command's `input` shape.
 * @see {@link GetDesignationCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetDesignationCommand extends command<GetDesignationCommandInput, GetDesignationCommandOutput>(
  _ep0,
  _mw0,
  "GetDesignation",
  GetDesignation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDesignationInput;
      output: GetDesignationOutput;
    };
    sdk: {
      input: GetDesignationCommandInput;
      output: GetDesignationCommandOutput;
    };
  };
}
