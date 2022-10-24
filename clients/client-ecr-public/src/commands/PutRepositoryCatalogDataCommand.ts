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

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import {
  PutRepositoryCatalogDataRequest,
  PutRepositoryCatalogDataRequestFilterSensitiveLog,
  PutRepositoryCatalogDataResponse,
  PutRepositoryCatalogDataResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutRepositoryCatalogDataCommand,
  serializeAws_json1_1PutRepositoryCatalogDataCommand,
} from "../protocols/Aws_json1_1";

export interface PutRepositoryCatalogDataCommandInput extends PutRepositoryCatalogDataRequest {}
export interface PutRepositoryCatalogDataCommandOutput extends PutRepositoryCatalogDataResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the catalog data for a repository in a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, PutRepositoryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, PutRepositoryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new PutRepositoryCatalogDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRepositoryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 */
export class PutRepositoryCatalogDataCommand extends $Command<
  PutRepositoryCatalogDataCommandInput,
  PutRepositoryCatalogDataCommandOutput,
  ECRPUBLICClientResolvedConfig
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

  constructor(readonly input: PutRepositoryCatalogDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRepositoryCatalogDataCommandInput, PutRepositoryCatalogDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRepositoryCatalogDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "PutRepositoryCatalogDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRepositoryCatalogDataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutRepositoryCatalogDataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRepositoryCatalogDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRepositoryCatalogDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRepositoryCatalogDataCommandOutput> {
    return deserializeAws_json1_1PutRepositoryCatalogDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
