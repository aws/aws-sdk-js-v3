// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAccessGrantsLocationRequest, UpdateAccessGrantsLocationResult } from "../models/models_1";
import { UpdateAccessGrantsLocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccessGrantsLocationCommand}.
 */
export interface UpdateAccessGrantsLocationCommandInput extends UpdateAccessGrantsLocationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessGrantsLocationCommand}.
 */
export interface UpdateAccessGrantsLocationCommandOutput extends UpdateAccessGrantsLocationResult, __MetadataBearer {}

/**
 * Updates the IAM role of a registered location in your S3 Access Grants instance.
 *
 * - **Permissions**
 *
 *   You must have the `s3:UpdateAccessGrantsLocation` permission to use this operation.
 *
 * - **Additional Permissions**
 *
 *   You must also have the following permission: `iam:PassRole`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, UpdateAccessGrantsLocationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, UpdateAccessGrantsLocationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // UpdateAccessGrantsLocationRequest
 *   AccountId: "STRING_VALUE",
 *   AccessGrantsLocationId: "STRING_VALUE", // required
 *   IAMRoleArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateAccessGrantsLocationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessGrantsLocationResult
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   AccessGrantsLocationId: "STRING_VALUE",
 * //   AccessGrantsLocationArn: "STRING_VALUE",
 * //   LocationScope: "STRING_VALUE",
 * //   IAMRoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAccessGrantsLocationCommandInput - {@link UpdateAccessGrantsLocationCommandInput}
 * @returns {@link UpdateAccessGrantsLocationCommandOutput}
 * @see {@link UpdateAccessGrantsLocationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessGrantsLocationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class UpdateAccessGrantsLocationCommand extends command<UpdateAccessGrantsLocationCommandInput, UpdateAccessGrantsLocationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccessGrantsLocation",
  UpdateAccessGrantsLocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessGrantsLocationRequest;
      output: UpdateAccessGrantsLocationResult;
    };
    sdk: {
      input: UpdateAccessGrantsLocationCommandInput;
      output: UpdateAccessGrantsLocationCommandOutput;
    };
  };
}
