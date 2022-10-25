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
  GetDigestRequest,
  GetDigestRequestFilterSensitiveLog,
  GetDigestResponse,
  GetDigestResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDigestCommand,
  serializeAws_restJson1GetDigestCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

export interface GetDigestCommandInput extends GetDigestRequest {}
export interface GetDigestCommandOutput extends GetDigestResponse, __MetadataBearer {}

/**
 * <p>Returns the digest of a ledger at the latest committed block in the journal. The
 *          response includes a 256-bit hash value and a block address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, GetDigestCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, GetDigestCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new GetDigestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDigestCommandInput} for command's `input` shape.
 * @see {@link GetDigestCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 */
export class GetDigestCommand extends $Command<
  GetDigestCommandInput,
  GetDigestCommandOutput,
  QLDBClientResolvedConfig
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

  constructor(readonly input: GetDigestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDigestCommandInput, GetDigestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDigestCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "GetDigestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDigestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDigestResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDigestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDigestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDigestCommandOutput> {
    return deserializeAws_restJson1GetDigestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
