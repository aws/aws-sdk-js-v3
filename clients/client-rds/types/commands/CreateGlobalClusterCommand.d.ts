import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateGlobalClusterMessage, CreateGlobalClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGlobalClusterCommandInput = CreateGlobalClusterMessage;
export declare type CreateGlobalClusterCommandOutput = CreateGlobalClusterResult & __MetadataBearer;
export declare class CreateGlobalClusterCommand extends $Command<CreateGlobalClusterCommandInput, CreateGlobalClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateGlobalClusterCommandInput;
    constructor(input: CreateGlobalClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGlobalClusterCommandInput, CreateGlobalClusterCommandOutput>;
    private serialize;
    private deserialize;
}
