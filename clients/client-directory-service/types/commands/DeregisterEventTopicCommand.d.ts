import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeregisterEventTopicRequest, DeregisterEventTopicResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterEventTopicCommandInput = DeregisterEventTopicRequest;
export declare type DeregisterEventTopicCommandOutput = DeregisterEventTopicResult & __MetadataBearer;
export declare class DeregisterEventTopicCommand extends $Command<DeregisterEventTopicCommandInput, DeregisterEventTopicCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DeregisterEventTopicCommandInput;
    constructor(input: DeregisterEventTopicCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterEventTopicCommandInput, DeregisterEventTopicCommandOutput>;
    private serialize;
    private deserialize;
}
