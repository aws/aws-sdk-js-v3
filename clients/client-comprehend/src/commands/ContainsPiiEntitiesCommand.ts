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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  ContainsPiiEntitiesRequest,
  ContainsPiiEntitiesRequestFilterSensitiveLog,
  ContainsPiiEntitiesResponse,
  ContainsPiiEntitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ContainsPiiEntitiesCommand,
  serializeAws_json1_1ContainsPiiEntitiesCommand,
} from "../protocols/Aws_json1_1";

export interface ContainsPiiEntitiesCommandInput extends ContainsPiiEntitiesRequest {}
export interface ContainsPiiEntitiesCommandOutput extends ContainsPiiEntitiesResponse, __MetadataBearer {}

/**
 * <p>Analyzes input text for the presence of personally identifiable information (PII) and
 *       returns the labels of identified PII entity types such as name, address, bank account number,
 *       or phone number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ContainsPiiEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ContainsPiiEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ContainsPiiEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ContainsPiiEntitiesCommandInput} for command's `input` shape.
 * @see {@link ContainsPiiEntitiesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class ContainsPiiEntitiesCommand extends $Command<
  ContainsPiiEntitiesCommandInput,
  ContainsPiiEntitiesCommandOutput,
  ComprehendClientResolvedConfig
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

  constructor(readonly input: ContainsPiiEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ContainsPiiEntitiesCommandInput, ContainsPiiEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ContainsPiiEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ContainsPiiEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ContainsPiiEntitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ContainsPiiEntitiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ContainsPiiEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ContainsPiiEntitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ContainsPiiEntitiesCommandOutput> {
    return deserializeAws_json1_1ContainsPiiEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
