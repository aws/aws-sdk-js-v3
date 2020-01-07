import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RemoveFromGlobalClusterMessage, RemoveFromGlobalClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveFromGlobalClusterCommandInput = RemoveFromGlobalClusterMessage;
export declare type RemoveFromGlobalClusterCommandOutput = RemoveFromGlobalClusterResult & __MetadataBearer;
export declare class RemoveFromGlobalClusterCommand extends $Command<RemoveFromGlobalClusterCommandInput, RemoveFromGlobalClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: RemoveFromGlobalClusterCommandInput;
    constructor(input: RemoveFromGlobalClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveFromGlobalClusterCommandInput, RemoveFromGlobalClusterCommandOutput>;
    private serialize;
    private deserialize;
}
