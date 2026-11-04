// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportSourceNetworkCfnTemplateRequest, ExportSourceNetworkCfnTemplateResponse } from "../models/models_0";
import { ExportSourceNetworkCfnTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExportSourceNetworkCfnTemplateCommand}.
 */
export interface ExportSourceNetworkCfnTemplateCommandInput extends ExportSourceNetworkCfnTemplateRequest {}
/**
 * @public
 *
 * The output of {@link ExportSourceNetworkCfnTemplateCommand}.
 */
export interface ExportSourceNetworkCfnTemplateCommandOutput extends ExportSourceNetworkCfnTemplateResponse, __MetadataBearer {}

/**
 * Export the Source Network CloudFormation template to an S3 bucket.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ExportSourceNetworkCfnTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ExportSourceNetworkCfnTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // ExportSourceNetworkCfnTemplateRequest
 *   sourceNetworkID: "STRING_VALUE", // required
 * };
 * const command = new ExportSourceNetworkCfnTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ExportSourceNetworkCfnTemplateResponse
 * //   s3DestinationUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportSourceNetworkCfnTemplateCommandInput - {@link ExportSourceNetworkCfnTemplateCommandInput}
 * @returns {@link ExportSourceNetworkCfnTemplateCommandOutput}
 * @see {@link ExportSourceNetworkCfnTemplateCommandInput} for command's `input` shape.
 * @see {@link ExportSourceNetworkCfnTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the AWS service.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class ExportSourceNetworkCfnTemplateCommand extends command<ExportSourceNetworkCfnTemplateCommandInput, ExportSourceNetworkCfnTemplateCommandOutput>(
  _ep0,
  _mw0,
  "ExportSourceNetworkCfnTemplate",
  ExportSourceNetworkCfnTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportSourceNetworkCfnTemplateRequest;
      output: ExportSourceNetworkCfnTemplateResponse;
    };
    sdk: {
      input: ExportSourceNetworkCfnTemplateCommandInput;
      output: ExportSourceNetworkCfnTemplateCommandOutput;
    };
  };
}
