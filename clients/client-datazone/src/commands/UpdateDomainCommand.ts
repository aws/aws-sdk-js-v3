// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDomainInput, UpdateDomainOutput } from "../models/models_1";
import { UpdateDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDomainCommand}.
 */
export interface UpdateDomainCommandInput extends UpdateDomainInput {}
/**
 * @public
 *
 * The output of {@link UpdateDomainCommand}.
 */
export interface UpdateDomainCommandOutput extends UpdateDomainOutput, __MetadataBearer {}

/**
 * Updates a Amazon DataZone domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateDomainCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateDomainCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateDomainInput
 *   identifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   singleSignOn: { // SingleSignOn
 *     type: "IAM_IDC" || "DISABLED",
 *     userAssignment: "AUTOMATIC" || "MANUAL",
 *     idcInstanceArn: "STRING_VALUE",
 *   },
 *   domainExecutionRole: "STRING_VALUE",
 *   serviceRole: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainOutput
 * //   id: "STRING_VALUE", // required
 * //   rootDomainUnitId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   singleSignOn: { // SingleSignOn
 * //     type: "IAM_IDC" || "DISABLED",
 * //     userAssignment: "AUTOMATIC" || "MANUAL",
 * //     idcInstanceArn: "STRING_VALUE",
 * //   },
 * //   domainExecutionRole: "STRING_VALUE",
 * //   serviceRole: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateDomainCommandInput - {@link UpdateDomainCommandInput}
 * @returns {@link UpdateDomainCommandOutput}
 * @see {@link UpdateDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainCommandOutput} for command's `response` shape.
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
export class UpdateDomainCommand extends command<UpdateDomainCommandInput, UpdateDomainCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDomain",
  UpdateDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainInput;
      output: UpdateDomainOutput;
    };
    sdk: {
      input: UpdateDomainCommandInput;
      output: UpdateDomainCommandOutput;
    };
  };
}
