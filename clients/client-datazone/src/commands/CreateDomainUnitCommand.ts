// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDomainUnitInput, CreateDomainUnitOutput } from "../models/models_0";
import { CreateDomainUnit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDomainUnitCommand}.
 */
export interface CreateDomainUnitCommandInput extends CreateDomainUnitInput {}
/**
 * @public
 *
 * The output of {@link CreateDomainUnitCommand}.
 */
export interface CreateDomainUnitCommandOutput extends CreateDomainUnitOutput, __MetadataBearer {}

/**
 * Creates a domain unit in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateDomainUnitCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateDomainUnitCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateDomainUnitInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   parentDomainUnitIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDomainUnitCommand(input);
 * const response = await client.send(command);
 * // { // CreateDomainUnitOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   parentDomainUnitId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   owners: [ // DomainUnitOwners // required
 * //     { // DomainUnitOwnerProperties Union: only one key present
 * //       user: { // DomainUnitUserProperties
 * //         userId: "STRING_VALUE",
 * //       },
 * //       group: { // DomainUnitGroupProperties
 * //         groupId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   ancestorDomainUnitIds: [ // DomainUnitIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDomainUnitCommandInput - {@link CreateDomainUnitCommandInput}
 * @returns {@link CreateDomainUnitCommandOutput}
 * @see {@link CreateDomainUnitCommandInput} for command's `input` shape.
 * @see {@link CreateDomainUnitCommandOutput} for command's `response` shape.
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
export class CreateDomainUnitCommand extends command<CreateDomainUnitCommandInput, CreateDomainUnitCommandOutput>(
  _ep0,
  _mw0,
  "CreateDomainUnit",
  CreateDomainUnit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDomainUnitInput;
      output: CreateDomainUnitOutput;
    };
    sdk: {
      input: CreateDomainUnitCommandInput;
      output: CreateDomainUnitCommandOutput;
    };
  };
}
