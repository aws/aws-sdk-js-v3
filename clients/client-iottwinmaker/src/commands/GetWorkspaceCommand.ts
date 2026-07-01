// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWorkspaceRequest, GetWorkspaceResponse } from "../models/models_0";
import { GetWorkspace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWorkspaceCommand}.
 */
export interface GetWorkspaceCommandInput extends GetWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkspaceCommand}.
 */
export interface GetWorkspaceCommandOutput extends GetWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetWorkspaceCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetWorkspaceCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetWorkspaceRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkspaceResponse
 * //   workspaceId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   linkedServices: [ // LinkedServices
 * //     "STRING_VALUE",
 * //   ],
 * //   s3Location: "STRING_VALUE",
 * //   role: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetWorkspaceCommandInput - {@link GetWorkspaceCommandInput}
 * @returns {@link GetWorkspaceCommandOutput}
 * @see {@link GetWorkspaceCommandInput} for command's `input` shape.
 * @see {@link GetWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class GetWorkspaceCommand extends command<GetWorkspaceCommandInput, GetWorkspaceCommandOutput>(
  _ep0,
  _mw0,
  "GetWorkspace",
  GetWorkspace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkspaceRequest;
      output: GetWorkspaceResponse;
    };
    sdk: {
      input: GetWorkspaceCommandInput;
      output: GetWorkspaceCommandOutput;
    };
  };
}
