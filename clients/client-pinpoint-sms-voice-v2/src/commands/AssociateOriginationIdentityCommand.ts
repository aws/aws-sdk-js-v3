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

import { AssociateOriginationIdentityRequest, AssociateOriginationIdentityResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_AssociateOriginationIdentityCommand,
  se_AssociateOriginationIdentityCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateOriginationIdentityCommand}.
 */
export interface AssociateOriginationIdentityCommandInput extends AssociateOriginationIdentityRequest {}
/**
 * @public
 *
 * The output of {@link AssociateOriginationIdentityCommand}.
 */
export interface AssociateOriginationIdentityCommandOutput
  extends AssociateOriginationIdentityResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates the specified origination identity with a pool.</p>
 *         <p>If the origination identity is a phone number and is already associated with another
 *             pool, an Error is returned. A sender ID can be associated with multiple pools.</p>
 *         <p>If the origination identity configuration doesn't match the pool's configuration, an
 *             Error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, AssociateOriginationIdentityCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, AssociateOriginationIdentityCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // AssociateOriginationIdentityRequest
 *   PoolId: "STRING_VALUE", // required
 *   OriginationIdentity: "STRING_VALUE", // required
 *   IsoCountryCode: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new AssociateOriginationIdentityCommand(input);
 * const response = await client.send(command);
 * // { // AssociateOriginationIdentityResult
 * //   PoolArn: "STRING_VALUE",
 * //   PoolId: "STRING_VALUE",
 * //   OriginationIdentityArn: "STRING_VALUE",
 * //   OriginationIdentity: "STRING_VALUE",
 * //   IsoCountryCode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateOriginationIdentityCommandInput - {@link AssociateOriginationIdentityCommandInput}
 * @returns {@link AssociateOriginationIdentityCommandOutput}
 * @see {@link AssociateOriginationIdentityCommandInput} for command's `input` shape.
 * @see {@link AssociateOriginationIdentityCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time or it could be that the
 *             requested action isn't valid for the current state or configuration of the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 */
export class AssociateOriginationIdentityCommand extends $Command<
  AssociateOriginationIdentityCommandInput,
  AssociateOriginationIdentityCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
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
  constructor(readonly input: AssociateOriginationIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateOriginationIdentityCommandInput, AssociateOriginationIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateOriginationIdentityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "AssociateOriginationIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoiceV2",
        operation: "AssociateOriginationIdentity",
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
  private serialize(input: AssociateOriginationIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateOriginationIdentityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateOriginationIdentityCommandOutput> {
    return de_AssociateOriginationIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
