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

import { DescribeRegistryRequest, DescribeRegistryResponse } from "../models/models_0";
import { de_DescribeRegistryCommand, se_DescribeRegistryCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistryCommand}.
 */
export interface DescribeRegistryCommandInput extends DescribeRegistryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistryCommand}.
 */
export interface DescribeRegistryCommandOutput extends DescribeRegistryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DescribeRegistryCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DescribeRegistryCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // DescribeRegistryRequest
 *   RegistryName: "STRING_VALUE", // required
 * };
 * const command = new DescribeRegistryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistryResponse
 * //   Description: "STRING_VALUE",
 * //   RegistryArn: "STRING_VALUE",
 * //   RegistryName: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRegistryCommandInput - {@link DescribeRegistryCommandInput}
 * @returns {@link DescribeRegistryCommandOutput}
 * @see {@link DescribeRegistryCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistryCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 */
export class DescribeRegistryCommand extends $Command<
  DescribeRegistryCommandInput,
  DescribeRegistryCommandOutput,
  SchemasClientResolvedConfig
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
  constructor(readonly input: DescribeRegistryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRegistryCommandInput, DescribeRegistryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRegistryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "DescribeRegistryCommand";
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
  private serialize(input: DescribeRegistryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRegistryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRegistryCommandOutput> {
    return de_DescribeRegistryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
