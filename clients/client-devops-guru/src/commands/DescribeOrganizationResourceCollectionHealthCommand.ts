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
  DescribeOrganizationResourceCollectionHealthRequest,
  DescribeOrganizationResourceCollectionHealthRequestFilterSensitiveLog,
  DescribeOrganizationResourceCollectionHealthResponse,
  DescribeOrganizationResourceCollectionHealthResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeOrganizationResourceCollectionHealthCommand,
  serializeAws_restJson1DescribeOrganizationResourceCollectionHealthCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeOrganizationResourceCollectionHealthCommandInput
  extends DescribeOrganizationResourceCollectionHealthRequest {}
export interface DescribeOrganizationResourceCollectionHealthCommandOutput
  extends DescribeOrganizationResourceCollectionHealthResponse,
    __MetadataBearer {}

/**
 * <p>Provides an overview of your system's health. If additional member accounts are part
 * 			of your organization, you can filter those accounts using the <code>AccountIds</code>
 * 			field.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeOrganizationResourceCollectionHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeOrganizationResourceCollectionHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeOrganizationResourceCollectionHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationResourceCollectionHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationResourceCollectionHealthCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class DescribeOrganizationResourceCollectionHealthCommand extends $Command<
  DescribeOrganizationResourceCollectionHealthCommandInput,
  DescribeOrganizationResourceCollectionHealthCommandOutput,
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

  constructor(readonly input: DescribeOrganizationResourceCollectionHealthCommandInput) {
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
  ): Handler<
    DescribeOrganizationResourceCollectionHealthCommandInput,
    DescribeOrganizationResourceCollectionHealthCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeOrganizationResourceCollectionHealthCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeOrganizationResourceCollectionHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrganizationResourceCollectionHealthRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeOrganizationResourceCollectionHealthResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeOrganizationResourceCollectionHealthCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeOrganizationResourceCollectionHealthCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationResourceCollectionHealthCommandOutput> {
    return deserializeAws_restJson1DescribeOrganizationResourceCollectionHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
