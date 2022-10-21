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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import {
  CreateDBSubnetGroupMessage,
  CreateDBSubnetGroupMessageFilterSensitiveLog,
  CreateDBSubnetGroupResult,
  CreateDBSubnetGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateDBSubnetGroupCommand,
  serializeAws_queryCreateDBSubnetGroupCommand,
} from "../protocols/Aws_query";

export interface CreateDBSubnetGroupCommandInput extends CreateDBSubnetGroupMessage {}
export interface CreateDBSubnetGroupCommandOutput extends CreateDBSubnetGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new subnet group. subnet groups must contain at least one subnet in at
 *             least two Availability Zones in the Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CreateDBSubnetGroupCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CreateDBSubnetGroupCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new CreateDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class CreateDBSubnetGroupCommand extends $Command<
  CreateDBSubnetGroupCommandInput,
  CreateDBSubnetGroupCommandOutput,
  DocDBClientResolvedConfig
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

  constructor(readonly input: CreateDBSubnetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBSubnetGroupCommandInput, CreateDBSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "CreateDBSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBSubnetGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDBSubnetGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBSubnetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBSubnetGroupCommandOutput> {
    return deserializeAws_queryCreateDBSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
