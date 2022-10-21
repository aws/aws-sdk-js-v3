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

import { EndpointAuthorization, EndpointAuthorizationFilterSensitiveLog } from "../models/models_0";
import { RevokeEndpointAccessMessage, RevokeEndpointAccessMessageFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_queryRevokeEndpointAccessCommand,
  serializeAws_queryRevokeEndpointAccessCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface RevokeEndpointAccessCommandInput extends RevokeEndpointAccessMessage {}
export interface RevokeEndpointAccessCommandOutput extends EndpointAuthorization, __MetadataBearer {}

/**
 * <p>Revokes access to a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RevokeEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class RevokeEndpointAccessCommand extends $Command<
  RevokeEndpointAccessCommandInput,
  RevokeEndpointAccessCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: RevokeEndpointAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeEndpointAccessCommandInput, RevokeEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeEndpointAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RevokeEndpointAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeEndpointAccessMessageFilterSensitiveLog,
      outputFilterSensitiveLog: EndpointAuthorizationFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRevokeEndpointAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeEndpointAccessCommandOutput> {
    return deserializeAws_queryRevokeEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
