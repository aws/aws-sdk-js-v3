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

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { CreateDataSetRequest, CreateDataSetResponse } from "../models/models_0";
import { de_CreateDataSetCommand, se_CreateDataSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDataSetCommand}.
 */
export interface CreateDataSetCommandInput extends CreateDataSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataSetCommand}.
 */
export interface CreateDataSetCommandOutput extends CreateDataSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation creates a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // CreateDataSetRequest
 *   AssetType: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Tags: { // MapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDataSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataSetResponse
 * //   Arn: "STRING_VALUE",
 * //   AssetType: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Origin: "STRING_VALUE",
 * //   OriginDetails: { // OriginDetails
 * //     ProductId: "STRING_VALUE", // required
 * //   },
 * //   SourceId: "STRING_VALUE",
 * //   Tags: { // MapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateDataSetCommandInput - {@link CreateDataSetCommandInput}
 * @returns {@link CreateDataSetCommandOutput}
 * @see {@link CreateDataSetCommandInput} for command's `input` shape.
 * @see {@link CreateDataSetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The request has exceeded the quotas imposed by the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 */
export class CreateDataSetCommand extends $Command<
  CreateDataSetCommandInput,
  CreateDataSetCommandOutput,
  DataExchangeClientResolvedConfig
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
  constructor(readonly input: CreateDataSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataSetCommandInput, CreateDataSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateDataSetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "CreateDataSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataExchange",
        operation: "CreateDataSet",
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
  private serialize(input: CreateDataSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDataSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSetCommandOutput> {
    return de_CreateDataSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
