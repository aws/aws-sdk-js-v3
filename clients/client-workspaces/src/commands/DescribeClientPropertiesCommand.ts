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

import { DescribeClientPropertiesRequest, DescribeClientPropertiesResult } from "../models/models_0";
import { de_DescribeClientPropertiesCommand, se_DescribeClientPropertiesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientPropertiesCommand}.
 */
export interface DescribeClientPropertiesCommandInput extends DescribeClientPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientPropertiesCommand}.
 */
export interface DescribeClientPropertiesCommandOutput extends DescribeClientPropertiesResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes one or more specified Amazon WorkSpaces clients.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeClientPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeClientPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeClientPropertiesRequest
 *   ResourceIds: [ // ResourceIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeClientPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientPropertiesResult
 * //   ClientPropertiesList: [ // ClientPropertiesList
 * //     { // ClientPropertiesResult
 * //       ResourceId: "STRING_VALUE",
 * //       ClientProperties: { // ClientProperties
 * //         ReconnectEnabled: "ENABLED" || "DISABLED",
 * //         LogUploadEnabled: "ENABLED" || "DISABLED",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClientPropertiesCommandInput - {@link DescribeClientPropertiesCommandInput}
 * @returns {@link DescribeClientPropertiesCommandOutput}
 * @see {@link DescribeClientPropertiesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class DescribeClientPropertiesCommand extends $Command<
  DescribeClientPropertiesCommandInput,
  DescribeClientPropertiesCommandOutput,
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
  constructor(readonly input: DescribeClientPropertiesCommandInput) {
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
  ): Handler<DescribeClientPropertiesCommandInput, DescribeClientPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClientPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeClientPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "DescribeClientProperties",
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
  private serialize(input: DescribeClientPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClientPropertiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClientPropertiesCommandOutput> {
    return de_DescribeClientPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
