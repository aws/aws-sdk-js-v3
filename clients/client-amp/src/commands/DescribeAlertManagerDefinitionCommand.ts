// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAlertManagerDefinitionRequest, DescribeAlertManagerDefinitionResponse } from "../models/models_0";
import { DescribeAlertManagerDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAlertManagerDefinitionCommand}.
 */
export interface DescribeAlertManagerDefinitionCommandInput extends DescribeAlertManagerDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAlertManagerDefinitionCommand}.
 */
export interface DescribeAlertManagerDefinitionCommandOutput extends DescribeAlertManagerDefinitionResponse, __MetadataBearer {}

/**
 * Retrieves the full information about the alert manager definition for a workspace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeAlertManagerDefinitionCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeAlertManagerDefinitionCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DescribeAlertManagerDefinitionRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAlertManagerDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlertManagerDefinitionResponse
 * //   alertManagerDefinition: { // AlertManagerDefinitionDescription
 * //     status: { // AlertManagerDefinitionStatus
 * //       statusCode: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //     data: new Uint8Array(), // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     modifiedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAlertManagerDefinitionCommandInput - {@link DescribeAlertManagerDefinitionCommandInput}
 * @returns {@link DescribeAlertManagerDefinitionCommandOutput}
 * @see {@link DescribeAlertManagerDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeAlertManagerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resources that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
 *
 * @public
 */
export class DescribeAlertManagerDefinitionCommand extends command<DescribeAlertManagerDefinitionCommandInput, DescribeAlertManagerDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAlertManagerDefinition",
  DescribeAlertManagerDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAlertManagerDefinitionRequest;
      output: DescribeAlertManagerDefinitionResponse;
    };
    sdk: {
      input: DescribeAlertManagerDefinitionCommandInput;
      output: DescribeAlertManagerDefinitionCommandOutput;
    };
  };
}
