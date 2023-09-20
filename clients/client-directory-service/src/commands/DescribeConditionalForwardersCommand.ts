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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeConditionalForwardersRequest, DescribeConditionalForwardersResult } from "../models/models_0";
import {
  de_DescribeConditionalForwardersCommand,
  se_DescribeConditionalForwardersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConditionalForwardersCommand}.
 */
export interface DescribeConditionalForwardersCommandInput extends DescribeConditionalForwardersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConditionalForwardersCommand}.
 */
export interface DescribeConditionalForwardersCommandOutput
  extends DescribeConditionalForwardersResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Obtains information about the conditional forwarders for this account.</p>
 *          <p>If no input parameters are provided for RemoteDomainNames, this request describes all
 *       conditional forwarders for the specified directory ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeConditionalForwardersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeConditionalForwardersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeConditionalForwardersRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   RemoteDomainNames: [ // RemoteDomainNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeConditionalForwardersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConditionalForwardersResult
 * //   ConditionalForwarders: [ // ConditionalForwarders
 * //     { // ConditionalForwarder
 * //       RemoteDomainName: "STRING_VALUE",
 * //       DnsIpAddrs: [ // DnsIpAddrs
 * //         "STRING_VALUE",
 * //       ],
 * //       ReplicationScope: "Domain",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConditionalForwardersCommandInput - {@link DescribeConditionalForwardersCommandInput}
 * @returns {@link DescribeConditionalForwardersCommandOutput}
 * @see {@link DescribeConditionalForwardersCommandInput} for command's `input` shape.
 * @see {@link DescribeConditionalForwardersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable or could not be found.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class DescribeConditionalForwardersCommand extends $Command<
  DescribeConditionalForwardersCommandInput,
  DescribeConditionalForwardersCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: DescribeConditionalForwardersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConditionalForwardersCommandInput, DescribeConditionalForwardersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConditionalForwardersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeConditionalForwardersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DirectoryService_20150416",
        operation: "DescribeConditionalForwarders",
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
  private serialize(input: DescribeConditionalForwardersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConditionalForwardersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConditionalForwardersCommandOutput> {
    return de_DescribeConditionalForwardersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
