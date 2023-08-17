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

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { ListMeshesInput, ListMeshesOutput } from "../models/models_0";
import { de_ListMeshesCommand, se_ListMeshesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMeshesCommand}.
 */
export interface ListMeshesCommandInput extends ListMeshesInput {}
/**
 * @public
 *
 * The output of {@link ListMeshesCommand}.
 */
export interface ListMeshesCommandOutput extends ListMeshesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of existing service meshes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListMeshesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListMeshesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = { // ListMeshesInput
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new ListMeshesCommand(input);
 * const response = await client.send(command);
 * // { // ListMeshesOutput
 * //   meshes: [ // MeshList // required
 * //     { // MeshRef
 * //       meshName: "STRING_VALUE", // required
 * //       meshOwner: "STRING_VALUE", // required
 * //       resourceOwner: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       version: Number("long"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMeshesCommandInput - {@link ListMeshesCommandInput}
 * @returns {@link ListMeshesCommandOutput}
 * @see {@link ListMeshesCommandInput} for command's `input` shape.
 * @see {@link ListMeshesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request syntax was malformed. Check your request syntax and try again.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You don't have permissions to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the service.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for
 *          your account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 *
 * @throws {@link AppMeshServiceException}
 * <p>Base exception class for all service exceptions from AppMesh service.</p>
 *
 */
export class ListMeshesCommand extends $Command<
  ListMeshesCommandInput,
  ListMeshesCommandOutput,
  AppMeshClientResolvedConfig
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
  constructor(readonly input: ListMeshesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMeshesCommandInput, ListMeshesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListMeshesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "ListMeshesCommand";
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
  private serialize(input: ListMeshesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMeshesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMeshesCommandOutput> {
    return de_ListMeshesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
