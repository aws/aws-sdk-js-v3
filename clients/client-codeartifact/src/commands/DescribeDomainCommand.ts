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

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DescribeDomainRequest, DescribeDomainResult } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDomainCommand,
  serializeAws_restJson1DescribeDomainCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeDomainCommand}.
 */
export interface DescribeDomainCommandInput extends DescribeDomainRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainCommand}.
 */
export interface DescribeDomainCommandOutput extends DescribeDomainResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Returns a
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainDescription.html">DomainDescription</a>
 *       object that contains information about the requested domain.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DescribeDomainCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DescribeDomainCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DescribeDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeDomainCommandInput - {@link DescribeDomainCommandInput}
 * @returns {@link DescribeDomainCommandOutput}
 * @see {@link DescribeDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation did not succeed because of an error that occurred inside CodeArtifact. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 *
 *
 */
export class DescribeDomainCommand extends $Command<
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput,
  CodeartifactClientResolvedConfig
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
  constructor(readonly input: DescribeDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDomainCommandInput, DescribeDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "DescribeDomainCommand";
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
  private serialize(input: DescribeDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDomainCommandOutput> {
    return deserializeAws_restJson1DescribeDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
