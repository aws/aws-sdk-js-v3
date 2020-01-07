import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateLogSubscriptionRequest, CreateLogSubscriptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLogSubscriptionCommandInput = CreateLogSubscriptionRequest;
export declare type CreateLogSubscriptionCommandOutput = CreateLogSubscriptionResult & __MetadataBearer;
export declare class CreateLogSubscriptionCommand extends $Command<CreateLogSubscriptionCommandInput, CreateLogSubscriptionCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateLogSubscriptionCommandInput;
    constructor(input: CreateLogSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLogSubscriptionCommandInput, CreateLogSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
