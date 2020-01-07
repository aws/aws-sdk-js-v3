import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateFunctionDefinitionRequest, UpdateFunctionDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFunctionDefinitionCommandInput = UpdateFunctionDefinitionRequest;
export declare type UpdateFunctionDefinitionCommandOutput = UpdateFunctionDefinitionResponse & __MetadataBearer;
export declare class UpdateFunctionDefinitionCommand extends $Command<UpdateFunctionDefinitionCommandInput, UpdateFunctionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateFunctionDefinitionCommandInput;
    constructor(input: UpdateFunctionDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFunctionDefinitionCommandInput, UpdateFunctionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
