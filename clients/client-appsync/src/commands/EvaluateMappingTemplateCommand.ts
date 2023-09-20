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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { EvaluateMappingTemplateRequest, EvaluateMappingTemplateResponse } from "../models/models_0";
import { de_EvaluateMappingTemplateCommand, se_EvaluateMappingTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EvaluateMappingTemplateCommand}.
 */
export interface EvaluateMappingTemplateCommandInput extends EvaluateMappingTemplateRequest {}
/**
 * @public
 *
 * The output of {@link EvaluateMappingTemplateCommand}.
 */
export interface EvaluateMappingTemplateCommandOutput extends EvaluateMappingTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Evaluates a given template and returns the response. The mapping template can be a
 *          request or response template.</p>
 *          <p>Request templates take the incoming request after a GraphQL operation is parsed and
 *          convert it into a request configuration for the selected data source operation. Response
 *          templates interpret responses from the data source and map it to the shape of the GraphQL
 *          field output type.</p>
 *          <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, EvaluateMappingTemplateCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, EvaluateMappingTemplateCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // EvaluateMappingTemplateRequest
 *   template: "STRING_VALUE", // required
 *   context: "STRING_VALUE", // required
 * };
 * const command = new EvaluateMappingTemplateCommand(input);
 * const response = await client.send(command);
 * // { // EvaluateMappingTemplateResponse
 * //   evaluationResult: "STRING_VALUE",
 * //   error: { // ErrorDetail
 * //     message: "STRING_VALUE",
 * //   },
 * //   logs: [ // Logs
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param EvaluateMappingTemplateCommandInput - {@link EvaluateMappingTemplateCommandInput}
 * @returns {@link EvaluateMappingTemplateCommandOutput}
 * @see {@link EvaluateMappingTemplateCommandInput} for command's `input` shape.
 * @see {@link EvaluateMappingTemplateCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 */
export class EvaluateMappingTemplateCommand extends $Command<
  EvaluateMappingTemplateCommandInput,
  EvaluateMappingTemplateCommandOutput,
  AppSyncClientResolvedConfig
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
  constructor(readonly input: EvaluateMappingTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EvaluateMappingTemplateCommandInput, EvaluateMappingTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EvaluateMappingTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "EvaluateMappingTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "EvaluateMappingTemplate",
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
  private serialize(input: EvaluateMappingTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EvaluateMappingTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EvaluateMappingTemplateCommandOutput> {
    return de_EvaluateMappingTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
