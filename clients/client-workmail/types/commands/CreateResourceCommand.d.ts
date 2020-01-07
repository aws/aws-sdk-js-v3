import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { CreateResourceRequest, CreateResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateResourceCommandInput = CreateResourceRequest;
export declare type CreateResourceCommandOutput = CreateResourceResponse & __MetadataBearer;
export declare class CreateResourceCommand extends $Command<CreateResourceCommandInput, CreateResourceCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: CreateResourceCommandInput;
    constructor(input: CreateResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceCommandInput, CreateResourceCommandOutput>;
    private serialize;
    private deserialize;
}
