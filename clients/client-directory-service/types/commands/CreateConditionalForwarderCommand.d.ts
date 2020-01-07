import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateConditionalForwarderRequest, CreateConditionalForwarderResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConditionalForwarderCommandInput = CreateConditionalForwarderRequest;
export declare type CreateConditionalForwarderCommandOutput = CreateConditionalForwarderResult & __MetadataBearer;
export declare class CreateConditionalForwarderCommand extends $Command<CreateConditionalForwarderCommandInput, CreateConditionalForwarderCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateConditionalForwarderCommandInput;
    constructor(input: CreateConditionalForwarderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConditionalForwarderCommandInput, CreateConditionalForwarderCommandOutput>;
    private serialize;
    private deserialize;
}
