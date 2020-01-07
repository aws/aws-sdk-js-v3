import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteFunctionDefinitionRequest, DeleteFunctionDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFunctionDefinitionCommandInput = DeleteFunctionDefinitionRequest;
export declare type DeleteFunctionDefinitionCommandOutput = DeleteFunctionDefinitionResponse & __MetadataBearer;
export declare class DeleteFunctionDefinitionCommand extends $Command<DeleteFunctionDefinitionCommandInput, DeleteFunctionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: DeleteFunctionDefinitionCommandInput;
    constructor(input: DeleteFunctionDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFunctionDefinitionCommandInput, DeleteFunctionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
