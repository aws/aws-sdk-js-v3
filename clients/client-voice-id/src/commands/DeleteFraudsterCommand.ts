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
} from "@smithy/types";

import { DeleteFraudsterRequest, DeleteFraudsterRequestFilterSensitiveLog } from "../models/models_0";
import { de_DeleteFraudsterCommand, se_DeleteFraudsterCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteFraudsterCommand}.
 */
export interface DeleteFraudsterCommandInput extends DeleteFraudsterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFraudsterCommand}.
 */
export interface DeleteFraudsterCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DeleteFraudsterCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DeleteFraudsterCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const input = { // DeleteFraudsterRequest
 *   DomainId: "STRING_VALUE", // required
 *   FraudsterId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFraudsterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFraudsterCommandInput - {@link DeleteFraudsterCommandInput}
 * @returns {@link DeleteFraudsterCommandOutput}
 * @see {@link DeleteFraudsterCommandInput} for command's `input` shape.
 * @see {@link DeleteFraudsterCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Check the error message
 *             and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed due to a conflict. Check the <code>ConflictType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unknown error on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the <code>ResourceType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please slow down your request rate.
 *             Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html##voiceid-api-quotas">
 *                 Amazon Connect Voice ID Service API throttling quotas </a> and try your
 *             request again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed one or more validations; check the error message for more
 *             details.</p>
 *
 * @throws {@link VoiceIDServiceException}
 * <p>Base exception class for all service exceptions from VoiceID service.</p>
 *
 */
export class DeleteFraudsterCommand extends $Command<
  DeleteFraudsterCommandInput,
  DeleteFraudsterCommandOutput,
  VoiceIDClientResolvedConfig
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
  constructor(readonly input: DeleteFraudsterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VoiceIDClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFraudsterCommandInput, DeleteFraudsterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFraudsterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "DeleteFraudsterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFraudsterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DeleteFraudsterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFraudsterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFraudsterCommandOutput> {
    return de_DeleteFraudsterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
