import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateDeviceDefinitionRequest, CreateDeviceDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDeviceDefinitionCommandInput = CreateDeviceDefinitionRequest;
export declare type CreateDeviceDefinitionCommandOutput = CreateDeviceDefinitionResponse & __MetadataBearer;
export declare class CreateDeviceDefinitionCommand extends $Command<CreateDeviceDefinitionCommandInput, CreateDeviceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateDeviceDefinitionCommandInput;
    constructor(input: CreateDeviceDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeviceDefinitionCommandInput, CreateDeviceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
