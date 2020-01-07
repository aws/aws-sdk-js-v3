import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateTrustRequest, CreateTrustResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrustCommandInput = CreateTrustRequest;
export declare type CreateTrustCommandOutput = CreateTrustResult & __MetadataBearer;
export declare class CreateTrustCommand extends $Command<CreateTrustCommandInput, CreateTrustCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateTrustCommandInput;
    constructor(input: CreateTrustCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrustCommandInput, CreateTrustCommandOutput>;
    private serialize;
    private deserialize;
}
