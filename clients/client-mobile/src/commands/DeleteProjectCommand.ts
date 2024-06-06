// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { DeleteProjectRequest, DeleteProjectResult } from "../models/models_0";
import { de_DeleteProjectCommand, se_DeleteProjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProjectCommand}.
 */
export interface DeleteProjectCommandInput extends DeleteProjectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProjectCommand}.
 */
export interface DeleteProjectCommandOutput extends DeleteProjectResult, __MetadataBearer {}

/**
 * <p>
 *             Delets a project in AWS Mobile Hub.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, DeleteProjectCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, DeleteProjectCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const input = { // DeleteProjectRequest
 *   projectId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProjectCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProjectResult
 * //   deletedResources: [ // Resources
 * //     { // Resource
 * //       type: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       feature: "STRING_VALUE",
 * //       attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   orphanedResources: [
 * //     {
 * //       type: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       feature: "STRING_VALUE",
 * //       attributes: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteProjectCommandInput - {@link DeleteProjectCommandInput}
 * @returns {@link DeleteProjectCommandOutput}
 * @see {@link DeleteProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for MobileClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>
 *             The service has encountered an unexpected error condition which prevents it from
 *             servicing the request.
 *         </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>
 *             No entity can be found with the specified identifier.
 *         </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>
 *             The service is temporarily unavailable. The request should be retried after some
 *             time delay.
 *         </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>
 *             Too many requests have been received for this AWS account in too short a time. The
 *             request should be retried after some time delay.
 *         </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>
 *             Credentials of the caller are insufficient to authorize the request.
 *         </p>
 *
 * @throws {@link MobileServiceException}
 * <p>Base exception class for all service exceptions from Mobile service.</p>
 *
 * @public
 */
export class DeleteProjectCommand extends $Command
  .classBuilder<
    DeleteProjectCommandInput,
    DeleteProjectCommandOutput,
    MobileClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MobileClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMobileService", "DeleteProject", {})
  .n("MobileClient", "DeleteProjectCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProjectCommand)
  .de(de_DeleteProjectCommand)
  .build() {}
