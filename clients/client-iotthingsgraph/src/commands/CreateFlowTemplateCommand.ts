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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { CreateFlowTemplateRequest, CreateFlowTemplateResponse } from "../models/models_0";
import { de_CreateFlowTemplateCommand, se_CreateFlowTemplateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateFlowTemplateCommand}.
 */
export interface CreateFlowTemplateCommandInput extends CreateFlowTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateFlowTemplateCommand}.
 */
export interface CreateFlowTemplateCommandOutput extends CreateFlowTemplateResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only
 *          entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the
 *       latest version of the user's namespace unless another namespace version is specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, CreateFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, CreateFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // CreateFlowTemplateRequest
 *   definition: { // DefinitionDocument
 *     language: "STRING_VALUE", // required
 *     text: "STRING_VALUE", // required
 *   },
 *   compatibleNamespaceVersion: Number("long"),
 * };
 * const command = new CreateFlowTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateFlowTemplateCommandInput - {@link CreateFlowTemplateCommandInput}
 * @returns {@link CreateFlowTemplateCommandOutput}
 * @see {@link CreateFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 *
 */
export class CreateFlowTemplateCommand extends $Command<
  CreateFlowTemplateCommandInput,
  CreateFlowTemplateCommandOutput,
  IoTThingsGraphClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: CreateFlowTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFlowTemplateCommandInput, CreateFlowTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFlowTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "CreateFlowTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateFlowTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFlowTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFlowTemplateCommandOutput> {
    return de_CreateFlowTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
