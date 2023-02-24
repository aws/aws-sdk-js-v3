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
  GetProvisionedProductOutputsInput,
  GetProvisionedProductOutputsInputFilterSensitiveLog,
  GetProvisionedProductOutputsOutput,
  GetProvisionedProductOutputsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetProvisionedProductOutputsCommand,
  serializeAws_json1_1GetProvisionedProductOutputsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface GetProvisionedProductOutputsCommandInput extends GetProvisionedProductOutputsInput {}
export interface GetProvisionedProductOutputsCommandOutput
  extends GetProvisionedProductOutputsOutput,
    __MetadataBearer {}

/**
 * <p>This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, GetProvisionedProductOutputsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, GetProvisionedProductOutputsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new GetProvisionedProductOutputsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProvisionedProductOutputsCommandInput} for command's `input` shape.
 * @see {@link GetProvisionedProductOutputsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class GetProvisionedProductOutputsCommand extends $Command<
  GetProvisionedProductOutputsCommandInput,
  GetProvisionedProductOutputsCommandOutput,
  ServiceCatalogClientResolvedConfig
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

  constructor(readonly input: GetProvisionedProductOutputsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProvisionedProductOutputsCommandInput, GetProvisionedProductOutputsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProvisionedProductOutputsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "GetProvisionedProductOutputsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProvisionedProductOutputsInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetProvisionedProductOutputsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProvisionedProductOutputsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetProvisionedProductOutputsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProvisionedProductOutputsCommandOutput> {
    return deserializeAws_json1_1GetProvisionedProductOutputsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
