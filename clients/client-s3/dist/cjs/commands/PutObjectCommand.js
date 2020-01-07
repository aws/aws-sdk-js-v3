"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_bucket_endpoint_1 = require("@aws-sdk/middleware-bucket-endpoint");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const middleware_ssec_1 = require("@aws-sdk/middleware-ssec");
const smithy_client_1 = require("@aws-sdk/smithy-client");
class PutObjectCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(middleware_ssec_1.getSsecPlugin(configuration));
        this.middlewareStack.use(middleware_bucket_endpoint_1.getBucketEndpointPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {}
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlPutObjectCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlPutObjectCommand(output, context);
    }
}
exports.PutObjectCommand = PutObjectCommand;
//# sourceMappingURL=PutObjectCommand.js.map