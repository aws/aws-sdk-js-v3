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
import { AssociateAppBlockBuilderAppBlockRequest, AssociateAppBlockBuilderAppBlockResult } from "../models/models_0";
import {
  de_AssociateAppBlockBuilderAppBlockCommand,
  se_AssociateAppBlockBuilderAppBlockCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateAppBlockBuilderAppBlockCommand}.
 */
export interface AssociateAppBlockBuilderAppBlockCommandInput extends AssociateAppBlockBuilderAppBlockRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAppBlockBuilderAppBlockCommand}.
 */
export interface AssociateAppBlockBuilderAppBlockCommandOutput
  extends AssociateAppBlockBuilderAppBlockResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates the specified app block builder with the specified app block.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, AssociateAppBlockBuilderAppBlockCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, AssociateAppBlockBuilderAppBlockCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // AssociateAppBlockBuilderAppBlockRequest
 *   AppBlockArn: "STRING_VALUE", // required
 *   AppBlockBuilderName: "STRING_VALUE", // required
 * };
 * const command = new AssociateAppBlockBuilderAppBlockCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAppBlockBuilderAppBlockResult
 * //   AppBlockBuilderAppBlockAssociation: { // AppBlockBuilderAppBlockAssociation
 * //     AppBlockArn: "STRING_VALUE", // required
 * //     AppBlockBuilderName: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateAppBlockBuilderAppBlockCommandInput - {@link AssociateAppBlockBuilderAppBlockCommandInput}
 * @returns {@link AssociateAppBlockBuilderAppBlockCommandOutput}
 * @see {@link AssociateAppBlockBuilderAppBlockCommandInput} for command's `input` shape.
 * @see {@link AssociateAppBlockBuilderAppBlockCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
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
export class AssociateAppBlockBuilderAppBlockCommand extends $Command<
  AssociateAppBlockBuilderAppBlockCommandInput,
  AssociateAppBlockBuilderAppBlockCommandOutput,
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
  constructor(readonly input: AssociateAppBlockBuilderAppBlockCommandInput) {
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
  ): Handler<AssociateAppBlockBuilderAppBlockCommandInput, AssociateAppBlockBuilderAppBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateAppBlockBuilderAppBlockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "AssociateAppBlockBuilderAppBlockCommand";
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
    input: AssociateAppBlockBuilderAppBlockCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociateAppBlockBuilderAppBlockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateAppBlockBuilderAppBlockCommandOutput> {
    return de_AssociateAppBlockBuilderAppBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
