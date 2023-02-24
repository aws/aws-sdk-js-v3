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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import {
  UpdateCostAllocationTagsStatusRequest,
  UpdateCostAllocationTagsStatusRequestFilterSensitiveLog,
  UpdateCostAllocationTagsStatusResponse,
  UpdateCostAllocationTagsStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCostAllocationTagsStatusCommand,
  serializeAws_json1_1UpdateCostAllocationTagsStatusCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateCostAllocationTagsStatusCommandInput extends UpdateCostAllocationTagsStatusRequest {}
export interface UpdateCostAllocationTagsStatusCommandOutput
  extends UpdateCostAllocationTagsStatusResponse,
    __MetadataBearer {}

/**
 * <p>Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag
 *       status that's updated is the same as the existing tag status, the request doesn't fail.
 *       Instead, it doesn't have any effect on the tag status (for example, activating the active
 *       tag). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, UpdateCostAllocationTagsStatusCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, UpdateCostAllocationTagsStatusCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new UpdateCostAllocationTagsStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCostAllocationTagsStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateCostAllocationTagsStatusCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class UpdateCostAllocationTagsStatusCommand extends $Command<
  UpdateCostAllocationTagsStatusCommandInput,
  UpdateCostAllocationTagsStatusCommandOutput,
  CostExplorerClientResolvedConfig
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

  constructor(readonly input: UpdateCostAllocationTagsStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCostAllocationTagsStatusCommandInput, UpdateCostAllocationTagsStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCostAllocationTagsStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "UpdateCostAllocationTagsStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCostAllocationTagsStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateCostAllocationTagsStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateCostAllocationTagsStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCostAllocationTagsStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCostAllocationTagsStatusCommandOutput> {
    return deserializeAws_json1_1UpdateCostAllocationTagsStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
