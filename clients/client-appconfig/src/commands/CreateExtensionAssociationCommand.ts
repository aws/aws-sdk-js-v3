// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExtensionAssociationRequest, ExtensionAssociation } from "../models/models_0";
import { CreateExtensionAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateExtensionAssociationCommand}.
 */
export interface CreateExtensionAssociationCommandInput extends CreateExtensionAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateExtensionAssociationCommand}.
 */
export interface CreateExtensionAssociationCommandOutput extends ExtensionAssociation, __MetadataBearer {}

/**
 * When you create an extension or configure an Amazon Web Services authored extension, you associate the extension with an AppConfig application, environment, or configuration profile. For example, you can choose to run the `AppConfig deployment events to Amazon SNS` Amazon Web Services authored extension and receive notifications on an Amazon SNS topic anytime a configuration deployment is started for a specific application. Defining which extension to associate with an AppConfig resource is called an *extension association*. An extension association is a specified relationship between an extension and an AppConfig resource, such as an application or a configuration profile. For more information about extensions and associations, see [Extending workflows](https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html) in the *AppConfig User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateExtensionAssociationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateExtensionAssociationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // CreateExtensionAssociationRequest
 *   ExtensionIdentifier: "STRING_VALUE", // required
 *   ExtensionVersionNumber: Number("int"),
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   Parameters: { // ParameterValueMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateExtensionAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ExtensionAssociation
 * //   Id: "STRING_VALUE",
 * //   ExtensionArn: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Parameters: { // ParameterValueMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ExtensionVersionNumber: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateExtensionAssociationCommandInput - {@link CreateExtensionAssociationCommandInput}
 * @returns {@link CreateExtensionAssociationCommandOutput}
 * @see {@link CreateExtensionAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateExtensionAssociationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an internal failure in the AppConfig service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of one more AppConfig resources exceeds the maximum allowed. Verify that your environment doesn't exceed the following service quotas:
 *
 * Applications: 100 max
 *
 * To resolve this issue, you can delete one or more resources and try again. Or, you can request a quota increase. For more information about quotas and to request an increase, see [Service quotas for AppConfig](https://docs.aws.amazon.com/general/latest/gr/appconfig.html#limits_appconfig) in the Amazon Web Services General Reference.
 *
 * @throws {@link AppConfigServiceException}
 *
 * Base exception class for all service exceptions from AppConfig service.
 *
 * @public
 */
export class CreateExtensionAssociationCommand extends command<CreateExtensionAssociationCommandInput, CreateExtensionAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateExtensionAssociation",
  CreateExtensionAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExtensionAssociationRequest;
      output: ExtensionAssociation;
    };
    sdk: {
      input: CreateExtensionAssociationCommandInput;
      output: CreateExtensionAssociationCommandOutput;
    };
  };
}
