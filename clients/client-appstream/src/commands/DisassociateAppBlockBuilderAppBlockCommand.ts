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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  DisassociateAppBlockBuilderAppBlockRequest,
  DisassociateAppBlockBuilderAppBlockResult,
} from "../models/models_0";
import {
  de_DisassociateAppBlockBuilderAppBlockCommand,
  se_DisassociateAppBlockBuilderAppBlockCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateAppBlockBuilderAppBlockCommand}.
 */
export interface DisassociateAppBlockBuilderAppBlockCommandInput extends DisassociateAppBlockBuilderAppBlockRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAppBlockBuilderAppBlockCommand}.
 */
export interface DisassociateAppBlockBuilderAppBlockCommandOutput
  extends DisassociateAppBlockBuilderAppBlockResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a specified app block builder from a specified app block.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisassociateAppBlockBuilderAppBlockCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisassociateAppBlockBuilderAppBlockCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DisassociateAppBlockBuilderAppBlockRequest
 *   AppBlockArn: "STRING_VALUE", // required
 *   AppBlockBuilderName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateAppBlockBuilderAppBlockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAppBlockBuilderAppBlockCommandInput - {@link DisassociateAppBlockBuilderAppBlockCommandInput}
 * @returns {@link DisassociateAppBlockBuilderAppBlockCommandOutput}
 * @see {@link DisassociateAppBlockBuilderAppBlockCommandInput} for command's `input` shape.
 * @see {@link DisassociateAppBlockBuilderAppBlockCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
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
export class DisassociateAppBlockBuilderAppBlockCommand extends $Command<
  DisassociateAppBlockBuilderAppBlockCommandInput,
  DisassociateAppBlockBuilderAppBlockCommandOutput,
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
  constructor(readonly input: DisassociateAppBlockBuilderAppBlockCommandInput) {
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
  ): Handler<DisassociateAppBlockBuilderAppBlockCommandInput, DisassociateAppBlockBuilderAppBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateAppBlockBuilderAppBlockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DisassociateAppBlockBuilderAppBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PhotonAdminProxyService",
        operation: "DisassociateAppBlockBuilderAppBlock",
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
  private serialize(
    input: DisassociateAppBlockBuilderAppBlockCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociateAppBlockBuilderAppBlockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateAppBlockBuilderAppBlockCommandOutput> {
    return de_DisassociateAppBlockBuilderAppBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
