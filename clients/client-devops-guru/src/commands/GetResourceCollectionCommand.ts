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
  GetResourceCollectionRequest,
  GetResourceCollectionRequestFilterSensitiveLog,
  GetResourceCollectionResponse,
  GetResourceCollectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetResourceCollectionCommand,
  serializeAws_restJson1GetResourceCollectionCommand,
} from "../protocols/Aws_restJson1";

export interface GetResourceCollectionCommandInput extends GetResourceCollectionRequest {}
export interface GetResourceCollectionCommandOutput extends GetResourceCollectionResponse, __MetadataBearer {}

/**
 * <p> Returns lists Amazon Web Services resources that are of the specified resource collection type.
 * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
 *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
 *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, GetResourceCollectionCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, GetResourceCollectionCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new GetResourceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceCollectionCommandInput} for command's `input` shape.
 * @see {@link GetResourceCollectionCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class GetResourceCollectionCommand extends $Command<
  GetResourceCollectionCommandInput,
  GetResourceCollectionCommandOutput,
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

  constructor(readonly input: GetResourceCollectionCommandInput) {
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
  ): Handler<GetResourceCollectionCommandInput, GetResourceCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceCollectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "GetResourceCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceCollectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetResourceCollectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourceCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetResourceCollectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceCollectionCommandOutput> {
    return deserializeAws_restJson1GetResourceCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
