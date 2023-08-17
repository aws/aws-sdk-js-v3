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

import {
  DescribeAssociationExecutionTargetsRequest,
  DescribeAssociationExecutionTargetsResult,
} from "../models/models_0";
import {
  de_DescribeAssociationExecutionTargetsCommand,
  se_DescribeAssociationExecutionTargetsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssociationExecutionTargetsCommand}.
 */
export interface DescribeAssociationExecutionTargetsCommandInput extends DescribeAssociationExecutionTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssociationExecutionTargetsCommand}.
 */
export interface DescribeAssociationExecutionTargetsCommandOutput
  extends DescribeAssociationExecutionTargetsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Views information about a specific execution of a specific association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAssociationExecutionTargetsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAssociationExecutionTargetsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeAssociationExecutionTargetsRequest
 *   AssociationId: "STRING_VALUE", // required
 *   ExecutionId: "STRING_VALUE", // required
 *   Filters: [ // AssociationExecutionTargetsFilterList
 *     { // AssociationExecutionTargetsFilter
 *       Key: "Status" || "ResourceId" || "ResourceType", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAssociationExecutionTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssociationExecutionTargetsResult
 * //   AssociationExecutionTargets: [ // AssociationExecutionTargetsList
 * //     { // AssociationExecutionTarget
 * //       AssociationId: "STRING_VALUE",
 * //       AssociationVersion: "STRING_VALUE",
 * //       ExecutionId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       DetailedStatus: "STRING_VALUE",
 * //       LastExecutionDate: new Date("TIMESTAMP"),
 * //       OutputSource: { // OutputSource
 * //         OutputSourceId: "STRING_VALUE",
 * //         OutputSourceType: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAssociationExecutionTargetsCommandInput - {@link DescribeAssociationExecutionTargetsCommandInput}
 * @returns {@link DescribeAssociationExecutionTargetsCommandOutput}
 * @see {@link DescribeAssociationExecutionTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssociationExecutionTargetsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationDoesNotExist} (client fault)
 *  <p>The specified association doesn't exist.</p>
 *
 * @throws {@link AssociationExecutionDoesNotExist} (client fault)
 *  <p>The specified execution ID doesn't exist. Verify the ID number and try again.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeAssociationExecutionTargetsCommand extends $Command<
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: DescribeAssociationExecutionTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAssociationExecutionTargetsCommandInput, DescribeAssociationExecutionTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAssociationExecutionTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeAssociationExecutionTargetsCommand";
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
    input: DescribeAssociationExecutionTargetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeAssociationExecutionTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAssociationExecutionTargetsCommandOutput> {
    return de_DescribeAssociationExecutionTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
