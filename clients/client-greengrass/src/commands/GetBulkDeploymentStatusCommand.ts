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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetBulkDeploymentStatusRequest, GetBulkDeploymentStatusResponse } from "../models/models_0";
import { de_GetBulkDeploymentStatusCommand, se_GetBulkDeploymentStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBulkDeploymentStatusCommand}.
 */
export interface GetBulkDeploymentStatusCommandInput extends GetBulkDeploymentStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetBulkDeploymentStatusCommand}.
 */
export interface GetBulkDeploymentStatusCommandOutput extends GetBulkDeploymentStatusResponse, __MetadataBearer {}

/**
 * @public
 * Returns the status of a bulk deployment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetBulkDeploymentStatusCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetBulkDeploymentStatusCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetBulkDeploymentStatusRequest
 *   BulkDeploymentId: "STRING_VALUE", // required
 * };
 * const command = new GetBulkDeploymentStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetBulkDeploymentStatusResponse
 * //   BulkDeploymentMetrics: { // BulkDeploymentMetrics
 * //     InvalidInputRecords: Number("int"),
 * //     RecordsProcessed: Number("int"),
 * //     RetryAttempts: Number("int"),
 * //   },
 * //   BulkDeploymentStatus: "Initializing" || "Running" || "Completed" || "Stopping" || "Stopped" || "Failed",
 * //   CreatedAt: "STRING_VALUE",
 * //   ErrorDetails: [ // ErrorDetails
 * //     { // ErrorDetail
 * //       DetailedErrorCode: "STRING_VALUE",
 * //       DetailedErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ErrorMessage: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBulkDeploymentStatusCommandInput - {@link GetBulkDeploymentStatusCommandInput}
 * @returns {@link GetBulkDeploymentStatusCommandOutput}
 * @see {@link GetBulkDeploymentStatusCommandInput} for command's `input` shape.
 * @see {@link GetBulkDeploymentStatusCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class GetBulkDeploymentStatusCommand extends $Command<
  GetBulkDeploymentStatusCommandInput,
  GetBulkDeploymentStatusCommandOutput,
  GreengrassClientResolvedConfig
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
  constructor(readonly input: GetBulkDeploymentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBulkDeploymentStatusCommandInput, GetBulkDeploymentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBulkDeploymentStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetBulkDeploymentStatusCommand";
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
  private serialize(input: GetBulkDeploymentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBulkDeploymentStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBulkDeploymentStatusCommandOutput> {
    return de_GetBulkDeploymentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
