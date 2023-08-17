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
import { GetCoreDefinitionVersionRequest, GetCoreDefinitionVersionResponse } from "../models/models_0";
import { de_GetCoreDefinitionVersionCommand, se_GetCoreDefinitionVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCoreDefinitionVersionCommand}.
 */
export interface GetCoreDefinitionVersionCommandInput extends GetCoreDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetCoreDefinitionVersionCommand}.
 */
export interface GetCoreDefinitionVersionCommandOutput extends GetCoreDefinitionVersionResponse, __MetadataBearer {}

/**
 * @public
 * Retrieves information about a core definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetCoreDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetCoreDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetCoreDefinitionVersionRequest
 *   CoreDefinitionId: "STRING_VALUE", // required
 *   CoreDefinitionVersionId: "STRING_VALUE", // required
 * };
 * const command = new GetCoreDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetCoreDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Definition: { // CoreDefinitionVersion
 * //     Cores: [ // __listOfCore
 * //       { // Core
 * //         CertificateArn: "STRING_VALUE", // required
 * //         Id: "STRING_VALUE", // required
 * //         SyncShadow: true || false,
 * //         ThingArn: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCoreDefinitionVersionCommandInput - {@link GetCoreDefinitionVersionCommandInput}
 * @returns {@link GetCoreDefinitionVersionCommandOutput}
 * @see {@link GetCoreDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetCoreDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class GetCoreDefinitionVersionCommand extends $Command<
  GetCoreDefinitionVersionCommandInput,
  GetCoreDefinitionVersionCommandOutput,
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
  constructor(readonly input: GetCoreDefinitionVersionCommandInput) {
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
  ): Handler<GetCoreDefinitionVersionCommandInput, GetCoreDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCoreDefinitionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetCoreDefinitionVersionCommand";
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
  private serialize(input: GetCoreDefinitionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCoreDefinitionVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCoreDefinitionVersionCommandOutput> {
    return de_GetCoreDefinitionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
