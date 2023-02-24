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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  GetViolationDetailsRequest,
  GetViolationDetailsRequestFilterSensitiveLog,
  GetViolationDetailsResponse,
  GetViolationDetailsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetViolationDetailsCommand,
  serializeAws_json1_1GetViolationDetailsCommand,
} from "../protocols/Aws_json1_1";

export interface GetViolationDetailsCommandInput extends GetViolationDetailsRequest {}
export interface GetViolationDetailsCommandOutput extends GetViolationDetailsResponse, __MetadataBearer {}

/**
 * <p>Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetViolationDetailsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetViolationDetailsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetViolationDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetViolationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetViolationDetailsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class GetViolationDetailsCommand extends $Command<
  GetViolationDetailsCommandInput,
  GetViolationDetailsCommandOutput,
  FMSClientResolvedConfig
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

  constructor(readonly input: GetViolationDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetViolationDetailsCommandInput, GetViolationDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetViolationDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetViolationDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetViolationDetailsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetViolationDetailsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetViolationDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetViolationDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetViolationDetailsCommandOutput> {
    return deserializeAws_json1_1GetViolationDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
