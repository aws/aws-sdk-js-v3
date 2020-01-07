"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
class AssumeRoleWithSAMLCommand extends smithy_client_1.Command {
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
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {}
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryAssumeRoleWithSAMLCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryAssumeRoleWithSAMLCommand(output, context);
    }
}
exports.AssumeRoleWithSAMLCommand = AssumeRoleWithSAMLCommand;
//# sourceMappingURL=AssumeRoleWithSAMLCommand.js.map