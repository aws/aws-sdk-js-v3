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

import { DescribeConnectionAliasesRequest, DescribeConnectionAliasesResult } from "../models/models_0";
import { de_DescribeConnectionAliasesCommand, se_DescribeConnectionAliasesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectionAliasesCommand}.
 */
export interface DescribeConnectionAliasesCommandInput extends DescribeConnectionAliasesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionAliasesCommand}.
 */
export interface DescribeConnectionAliasesCommandOutput extends DescribeConnectionAliasesResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes the connection aliases used for cross-Region
 *          redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeConnectionAliasesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeConnectionAliasesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeConnectionAliasesRequest
 *   AliasIds: [ // ConnectionAliasIdList
 *     "STRING_VALUE",
 *   ],
 *   ResourceId: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeConnectionAliasesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectionAliasesResult
 * //   ConnectionAliases: [ // ConnectionAliasList
 * //     { // ConnectionAlias
 * //       ConnectionString: "STRING_VALUE",
 * //       AliasId: "STRING_VALUE",
 * //       State: "CREATING" || "CREATED" || "DELETING",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       Associations: [ // ConnectionAliasAssociationList
 * //         { // ConnectionAliasAssociation
 * //           AssociationStatus: "NOT_ASSOCIATED" || "ASSOCIATED_WITH_OWNER_ACCOUNT" || "ASSOCIATED_WITH_SHARED_ACCOUNT" || "PENDING_ASSOCIATION" || "PENDING_DISASSOCIATION",
 * //           AssociatedAccountId: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           ConnectionIdentifier: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConnectionAliasesCommandInput - {@link DescribeConnectionAliasesCommandInput}
 * @returns {@link DescribeConnectionAliasesCommandOutput}
 * @see {@link DescribeConnectionAliasesCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionAliasesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class DescribeConnectionAliasesCommand extends $Command<
  DescribeConnectionAliasesCommandInput,
  DescribeConnectionAliasesCommandOutput,
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
  constructor(readonly input: DescribeConnectionAliasesCommandInput) {
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
  ): Handler<DescribeConnectionAliasesCommandInput, DescribeConnectionAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConnectionAliasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeConnectionAliasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "DescribeConnectionAliases",
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
  private serialize(input: DescribeConnectionAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConnectionAliasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConnectionAliasesCommandOutput> {
    return de_DescribeConnectionAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
