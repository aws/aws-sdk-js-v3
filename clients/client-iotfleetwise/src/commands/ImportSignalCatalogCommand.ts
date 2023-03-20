// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { ImportSignalCatalogRequest, ImportSignalCatalogResponse } from "../models/models_0";
import {
  deserializeAws_json1_0ImportSignalCatalogCommand,
  serializeAws_json1_0ImportSignalCatalogCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link ImportSignalCatalogCommand}.
 */
export interface ImportSignalCatalogCommandInput extends ImportSignalCatalogRequest {}
/**
 * @public
 *
 * The output of {@link ImportSignalCatalogCommand}.
 */
export interface ImportSignalCatalogCommandOutput extends ImportSignalCatalogResponse, __MetadataBearer {}

/**
 * @public
 * <p> Creates a signal catalog using your existing VSS formatted content from your local
 *             device. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ImportSignalCatalogCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ImportSignalCatalogCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new ImportSignalCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ImportSignalCatalogCommandInput - {@link ImportSignalCatalogCommandInput}
 * @returns {@link ImportSignalCatalogCommandOutput}
 * @see {@link ImportSignalCatalogCommandInput} for command's `input` shape.
 * @see {@link ImportSignalCatalogCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *  <p>The request couldn't be completed because it contains signals that aren't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 *
 */
export class ImportSignalCatalogCommand extends $Command<
  ImportSignalCatalogCommandInput,
  ImportSignalCatalogCommandOutput,
  IoTFleetWiseClientResolvedConfig
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
  constructor(readonly input: ImportSignalCatalogCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportSignalCatalogCommandInput, ImportSignalCatalogCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportSignalCatalogCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "ImportSignalCatalogCommand";
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
  private serialize(input: ImportSignalCatalogCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ImportSignalCatalogCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportSignalCatalogCommandOutput> {
    return deserializeAws_json1_0ImportSignalCatalogCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
