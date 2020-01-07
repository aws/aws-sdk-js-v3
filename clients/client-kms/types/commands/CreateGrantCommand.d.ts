import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { CreateGrantRequest, CreateGrantResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGrantCommandInput = CreateGrantRequest;
export declare type CreateGrantCommandOutput = CreateGrantResponse & __MetadataBearer;
export declare class CreateGrantCommand extends $Command<CreateGrantCommandInput, CreateGrantCommandOutput, KMSClientResolvedConfig> {
    readonly input: CreateGrantCommandInput;
    constructor(input: CreateGrantCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGrantCommandInput, CreateGrantCommandOutput>;
    private serialize;
    private deserialize;
}
