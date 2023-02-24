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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  CreateDataCatalogInput,
  CreateDataCatalogInputFilterSensitiveLog,
  CreateDataCatalogOutput,
  CreateDataCatalogOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDataCatalogCommand,
  serializeAws_json1_1CreateDataCatalogCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDataCatalogCommandInput extends CreateDataCatalogInput {}
export interface CreateDataCatalogCommandOutput extends CreateDataCatalogOutput, __MetadataBearer {}

/**
 * <p>Creates (registers) a data catalog with the specified name and properties. Catalogs
 *             created are visible to all users of the same Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new CreateDataCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataCatalogCommandInput} for command's `input` shape.
 * @see {@link CreateDataCatalogCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class CreateDataCatalogCommand extends $Command<
  CreateDataCatalogCommandInput,
  CreateDataCatalogCommandOutput,
  AthenaClientResolvedConfig
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

  constructor(readonly input: CreateDataCatalogCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataCatalogCommandInput, CreateDataCatalogCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataCatalogCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "CreateDataCatalogCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataCatalogInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDataCatalogOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDataCatalogCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDataCatalogCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataCatalogCommandOutput> {
    return deserializeAws_json1_1CreateDataCatalogCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
