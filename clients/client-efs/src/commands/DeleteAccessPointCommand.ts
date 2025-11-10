// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccessPointRequest } from "../models/models_0";
import { DeleteAccessPoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessPointCommand}.
 */
export interface DeleteAccessPointCommandInput extends DeleteAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessPointCommand}.
 */
export interface DeleteAccessPointCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified access point. After deletion is complete, new clients can no
 *       longer connect to the access points. Clients connected to the access point at the time of
 *       deletion will continue to function until they terminate their connection.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteAccessPoint</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteAccessPointCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteAccessPointCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DeleteAccessPointRequest
 *   AccessPointId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessPointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessPointCommandInput - {@link DeleteAccessPointCommandInput}
 * @returns {@link DeleteAccessPointCommandOutput}
 * @see {@link DeleteAccessPointCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPointCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link AccessPointNotFound} (client fault)
 *  <p>Returned if the specified <code>AccessPointId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @public
 */
export class DeleteAccessPointCommand extends $Command
  .classBuilder<
    DeleteAccessPointCommandInput,
    DeleteAccessPointCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MagnolioAPIService_v20150201", "DeleteAccessPoint", {})
  .n("EFSClient", "DeleteAccessPointCommand")
  .sc(DeleteAccessPoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessPointRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessPointCommandInput;
      output: DeleteAccessPointCommandOutput;
    };
  };
}
