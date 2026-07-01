// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPersistentAppUIPresignedURLInput, GetPersistentAppUIPresignedURLOutput } from "../models/models_0";
import { GetPersistentAppUIPresignedURL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPersistentAppUIPresignedURLCommand}.
 */
export interface GetPersistentAppUIPresignedURLCommandInput extends GetPersistentAppUIPresignedURLInput {}
/**
 * @public
 *
 * The output of {@link GetPersistentAppUIPresignedURLCommand}.
 */
export interface GetPersistentAppUIPresignedURLCommandOutput extends GetPersistentAppUIPresignedURLOutput, __MetadataBearer {}

/**
 * <p>The presigned URL properties for the cluster's application user interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetPersistentAppUIPresignedURLCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetPersistentAppUIPresignedURLCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // GetPersistentAppUIPresignedURLInput
 *   PersistentAppUIId: "STRING_VALUE", // required
 *   PersistentAppUIType: "SHS" || "TEZ" || "YTS",
 *   ApplicationId: "STRING_VALUE",
 *   AuthProxyCall: true || false,
 *   ExecutionRoleArn: "STRING_VALUE",
 * };
 * const command = new GetPersistentAppUIPresignedURLCommand(input);
 * const response = await client.send(command);
 * // { // GetPersistentAppUIPresignedURLOutput
 * //   PresignedURLReady: true || false,
 * //   PresignedURL: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPersistentAppUIPresignedURLCommandInput - {@link GetPersistentAppUIPresignedURLCommandInput}
 * @returns {@link GetPersistentAppUIPresignedURLCommandOutput}
 * @see {@link GetPersistentAppUIPresignedURLCommandInput} for command's `input` shape.
 * @see {@link GetPersistentAppUIPresignedURLCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class GetPersistentAppUIPresignedURLCommand extends command<GetPersistentAppUIPresignedURLCommandInput, GetPersistentAppUIPresignedURLCommandOutput>(
  _ep0,
  _mw0,
  "GetPersistentAppUIPresignedURL",
  GetPersistentAppUIPresignedURL$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPersistentAppUIPresignedURLInput;
      output: GetPersistentAppUIPresignedURLOutput;
    };
    sdk: {
      input: GetPersistentAppUIPresignedURLCommandInput;
      output: GetPersistentAppUIPresignedURLCommandOutput;
    };
  };
}
