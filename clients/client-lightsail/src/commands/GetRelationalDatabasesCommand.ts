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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetRelationalDatabasesRequest,
  GetRelationalDatabasesRequestFilterSensitiveLog,
  GetRelationalDatabasesResult,
  GetRelationalDatabasesResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetRelationalDatabasesCommand,
  serializeAws_json1_1GetRelationalDatabasesCommand,
} from "../protocols/Aws_json1_1";

export interface GetRelationalDatabasesCommandInput extends GetRelationalDatabasesRequest {}
export interface GetRelationalDatabasesCommandOutput extends GetRelationalDatabasesResult, __MetadataBearer {}

/**
 * <p>Returns information about all of your databases in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabasesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabasesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabasesCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabasesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetRelationalDatabasesCommand extends $Command<
  GetRelationalDatabasesCommandInput,
  GetRelationalDatabasesCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: GetRelationalDatabasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRelationalDatabasesCommandInput, GetRelationalDatabasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRelationalDatabasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabasesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabasesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRelationalDatabasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRelationalDatabasesCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
