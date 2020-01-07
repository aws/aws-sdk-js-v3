import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterEndpoint, DeleteDBClusterEndpointMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBClusterEndpointCommandInput = DeleteDBClusterEndpointMessage;
export declare type DeleteDBClusterEndpointCommandOutput = DBClusterEndpoint & __MetadataBearer;
export declare class DeleteDBClusterEndpointCommand extends $Command<DeleteDBClusterEndpointCommandInput, DeleteDBClusterEndpointCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteDBClusterEndpointCommandInput;
    constructor(input: DeleteDBClusterEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBClusterEndpointCommandInput, DeleteDBClusterEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
