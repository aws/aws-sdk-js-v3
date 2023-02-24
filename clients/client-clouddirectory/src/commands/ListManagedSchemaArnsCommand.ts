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

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import {
  ListManagedSchemaArnsRequest,
  ListManagedSchemaArnsRequestFilterSensitiveLog,
  ListManagedSchemaArnsResponse,
  ListManagedSchemaArnsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListManagedSchemaArnsCommand,
  serializeAws_restJson1ListManagedSchemaArnsCommand,
} from "../protocols/Aws_restJson1";

export interface ListManagedSchemaArnsCommandInput extends ListManagedSchemaArnsRequest {}
export interface ListManagedSchemaArnsCommandOutput extends ListManagedSchemaArnsResponse, __MetadataBearer {}

/**
 * <p>Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListManagedSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListManagedSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListManagedSchemaArnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListManagedSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListManagedSchemaArnsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 */
export class ListManagedSchemaArnsCommand extends $Command<
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
  CloudDirectoryClientResolvedConfig
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

  constructor(readonly input: ListManagedSchemaArnsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListManagedSchemaArnsCommandInput, ListManagedSchemaArnsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListManagedSchemaArnsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "ListManagedSchemaArnsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListManagedSchemaArnsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListManagedSchemaArnsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListManagedSchemaArnsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListManagedSchemaArnsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListManagedSchemaArnsCommandOutput> {
    return deserializeAws_restJson1ListManagedSchemaArnsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
