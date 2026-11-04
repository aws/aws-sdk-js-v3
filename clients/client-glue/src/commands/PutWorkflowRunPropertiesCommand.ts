// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutWorkflowRunPropertiesRequest } from "../models/models_2";
import type { PutWorkflowRunPropertiesResponse } from "../models/models_3";
import { PutWorkflowRunProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutWorkflowRunPropertiesCommand}.
 */
export interface PutWorkflowRunPropertiesCommandInput extends PutWorkflowRunPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link PutWorkflowRunPropertiesCommand}.
 */
export interface PutWorkflowRunPropertiesCommandOutput extends PutWorkflowRunPropertiesResponse, __MetadataBearer {}

/**
 * Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutWorkflowRunPropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutWorkflowRunPropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // PutWorkflowRunPropertiesRequest
 *   Name: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 *   RunProperties: { // WorkflowRunProperties // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutWorkflowRunPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutWorkflowRunPropertiesCommandInput - {@link PutWorkflowRunPropertiesCommandInput}
 * @returns {@link PutWorkflowRunPropertiesCommandOutput}
 * @see {@link PutWorkflowRunPropertiesCommandInput} for command's `input` shape.
 * @see {@link PutWorkflowRunPropertiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class PutWorkflowRunPropertiesCommand extends command<PutWorkflowRunPropertiesCommandInput, PutWorkflowRunPropertiesCommandOutput>(
  _ep0,
  _mw0,
  "PutWorkflowRunProperties",
  PutWorkflowRunProperties$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutWorkflowRunPropertiesRequest;
      output: {};
    };
    sdk: {
      input: PutWorkflowRunPropertiesCommandInput;
      output: PutWorkflowRunPropertiesCommandOutput;
    };
  };
}
