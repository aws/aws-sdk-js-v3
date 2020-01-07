"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_location_constraint_1 = require("@aws-sdk/middleware-location-constraint");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
class CreateBucketCommand extends smithy_client_1.Command {
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
        this.middlewareStack.use(middleware_location_constraint_1.getLocationConstraintPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {}
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlCreateBucketCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlCreateBucketCommand(output, context);
    }
}
exports.CreateBucketCommand = CreateBucketCommand;
//# sourceMappingURL=CreateBucketCommand.js.map