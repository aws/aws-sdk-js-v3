// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetSoftwareSetRequest,
  GetSoftwareSetResponse,
  GetSoftwareSetResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetSoftwareSetCommand, se_GetSoftwareSetCommand } from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesThinClientClientResolvedConfig,
} from "../WorkSpacesThinClientClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns information for a software set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, GetSoftwareSetCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, GetSoftwareSetCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
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
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link WorkSpacesThinClientServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesThinClient service.</p>
 *
 * @public
 */
export class GetSoftwareSetCommand extends $Command
  .classBuilder<
    GetSoftwareSetCommandInput,
    GetSoftwareSetCommandOutput,
    WorkSpacesThinClientClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesThinClientClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ThinClient", "GetSoftwareSet", {})
  .n("WorkSpacesThinClientClient", "GetSoftwareSetCommand")
  .f(void 0, GetSoftwareSetResponseFilterSensitiveLog)
  .ser(se_GetSoftwareSetCommand)
  .de(de_GetSoftwareSetCommand)
  .build() {}
