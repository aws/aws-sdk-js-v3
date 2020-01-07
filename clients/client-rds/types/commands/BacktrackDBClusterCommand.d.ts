import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { BacktrackDBClusterMessage, DBClusterBacktrack } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BacktrackDBClusterCommandInput = BacktrackDBClusterMessage;
export declare type BacktrackDBClusterCommandOutput = DBClusterBacktrack & __MetadataBearer;
export declare class BacktrackDBClusterCommand extends $Command<BacktrackDBClusterCommandInput, BacktrackDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: BacktrackDBClusterCommandInput;
    constructor(input: BacktrackDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BacktrackDBClusterCommandInput, BacktrackDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
