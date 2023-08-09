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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  DescribeAppBlockBuilderAppBlockAssociationsRequest,
  DescribeAppBlockBuilderAppBlockAssociationsResult,
} from "../models/models_0";
import {
  de_DescribeAppBlockBuilderAppBlockAssociationsCommand,
  se_DescribeAppBlockBuilderAppBlockAssociationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppBlockBuilderAppBlockAssociationsCommand}.
 */
export interface DescribeAppBlockBuilderAppBlockAssociationsCommandInput
  extends DescribeAppBlockBuilderAppBlockAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppBlockBuilderAppBlockAssociationsCommand}.
 */
export interface DescribeAppBlockBuilderAppBlockAssociationsCommandOutput
  extends DescribeAppBlockBuilderAppBlockAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes one or more app block builder associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeAppBlockBuilderAppBlockAssociationsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeAppBlockBuilderAppBlockAssociationsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeAppBlockBuilderAppBlockAssociationsRequest
 *   AppBlockArn: "STRING_VALUE",
 *   AppBlockBuilderName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAppBlockBuilderAppBlockAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppBlockBuilderAppBlockAssociationsResult
 * //   AppBlockBuilderAppBlockAssociations: [ // AppBlockBuilderAppBlockAssociationsList
 * //     { // AppBlockBuilderAppBlockAssociation
 * //       AppBlockArn: "STRING_VALUE", // required
 * //       AppBlockBuilderName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAppBlockBuilderAppBlockAssociationsCommandInput - {@link DescribeAppBlockBuilderAppBlockAssociationsCommandInput}
 * @returns {@link DescribeAppBlockBuilderAppBlockAssociationsCommandOutput}
 * @see {@link DescribeAppBlockBuilderAppBlockAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeAppBlockBuilderAppBlockAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class DescribeAppBlockBuilderAppBlockAssociationsCommand extends $Command<
  DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  DescribeAppBlockBuilderAppBlockAssociationsCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: DescribeAppBlockBuilderAppBlockAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
    DescribeAppBlockBuilderAppBlockAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeAppBlockBuilderAppBlockAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeAppBlockBuilderAppBlockAssociationsCommand";
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
    input: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeAppBlockBuilderAppBlockAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAppBlockBuilderAppBlockAssociationsCommandOutput> {
    return de_DescribeAppBlockBuilderAppBlockAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
