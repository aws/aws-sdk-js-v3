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
  UpdateNetworkProfileRequest,
  UpdateNetworkProfileRequestFilterSensitiveLog,
  UpdateNetworkProfileResponse,
} from "../models/models_0";
import { de_UpdateNetworkProfileCommand, se_UpdateNetworkProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateNetworkProfileCommand}.
 */
export interface UpdateNetworkProfileCommandInput extends UpdateNetworkProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNetworkProfileCommand}.
 */
export interface UpdateNetworkProfileCommandOutput extends UpdateNetworkProfileResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Updates a network profile by the network profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateNetworkProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateNetworkProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateNetworkProfileRequest
 *   NetworkProfileArn: "STRING_VALUE", // required
 *   NetworkProfileName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   CurrentPassword: "STRING_VALUE",
 *   NextPassword: "STRING_VALUE",
 *   CertificateAuthorityArn: "STRING_VALUE",
 *   TrustAnchors: [ // TrustAnchorList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateNetworkProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNetworkProfileCommandInput - {@link UpdateNetworkProfileCommandInput}
 * @returns {@link UpdateNetworkProfileCommandOutput}
 * @see {@link UpdateNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link InvalidCertificateAuthorityException} (client fault)
 *  <p>The Certificate Authority can't issue or revoke a certificate.</p>
 *
 * @throws {@link InvalidSecretsManagerResourceException} (client fault)
 *  <p>A password in SecretsManager is in an invalid state.</p>
 *
 * @throws {@link NameInUseException} (client fault)
 *  <p>The name sent in the request is already in use.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class UpdateNetworkProfileCommand extends $Command<
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput,
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
  constructor(readonly input: UpdateNetworkProfileCommandInput) {
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
  ): Handler<UpdateNetworkProfileCommandInput, UpdateNetworkProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNetworkProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "UpdateNetworkProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNetworkProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "UpdateNetworkProfile",
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
  private serialize(input: UpdateNetworkProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateNetworkProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNetworkProfileCommandOutput> {
    return de_UpdateNetworkProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
