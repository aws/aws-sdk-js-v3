import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { PromoteReadReplicaDBClusterMessage, PromoteReadReplicaDBClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PromoteReadReplicaDBClusterCommandInput = PromoteReadReplicaDBClusterMessage;
export declare type PromoteReadReplicaDBClusterCommandOutput = PromoteReadReplicaDBClusterResult & __MetadataBearer;
export declare class PromoteReadReplicaDBClusterCommand extends $Command<PromoteReadReplicaDBClusterCommandInput, PromoteReadReplicaDBClusterCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: PromoteReadReplicaDBClusterCommandInput;
    constructor(input: PromoteReadReplicaDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PromoteReadReplicaDBClusterCommandInput, PromoteReadReplicaDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
