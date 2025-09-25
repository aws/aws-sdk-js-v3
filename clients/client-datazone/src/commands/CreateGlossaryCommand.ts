// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateGlossaryInput, CreateGlossaryOutput } from "../models/models_0";
import { CreateGlossary } from "../schemas/schemas_18_Glossary";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGlossaryCommand}.
 */
export interface CreateGlossaryCommandInput extends CreateGlossaryInput {}
/**
 * @public
 *
 * The output of {@link CreateGlossaryCommand}.
 */
export interface CreateGlossaryCommandOutput extends CreateGlossaryOutput, __MetadataBearer {}

/**
 * <p>Creates an Amazon DataZone business glossary.</p> <p>Specifies that this is a create glossary policy.</p> <p>A glossary serves as the central repository for business terminology and definitions within an organization. It helps establish and maintain a common language across different departments and teams, reducing miscommunication and ensuring consistent interpretation of business concepts. Glossaries can include hierarchical relationships between terms, cross-references, and links to actual data assets, making them invaluable for both business users and technical teams trying to understand and use data correctly.</p> <p>Prerequisites:</p> <ul> <li> <p>Domain must exist and be in an active state. </p> </li> <li> <p>Owning project must exist and be accessible by the caller.</p> </li> <li> <p>The glossary name must be unique within the domain.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateGlossaryCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateGlossaryCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateGlossaryInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   owningProjectIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   status: "DISABLED" || "ENABLED",
 *   usageRestrictions: [ // GlossaryUsageRestrictions
 *     "ASSET_GOVERNED_TERMS",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateGlossaryCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlossaryOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   owningProjectId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "DISABLED" || "ENABLED",
 * //   usageRestrictions: [ // GlossaryUsageRestrictions
 * //     "ASSET_GOVERNED_TERMS",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateGlossaryCommandInput - {@link CreateGlossaryCommandInput}
 * @returns {@link CreateGlossaryCommandOutput}
 * @see {@link CreateGlossaryCommandInput} for command's `input` shape.
 * @see {@link CreateGlossaryCommandOutput} for command's `response` shape.
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
export class CreateGlossaryCommand extends $Command
  .classBuilder<
    CreateGlossaryCommandInput,
    CreateGlossaryCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "CreateGlossary", {})
  .n("DataZoneClient", "CreateGlossaryCommand")
  .sc(CreateGlossary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGlossaryInput;
      output: CreateGlossaryOutput;
    };
    sdk: {
      input: CreateGlossaryCommandInput;
      output: CreateGlossaryCommandOutput;
    };
  };
}
