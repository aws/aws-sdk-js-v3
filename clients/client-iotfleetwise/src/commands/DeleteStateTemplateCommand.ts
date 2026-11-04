// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteStateTemplateRequest, DeleteStateTemplateResponse } from "../models/models_0";
import { DeleteStateTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteStateTemplateCommand}.
 */
export interface DeleteStateTemplateCommandInput extends DeleteStateTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStateTemplateCommand}.
 */
export interface DeleteStateTemplateCommandOutput extends DeleteStateTemplateResponse, __MetadataBearer {}

/**
 * Deletes a state template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DeleteStateTemplateCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DeleteStateTemplateCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // DeleteStateTemplateRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteStateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteStateTemplateResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteStateTemplateCommandInput - {@link DeleteStateTemplateCommandInput}
 * @returns {@link DeleteStateTemplateCommandOutput}
 * @see {@link DeleteStateTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteStateTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class DeleteStateTemplateCommand extends command<DeleteStateTemplateCommandInput, DeleteStateTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteStateTemplate",
  DeleteStateTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStateTemplateRequest;
      output: DeleteStateTemplateResponse;
    };
    sdk: {
      input: DeleteStateTemplateCommandInput;
      output: DeleteStateTemplateCommandOutput;
    };
  };
}
