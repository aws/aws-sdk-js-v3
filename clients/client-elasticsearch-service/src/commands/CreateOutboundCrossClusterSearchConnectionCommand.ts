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

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  CreateOutboundCrossClusterSearchConnectionRequest,
  CreateOutboundCrossClusterSearchConnectionResponse,
} from "../models/models_0";
import {
  de_CreateOutboundCrossClusterSearchConnectionCommand,
  se_CreateOutboundCrossClusterSearchConnectionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateOutboundCrossClusterSearchConnectionCommand}.
 */
export interface CreateOutboundCrossClusterSearchConnectionCommandInput
  extends CreateOutboundCrossClusterSearchConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateOutboundCrossClusterSearchConnectionCommand}.
 */
export interface CreateOutboundCrossClusterSearchConnectionCommandOutput
  extends CreateOutboundCrossClusterSearchConnectionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new cross-cluster search connection from a source domain to a destination domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, CreateOutboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CreateOutboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // CreateOutboundCrossClusterSearchConnectionRequest
 *   SourceDomainInfo: { // DomainInformation
 *     OwnerId: "STRING_VALUE",
 *     DomainName: "STRING_VALUE", // required
 *     Region: "STRING_VALUE",
 *   },
 *   DestinationDomainInfo: {
 *     OwnerId: "STRING_VALUE",
 *     DomainName: "STRING_VALUE", // required
 *     Region: "STRING_VALUE",
 *   },
 *   ConnectionAlias: "STRING_VALUE", // required
 * };
 * const command = new CreateOutboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateOutboundCrossClusterSearchConnectionResponse
 * //   SourceDomainInfo: { // DomainInformation
 * //     OwnerId: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE", // required
 * //     Region: "STRING_VALUE",
 * //   },
 * //   DestinationDomainInfo: {
 * //     OwnerId: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE", // required
 * //     Region: "STRING_VALUE",
 * //   },
 * //   ConnectionAlias: "STRING_VALUE",
 * //   ConnectionStatus: { // OutboundCrossClusterSearchConnectionStatus
 * //     StatusCode: "PENDING_ACCEPTANCE" || "VALIDATING" || "VALIDATION_FAILED" || "PROVISIONING" || "ACTIVE" || "REJECTED" || "DELETING" || "DELETED",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   CrossClusterSearchConnectionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOutboundCrossClusterSearchConnectionCommandInput - {@link CreateOutboundCrossClusterSearchConnectionCommandInput}
 * @returns {@link CreateOutboundCrossClusterSearchConnectionCommandOutput}
 * @see {@link CreateOutboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateOutboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 */
export class CreateOutboundCrossClusterSearchConnectionCommand extends $Command<
  CreateOutboundCrossClusterSearchConnectionCommandInput,
  CreateOutboundCrossClusterSearchConnectionCommandOutput,
  ElasticsearchServiceClientResolvedConfig
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
  constructor(readonly input: CreateOutboundCrossClusterSearchConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateOutboundCrossClusterSearchConnectionCommandInput,
    CreateOutboundCrossClusterSearchConnectionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CreateOutboundCrossClusterSearchConnectionCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "CreateOutboundCrossClusterSearchConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElasticsearchService2015",
        operation: "CreateOutboundCrossClusterSearchConnection",
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
    input: CreateOutboundCrossClusterSearchConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateOutboundCrossClusterSearchConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateOutboundCrossClusterSearchConnectionCommandOutput> {
    return de_CreateOutboundCrossClusterSearchConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
