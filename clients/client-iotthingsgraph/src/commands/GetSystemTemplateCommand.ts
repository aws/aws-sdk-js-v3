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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetSystemTemplateRequest, GetSystemTemplateResponse } from "../models/models_0";
import { de_GetSystemTemplateCommand, se_GetSystemTemplateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSystemTemplateCommand}.
 */
export interface GetSystemTemplateCommandInput extends GetSystemTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetSystemTemplateCommand}.
 */
export interface GetSystemTemplateCommandOutput extends GetSystemTemplateResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets a system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // GetSystemTemplateRequest
 *   id: "STRING_VALUE", // required
 *   revisionNumber: Number("long"),
 * };
 * const command = new GetSystemTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetSystemTemplateResponse
 * //   description: { // SystemTemplateDescription
 * //     summary: { // SystemTemplateSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       revisionNumber: Number("long"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //     definition: { // DefinitionDocument
 * //       language: "GRAPHQL", // required
 * //       text: "STRING_VALUE", // required
 * //     },
 * //     validatedNamespaceVersion: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSystemTemplateCommandInput - {@link GetSystemTemplateCommandInput}
 * @returns {@link GetSystemTemplateCommandOutput}
 * @see {@link GetSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link GetSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 */
export class GetSystemTemplateCommand extends $Command<
  GetSystemTemplateCommandInput,
  GetSystemTemplateCommandOutput,
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
  constructor(readonly input: GetSystemTemplateCommandInput) {
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
  ): Handler<GetSystemTemplateCommandInput, GetSystemTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSystemTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "GetSystemTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotThingsGraphFrontEndService",
        operation: "GetSystemTemplate",
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
  private serialize(input: GetSystemTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSystemTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSystemTemplateCommandOutput> {
    return de_GetSystemTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
