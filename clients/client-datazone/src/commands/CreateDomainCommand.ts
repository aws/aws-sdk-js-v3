// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDomainInput, CreateDomainOutput } from "../models/models_0";
import { CreateDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDomainCommand}.
 */
export interface CreateDomainCommandInput extends CreateDomainInput {}
/**
 * @public
 *
 * The output of {@link CreateDomainCommand}.
 */
export interface CreateDomainCommandOutput extends CreateDomainOutput, __MetadataBearer {}

/**
 * Creates an Amazon DataZone domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateDomainCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateDomainCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateDomainInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   singleSignOn: { // SingleSignOn
 *     type: "IAM_IDC" || "DISABLED",
 *     userAssignment: "AUTOMATIC" || "MANUAL",
 *     idcInstanceArn: "STRING_VALUE",
 *   },
 *   domainExecutionRole: "STRING_VALUE",
 *   kmsKeyIdentifier: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   domainVersion: "V1" || "V2",
 *   serviceRole: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDomainCommand(input);
 * const response = await client.send(command);
 * // { // CreateDomainOutput
 * //   id: "STRING_VALUE", // required
 * //   rootDomainUnitId: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   singleSignOn: { // SingleSignOn
 * //     type: "IAM_IDC" || "DISABLED",
 * //     userAssignment: "AUTOMATIC" || "MANUAL",
 * //     idcInstanceArn: "STRING_VALUE",
 * //   },
 * //   domainExecutionRole: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   kmsKeyIdentifier: "STRING_VALUE",
 * //   status: "CREATING" || "AVAILABLE" || "CREATION_FAILED" || "DELETING" || "DELETED" || "DELETION_FAILED",
 * //   portalUrl: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   domainVersion: "V1" || "V2",
 * //   serviceRole: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDomainCommandInput - {@link CreateDomainCommandInput}
 * @returns {@link CreateDomainCommandOutput}
 * @see {@link CreateDomainCommandInput} for command's `input` shape.
 * @see {@link CreateDomainCommandOutput} for command's `response` shape.
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
export class CreateDomainCommand extends command<CreateDomainCommandInput, CreateDomainCommandOutput>(
  _ep0,
  _mw0,
  "CreateDomain",
  CreateDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDomainInput;
      output: CreateDomainOutput;
    };
    sdk: {
      input: CreateDomainCommandInput;
      output: CreateDomainCommandOutput;
    };
  };
}
