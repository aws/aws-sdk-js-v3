// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDomainInput, DeleteDomainOutput } from "../models/models_1";
import { DeleteDomain } from "../schemas/schemas_56_Domain";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDomainCommand}.
 */
export interface DeleteDomainCommandInput extends DeleteDomainInput {}
/**
 * @public
 *
 * The output of {@link DeleteDomainCommand}.
 */
export interface DeleteDomainCommandOutput extends DeleteDomainOutput, __MetadataBearer {}

/**
 * <p>Deletes a Amazon DataZone domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteDomainCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteDomainCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteDomainInput
 *   identifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   skipDeletionCheck: true || false,
 * };
 * const command = new DeleteDomainCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDomainOutput
 * //   status: "CREATING" || "AVAILABLE" || "CREATION_FAILED" || "DELETING" || "DELETED" || "DELETION_FAILED", // required
 * // };
 *
 * ```
 *
 * @param DeleteDomainCommandInput - {@link DeleteDomainCommandInput}
 * @returns {@link DeleteDomainCommandOutput}
 * @see {@link DeleteDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainCommandOutput} for command's `response` shape.
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
export class DeleteDomainCommand extends $Command
  .classBuilder<
    DeleteDomainCommandInput,
    DeleteDomainCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "DeleteDomain", {})
  .n("DataZoneClient", "DeleteDomainCommand")
  .sc(DeleteDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDomainInput;
      output: DeleteDomainOutput;
    };
    sdk: {
      input: DeleteDomainCommandInput;
      output: DeleteDomainCommandOutput;
    };
  };
}
