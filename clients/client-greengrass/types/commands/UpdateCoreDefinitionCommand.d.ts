import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateCoreDefinitionRequest, UpdateCoreDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCoreDefinitionCommandInput = UpdateCoreDefinitionRequest;
export declare type UpdateCoreDefinitionCommandOutput = UpdateCoreDefinitionResponse & __MetadataBearer;
export declare class UpdateCoreDefinitionCommand extends $Command<UpdateCoreDefinitionCommandInput, UpdateCoreDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateCoreDefinitionCommandInput;
    constructor(input: UpdateCoreDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCoreDefinitionCommandInput, UpdateCoreDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
