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

import { GetWorldTemplateBodyRequest, GetWorldTemplateBodyResponse } from "../models/models_0";
import { de_GetWorldTemplateBodyCommand, se_GetWorldTemplateBodyCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorldTemplateBodyCommand}.
 */
export interface GetWorldTemplateBodyCommandInput extends GetWorldTemplateBodyRequest {}
/**
 * @public
 *
 * The output of {@link GetWorldTemplateBodyCommand}.
 */
export interface GetWorldTemplateBodyCommandOutput extends GetWorldTemplateBodyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the world template body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, GetWorldTemplateBodyCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, GetWorldTemplateBodyCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // GetWorldTemplateBodyRequest
 *   template: "STRING_VALUE",
 *   generationJob: "STRING_VALUE",
 * };
 * const command = new GetWorldTemplateBodyCommand(input);
 * const response = await client.send(command);
 * // { // GetWorldTemplateBodyResponse
 * //   templateBody: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorldTemplateBodyCommandInput - {@link GetWorldTemplateBodyCommandInput}
 * @returns {@link GetWorldTemplateBodyCommandOutput}
 * @see {@link GetWorldTemplateBodyCommandInput} for command's `input` shape.
 * @see {@link GetWorldTemplateBodyCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class GetWorldTemplateBodyCommand extends $Command<
  GetWorldTemplateBodyCommandInput,
  GetWorldTemplateBodyCommandOutput,
  RoboMakerClientResolvedConfig
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
  constructor(readonly input: GetWorldTemplateBodyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorldTemplateBodyCommandInput, GetWorldTemplateBodyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWorldTemplateBodyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "GetWorldTemplateBodyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "robomaker",
        operation: "GetWorldTemplateBody",
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
  private serialize(input: GetWorldTemplateBodyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWorldTemplateBodyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorldTemplateBodyCommandOutput> {
    return de_GetWorldTemplateBodyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
