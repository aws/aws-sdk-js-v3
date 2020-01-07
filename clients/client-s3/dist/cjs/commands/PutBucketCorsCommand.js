"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_apply_body_checksum_1 = require("@aws-sdk/middleware-apply-body-checksum");
const middleware_bucket_endpoint_1 = require("@aws-sdk/middleware-bucket-endpoint");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
class PutBucketCorsCommand extends smithy_client_1.Command {
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
        this.middlewareStack.use(middleware_bucket_endpoint_1.getBucketEndpointPlugin(configuration));
        this.middlewareStack.use(middleware_apply_body_checksum_1.getApplyMd5BodyChecksumPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {}
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlPutBucketCorsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlPutBucketCorsCommand(output, context);
    }
}
exports.PutBucketCorsCommand = PutBucketCorsCommand;
//# sourceMappingURL=PutBucketCorsCommand.js.map