// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  PutSkillAuthorizationRequest,
  PutSkillAuthorizationRequestFilterSensitiveLog,
  PutSkillAuthorizationResponse,
  PutSkillAuthorizationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutSkillAuthorizationCommand,
  serializeAws_json1_1PutSkillAuthorizationCommand,
} from "../protocols/Aws_json1_1";

export interface PutSkillAuthorizationCommandInput extends PutSkillAuthorizationRequest {}
export interface PutSkillAuthorizationCommandOutput extends PutSkillAuthorizationResponse, __MetadataBearer {}

/**
 * <p>Links a user's account to a third-party skill provider. If this API operation is
 *          called by an assumed IAM role, the skill being linked must be a private skill. Also, the
 *          skill must be owned by the AWS account that assumed the IAM role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutSkillAuthorizationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutSkillAuthorizationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new PutSkillAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSkillAuthorizationCommandInput} for command's `input` shape.
 * @see {@link PutSkillAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 */
export class PutSkillAuthorizationCommand extends $Command<
  PutSkillAuthorizationCommandInput,
  PutSkillAuthorizationCommandOutput,
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

  constructor(readonly input: PutSkillAuthorizationCommandInput) {
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
  ): Handler<PutSkillAuthorizationCommandInput, PutSkillAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSkillAuthorizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "PutSkillAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSkillAuthorizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutSkillAuthorizationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSkillAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutSkillAuthorizationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSkillAuthorizationCommandOutput> {
    return deserializeAws_json1_1PutSkillAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
