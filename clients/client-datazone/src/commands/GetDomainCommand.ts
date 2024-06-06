// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDomainInput, GetDomainOutput } from "../models/models_0";
import { de_GetDomainCommand, se_GetDomainCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainCommand}.
 */
export interface GetDomainCommandInput extends GetDomainInput {}
/**
 * @public
 *
 * The output of {@link GetDomainCommand}.
 */
export interface GetDomainCommandOutput extends GetDomainOutput, __MetadataBearer {}

/**
 * <p>Gets an Amazon DataZone domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetDomainCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetDomainCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetDomainInput
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDomainCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   singleSignOn: { // SingleSignOn
 * //     type: "IAM_IDC" || "DISABLED",
 * //     userAssignment: "AUTOMATIC" || "MANUAL",
 * //   },
 * //   domainExecutionRole: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE",
 * //   kmsKeyIdentifier: "STRING_VALUE",
 * //   status: "CREATING" || "AVAILABLE" || "CREATION_FAILED" || "DELETING" || "DELETED" || "DELETION_FAILED", // required
 * //   portalUrl: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainCommandInput - {@link GetDomainCommandInput}
 * @returns {@link GetDomainCommandOutput}
 * @see {@link GetDomainCommandInput} for command's `input` shape.
 * @see {@link GetDomainCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetDomainCommand extends $Command
  .classBuilder<
    GetDomainCommandInput,
    GetDomainCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "GetDomain", {})
  .n("DataZoneClient", "GetDomainCommand")
  .f(void 0, void 0)
  .ser(se_GetDomainCommand)
  .de(de_GetDomainCommand)
  .build() {}
