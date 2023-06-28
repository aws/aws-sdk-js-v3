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
import { DescribeContainerInput, DescribeContainerOutput } from "../models/models_0";
import { de_DescribeContainerCommand, se_DescribeContainerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeContainerCommand}.
 */
export interface DescribeContainerCommandInput extends DescribeContainerInput {}
/**
 * @public
 *
 * The output of {@link DescribeContainerCommand}.
 */
export interface DescribeContainerCommandOutput extends DescribeContainerOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the properties of the requested container. This request is commonly used to
 *          retrieve the endpoint of a container. An endpoint is a value assigned by the service when a
 *          new container is created. A container's endpoint does not change after it has been
 *          assigned. The <code>DescribeContainer</code> request returns a single
 *             <code>Container</code> object based on <code>ContainerName</code>. To return all
 *             <code>Container</code> objects that are associated with a specified AWS account, use
 *             <a>ListContainers</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DescribeContainerCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DescribeContainerCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const input = { // DescribeContainerInput
 *   ContainerName: "STRING_VALUE",
 * };
 * const command = new DescribeContainerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContainerOutput
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
 * @param DescribeContainerCommandInput - {@link DescribeContainerCommandInput}
 * @returns {@link DescribeContainerCommandOutput}
 * @see {@link DescribeContainerCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 */
export class DescribeContainerCommand extends $Command<
  DescribeContainerCommandInput,
  DescribeContainerCommandOutput,
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
  constructor(readonly input: DescribeContainerCommandInput) {
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
  ): Handler<DescribeContainerCommandInput, DescribeContainerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeContainerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "DescribeContainerCommand";
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
  private serialize(input: DescribeContainerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeContainerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeContainerCommandOutput> {
    return de_DescribeContainerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
