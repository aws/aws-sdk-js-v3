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
} from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateAppBlockBuilderStreamingURLRequest, CreateAppBlockBuilderStreamingURLResult } from "../models/models_0";
import {
  de_CreateAppBlockBuilderStreamingURLCommand,
  se_CreateAppBlockBuilderStreamingURLCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAppBlockBuilderStreamingURLCommand}.
 */
export interface CreateAppBlockBuilderStreamingURLCommandInput extends CreateAppBlockBuilderStreamingURLRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppBlockBuilderStreamingURLCommand}.
 */
export interface CreateAppBlockBuilderStreamingURLCommandOutput
  extends CreateAppBlockBuilderStreamingURLResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a URL to start a create app block builder streaming session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateAppBlockBuilderStreamingURLCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateAppBlockBuilderStreamingURLCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // CreateAppBlockBuilderStreamingURLRequest
 *   AppBlockBuilderName: "STRING_VALUE", // required
 *   Validity: Number("long"),
 * };
 * const command = new CreateAppBlockBuilderStreamingURLCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppBlockBuilderStreamingURLResult
 * //   StreamingURL: "STRING_VALUE",
 * //   Expires: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateAppBlockBuilderStreamingURLCommandInput - {@link CreateAppBlockBuilderStreamingURLCommandInput}
 * @returns {@link CreateAppBlockBuilderStreamingURLCommandOutput}
 * @see {@link CreateAppBlockBuilderStreamingURLCommandInput} for command's `input` shape.
 * @see {@link CreateAppBlockBuilderStreamingURLCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class CreateAppBlockBuilderStreamingURLCommand extends $Command<
  CreateAppBlockBuilderStreamingURLCommandInput,
  CreateAppBlockBuilderStreamingURLCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: CreateAppBlockBuilderStreamingURLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppBlockBuilderStreamingURLCommandInput, CreateAppBlockBuilderStreamingURLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppBlockBuilderStreamingURLCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateAppBlockBuilderStreamingURLCommand";
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
  private serialize(
    input: CreateAppBlockBuilderStreamingURLCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateAppBlockBuilderStreamingURLCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAppBlockBuilderStreamingURLCommandOutput> {
    return de_CreateAppBlockBuilderStreamingURLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
