// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFormTypeInput, CreateFormTypeOutput } from "../models/models_0";
import { CreateFormType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a metadata form type.
 *
 * Prerequisites:
 *
 * - The domain must exist and be in an `ENABLED` state.
 * - The owning project must exist and be accessible.
 * - The name must be unique within the domain.
 *
 * For custom form types, to indicate that a field should be searchable, annotate it with `@amazon.datazone#searchable`. By default, searchable fields are indexed for semantic search, where related query terms will match the attribute value even if they are not stemmed or keyword matches. To indicate that a field should be indexed for lexical search (which disables semantic search but supports stemmed and partial matches), annotate it with `@amazon.datazone#searchable(modes:["LEXICAL"])`. To indicate that a field should be indexed for technical identifier search (for more information on technical identifier search, see: [https://aws.amazon.com/blogs/big-data/streamline-data-discovery-with-precise-technical-identifier-search-in-amazon-sagemaker-unified-studio/](https://aws.amazon.com/blogs/big-data/streamline-data-discovery-with-precise-technical-identifier-search-in-amazon-sagemaker-unified-studio/)), annotate it with `@amazon.datazone#searchable(modes:["TECHNICAL"])`.
 *
 * To denote that a field will store glossary term ids (which are filterable via the Search/SearchListings APIs), annotate it with `@amazon.datazone#glossaryterm("$\{GLOSSARY_ID\}")`, where `$\{GLOSSARY_ID\}` is the id of the glossary that the glossary terms stored in the field belong to.
 *
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
export class CreateFormTypeCommand extends command<CreateFormTypeCommandInput, CreateFormTypeCommandOutput>(
  _ep0,
  _mw0,
  "CreateFormType",
  CreateFormType$
) {
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
