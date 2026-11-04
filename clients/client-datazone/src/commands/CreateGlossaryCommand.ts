// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGlossaryInput, CreateGlossaryOutput } from "../models/models_0";
import { CreateGlossary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Amazon DataZone business glossary.
 *
 * Specifies that this is a create glossary policy.
 *
 * A glossary serves as the central repository for business terminology and definitions within an organization. It helps establish and maintain a common language across different departments and teams, reducing miscommunication and ensuring consistent interpretation of business concepts. Glossaries can include hierarchical relationships between terms, cross-references, and links to actual data assets, making them invaluable for both business users and technical teams trying to understand and use data correctly.
 *
 * Prerequisites:
 *
 * - Domain must exist and be in an active state.
 * - Owning project must exist and be accessible by the caller.
 * - The glossary name must be unique within the domain.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class CreateGlossaryCommand extends command<CreateGlossaryCommandInput, CreateGlossaryCommandOutput>(
  _ep0,
  _mw0,
  "CreateGlossary",
  CreateGlossary$
) {
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
