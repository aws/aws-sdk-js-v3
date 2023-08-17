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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetConnectorDefinitionRequest, GetConnectorDefinitionResponse } from "../models/models_0";
import { de_GetConnectorDefinitionCommand, se_GetConnectorDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConnectorDefinitionCommand}.
 */
export interface GetConnectorDefinitionCommandInput extends GetConnectorDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectorDefinitionCommand}.
 */
export interface GetConnectorDefinitionCommandOutput extends GetConnectorDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * Retrieves information about a connector definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetConnectorDefinitionRequest
 *   ConnectorDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new GetConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectorDefinitionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LastUpdatedTimestamp: "STRING_VALUE",
 * //   LatestVersion: "STRING_VALUE",
 * //   LatestVersionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConnectorDefinitionCommandInput - {@link GetConnectorDefinitionCommandInput}
 * @returns {@link GetConnectorDefinitionCommandOutput}
 * @see {@link GetConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetConnectorDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class GetConnectorDefinitionCommand extends $Command<
  GetConnectorDefinitionCommandInput,
  GetConnectorDefinitionCommandOutput,
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
  constructor(readonly input: GetConnectorDefinitionCommandInput) {
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
  ): Handler<GetConnectorDefinitionCommandInput, GetConnectorDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConnectorDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetConnectorDefinitionCommand";
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
  private serialize(input: GetConnectorDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConnectorDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectorDefinitionCommandOutput> {
    return de_GetConnectorDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
