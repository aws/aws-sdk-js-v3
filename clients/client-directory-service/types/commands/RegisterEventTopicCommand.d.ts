import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { RegisterEventTopicRequest, RegisterEventTopicResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterEventTopicCommandInput = RegisterEventTopicRequest;
export declare type RegisterEventTopicCommandOutput = RegisterEventTopicResult & __MetadataBearer;
export declare class RegisterEventTopicCommand extends $Command<RegisterEventTopicCommandInput, RegisterEventTopicCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: RegisterEventTopicCommandInput;
    constructor(input: RegisterEventTopicCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterEventTopicCommandInput, RegisterEventTopicCommandOutput>;
    private serialize;
    private deserialize;
}
