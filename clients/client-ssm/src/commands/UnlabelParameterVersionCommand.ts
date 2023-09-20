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

import { UnlabelParameterVersionRequest, UnlabelParameterVersionResult } from "../models/models_1";
import { de_UnlabelParameterVersionCommand, se_UnlabelParameterVersionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UnlabelParameterVersionCommand}.
 */
export interface UnlabelParameterVersionCommandInput extends UnlabelParameterVersionRequest {}
/**
 * @public
 *
 * The output of {@link UnlabelParameterVersionCommand}.
 */
export interface UnlabelParameterVersionCommandOutput extends UnlabelParameterVersionResult, __MetadataBearer {}

/**
 * @public
 * <p>Remove a label or labels from a parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UnlabelParameterVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UnlabelParameterVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UnlabelParameterVersionRequest
 *   Name: "STRING_VALUE", // required
 *   ParameterVersion: Number("long"), // required
 *   Labels: [ // ParameterLabelList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UnlabelParameterVersionCommand(input);
 * const response = await client.send(command);
 * // { // UnlabelParameterVersionResult
 * //   RemovedLabels: [ // ParameterLabelList
 * //     "STRING_VALUE",
 * //   ],
 * //   InvalidLabels: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UnlabelParameterVersionCommandInput - {@link UnlabelParameterVersionCommandInput}
 * @returns {@link UnlabelParameterVersionCommandOutput}
 * @see {@link UnlabelParameterVersionCommandInput} for command's `input` shape.
 * @see {@link UnlabelParameterVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ParameterNotFound} (client fault)
 *  <p>The parameter couldn't be found. Verify the name and try again.</p>
 *
 * @throws {@link ParameterVersionNotFound} (client fault)
 *  <p>The specified parameter version wasn't found. Verify the parameter name and version, and try
 *    again.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class UnlabelParameterVersionCommand extends $Command<
  UnlabelParameterVersionCommandInput,
  UnlabelParameterVersionCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: UnlabelParameterVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnlabelParameterVersionCommandInput, UnlabelParameterVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UnlabelParameterVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UnlabelParameterVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "UnlabelParameterVersion",
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
  private serialize(input: UnlabelParameterVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UnlabelParameterVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnlabelParameterVersionCommandOutput> {
    return de_UnlabelParameterVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
