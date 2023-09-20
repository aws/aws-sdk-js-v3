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
  ListApplicationInstanceNodeInstancesRequest,
  ListApplicationInstanceNodeInstancesResponse,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  de_ListApplicationInstanceNodeInstancesCommand,
  se_ListApplicationInstanceNodeInstancesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationInstanceNodeInstancesCommand}.
 */
export interface ListApplicationInstanceNodeInstancesCommandInput extends ListApplicationInstanceNodeInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationInstanceNodeInstancesCommand}.
 */
export interface ListApplicationInstanceNodeInstancesCommandOutput
  extends ListApplicationInstanceNodeInstancesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of application node instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListApplicationInstanceNodeInstancesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListApplicationInstanceNodeInstancesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // ListApplicationInstanceNodeInstancesRequest
 *   ApplicationInstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationInstanceNodeInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationInstanceNodeInstancesResponse
 * //   NodeInstances: [ // NodeInstances
 * //     { // NodeInstance
 * //       NodeInstanceId: "STRING_VALUE", // required
 * //       NodeId: "STRING_VALUE",
 * //       PackageName: "STRING_VALUE",
 * //       PackageVersion: "STRING_VALUE",
 * //       PackagePatchVersion: "STRING_VALUE",
 * //       NodeName: "STRING_VALUE",
 * //       CurrentStatus: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationInstanceNodeInstancesCommandInput - {@link ListApplicationInstanceNodeInstancesCommandInput}
 * @returns {@link ListApplicationInstanceNodeInstancesCommandOutput}
 * @see {@link ListApplicationInstanceNodeInstancesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationInstanceNodeInstancesCommandOutput} for command's `response` shape.
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
export class ListApplicationInstanceNodeInstancesCommand extends $Command<
  ListApplicationInstanceNodeInstancesCommandInput,
  ListApplicationInstanceNodeInstancesCommandOutput,
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
  constructor(readonly input: ListApplicationInstanceNodeInstancesCommandInput) {
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
  ): Handler<ListApplicationInstanceNodeInstancesCommandInput, ListApplicationInstanceNodeInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApplicationInstanceNodeInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "ListApplicationInstanceNodeInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OmniCloudServiceLambda",
        operation: "ListApplicationInstanceNodeInstances",
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
    input: ListApplicationInstanceNodeInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListApplicationInstanceNodeInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListApplicationInstanceNodeInstancesCommandOutput> {
    return de_ListApplicationInstanceNodeInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
