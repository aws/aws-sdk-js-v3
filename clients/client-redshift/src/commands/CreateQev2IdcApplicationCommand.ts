// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateQev2IdcApplicationMessage, CreateQev2IdcApplicationResult } from "../models/models_0";
import { CreateQev2IdcApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateQev2IdcApplicationCommand}.
 */
export interface CreateQev2IdcApplicationCommandInput extends CreateQev2IdcApplicationMessage {}
/**
 * @public
 *
 * The output of {@link CreateQev2IdcApplicationCommand}.
 */
export interface CreateQev2IdcApplicationCommandOutput extends CreateQev2IdcApplicationResult, __MetadataBearer {}

/**
 * <p>Creates an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateQev2IdcApplicationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateQev2IdcApplicationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateQev2IdcApplicationMessage
 *   IdcInstanceArn: "STRING_VALUE", // required
 *   Qev2IdcApplicationName: "STRING_VALUE", // required
 *   IdcDisplayName: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateQev2IdcApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateQev2IdcApplicationResult
 * //   Qev2IdcApplication: { // Qev2IdcApplication
 * //     IdcInstanceArn: "STRING_VALUE",
 * //     Qev2IdcApplicationName: "STRING_VALUE",
 * //     Qev2IdcApplicationArn: "STRING_VALUE",
 * //     IdcManagedApplicationArn: "STRING_VALUE",
 * //     IdcOnboardStatus: "STRING_VALUE",
 * //     IdcDisplayName: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateQev2IdcApplicationCommandInput - {@link CreateQev2IdcApplicationCommandInput}
 * @returns {@link CreateQev2IdcApplicationCommandOutput}
 * @see {@link CreateQev2IdcApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateQev2IdcApplicationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceAccessDeniedFault} (client fault)
 *  <p>A dependent service denied access for the integration.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link Qev2IdcApplicationAlreadyExistsFault} (client fault)
 *  <p>The Amazon Redshift Query Editor (QEV2) IAM Identity Center application already exists. Use a different application name or describe existing applications to find the ARN.</p>
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
export class CreateQev2IdcApplicationCommand extends command<CreateQev2IdcApplicationCommandInput, CreateQev2IdcApplicationCommandOutput>(
  _ep0,
  _mw0,
  "CreateQev2IdcApplication",
  CreateQev2IdcApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQev2IdcApplicationMessage;
      output: CreateQev2IdcApplicationResult;
    };
    sdk: {
      input: CreateQev2IdcApplicationCommandInput;
      output: CreateQev2IdcApplicationCommandOutput;
    };
  };
}
