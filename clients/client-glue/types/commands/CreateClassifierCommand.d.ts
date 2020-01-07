import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateClassifierRequest, CreateClassifierResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateClassifierCommandInput = CreateClassifierRequest;
export declare type CreateClassifierCommandOutput = CreateClassifierResponse & __MetadataBearer;
export declare class CreateClassifierCommand extends $Command<CreateClassifierCommandInput, CreateClassifierCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateClassifierCommandInput;
    constructor(input: CreateClassifierCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClassifierCommandInput, CreateClassifierCommandOutput>;
    private serialize;
    private deserialize;
}
