import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateResourceDefinitionRequest, UpdateResourceDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateResourceDefinitionCommandInput = UpdateResourceDefinitionRequest;
export declare type UpdateResourceDefinitionCommandOutput = UpdateResourceDefinitionResponse & __MetadataBearer;
export declare class UpdateResourceDefinitionCommand extends $Command<UpdateResourceDefinitionCommandInput, UpdateResourceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateResourceDefinitionCommandInput;
    constructor(input: UpdateResourceDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourceDefinitionCommandInput, UpdateResourceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
