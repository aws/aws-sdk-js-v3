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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { UpdateCostAllocationTagsStatusRequest, UpdateCostAllocationTagsStatusResponse } from "../models/models_0";
import {
  de_UpdateCostAllocationTagsStatusCommand,
  se_UpdateCostAllocationTagsStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCostAllocationTagsStatusCommand}.
 */
export interface UpdateCostAllocationTagsStatusCommandInput extends UpdateCostAllocationTagsStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCostAllocationTagsStatusCommand}.
 */
export interface UpdateCostAllocationTagsStatusCommandOutput
  extends UpdateCostAllocationTagsStatusResponse,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // UpdateCostAllocationTagsStatusRequest
 *   CostAllocationTagsStatus: [ // CostAllocationTagStatusList // required
 *     { // CostAllocationTagStatusEntry
 *       TagKey: "STRING_VALUE", // required
 *       Status: "Active" || "Inactive", // required
 *     },
 *   ],
 * };
 * const command = new UpdateCostAllocationTagsStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCostAllocationTagsStatusResponse
 * //   Errors: [ // UpdateCostAllocationTagsStatusErrors
 * //     { // UpdateCostAllocationTagsStatusError
 * //       TagKey: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateCostAllocationTagsStatusCommandInput - {@link UpdateCostAllocationTagsStatusCommandInput}
 * @returns {@link UpdateCostAllocationTagsStatusCommandOutput}
 * @see {@link UpdateCostAllocationTagsStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateCostAllocationTagsStatusCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
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

  /**
   * @public
   */
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
    input: UpdateCostAllocationTagsStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateCostAllocationTagsStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCostAllocationTagsStatusCommandOutput> {
    return de_UpdateCostAllocationTagsStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
