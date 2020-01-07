import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteGlobalClusterMessage, DeleteGlobalClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteGlobalClusterCommandInput = DeleteGlobalClusterMessage;
export declare type DeleteGlobalClusterCommandOutput = DeleteGlobalClusterResult & __MetadataBearer;
export declare class DeleteGlobalClusterCommand extends $Command<DeleteGlobalClusterCommandInput, DeleteGlobalClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteGlobalClusterCommandInput;
    constructor(input: DeleteGlobalClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGlobalClusterCommandInput, DeleteGlobalClusterCommandOutput>;
    private serialize;
    private deserialize;
}
