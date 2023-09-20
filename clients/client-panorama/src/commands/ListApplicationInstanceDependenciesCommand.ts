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
  ListApplicationInstanceDependenciesRequest,
  ListApplicationInstanceDependenciesResponse,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  de_ListApplicationInstanceDependenciesCommand,
  se_ListApplicationInstanceDependenciesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationInstanceDependenciesCommand}.
 */
export interface ListApplicationInstanceDependenciesCommandInput extends ListApplicationInstanceDependenciesRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationInstanceDependenciesCommand}.
 */
export interface ListApplicationInstanceDependenciesCommandOutput
  extends ListApplicationInstanceDependenciesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of application instance dependencies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListApplicationInstanceDependenciesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListApplicationInstanceDependenciesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // ListApplicationInstanceDependenciesRequest
 *   ApplicationInstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationInstanceDependenciesCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationInstanceDependenciesResponse
 * //   PackageObjects: [ // PackageObjects
 * //     { // PackageObject
 * //       Name: "STRING_VALUE", // required
 * //       PackageVersion: "STRING_VALUE", // required
 * //       PatchVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationInstanceDependenciesCommandInput - {@link ListApplicationInstanceDependenciesCommandInput}
 * @returns {@link ListApplicationInstanceDependenciesCommandOutput}
 * @see {@link ListApplicationInstanceDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationInstanceDependenciesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 */
export class ListApplicationInstanceDependenciesCommand extends $Command<
  ListApplicationInstanceDependenciesCommandInput,
  ListApplicationInstanceDependenciesCommandOutput,
  PanoramaClientResolvedConfig
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
  constructor(readonly input: ListApplicationInstanceDependenciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApplicationInstanceDependenciesCommandInput, ListApplicationInstanceDependenciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApplicationInstanceDependenciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "ListApplicationInstanceDependenciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OmniCloudServiceLambda",
        operation: "ListApplicationInstanceDependencies",
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
    input: ListApplicationInstanceDependenciesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListApplicationInstanceDependenciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListApplicationInstanceDependenciesCommandOutput> {
    return de_ListApplicationInstanceDependenciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
