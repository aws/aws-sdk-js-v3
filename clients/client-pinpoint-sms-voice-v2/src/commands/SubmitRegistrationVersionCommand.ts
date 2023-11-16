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

import { SubmitRegistrationVersionRequest, SubmitRegistrationVersionResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_SubmitRegistrationVersionCommand, se_SubmitRegistrationVersionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SubmitRegistrationVersionCommand}.
 */
export interface SubmitRegistrationVersionCommandInput extends SubmitRegistrationVersionRequest {}
/**
 * @public
 *
 * The output of {@link SubmitRegistrationVersionCommand}.
 */
export interface SubmitRegistrationVersionCommandOutput extends SubmitRegistrationVersionResult, __MetadataBearer {}

/**
 * @public
 * <p>Submit the specified registration for review and approval.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SubmitRegistrationVersionCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SubmitRegistrationVersionCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SubmitRegistrationVersionRequest
 *   RegistrationId: "STRING_VALUE", // required
 * };
 * const command = new SubmitRegistrationVersionCommand(input);
 * const response = await client.send(command);
 * // { // SubmitRegistrationVersionResult
 * //   RegistrationArn: "STRING_VALUE", // required
 * //   RegistrationId: "STRING_VALUE", // required
 * //   VersionNumber: Number("long"), // required
 * //   RegistrationVersionStatus: "STRING_VALUE", // required
 * //   RegistrationVersionStatusHistory: { // RegistrationVersionStatusHistory
 * //     DraftTimestamp: new Date("TIMESTAMP"), // required
 * //     SubmittedTimestamp: new Date("TIMESTAMP"),
 * //     ReviewingTimestamp: new Date("TIMESTAMP"),
 * //     ApprovedTimestamp: new Date("TIMESTAMP"),
 * //     DiscardedTimestamp: new Date("TIMESTAMP"),
 * //     DeniedTimestamp: new Date("TIMESTAMP"),
 * //     RevokedTimestamp: new Date("TIMESTAMP"),
 * //     ArchivedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param SubmitRegistrationVersionCommandInput - {@link SubmitRegistrationVersionCommandInput}
 * @returns {@link SubmitRegistrationVersionCommandOutput}
 * @see {@link SubmitRegistrationVersionCommandInput} for command's `input` shape.
 * @see {@link SubmitRegistrationVersionCommandOutput} for command's `response` shape.
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
export class SubmitRegistrationVersionCommand extends $Command<
  SubmitRegistrationVersionCommandInput,
  SubmitRegistrationVersionCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
> {
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
  constructor(readonly input: SubmitRegistrationVersionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubmitRegistrationVersionCommandInput, SubmitRegistrationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SubmitRegistrationVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "SubmitRegistrationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoiceV2",
        operation: "SubmitRegistrationVersion",
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
  private serialize(input: SubmitRegistrationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SubmitRegistrationVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SubmitRegistrationVersionCommandOutput> {
    return de_SubmitRegistrationVersionCommand(output, context);
  }
}
