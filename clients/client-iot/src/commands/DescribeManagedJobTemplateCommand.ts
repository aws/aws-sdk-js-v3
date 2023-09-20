// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeManagedJobTemplateRequest, DescribeManagedJobTemplateResponse } from "../models/models_1";
import { de_DescribeManagedJobTemplateCommand, se_DescribeManagedJobTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeManagedJobTemplateCommand}.
 */
export interface DescribeManagedJobTemplateCommandInput extends DescribeManagedJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeManagedJobTemplateCommand}.
 */
export interface DescribeManagedJobTemplateCommandOutput extends DescribeManagedJobTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>View details of a managed job template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeManagedJobTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeManagedJobTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeManagedJobTemplateRequest
 *   templateName: "STRING_VALUE", // required
 *   templateVersion: "STRING_VALUE",
 * };
 * const command = new DescribeManagedJobTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeManagedJobTemplateResponse
 * //   templateName: "STRING_VALUE",
 * //   templateArn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   templateVersion: "STRING_VALUE",
 * //   environments: [ // Environments
 * //     "STRING_VALUE",
 * //   ],
 * //   documentParameters: [ // DocumentParameters
 * //     { // DocumentParameter
 * //       key: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       regex: "STRING_VALUE",
 * //       example: "STRING_VALUE",
 * //       optional: true || false,
 * //     },
 * //   ],
 * //   document: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeManagedJobTemplateCommandInput - {@link DescribeManagedJobTemplateCommandInput}
 * @returns {@link DescribeManagedJobTemplateCommandOutput}
 * @see {@link DescribeManagedJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class DescribeManagedJobTemplateCommand extends $Command<
  DescribeManagedJobTemplateCommandInput,
  DescribeManagedJobTemplateCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: DescribeManagedJobTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeManagedJobTemplateCommandInput, DescribeManagedJobTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeManagedJobTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeManagedJobTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "DescribeManagedJobTemplate",
      },
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
  private serialize(input: DescribeManagedJobTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeManagedJobTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeManagedJobTemplateCommandOutput> {
    return de_DescribeManagedJobTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
