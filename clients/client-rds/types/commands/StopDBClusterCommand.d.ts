import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StopDBClusterMessage, StopDBClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopDBClusterCommandInput = StopDBClusterMessage;
export declare type StopDBClusterCommandOutput = StopDBClusterResult & __MetadataBearer;
export declare class StopDBClusterCommand extends $Command<StopDBClusterCommandInput, StopDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: StopDBClusterCommandInput;
    constructor(input: StopDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDBClusterCommandInput, StopDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
