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

import { ListStudioLifecycleConfigsRequest, ListStudioLifecycleConfigsResponse } from "../models/models_3";
import {
  deserializeAws_json1_1ListStudioLifecycleConfigsCommand,
  serializeAws_json1_1ListStudioLifecycleConfigsCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link ListStudioLifecycleConfigsCommand}.
 */
export interface ListStudioLifecycleConfigsCommandInput extends ListStudioLifecycleConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListStudioLifecycleConfigsCommand}.
 */
export interface ListStudioLifecycleConfigsCommandOutput extends ListStudioLifecycleConfigsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Studio Lifecycle Configurations in your Amazon Web Services Account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListStudioLifecycleConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListStudioLifecycleConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = {
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   NameContains: "STRING_VALUE",
 *   AppTypeEquals: "JupyterServer" || "KernelGateway",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   ModifiedTimeBefore: new Date("TIMESTAMP"),
 *   ModifiedTimeAfter: new Date("TIMESTAMP"),
 *   SortBy: "CreationTime" || "LastModifiedTime" || "Name",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListStudioLifecycleConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListStudioLifecycleConfigsCommandInput - {@link ListStudioLifecycleConfigsCommandInput}
 * @returns {@link ListStudioLifecycleConfigsCommandOutput}
 * @see {@link ListStudioLifecycleConfigsCommandInput} for command's `input` shape.
 * @see {@link ListStudioLifecycleConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 *
 */
export class ListStudioLifecycleConfigsCommand extends $Command<
  ListStudioLifecycleConfigsCommandInput,
  ListStudioLifecycleConfigsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListStudioLifecycleConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStudioLifecycleConfigsCommandInput, ListStudioLifecycleConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStudioLifecycleConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListStudioLifecycleConfigsCommand";
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
  private serialize(input: ListStudioLifecycleConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStudioLifecycleConfigsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStudioLifecycleConfigsCommandOutput> {
    return deserializeAws_json1_1ListStudioLifecycleConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
