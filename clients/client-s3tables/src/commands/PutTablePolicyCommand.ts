// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutTablePolicyRequest } from "../models/models_0";
import { PutTablePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTablePolicyCommand}.
 */
export interface PutTablePolicyCommandInput extends PutTablePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutTablePolicyCommand}.
 */
export interface PutTablePolicyCommandOutput extends __MetadataBearer {}

/**
 * Creates a new table policy or replaces an existing table policy for a table. For more information, see [Adding a table policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-table-policy.html#table-policy-add) in the *Amazon Simple Storage Service User Guide*.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:PutTablePolicy` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, PutTablePolicyCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, PutTablePolicyCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // PutTablePolicyRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   resourcePolicy: "STRING_VALUE", // required
 * };
 * const command = new PutTablePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTablePolicyCommandInput - {@link PutTablePolicyCommandInput}
 * @returns {@link PutTablePolicyCommandOutput}
 * @see {@link PutTablePolicyCommandInput} for command's `input` shape.
 * @see {@link PutTablePolicyCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is invalid or malformed.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed because there is a conflict with a previous write. You can retry the request.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The caller isn't authorized to make the request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request failed due to an internal server error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified resource could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link S3TablesServiceException}
 *
 * Base exception class for all service exceptions from S3Tables service.
 *
 * @public
 */
export class PutTablePolicyCommand extends command<PutTablePolicyCommandInput, PutTablePolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutTablePolicy",
  PutTablePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTablePolicyRequest;
      output: {};
    };
    sdk: {
      input: PutTablePolicyCommandInput;
      output: PutTablePolicyCommandOutput;
    };
  };
}
