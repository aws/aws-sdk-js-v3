import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { CreateClusterRequest, CreateClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateClusterCommandInput = CreateClusterRequest;
export declare type CreateClusterCommandOutput = CreateClusterResult & __MetadataBearer;
export declare class CreateClusterCommand extends $Command<CreateClusterCommandInput, CreateClusterCommandOutput, SnowballClientResolvedConfig> {
    readonly input: CreateClusterCommandInput;
    constructor(input: CreateClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClusterCommandInput, CreateClusterCommandOutput>;
    private serialize;
    private deserialize;
}
