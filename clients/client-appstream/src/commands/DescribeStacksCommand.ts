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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeStacksRequest, DescribeStacksResult } from "../models/models_0";
import { de_DescribeStacksCommand, se_DescribeStacksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeStacksCommand}.
 */
export interface DescribeStacksCommandInput extends DescribeStacksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStacksCommand}.
 */
export interface DescribeStacksCommandOutput extends DescribeStacksResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeStacksCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeStacksCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeStacksRequest
 *   Names: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeStacksCommandInput - {@link DescribeStacksCommandInput}
 * @returns {@link DescribeStacksCommandOutput}
 * @see {@link DescribeStacksCommandInput} for command's `input` shape.
 * @see {@link DescribeStacksCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 *
 */
export class DescribeStacksCommand extends $Command<
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput,
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
  constructor(readonly input: DescribeStacksCommandInput) {
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
  ): Handler<DescribeStacksCommandInput, DescribeStacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStacksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeStacksCommand";
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
  private serialize(input: DescribeStacksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStacksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStacksCommandOutput> {
    return de_DescribeStacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
