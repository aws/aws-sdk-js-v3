// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DissociateAccessGrantsIdentityCenterRequest } from "../models/models_0";
import { DissociateAccessGrantsIdentityCenter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DissociateAccessGrantsIdentityCenterCommand}.
 */
export interface DissociateAccessGrantsIdentityCenterCommandInput extends DissociateAccessGrantsIdentityCenterRequest {}
/**
 * @public
 *
 * The output of {@link DissociateAccessGrantsIdentityCenterCommand}.
 */
export interface DissociateAccessGrantsIdentityCenterCommandOutput extends __MetadataBearer {}

/**
 * Dissociates the Amazon Web Services IAM Identity Center instance from the S3 Access Grants instance.
 *
 * - **Permissions**
 *
 *   You must have the `s3:DissociateAccessGrantsIdentityCenter` permission to use this operation.
 *
 * - **Additional Permissions**
 *
 *   You must have the `sso:DeleteApplication` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DissociateAccessGrantsIdentityCenterCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DissociateAccessGrantsIdentityCenterCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DissociateAccessGrantsIdentityCenterRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DissociateAccessGrantsIdentityCenterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DissociateAccessGrantsIdentityCenterCommandInput - {@link DissociateAccessGrantsIdentityCenterCommandInput}
 * @returns {@link DissociateAccessGrantsIdentityCenterCommandOutput}
 * @see {@link DissociateAccessGrantsIdentityCenterCommandInput} for command's `input` shape.
 * @see {@link DissociateAccessGrantsIdentityCenterCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class DissociateAccessGrantsIdentityCenterCommand extends command<DissociateAccessGrantsIdentityCenterCommandInput, DissociateAccessGrantsIdentityCenterCommandOutput>(
  _ep0,
  _mw0,
  "DissociateAccessGrantsIdentityCenter",
  DissociateAccessGrantsIdentityCenter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DissociateAccessGrantsIdentityCenterRequest;
      output: {};
    };
    sdk: {
      input: DissociateAccessGrantsIdentityCenterCommandInput;
      output: DissociateAccessGrantsIdentityCenterCommandOutput;
    };
  };
}
