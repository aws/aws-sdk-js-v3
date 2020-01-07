import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { PromoteReadReplicaMessage, PromoteReadReplicaResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PromoteReadReplicaCommandInput = PromoteReadReplicaMessage;
export declare type PromoteReadReplicaCommandOutput = PromoteReadReplicaResult & __MetadataBearer;
export declare class PromoteReadReplicaCommand extends $Command<PromoteReadReplicaCommandInput, PromoteReadReplicaCommandOutput, RDSClientResolvedConfig> {
    readonly input: PromoteReadReplicaCommandInput;
    constructor(input: PromoteReadReplicaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PromoteReadReplicaCommandInput, PromoteReadReplicaCommandOutput>;
    private serialize;
    private deserialize;
}
