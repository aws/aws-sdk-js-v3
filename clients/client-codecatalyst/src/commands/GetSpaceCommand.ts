// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSpaceRequest, GetSpaceResponse } from "../models/models_0";
import { GetSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSpaceCommand}.
 */
export interface GetSpaceCommandInput extends GetSpaceRequest {}
/**
 * @public
 *
 * The output of {@link GetSpaceCommand}.
 */
export interface GetSpaceCommandOutput extends GetSpaceResponse, __MetadataBearer {}

/**
 * Returns information about an space.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, GetSpaceCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, GetSpaceCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // GetSpaceRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetSpaceCommand(input);
 * const response = await client.send(command);
 * // { // GetSpaceResponse
 * //   name: "STRING_VALUE", // required
 * //   regionName: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSpaceCommandInput - {@link GetSpaceCommandInput}
 * @returns {@link GetSpaceCommandOutput}
 * @see {@link GetSpaceCommandInput} for command's `input` shape.
 * @see {@link GetSpaceCommandOutput} for command's `response` shape.
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
export class GetSpaceCommand extends command<GetSpaceCommandInput, GetSpaceCommandOutput>(
  _ep0,
  _mw0,
  "GetSpace",
  GetSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSpaceRequest;
      output: GetSpaceResponse;
    };
    sdk: {
      input: GetSpaceCommandInput;
      output: GetSpaceCommandOutput;
    };
  };
}
