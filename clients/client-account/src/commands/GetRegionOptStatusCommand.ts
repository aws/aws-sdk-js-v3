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

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import {
  GetRegionOptStatusRequest,
  GetRegionOptStatusRequestFilterSensitiveLog,
  GetRegionOptStatusResponse,
  GetRegionOptStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetRegionOptStatusCommand,
  serializeAws_restJson1GetRegionOptStatusCommand,
} from "../protocols/Aws_restJson1";

export interface GetRegionOptStatusCommandInput extends GetRegionOptStatusRequest {}
export interface GetRegionOptStatusCommandOutput extends GetRegionOptStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the opt-in status of a particular Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, GetRegionOptStatusCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, GetRegionOptStatusCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * const client = new AccountClient(config);
 * const command = new GetRegionOptStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegionOptStatusCommandInput} for command's `input` shape.
 * @see {@link GetRegionOptStatusCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 */
export class GetRegionOptStatusCommand extends $Command<
  GetRegionOptStatusCommandInput,
  GetRegionOptStatusCommandOutput,
  AccountClientResolvedConfig
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

  constructor(readonly input: GetRegionOptStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccountClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRegionOptStatusCommandInput, GetRegionOptStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRegionOptStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccountClient";
    const commandName = "GetRegionOptStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRegionOptStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRegionOptStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRegionOptStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRegionOptStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRegionOptStatusCommandOutput> {
    return deserializeAws_restJson1GetRegionOptStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
