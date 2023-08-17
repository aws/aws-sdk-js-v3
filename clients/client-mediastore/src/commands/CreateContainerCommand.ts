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

import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { CreateContainerInput, CreateContainerOutput } from "../models/models_0";
import { de_CreateContainerCommand, se_CreateContainerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateContainerCommand}.
 */
export interface CreateContainerCommandInput extends CreateContainerInput {}
/**
 * @public
 *
 * The output of {@link CreateContainerCommand}.
 */
export interface CreateContainerCommandOutput extends CreateContainerOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a storage container to hold objects. A container is similar to a bucket in
 *          the Amazon S3 service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, CreateContainerCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, CreateContainerCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const input = { // CreateContainerInput
 *   ContainerName: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateContainerCommand(input);
 * const response = await client.send(command);
 * // { // CreateContainerOutput
 * //   Container: { // Container
 * //     Endpoint: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ARN: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     AccessLoggingEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateContainerCommandInput - {@link CreateContainerCommandInput}
 * @returns {@link CreateContainerCommandOutput}
 * @see {@link CreateContainerCommandInput} for command's `input` shape.
 * @see {@link CreateContainerCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit has been exceeded.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 */
export class CreateContainerCommand extends $Command<
  CreateContainerCommandInput,
  CreateContainerCommandOutput,
  MediaStoreClientResolvedConfig
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
  constructor(readonly input: CreateContainerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateContainerCommandInput, CreateContainerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateContainerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "CreateContainerCommand";
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
  private serialize(input: CreateContainerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateContainerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateContainerCommandOutput> {
    return de_CreateContainerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
