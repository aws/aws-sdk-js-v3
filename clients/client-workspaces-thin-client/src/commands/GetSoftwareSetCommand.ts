// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSoftwareSetRequest, GetSoftwareSetResponse } from "../models/models_0";
import { GetSoftwareSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSoftwareSetCommand}.
 */
export interface GetSoftwareSetCommandInput extends GetSoftwareSetRequest {}
/**
 * @public
 *
 * The output of {@link GetSoftwareSetCommand}.
 */
export interface GetSoftwareSetCommandOutput extends GetSoftwareSetResponse, __MetadataBearer {}

/**
 * Returns information for a software set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, GetSoftwareSetCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, GetSoftwareSetCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * // import type { WorkSpacesThinClientClientConfig } from "@aws-sdk/client-workspaces-thin-client";
 * const config = {}; // type is WorkSpacesThinClientClientConfig
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // GetSoftwareSetRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetSoftwareSetCommand(input);
 * const response = await client.send(command);
 * // { // GetSoftwareSetResponse
 * //   softwareSet: { // SoftwareSet
 * //     id: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     releasedAt: new Date("TIMESTAMP"),
 * //     supportedUntil: new Date("TIMESTAMP"),
 * //     validationStatus: "VALIDATED" || "NOT_VALIDATED",
 * //     software: [ // SoftwareList
 * //       { // Software
 * //         name: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //     ],
 * //     arn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSoftwareSetCommandInput - {@link GetSoftwareSetCommandInput}
 * @returns {@link GetSoftwareSetCommandOutput}
 * @see {@link GetSoftwareSetCommandInput} for command's `input` shape.
 * @see {@link GetSoftwareSetCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesThinClientClientResolvedConfig | config} for WorkSpacesThinClientClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link WorkSpacesThinClientServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesThinClient service.
 *
 * @public
 */
export class GetSoftwareSetCommand extends command<GetSoftwareSetCommandInput, GetSoftwareSetCommandOutput>(
  _ep0,
  _mw0,
  "GetSoftwareSet",
  GetSoftwareSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSoftwareSetRequest;
      output: GetSoftwareSetResponse;
    };
    sdk: {
      input: GetSoftwareSetCommandInput;
      output: GetSoftwareSetCommandOutput;
    };
  };
}
