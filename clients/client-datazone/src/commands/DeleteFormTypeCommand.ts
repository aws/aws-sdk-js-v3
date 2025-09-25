// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFormTypeInput, DeleteFormTypeOutput } from "../models/models_1";
import { DeleteFormType } from "../schemas/schemas_53_DeleteFormType";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFormTypeCommand}.
 */
export interface DeleteFormTypeCommandInput extends DeleteFormTypeInput {}
/**
 * @public
 *
 * The output of {@link DeleteFormTypeCommand}.
 */
export interface DeleteFormTypeCommandOutput extends DeleteFormTypeOutput, __MetadataBearer {}

/**
 * <p>Deletes and metadata form type in Amazon DataZone.</p> <p>Prerequisites:</p> <ul> <li> <p>The form type must exist in the domain. </p> </li> <li> <p>The form type must not be in use by any asset types or assets.</p> </li> <li> <p>The domain must be valid and accessible.</p> </li> <li> <p>User must have delete permissions on the form type.</p> </li> <li> <p>Any dependencies (such as linked asset types) must be removed first.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteFormTypeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteFormTypeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteFormTypeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   formTypeIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteFormTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFormTypeCommandInput - {@link DeleteFormTypeCommandInput}
 * @returns {@link DeleteFormTypeCommandOutput}
 * @see {@link DeleteFormTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteFormTypeCommandOutput} for command's `response` shape.
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
export class DeleteFormTypeCommand extends $Command
  .classBuilder<
    DeleteFormTypeCommandInput,
    DeleteFormTypeCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "DeleteFormType", {})
  .n("DataZoneClient", "DeleteFormTypeCommand")
  .sc(DeleteFormType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFormTypeInput;
      output: {};
    };
    sdk: {
      input: DeleteFormTypeCommandInput;
      output: DeleteFormTypeCommandOutput;
    };
  };
}
