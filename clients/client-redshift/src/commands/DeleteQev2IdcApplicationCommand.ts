// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteQev2IdcApplicationMessage } from "../models/models_0";
import { DeleteQev2IdcApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteQev2IdcApplicationCommand}.
 */
export interface DeleteQev2IdcApplicationCommandInput extends DeleteQev2IdcApplicationMessage {}
/**
 * @public
 *
 * The output of {@link DeleteQev2IdcApplicationCommand}.
 */
export interface DeleteQev2IdcApplicationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteQev2IdcApplicationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteQev2IdcApplicationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DeleteQev2IdcApplicationMessage
 *   Qev2IdcApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteQev2IdcApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQev2IdcApplicationCommandInput - {@link DeleteQev2IdcApplicationCommandInput}
 * @returns {@link DeleteQev2IdcApplicationCommandOutput}
 * @see {@link DeleteQev2IdcApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteQev2IdcApplicationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceAccessDeniedFault} (client fault)
 *  <p>A dependent service denied access for the integration.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link Qev2IdcApplicationNotExistsFault} (client fault)
 *  <p>The specified Amazon Redshift Query Editor (QEV2) IAM Identity Center application doesn't exist. Verify that the application ARN is correct and that the application exists in this Region.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DeleteQev2IdcApplicationCommand extends command<DeleteQev2IdcApplicationCommandInput, DeleteQev2IdcApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteQev2IdcApplication",
  DeleteQev2IdcApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQev2IdcApplicationMessage;
      output: {};
    };
    sdk: {
      input: DeleteQev2IdcApplicationCommandInput;
      output: DeleteQev2IdcApplicationCommandOutput;
    };
  };
}
