// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InitializeServiceRequest, InitializeServiceResponse } from "../models/models_0";
import { InitializeService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InitializeServiceCommand}.
 */
export interface InitializeServiceCommandInput extends InitializeServiceRequest {}
/**
 * @public
 *
 * The output of {@link InitializeServiceCommand}.
 */
export interface InitializeServiceCommandOutput extends InitializeServiceResponse, __MetadataBearer {}

/**
 * Initialize Elastic Disaster Recovery.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, InitializeServiceCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, InitializeServiceCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = {};
 * const command = new InitializeServiceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param InitializeServiceCommandInput - {@link InitializeServiceCommandInput}
 * @returns {@link InitializeServiceCommandOutput}
 * @see {@link InitializeServiceCommandInput} for command's `input` shape.
 * @see {@link InitializeServiceCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
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
export class InitializeServiceCommand extends command<InitializeServiceCommandInput, InitializeServiceCommandOutput>(
  _ep0,
  _mw0,
  "InitializeService",
  InitializeService$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: InitializeServiceCommandInput;
      output: InitializeServiceCommandOutput;
    };
  };
}
