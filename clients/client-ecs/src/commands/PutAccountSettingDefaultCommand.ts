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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  PutAccountSettingDefaultRequest,
  PutAccountSettingDefaultRequestFilterSensitiveLog,
  PutAccountSettingDefaultResponse,
  PutAccountSettingDefaultResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutAccountSettingDefaultCommand,
  serializeAws_json1_1PutAccountSettingDefaultCommand,
} from "../protocols/Aws_json1_1";

export interface PutAccountSettingDefaultCommandInput extends PutAccountSettingDefaultRequest {}
export interface PutAccountSettingDefaultCommandOutput extends PutAccountSettingDefaultResponse, __MetadataBearer {}

/**
 * <p>Modifies an account setting for all IAM users on an account for whom no individual
 * 			account setting has been specified. Account settings are set on a per-Region
 * 			basis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutAccountSettingDefaultCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutAccountSettingDefaultCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new PutAccountSettingDefaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountSettingDefaultCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingDefaultCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class PutAccountSettingDefaultCommand extends $Command<
  PutAccountSettingDefaultCommandInput,
  PutAccountSettingDefaultCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: PutAccountSettingDefaultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountSettingDefaultCommandInput, PutAccountSettingDefaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAccountSettingDefaultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "PutAccountSettingDefaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccountSettingDefaultRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutAccountSettingDefaultResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAccountSettingDefaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAccountSettingDefaultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccountSettingDefaultCommandOutput> {
    return deserializeAws_json1_1PutAccountSettingDefaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
