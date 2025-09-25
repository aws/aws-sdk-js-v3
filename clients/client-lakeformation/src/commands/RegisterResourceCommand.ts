// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { RegisterResourceRequest, RegisterResourceResponse } from "../models/models_0";
import { RegisterResource } from "../schemas/schemas_11_Resource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterResourceCommand}.
 */
export interface RegisterResourceCommandInput extends RegisterResourceRequest {}
/**
 * @public
 *
 * The output of {@link RegisterResourceCommand}.
 */
export interface RegisterResourceCommandOutput extends RegisterResourceResponse, __MetadataBearer {}

/**
 * <p>Registers the resource as managed by the Data Catalog.</p>
 *          <p>To add or update data, Lake Formation needs read/write access to the chosen data location. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p>
 *          <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p>
 *          <p>
 *             <code>ResourceArn = arn:aws:s3:::my-bucket/
 * UseServiceLinkedRole = true</code>
 *          </p>
 *          <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p>
 *          <p>
 *             <code>arn:aws:iam::12345:role/my-data-access-role</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RegisterResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, RegisterResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // RegisterResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   UseServiceLinkedRole: true || false,
 *   RoleArn: "STRING_VALUE",
 *   WithFederation: true || false,
 *   HybridAccessEnabled: true || false,
 *   WithPrivilegedAccess: true || false,
 * };
 * const command = new RegisterResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterResourceCommandInput - {@link RegisterResourceCommandInput}
 * @returns {@link RegisterResourceCommandOutput}
 * @see {@link RegisterResourceCommandInput} for command's `input` shape.
 * @see {@link RegisterResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class RegisterResourceCommand extends $Command
  .classBuilder<
    RegisterResourceCommandInput,
    RegisterResourceCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "RegisterResource", {})
  .n("LakeFormationClient", "RegisterResourceCommand")
  .sc(RegisterResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterResourceRequest;
      output: {};
    };
    sdk: {
      input: RegisterResourceCommandInput;
      output: RegisterResourceCommandOutput;
    };
  };
}
