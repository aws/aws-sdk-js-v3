import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { PromoteReadReplicaDBClusterMessage, PromoteReadReplicaDBClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PromoteReadReplicaDBClusterCommandInput = PromoteReadReplicaDBClusterMessage;
export declare type PromoteReadReplicaDBClusterCommandOutput = PromoteReadReplicaDBClusterResult & __MetadataBearer;
export declare class PromoteReadReplicaDBClusterCommand extends $Command<PromoteReadReplicaDBClusterCommandInput, PromoteReadReplicaDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: PromoteReadReplicaDBClusterCommandInput;
    constructor(input: PromoteReadReplicaDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PromoteReadReplicaDBClusterCommandInput, PromoteReadReplicaDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
