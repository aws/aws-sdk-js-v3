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

import {
  ListServicePipelineOutputsInput,
  ListServicePipelineOutputsOutput,
  ListServicePipelineOutputsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListServicePipelineOutputsCommand, se_ListServicePipelineOutputsCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServicePipelineOutputsCommand}.
 */
export interface ListServicePipelineOutputsCommandInput extends ListServicePipelineOutputsInput {}
/**
 * @public
 *
 * The output of {@link ListServicePipelineOutputsCommand}.
 */
export interface ListServicePipelineOutputsCommandOutput extends ListServicePipelineOutputsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Get a list of service pipeline Infrastructure as Code (IaC) outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServicePipelineOutputsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServicePipelineOutputsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // ListServicePipelineOutputsInput
 *   serviceName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new ListServicePipelineOutputsCommand(input);
 * const response = await client.send(command);
 * // { // ListServicePipelineOutputsOutput
 * //   nextToken: "STRING_VALUE",
 * //   outputs: [ // OutputsList // required
 * //     { // Output
 * //       key: "STRING_VALUE",
 * //       valueString: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServicePipelineOutputsCommandInput - {@link ListServicePipelineOutputsCommandInput}
 * @returns {@link ListServicePipelineOutputsCommandOutput}
 * @see {@link ListServicePipelineOutputsCommandInput} for command's `input` shape.
 * @see {@link ListServicePipelineOutputsCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class ListServicePipelineOutputsCommand extends $Command<
  ListServicePipelineOutputsCommandInput,
  ListServicePipelineOutputsCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: ListServicePipelineOutputsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServicePipelineOutputsCommandInput, ListServicePipelineOutputsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListServicePipelineOutputsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListServicePipelineOutputsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListServicePipelineOutputsOutputFilterSensitiveLog,
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
  private serialize(input: ListServicePipelineOutputsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListServicePipelineOutputsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServicePipelineOutputsCommandOutput> {
    return de_ListServicePipelineOutputsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
