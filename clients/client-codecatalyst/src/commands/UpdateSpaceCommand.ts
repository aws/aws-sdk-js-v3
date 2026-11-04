// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSpaceRequest, UpdateSpaceResponse } from "../models/models_0";
import { UpdateSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSpaceCommand}.
 */
export interface UpdateSpaceCommandInput extends UpdateSpaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSpaceCommand}.
 */
export interface UpdateSpaceCommandOutput extends UpdateSpaceResponse, __MetadataBearer {}

/**
 * Changes one or more values for a space.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, UpdateSpaceCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, UpdateSpaceCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // UpdateSpaceRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateSpaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSpaceResponse
 * //   name: "STRING_VALUE",
 * //   displayName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSpaceCommandInput - {@link UpdateSpaceCommandInput}
 * @returns {@link UpdateSpaceCommandOutput}
 * @see {@link UpdateSpaceCommandInput} for command's `input` shape.
 * @see {@link UpdateSpaceCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request. Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce the number of resources, or change the tier if applicable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.
 *
 * @throws {@link CodeCatalystServiceException}
 *
 * Base exception class for all service exceptions from CodeCatalyst service.
 *
 * @public
 */
export class UpdateSpaceCommand extends command<UpdateSpaceCommandInput, UpdateSpaceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSpace",
  UpdateSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSpaceRequest;
      output: UpdateSpaceResponse;
    };
    sdk: {
      input: UpdateSpaceCommandInput;
      output: UpdateSpaceCommandOutput;
    };
  };
}
