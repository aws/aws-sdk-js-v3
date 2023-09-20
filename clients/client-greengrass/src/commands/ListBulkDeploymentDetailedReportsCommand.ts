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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  ListBulkDeploymentDetailedReportsRequest,
  ListBulkDeploymentDetailedReportsResponse,
} from "../models/models_0";
import {
  de_ListBulkDeploymentDetailedReportsCommand,
  se_ListBulkDeploymentDetailedReportsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBulkDeploymentDetailedReportsCommand}.
 */
export interface ListBulkDeploymentDetailedReportsCommandInput extends ListBulkDeploymentDetailedReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListBulkDeploymentDetailedReportsCommand}.
 */
export interface ListBulkDeploymentDetailedReportsCommandOutput
  extends ListBulkDeploymentDetailedReportsResponse,
    __MetadataBearer {}

/**
 * @public
 * Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListBulkDeploymentDetailedReportsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListBulkDeploymentDetailedReportsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // ListBulkDeploymentDetailedReportsRequest
 *   BulkDeploymentId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBulkDeploymentDetailedReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListBulkDeploymentDetailedReportsResponse
 * //   Deployments: [ // BulkDeploymentResults
 * //     { // BulkDeploymentResult
 * //       CreatedAt: "STRING_VALUE",
 * //       DeploymentArn: "STRING_VALUE",
 * //       DeploymentId: "STRING_VALUE",
 * //       DeploymentStatus: "STRING_VALUE",
 * //       DeploymentType: "NewDeployment" || "Redeployment" || "ResetDeployment" || "ForceResetDeployment",
 * //       ErrorDetails: [ // ErrorDetails
 * //         { // ErrorDetail
 * //           DetailedErrorCode: "STRING_VALUE",
 * //           DetailedErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ErrorMessage: "STRING_VALUE",
 * //       GroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBulkDeploymentDetailedReportsCommandInput - {@link ListBulkDeploymentDetailedReportsCommandInput}
 * @returns {@link ListBulkDeploymentDetailedReportsCommandOutput}
 * @see {@link ListBulkDeploymentDetailedReportsCommandInput} for command's `input` shape.
 * @see {@link ListBulkDeploymentDetailedReportsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class ListBulkDeploymentDetailedReportsCommand extends $Command<
  ListBulkDeploymentDetailedReportsCommandInput,
  ListBulkDeploymentDetailedReportsCommandOutput,
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
  constructor(readonly input: ListBulkDeploymentDetailedReportsCommandInput) {
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
  ): Handler<ListBulkDeploymentDetailedReportsCommandInput, ListBulkDeploymentDetailedReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBulkDeploymentDetailedReportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListBulkDeploymentDetailedReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Greengrass",
        operation: "ListBulkDeploymentDetailedReports",
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
  private serialize(
    input: ListBulkDeploymentDetailedReportsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListBulkDeploymentDetailedReportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBulkDeploymentDetailedReportsCommandOutput> {
    return de_ListBulkDeploymentDetailedReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
