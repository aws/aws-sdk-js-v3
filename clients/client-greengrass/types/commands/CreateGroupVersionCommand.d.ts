import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateGroupVersionRequest, CreateGroupVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGroupVersionCommandInput = CreateGroupVersionRequest;
export declare type CreateGroupVersionCommandOutput = CreateGroupVersionResponse & __MetadataBearer;
export declare class CreateGroupVersionCommand extends $Command<CreateGroupVersionCommandInput, CreateGroupVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateGroupVersionCommandInput;
    constructor(input: CreateGroupVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGroupVersionCommandInput, CreateGroupVersionCommandOutput>;
    private serialize;
    private deserialize;
}
