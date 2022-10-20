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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import {
  DescribeResourceCollectionHealthRequest,
  DescribeResourceCollectionHealthRequestFilterSensitiveLog,
  DescribeResourceCollectionHealthResponse,
  DescribeResourceCollectionHealthResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeResourceCollectionHealthCommand,
  serializeAws_restJson1DescribeResourceCollectionHealthCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeResourceCollectionHealthCommandInput extends DescribeResourceCollectionHealthRequest {}
export interface DescribeResourceCollectionHealthCommandOutput
  extends DescribeResourceCollectionHealthResponse,
    __MetadataBearer {}

/**
 * <p> Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR)
 * 			for all closed insights in resource collections in your account. You specify the type of
 * 			Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
 *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
 *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeResourceCollectionHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeResourceCollectionHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeResourceCollectionHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourceCollectionHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceCollectionHealthCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class DescribeResourceCollectionHealthCommand extends $Command<
  DescribeResourceCollectionHealthCommandInput,
  DescribeResourceCollectionHealthCommandOutput,
  DevOpsGuruClientResolvedConfig
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

  constructor(readonly input: DescribeResourceCollectionHealthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeResourceCollectionHealthCommandInput, DescribeResourceCollectionHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeResourceCollectionHealthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeResourceCollectionHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeResourceCollectionHealthRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeResourceCollectionHealthResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeResourceCollectionHealthCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeResourceCollectionHealthCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeResourceCollectionHealthCommandOutput> {
    return deserializeAws_restJson1DescribeResourceCollectionHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
