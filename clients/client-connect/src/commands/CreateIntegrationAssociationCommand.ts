// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIntegrationAssociationRequest, CreateIntegrationAssociationResponse } from "../models/models_0";
import { CreateIntegrationAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIntegrationAssociationCommand}.
 */
export interface CreateIntegrationAssociationCommandInput extends CreateIntegrationAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateIntegrationAssociationCommand}.
 */
export interface CreateIntegrationAssociationCommandOutput extends CreateIntegrationAssociationResponse, __MetadataBearer {}

/**
 * Creates an Amazon Web Services resource association with an Connect Customer instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateIntegrationAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateIntegrationAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateIntegrationAssociationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   IntegrationType: "EVENT" || "VOICE_ID" || "PINPOINT_APP" || "WISDOM_ASSISTANT" || "WISDOM_KNOWLEDGE_BASE" || "WISDOM_QUICK_RESPONSES" || "Q_MESSAGE_TEMPLATES" || "CASES_DOMAIN" || "APPLICATION" || "FILE_SCANNER" || "SES_IDENTITY" || "ANALYTICS_CONNECTOR" || "CALL_TRANSFER_CONNECTOR" || "COGNITO_USER_POOL" || "MESSAGE_PROCESSOR", // required
 *   IntegrationArn: "STRING_VALUE", // required
 *   SourceApplicationUrl: "STRING_VALUE",
 *   SourceApplicationName: "STRING_VALUE",
 *   SourceType: "SALESFORCE" || "ZENDESK" || "CASES",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIntegrationAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntegrationAssociationResponse
 * //   IntegrationAssociationId: "STRING_VALUE",
 * //   IntegrationAssociationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateIntegrationAssociationCommandInput - {@link CreateIntegrationAssociationCommandInput}
 * @returns {@link CreateIntegrationAssociationCommandOutput}
 * @see {@link CreateIntegrationAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class CreateIntegrationAssociationCommand extends command<CreateIntegrationAssociationCommandInput, CreateIntegrationAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateIntegrationAssociation",
  CreateIntegrationAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIntegrationAssociationRequest;
      output: CreateIntegrationAssociationResponse;
    };
    sdk: {
      input: CreateIntegrationAssociationCommandInput;
      output: CreateIntegrationAssociationCommandOutput;
    };
  };
}
