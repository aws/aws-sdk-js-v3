// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAvailableModuleVersionRequest, GetAvailableModuleVersionResponse } from "../models/models_0";
import { GetAvailableModuleVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAvailableModuleVersionCommand}.
 */
export interface GetAvailableModuleVersionCommandInput extends GetAvailableModuleVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetAvailableModuleVersionCommand}.
 */
export interface GetAvailableModuleVersionCommandOutput extends GetAvailableModuleVersionResponse, __MetadataBearer {}

/**
 * <p>Returns an ACTIVE or DEPRECATED version of a module that you can attach. If you can't attach the module, or the version is in another status, the operation returns ResourceNotFoundException, the same as for a missing one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, GetAvailableModuleVersionCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, GetAvailableModuleVersionCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // GetAvailableModuleVersionRequest
 *   moduleId: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 * };
 * const command = new GetAvailableModuleVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetAvailableModuleVersionResponse
 * //   moduleId: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * //   moduleVersionArn: "STRING_VALUE", // required
 * //   status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DEPRECATED", // required
 * //   permissions: [ // ModulePermissionList // required
 * //     "READ_REQUEST_BODY" || "READ_REQUEST_HEADERS" || "MUTATE_REQUEST_BODY" || "ENRICH_REQUEST_HEADERS" || "ENRICH_REQUEST_EXT" || "FILTER",
 * //   ],
 * //   configurableActions: [ // ConfigurableActionList // required
 * //     "FILTER" || "ENRICH_REQUEST_EXT" || "ENRICH_REQUEST_HEADERS" || "OBSERVE",
 * //   ],
 * //   configurationSchema: "STRING_VALUE",
 * //   releaseNotes: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetAvailableModuleVersionCommandInput - {@link GetAvailableModuleVersionCommandInput}
 * @returns {@link GetAvailableModuleVersionCommandOutput}
 * @see {@link GetAvailableModuleVersionCommandInput} for command's `input` shape.
 * @see {@link GetAvailableModuleVersionCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example Get a module version
 * ```javascript
 * // Gets a version of a module that you can attach, with what it can do and the parameters it accepts.
 * const input = {
 *   moduleId: "module-8kq2p9wx3fnv1c5htj7bd0ral",
 *   version: "1.2.0"
 * };
 * const command = new GetAvailableModuleVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configurableActions: [
 *     "FILTER"
 *   ],
 *   configurationSchema: `{"type":"object","properties":{"floorPrice":{"type":"number"}}}`,
 *   createdAt: "2026-10-15T09:00:00Z",
 *   moduleId: "module-8kq2p9wx3fnv1c5htj7bd0ral",
 *   moduleVersionArn: "arn:aws:rtbfabric:us-east-1::modules/module-8kq2p9wx3fnv1c5htj7bd0ral/versions/1.2.0",
 *   permissions: [
 *     "READ_REQUEST_BODY",
 *     "FILTER"
 *   ],
 *   releaseNotes: "Adds a configurable floor price.",
 *   status: "ACTIVE",
 *   updatedAt: "2026-10-15T09:00:00Z",
 *   version: "1.2.0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAvailableModuleVersionCommand extends command<GetAvailableModuleVersionCommandInput, GetAvailableModuleVersionCommandOutput>(
  _ep0,
  _mw0,
  "GetAvailableModuleVersion",
  GetAvailableModuleVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAvailableModuleVersionRequest;
      output: GetAvailableModuleVersionResponse;
    };
    sdk: {
      input: GetAvailableModuleVersionCommandInput;
      output: GetAvailableModuleVersionCommandOutput;
    };
  };
}
