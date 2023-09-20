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

import { DescribeAccountModificationsRequest, DescribeAccountModificationsResult } from "../models/models_0";
import {
  de_DescribeAccountModificationsCommand,
  se_DescribeAccountModificationsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountModificationsCommand}.
 */
export interface DescribeAccountModificationsCommandInput extends DescribeAccountModificationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountModificationsCommand}.
 */
export interface DescribeAccountModificationsCommandOutput
  extends DescribeAccountModificationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes modifications to the configuration of Bring Your Own
 *          License (BYOL) for the specified account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeAccountModificationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeAccountModificationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeAccountModificationsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAccountModificationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountModificationsResult
 * //   AccountModifications: [ // AccountModificationList
 * //     { // AccountModification
 * //       ModificationState: "PENDING" || "COMPLETED" || "FAILED",
 * //       DedicatedTenancySupport: "ENABLED" || "DISABLED",
 * //       DedicatedTenancyManagementCidrRange: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountModificationsCommandInput - {@link DescribeAccountModificationsCommandInput}
 * @returns {@link DescribeAccountModificationsCommandOutput}
 * @see {@link DescribeAccountModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountModificationsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class DescribeAccountModificationsCommand extends $Command<
  DescribeAccountModificationsCommandInput,
  DescribeAccountModificationsCommandOutput,
  WorkSpacesClientResolvedConfig
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
  constructor(readonly input: DescribeAccountModificationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountModificationsCommandInput, DescribeAccountModificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountModificationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeAccountModificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "DescribeAccountModifications",
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
  private serialize(input: DescribeAccountModificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAccountModificationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountModificationsCommandOutput> {
    return de_DescribeAccountModificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
