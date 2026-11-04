// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTestCaseRequest, DeleteTestCaseResponse } from "../models/models_1";
import { DeleteTestCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTestCaseCommand}.
 */
export interface DeleteTestCaseCommandInput extends DeleteTestCaseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTestCaseCommand}.
 */
export interface DeleteTestCaseCommandOutput extends DeleteTestCaseResponse, __MetadataBearer {}

/**
 * Deletes the test case that has already been created for the specified Amazon Connect instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteTestCaseCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteTestCaseCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteTestCaseRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TestCaseId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTestCaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTestCaseCommandInput - {@link DeleteTestCaseCommandInput}
 * @returns {@link DeleteTestCaseCommandOutput}
 * @see {@link DeleteTestCaseCommandInput} for command's `input` shape.
 * @see {@link DeleteTestCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DeleteTestCaseCommand extends command<DeleteTestCaseCommandInput, DeleteTestCaseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTestCase",
  DeleteTestCase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTestCaseRequest;
      output: {};
    };
    sdk: {
      input: DeleteTestCaseCommandInput;
      output: DeleteTestCaseCommandOutput;
    };
  };
}
