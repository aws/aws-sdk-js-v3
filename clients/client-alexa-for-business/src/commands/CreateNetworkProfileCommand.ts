// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  CreateNetworkProfileRequest,
  CreateNetworkProfileRequestFilterSensitiveLog,
  CreateNetworkProfileResponse,
} from "../models/models_0";
import { de_CreateNetworkProfileCommand, se_CreateNetworkProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkProfileCommand}.
 */
export interface CreateNetworkProfileCommandInput extends CreateNetworkProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkProfileCommand}.
 */
export interface CreateNetworkProfileCommandOutput extends CreateNetworkProfileResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates a network profile with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateNetworkProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateNetworkProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // CreateNetworkProfileRequest
 *   NetworkProfileName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Ssid: "STRING_VALUE", // required
 *   SecurityType: "OPEN" || "WEP" || "WPA_PSK" || "WPA2_PSK" || "WPA2_ENTERPRISE", // required
 *   EapMethod: "EAP_TLS",
 *   CurrentPassword: "STRING_VALUE",
 *   NextPassword: "STRING_VALUE",
 *   CertificateAuthorityArn: "STRING_VALUE",
 *   TrustAnchors: [ // TrustAnchorList
 *     "STRING_VALUE",
 *   ],
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateNetworkProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkProfileResponse
 * //   NetworkProfileArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNetworkProfileCommandInput - {@link CreateNetworkProfileCommandInput}
 * @returns {@link CreateNetworkProfileCommandOutput}
 * @see {@link CreateNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link InvalidCertificateAuthorityException} (client fault)
 *  <p>The Certificate Authority can't issue or revoke a certificate.</p>
 *
 * @throws {@link InvalidServiceLinkedRoleStateException} (client fault)
 *  <p>The service linked role is locked for deletion. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class CreateNetworkProfileCommand extends $Command<
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateNetworkProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNetworkProfileCommandInput, CreateNetworkProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNetworkProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "CreateNetworkProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNetworkProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "CreateNetworkProfile",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateNetworkProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateNetworkProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNetworkProfileCommandOutput> {
    return de_CreateNetworkProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
