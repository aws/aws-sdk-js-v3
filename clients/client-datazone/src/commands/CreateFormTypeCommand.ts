// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFormTypeInput, CreateFormTypeOutput } from "../models/models_0";
import { CreateFormType } from "../schemas/schemas_25_Type";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFormTypeCommand}.
 */
export interface CreateFormTypeCommandInput extends CreateFormTypeInput {}
/**
 * @public
 *
 * The output of {@link CreateFormTypeCommand}.
 */
export interface CreateFormTypeCommandOutput extends CreateFormTypeOutput, __MetadataBearer {}

/**
 * <p>Creates a metadata form type.</p> <p>Prerequisites:</p> <ul> <li> <p>The domain must exist and be in an <code>ENABLED</code> state. </p> </li> <li> <p>The owning project must exist and be accessible.</p> </li> <li> <p>The name must be unique within the domain.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateFormTypeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateFormTypeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateFormTypeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   model: { // Model Union: only one key present
 *     smithy: "STRING_VALUE",
 *   },
 *   owningProjectIdentifier: "STRING_VALUE", // required
 *   status: "ENABLED" || "DISABLED",
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateFormTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateFormTypeOutput
 * //   domainId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   owningProjectId: "STRING_VALUE",
 * //   originDomainId: "STRING_VALUE",
 * //   originProjectId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFormTypeCommandInput - {@link CreateFormTypeCommandInput}
 * @returns {@link CreateFormTypeCommandOutput}
 * @see {@link CreateFormTypeCommandInput} for command's `input` shape.
 * @see {@link CreateFormTypeCommandOutput} for command's `response` shape.
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
export class CreateFormTypeCommand extends $Command
  .classBuilder<
    CreateFormTypeCommandInput,
    CreateFormTypeCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "CreateFormType", {})
  .n("DataZoneClient", "CreateFormTypeCommand")
  .sc(CreateFormType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFormTypeInput;
      output: CreateFormTypeOutput;
    };
    sdk: {
      input: CreateFormTypeCommandInput;
      output: CreateFormTypeCommandOutput;
    };
  };
}
