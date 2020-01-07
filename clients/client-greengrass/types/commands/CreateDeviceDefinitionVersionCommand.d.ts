import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateDeviceDefinitionVersionRequest, CreateDeviceDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDeviceDefinitionVersionCommandInput = CreateDeviceDefinitionVersionRequest;
export declare type CreateDeviceDefinitionVersionCommandOutput = CreateDeviceDefinitionVersionResponse & __MetadataBearer;
export declare class CreateDeviceDefinitionVersionCommand extends $Command<CreateDeviceDefinitionVersionCommandInput, CreateDeviceDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateDeviceDefinitionVersionCommandInput;
    constructor(input: CreateDeviceDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeviceDefinitionVersionCommandInput, CreateDeviceDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
