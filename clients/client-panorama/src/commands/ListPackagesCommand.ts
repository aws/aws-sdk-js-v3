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

import { ListPackagesRequest, ListPackagesResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_ListPackagesCommand, se_ListPackagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPackagesCommand}.
 */
export interface ListPackagesCommandInput extends ListPackagesRequest {}
/**
 * @public
 *
 * The output of {@link ListPackagesCommand}.
 */
export interface ListPackagesCommandOutput extends ListPackagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListPackagesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListPackagesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // ListPackagesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListPackagesResponse
 * //   Packages: [ // PackageList
 * //     { // PackageListItem
 * //       PackageId: "STRING_VALUE",
 * //       PackageName: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPackagesCommandInput - {@link ListPackagesCommandInput}
 * @returns {@link ListPackagesCommandOutput}
 * @see {@link ListPackagesCommandInput} for command's `input` shape.
 * @see {@link ListPackagesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 */
export class ListPackagesCommand extends $Command<
  ListPackagesCommandInput,
  ListPackagesCommandOutput,
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
  constructor(readonly input: ListPackagesCommandInput) {
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
  ): Handler<ListPackagesCommandInput, ListPackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListPackagesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "ListPackagesCommand";
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
  private serialize(input: ListPackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPackagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPackagesCommandOutput> {
    return de_ListPackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
