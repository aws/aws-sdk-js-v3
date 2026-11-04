// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateListingChangeSetInput, CreateListingChangeSetOutput } from "../models/models_0";
import { CreateListingChangeSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateListingChangeSetCommand}.
 */
export interface CreateListingChangeSetCommandInput extends CreateListingChangeSetInput {}
/**
 * @public
 *
 * The output of {@link CreateListingChangeSetCommand}.
 */
export interface CreateListingChangeSetCommandOutput extends CreateListingChangeSetOutput, __MetadataBearer {}

/**
 * Publishes a listing (a record of an asset at a given time) or removes a listing from the catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateListingChangeSetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateListingChangeSetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateListingChangeSetInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   entityType: "ASSET" || "DATA_PRODUCT", // required
 *   entityRevision: "STRING_VALUE",
 *   action: "PUBLISH" || "UNPUBLISH", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateListingChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateListingChangeSetOutput
 * //   listingId: "STRING_VALUE", // required
 * //   listingRevision: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "INACTIVE", // required
 * // };
 *
 * ```
 *
 * @param CreateListingChangeSetCommandInput - {@link CreateListingChangeSetCommandInput}
 * @returns {@link CreateListingChangeSetCommandOutput}
 * @see {@link CreateListingChangeSetCommandInput} for command's `input` shape.
 * @see {@link CreateListingChangeSetCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
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
export class CreateListingChangeSetCommand extends command<CreateListingChangeSetCommandInput, CreateListingChangeSetCommandOutput>(
  _ep0,
  _mw0,
  "CreateListingChangeSet",
  CreateListingChangeSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateListingChangeSetInput;
      output: CreateListingChangeSetOutput;
    };
    sdk: {
      input: CreateListingChangeSetCommandInput;
      output: CreateListingChangeSetCommandOutput;
    };
  };
}
