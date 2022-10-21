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

import {
  GetMobileDeviceAccessOverrideRequest,
  GetMobileDeviceAccessOverrideRequestFilterSensitiveLog,
  GetMobileDeviceAccessOverrideResponse,
  GetMobileDeviceAccessOverrideResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetMobileDeviceAccessOverrideCommand,
  serializeAws_json1_1GetMobileDeviceAccessOverrideCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface GetMobileDeviceAccessOverrideCommandInput extends GetMobileDeviceAccessOverrideRequest {}
export interface GetMobileDeviceAccessOverrideCommandOutput
  extends GetMobileDeviceAccessOverrideResponse,
    __MetadataBearer {}

/**
 * <p>Gets the mobile device access override for the given WorkMail organization, user, and device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetMobileDeviceAccessOverrideCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetMobileDeviceAccessOverrideCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetMobileDeviceAccessOverrideCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMobileDeviceAccessOverrideCommandInput} for command's `input` shape.
 * @see {@link GetMobileDeviceAccessOverrideCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class GetMobileDeviceAccessOverrideCommand extends $Command<
  GetMobileDeviceAccessOverrideCommandInput,
  GetMobileDeviceAccessOverrideCommandOutput,
  WorkMailClientResolvedConfig
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

  constructor(readonly input: GetMobileDeviceAccessOverrideCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMobileDeviceAccessOverrideCommandInput, GetMobileDeviceAccessOverrideCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMobileDeviceAccessOverrideCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "GetMobileDeviceAccessOverrideCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMobileDeviceAccessOverrideRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMobileDeviceAccessOverrideResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMobileDeviceAccessOverrideCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMobileDeviceAccessOverrideCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMobileDeviceAccessOverrideCommandOutput> {
    return deserializeAws_json1_1GetMobileDeviceAccessOverrideCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
